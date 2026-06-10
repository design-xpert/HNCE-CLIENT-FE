"use server";

export async function submitEnquiryAction(formDataPayload: {
  name: string;
  phone: string;
  email: string;
  program: string;
  location: string;
  city: string;
  message: string;
  recaptchaToken: string;
  source?: string;
}) {
  try {
    const { name, email, phone, program, location, city, message, recaptchaToken, source } = formDataPayload;

    if (!name || !email || !phone) {
      return { success: false, error: "Name, email, and phone number are required." };
    }

    if (!recaptchaToken) {
      return { success: false, error: "reCAPTCHA verification token is missing." };
    }

    // 1. Verify reCAPTCHA token with Google API
    const secretKey = (process.env.RECAPTCHA_SECRET_KEY || "").trim();
    const version = (process.env.NEXT_PUBLIC_RECAPTCHA_VERSION || "v2").trim().toLowerCase();

    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is not set in environment variables.");
      return { success: false, error: "Server configuration error. Please contact support." };
    }

    let isSuccess = false;
    let errorMsg = "reCAPTCHA validation failed. Please try again.";
    let verificationResult: any = null;

    if (version === "enterprise") {
      const projectId = process.env.RECAPTCHA_ENTERPRISE_PROJECT_ID || "hcne-1780993956313";
      const siteKey = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "").trim();
      const enterpriseUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${secretKey}`;

      console.log("reCAPTCHA Enterprise Assessment Request Details:", {
        projectId,
        siteKey,
        secretKeyLength: secretKey.length,
        secretKeyPrefix: secretKey.substring(0, 10),
        tokenLength: recaptchaToken.length,
        tokenPrefix: recaptchaToken.substring(0, 20),
      });

      console.log("Sending assessment request to Google Enterprise API...");
      const verifyResponse = await fetch(enterpriseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: {
            token: recaptchaToken,
            expectedAction: "submit",
            siteKey: siteKey,
          },
        }),
        signal: AbortSignal.timeout(5000),
      });

      if (!verifyResponse.ok) {
        const errorText = await verifyResponse.text();
        console.error("reCAPTCHA Enterprise Verification Error:", errorText);
        return { success: false, error: "Failed to connect to reCAPTCHA Enterprise verification service." };
      }

      verificationResult = await verifyResponse.json();

      console.log("reCAPTCHA Enterprise Verification Result:", {
        name: verificationResult.name,
        valid: verificationResult.tokenProperties?.valid,
        score: verificationResult.riskAnalysis?.score,
        invalidReason: verificationResult.tokenProperties?.invalidReason,
      });

      const isValidToken = verificationResult.tokenProperties?.valid === true;
      const score = verificationResult.riskAnalysis?.score;
      const hostname = verificationResult.tokenProperties?.hostname;

      const isDomainAllowed = (host: string) => {
        const cleanHost = host.trim().toLowerCase();
        return (
          cleanHost === "localhost" ||
          cleanHost === "127.0.0.1" ||
          cleanHost === "testkey.google.com" || // Google's official test keys
          cleanHost.endsWith("kvtmedia.com")
        );
      };

      if (!isValidToken) {
        isSuccess = false;
        errorMsg = `reCAPTCHA validation failed: token is invalid (${verificationResult.tokenProperties?.invalidReason || "unknown reason"}).`;
      } else if (hostname && !isDomainAllowed(hostname)) {
        isSuccess = false;
        errorMsg = `reCAPTCHA validation failed: unauthorized domain origin (${hostname}).`;
      } else if (score !== undefined && score < 0.5) {
        isSuccess = false;
        errorMsg = `reCAPTCHA validation failed: verification score is too low (${score}).`;
      } else {
        isSuccess = true;
      }
    } else {
      // Standard reCAPTCHA siteverify
      const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";

      console.log("reCAPTCHA Verification Request Details:", {
        secretKeyLength: secretKey.length,
        secretKeyPrefix: secretKey.substring(0, 10),
        tokenLength: recaptchaToken.length,
        tokenPrefix: recaptchaToken.substring(0, 20),
      });

      console.log("Sending verification request to Google siteverify API...");
      const verifyResponse = await fetch(verificationUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaToken,
        }).toString(),
        signal: AbortSignal.timeout(5000),
      });

      if (!verifyResponse.ok) {
        return { success: false, error: "Failed to connect to reCAPTCHA verification service." };
      }

      verificationResult = await verifyResponse.json();

      console.log("reCAPTCHA Verification Attempt Response:", {
        success: verificationResult.success,
        errorCodes: verificationResult["error-codes"],
        fullResponse: verificationResult,
      });

      const hostname = verificationResult.hostname;
      const isDomainAllowed = (host: string) => {
        const cleanHost = host.trim().toLowerCase();
        return (
          cleanHost === "localhost" ||
          cleanHost === "127.0.0.1" ||
          cleanHost === "testkey.google.com" || // Google's official test keys
          cleanHost.endsWith("kvtmedia.com")
        );
      };

      if (!verificationResult.success) {
        isSuccess = false;
        errorMsg = `reCAPTCHA validation failed: ${verificationResult["error-codes"]?.join(", ") || "invalid token"}. Please try again.`;
      } else if (hostname && !isDomainAllowed(hostname)) {
        isSuccess = false;
        errorMsg = `reCAPTCHA validation failed: unauthorized domain origin (${hostname}).`;
      } else if (verificationResult.score !== undefined && verificationResult.score < 0.5) {
        isSuccess = false;
        errorMsg = "reCAPTCHA validation failed: verification score is too low. Please try again.";
      } else {
        isSuccess = true;
      }
    }

    if (!isSuccess) {
      return {
        success: false,
        error: errorMsg,
        details: verificationResult
      };
    }

    // 2. Forward lead data to backend API
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002";
    const leadData = {
      name,
      email,
      phone,
      program,
      location,
      city,
      message,
      source: source || "homepage",
    };

    console.log("Submitting lead to backend database API:", `${backendUrl}/api/leads`);
    const leadResponse = await fetch(`${backendUrl}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
      signal: AbortSignal.timeout(5000),
    });

    if (!leadResponse.ok) {
      const errorData = await leadResponse.json();
      return { success: false, error: errorData.error || "Failed to submit enquiry to database." };
    }

    const responseData = await leadResponse.json();
    return { success: true, lead: responseData.lead };
  } catch (error: any) {
    console.error("Error in submitEnquiryAction:", error);
    return { success: false, error: error.message || "Internal server error" };
  }
}
