"use client";

import { useEffect, useState } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={[
          "h-10 w-10 rounded-full bg-background border border-border shadow-md",
          "flex items-center justify-center text-foreground",
          "transition-all duration-300 hover:bg-muted hover:shadow-lg",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <ChevronUp className="h-4 w-4" />
      </button>

      {/* Chat bubble */}
      <div className="relative">
        {/* Animated pulse rings */}
        <span className="absolute inset-0 rounded-full bg-terracotta-900 opacity-20 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-terracotta-900 opacity-10 animate-ping [animation-delay:0.4s]" />

        <button
          aria-label="Chat with us"
          className={[
            "relative h-14 w-14 rounded-full bg-terracotta-900 text-white shadow-lg",
            "flex items-center justify-center",
            "transition-transform duration-200 hover:scale-110 active:scale-95",
          ].join(" ")}
        >
          <MessageCircle className="h-6 w-6" fill="currentColor" />
        </button>
      </div>
    </div>
  );
}
