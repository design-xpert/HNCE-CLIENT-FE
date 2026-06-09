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
}) {
  try {
    const { name, email, phone, program, location, city, message, recaptchaToken } = formDataPayload;

    if (!name || !email || !phone) {
      return { success: false, error: "Name, email, and phone number are required." };
    }

    if (!recaptchaToken) {
      return { success: false, error: "reCAPTCHA verification token is missing." };
    }

    // 1. Verify reCAPTCHA token with Google API
    const secretKey = (process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnCF3ssK50FDEtCm5mRk").trim();
    const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";

    const verifyResponse = await fetch(verificationUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: recaptchaToken,
      }).toString(),
    });

    if (!verifyResponse.ok) {
      return { success: false, error: "Failed to connect to reCAPTCHA verification service." };
    }

    const verificationResult = await verifyResponse.json();

    if (!verificationResult.success) {
      return { 
        success: false, 
        error: "reCAPTCHA validation failed. Please solve the captcha again.",
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
      source: "homepage",
    };

    const leadResponse = await fetch(`${backendUrl}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
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
