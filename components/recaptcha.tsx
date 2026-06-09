"use client";

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

export interface ReCAPTCHARef {
  execute: () => Promise<string | null>;
}

interface ReCAPTCHAProps {
  onChange: (token: string | null) => void;
}

const ReCAPTCHA = forwardRef<ReCAPTCHARef, ReCAPTCHAProps>(({ onChange }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef(onChange);

  const sitekey = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "").trim();
  const version = (process.env.NEXT_PUBLIC_RECAPTCHA_VERSION || "v2").trim().toLowerCase();

  useEffect(() => {
    console.log("reCAPTCHA initialized in browser:", { version, sitekey });
  }, [version, sitekey]);

  // Keep callback updated without re-running the widget render effect
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Expose execute method to parent component
  useImperativeHandle(ref, () => ({
    execute: (): Promise<string | null> => {
      return new Promise((resolve) => {
        // Set a 3-second safety timeout to prevent hanging
        const timeoutId = setTimeout(() => {
          console.warn("reCAPTCHA execute timed out after 3 seconds.");
          resolve(null);
        }, 3000);

        const resolveWithTimeout = (token: string | null) => {
          clearTimeout(timeoutId);
          resolve(token);
        };

        if (version === "enterprise") {
          if (window.grecaptcha && window.grecaptcha.enterprise) {
            window.grecaptcha.enterprise.ready(async () => {
              try {
                const token = await window.grecaptcha.enterprise.execute(sitekey, { action: "submit" });
                resolveWithTimeout(token);
              } catch (err) {
                console.error("Error executing reCAPTCHA Enterprise:", err);
                resolveWithTimeout(null);
              }
            });
          } else {
            resolveWithTimeout(null);
          }
        } else if (version === "v3") {
          if (window.grecaptcha) {
            window.grecaptcha.ready(async () => {
              try {
                const token = await window.grecaptcha.execute(sitekey, { action: "homepage" });
                resolveWithTimeout(token);
              } catch (err) {
                console.error("Error executing reCAPTCHA v3:", err);
                resolveWithTimeout(null);
              }
            });
          } else {
            resolveWithTimeout(null);
          }
        } else {
          resolveWithTimeout(null);
        }
      });
    }
  }));

  useEffect(() => {
    let active = true;
    let widgetId: number | null = null;

    const renderRecaptcha = () => {
      if (!active) return;

      try {
        if (version === "enterprise") {
          if (window.grecaptcha && window.grecaptcha.enterprise) {
            window.grecaptcha.enterprise.ready(() => {});
          }
        } else if (version === "v3") {
          // v3 ready state
          if (window.grecaptcha) {
            window.grecaptcha.ready(() => {});
          }
        } else {
          // v2 Checkbox flow
          if (!containerRef.current) return;
          if (window.grecaptcha && window.grecaptcha.render) {
            // Check if container already has children to prevent double rendering
            if (containerRef.current.childNodes.length === 0) {
              widgetId = window.grecaptcha.render(containerRef.current, {
                sitekey: sitekey,
                callback: (token: string) => {
                  if (active) onChangeRef.current(token);
                },
                "expired-callback": () => {
                  if (active) onChangeRef.current(null);
                },
                "error-callback": () => {
                  if (active) onChangeRef.current(null);
                },
              });
            }
          }
        }
      } catch (err) {
        console.error("Error rendering reCAPTCHA:", err);
      }
    };

    const scriptId = "google-recaptcha-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const handleScriptLoad = () => {
      if (version === "enterprise") {
        if (window.grecaptcha && window.grecaptcha.enterprise) {
          window.grecaptcha.enterprise.ready(renderRecaptcha);
        }
      } else {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(renderRecaptcha);
        }
      }
    };

    const scriptUrl =
      version === "enterprise"
        ? `https://www.google.com/recaptcha/enterprise.js?render=${sitekey}`
        : version === "v3"
        ? `https://www.google.com/recaptcha/api.js?render=${sitekey}`
        : "https://www.google.com/recaptcha/api.js?render=explicit";

    // Defensive check to ensure the required global objects are initialized
    const isEnterpriseInitialized = version === "enterprise" && typeof window !== "undefined" && window.grecaptcha && !!window.grecaptcha.enterprise;
    const isStandardInitialized = version !== "enterprise" && typeof window !== "undefined" && window.grecaptcha && !!window.grecaptcha.ready;
    const isInitialized = version === "enterprise" ? isEnterpriseInitialized : isStandardInitialized;

    // If script already exists but with a different render parameter or is not initialized, recreate it
    if (script && (script.src !== scriptUrl || !isInitialized)) {
      script.remove();
      script = null as any;
    }

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;
      script.onload = handleScriptLoad;
      document.body.appendChild(script);
    } else {
      if (version === "enterprise" && window.grecaptcha && window.grecaptcha.enterprise) {
        window.grecaptcha.enterprise.ready(renderRecaptcha);
      } else if (version !== "enterprise" && window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(renderRecaptcha);
      } else {
        script.addEventListener("load", handleScriptLoad);
      }
    }

    return () => {
      active = false;
      if (script) {
        script.removeEventListener("load", handleScriptLoad);
      }
      if (widgetId !== null && window.grecaptcha && window.grecaptcha.reset) {
        try {
          window.grecaptcha.reset(widgetId);
        } catch (e) {
          // ignore
        }
      }
    };
  }, [sitekey, version]);

  if (version === "v3" || version === "enterprise") {
    return (
      <div className="text-center text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed py-2">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          Terms of Service
        </a>{" "}
        apply.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        ref={containerRef} 
        className="g-recaptcha flex justify-center items-center" 
        style={{ minHeight: "78px" }} 
      />
      <div className="text-[8px] text-muted-foreground opacity-40 mt-1 font-mono">
        reCAPTCHA Key: {sitekey}
      </div>
    </div>
  );
});

ReCAPTCHA.displayName = "ReCAPTCHA";

export default ReCAPTCHA;

// Typing declarations for grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => number;
      execute: (sitekey: string, options: { action: string }) => Promise<string>;
      reset: (widgetId: number) => void;
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (sitekey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}
