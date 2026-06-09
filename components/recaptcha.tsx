"use client";

import { useEffect, useRef } from "react";

interface ReCAPTCHAProps {
  onChange: (token: string | null) => void;
}

export default function ReCAPTCHA({ onChange }: ReCAPTCHAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef(onChange);

  const sitekey = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI").trim();

  // Keep callback updated without re-running the widget render effect
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    let active = true;
    let widgetId: number | null = null;

    const renderRecaptcha = () => {
      if (!active || !containerRef.current) return;

      try {
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

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
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
  }, [sitekey]); // Only re-run if the sitekey itself changes!

  return (
    <div 
      ref={containerRef} 
      className="g-recaptcha flex justify-center items-center" 
      style={{ minHeight: "78px" }} 
    />
  );
}

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
      reset: (widgetId: number) => void;
    };
  }
}
