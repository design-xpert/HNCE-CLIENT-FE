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

  const sitekey = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI").trim();
  const version = (process.env.NEXT_PUBLIC_RECAPTCHA_VERSION || "v2").trim().toLowerCase();

  // Keep callback updated without re-running the widget render effect
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Expose execute method to parent component
  useImperativeHandle(ref, () => ({
    execute: async (): Promise<string | null> => {
      if (version === "v3") {
        if (window.grecaptcha && window.grecaptcha.execute) {
          try {
            return await window.grecaptcha.execute(sitekey, { action: "homepage" });
          } catch (err) {
            console.error("Error executing reCAPTCHA v3:", err);
            return null;
          }
        }
        return null;
      }
      return null;
    }
  }));

  useEffect(() => {
    let active = true;
    let widgetId: number | null = null;

    const renderRecaptcha = () => {
      if (!active) return;

      try {
        if (version === "v3") {
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
      if (window.grecaptcha) {
        window.grecaptcha.ready(renderRecaptcha);
      }
    };

    const scriptUrl =
      version === "v3"
        ? `https://www.google.com/recaptcha/api.js?render=${sitekey}`
        : "https://www.google.com/recaptcha/api.js?render=explicit";

    // If script already exists but with a different render parameter, we must recreate it
    if (script && script.src !== scriptUrl) {
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
      if (window.grecaptcha) {
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

  if (version === "v3") {
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
    <div 
      ref={containerRef} 
      className="g-recaptcha flex justify-center items-center" 
      style={{ minHeight: "78px" }} 
    />
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
    };
  }
}
