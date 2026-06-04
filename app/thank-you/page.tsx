"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Download,
  ArrowRight,
  Phone,
  Home,
  GraduationCap,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type ThankYouType =
  | "prospectus"
  | "admissions"
  | "contact"
  | "lead"
  | string
  | null;

function getContent(type: ThankYouType, name: string | null) {
  const firstName = name ? name.split(" ")[0] : null;
  const greeting = firstName ? `, ${firstName}` : "";

  switch (type) {
    case "prospectus":
      return {
        icon: Download,
        iconBg: "bg-terracotta-100",
        iconColor: "text-terracotta-700",
        badge: "Prospectus Requested",
        badgeBg: "bg-terracotta-100 text-terracotta-900",
        headline: `Thank you${greeting}!`,
        subheadline: "Your prospectus is on its way.",
        description:
          "We've sent the HCNE prospectus to your email. It includes detailed information on programs, fee structure, eligibility, and career outcomes. Check your inbox — it usually arrives within a few minutes.",
        nextSteps: [
          {
            icon: Mail,
            title: "Check your inbox",
            desc: "The prospectus PDF has been sent to your email address.",
          },
          {
            icon: Phone,
            title: "Talk to an advisor",
            desc: "Our program managers are available Mon–Sat, 9 AM – 6 PM.",
          },
          {
            icon: GraduationCap,
            title: "Apply when ready",
            desc: "Applications for 2025–26 are open. Limited seats available.",
          },
        ],
        primaryCta: { label: "Explore Programs", href: "/programs" },
        secondaryCta: { label: "Apply Now", href: "/admissions" },
      };

    case "admissions":
      return {
        icon: CheckCircle,
        iconBg: "bg-olive-100",
        iconColor: "text-olive-700",
        badge: "Application Submitted",
        badgeBg: "bg-olive-100 text-olive-900",
        headline: `Application received${greeting}!`,
        subheadline: "We'll be in touch within 5–7 working days.",
        description:
          "Your admission enquiry has been successfully submitted. Our admissions team will carefully review your details and reach out to guide you through the next steps of the application process.",
        nextSteps: [
          {
            icon: Mail,
            title: "Confirmation email sent",
            desc: "Check your inbox for a confirmation of your submission.",
          },
          {
            icon: Phone,
            title: "Expect a call",
            desc: "An advisor will call you within 5–7 working days.",
          },
          {
            icon: Download,
            title: "Download the prospectus",
            desc: "Review program details, fees, and eligibility while you wait.",
          },
        ],
        primaryCta: { label: "Go to Home", href: "/" },
        secondaryCta: { label: "View Programs", href: "/programs" },
      };

    case "contact":
      return {
        icon: CheckCircle,
        iconBg: "bg-primary-100",
        iconColor: "text-primary-700",
        badge: "Message Sent",
        badgeBg: "bg-primary-100 text-primary-900",
        headline: `Message received${greeting}!`,
        subheadline: "We'll get back to you within 24 hours.",
        description:
          "Thank you for reaching out to HCNE. Your message has been received and our team will respond to your query within one business day.",
        nextSteps: [
          {
            icon: Mail,
            title: "Check your email",
            desc: "We've sent an acknowledgement to your email address.",
          },
          {
            icon: Phone,
            title: "Prefer to call?",
            desc: "+91 98765 43210 — Mon to Sat, 9 AM to 6 PM.",
          },
          {
            icon: GraduationCap,
            title: "Explore while you wait",
            desc: "Browse our programs and admission details.",
          },
        ],
        primaryCta: { label: "Go to Home", href: "/" },
        secondaryCta: { label: "Explore Programs", href: "/programs" },
      };

    default:
      return {
        icon: CheckCircle,
        iconBg: "bg-primary-100",
        iconColor: "text-primary-700",
        badge: "Submitted Successfully",
        badgeBg: "bg-primary-100 text-primary-900",
        headline: `Thank you${greeting}!`,
        subheadline: "Your details have been received.",
        description:
          "We've noted your enquiry and our team will follow up with you shortly. Thank you for your interest in Heritage Centre for Nursing Excellence.",
        nextSteps: [
          {
            icon: Phone,
            title: "We'll reach out",
            desc: "An advisor will contact you within one business day.",
          },
          {
            icon: GraduationCap,
            title: "Explore programs",
            desc: "Browse B.Sc. Nursing and GNM program details.",
          },
          {
            icon: Download,
            title: "Get the prospectus",
            desc: "Download our comprehensive program guide.",
          },
        ],
        primaryCta: { label: "Go to Home", href: "/" },
        secondaryCta: { label: "Explore Programs", href: "/programs" },
      };
  }
}

function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as ThankYouType;
  const name = searchParams.get("name");

  const content = getContent(type, name);
  const Icon = content.icon;

  return (
    <main className="min-h-[70vh] bg-muted/30 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {/* Success card */}
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary via-terracotta-500 to-olive-500" />

          <div className="px-8 py-10 text-center">
            {/* Icon */}
            <div
              className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${content.iconBg}`}
            >
              <Icon className={`h-10 w-10 ${content.iconColor}`} />
            </div>

            {/* Badge */}
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${content.badgeBg} mb-4`}
            >
              {content.badge}
            </span>

            {/* Headline */}
            <h1 className="font-serif text-3xl font-light">
              {content.headline}
            </h1>
            <p className="mt-1 text-lg font-medium text-muted-foreground">
              {content.subheadline}
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {content.description}
            </p>
          </div>

          {/* Next steps */}
          <div className="border-t border-border bg-muted/20 px-8 py-8">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What happens next
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {content.nextSteps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-background shadow-sm border border-border">
                      <StepIcon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 px-8 py-6 sm:flex-row sm:justify-center border-t border-border">
            <Button
              asChild
              className="gap-2 bg-primary hover:bg-primary/90"
              size="lg"
            >
              <Link href={content.primaryCta.href}>
                <Home className="h-4 w-4" />
                {content.primaryCta.label}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href={content.secondaryCta.href}>
                {content.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* HCNE branding footer */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Image
              src="/images/logo-primary.png"
              alt="HCNE"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">
              Heritage Centre for Nursing Excellence
            </p>
            <p className="text-xs text-muted-foreground">
              Shaping compassionate healthcare leaders since 1989
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <Suspense
        fallback={
          <div className="flex min-h-[70vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        }
      >
        <ThankYouContent />
      </Suspense>
      <SiteFooter />
    </>
  );
}
