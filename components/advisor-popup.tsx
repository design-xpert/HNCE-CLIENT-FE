"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AdvisorPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-background shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Terracotta header */}
        <div className="relative bg-terracotta-900 px-6 py-6">
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <Badge className="mb-3 border-0 bg-white/15 text-white hover:bg-white/20">
            Free Guidance Available
          </Badge>
          <h3 className="font-serif text-xl font-light text-white">
            Need help with your application?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Don&apos;t let confusion delay your nursing career. Our Program
            Manager is ready to walk you through every step — personally.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {/* Program Manager card */}
          <div className="mb-5 flex items-center gap-4 rounded-xl border border-border bg-muted/40 p-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-terracotta-100">
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop"
                alt="Program Manager"
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold">Ms. Kavya Nair</p>
                <span className="flex items-center gap-0.5 text-xs text-olive-700">
                  <Star className="h-3 w-3 fill-olive-700" />
                  <Star className="h-3 w-3 fill-olive-700" />
                  <Star className="h-3 w-3 fill-olive-700" />
                </span>
              </div>
              <p className="text-sm font-medium text-terracotta-700">
                Senior Program Advisor
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Phone className="h-3 w-3" />
                +91 98765 43210
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                Mon–Sat · 9 AM – 6 PM
              </p>
            </div>
          </div>

          {/* What you get */}
          <ul className="mb-5 space-y-1.5 text-sm text-muted-foreground">
            {[
              "Personalized program recommendation",
              "Eligibility & fee breakdown",
              "Step-by-step application guidance",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="flex gap-3">
            <Button
              className="flex-1 gap-2 bg-terracotta-900 text-white hover:bg-terracotta-700"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
            <Button
              className="flex-1 gap-2 bg-olive-700 text-white hover:bg-olive-900"
              asChild
            >
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>

          <button
            onClick={dismiss}
            className="mt-4 w-full text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            I&apos;ll continue on my own →
          </button>
        </div>
      </div>
    </div>
  );
}
