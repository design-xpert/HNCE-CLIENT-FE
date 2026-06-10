"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { submitEnquiryAction } from "@/app/actions";
import ReCAPTCHA, { ReCAPTCHARef } from "@/components/recaptcha";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrandStar } from "@/components/brand-elements";
import { ArrowRight } from "lucide-react";

interface EnquiryFormProps {
  programName: string;
  slug: string;
}

export default function EnquiryForm({ programName, slug }: EnquiryFormProps) {
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHARef>(null);
  const idPrefix = slug === "gnm" ? "gnm" : "bsc";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    // Strip prefix to update state correctly
    const fieldKey = id.replace(`${idPrefix}-`, "");
    setFormData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Basic validation
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitError("First name, email, and phone number are required.");
      setIsSubmitting(false);
      return;
    }

    const version = (process.env.NEXT_PUBLIC_RECAPTCHA_VERSION || "v2").trim().toLowerCase();
    let token = recaptchaToken;

    if (version === "v3" || version === "enterprise") {
      try {
        token = (await recaptchaRef.current?.execute()) || null;
      } catch (err) {
        console.error("reCAPTCHA execution error:", err);
        setIsSubmitting(false);
        setSubmitError("reCAPTCHA validation failed. Please try again.");
        return;
      }
    }

    if (!token) {
      setIsSubmitting(false);
      setSubmitError("Please complete the reCAPTCHA verification.");
      return;
    }

    try {
      const res = await submitEnquiryAction({
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        program: programName,
        location: formData.location.trim(),
        city: formData.location.trim(),
        message: formData.message.trim(),
        recaptchaToken: token,
      });

      if (!res.success) {
        setSubmitError(res.error || "Failed to submit enquiry.");
        setIsSubmitting(false);
      } else {
        router.push("/thank-you?type=admissions");
      }
    } catch (err: any) {
      console.error("Error submitting enquiry form:", err);
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-card">
      {/* Header Panel */}
      <div className="relative bg-terracotta-900 px-8 py-7 text-white overflow-hidden">
        <Badge
          variant="secondary"
          className="mb-3 bg-white/15 text-white hover:bg-white/20 border-0"
        >
          Free Counseling
        </Badge>
        <h3 className="font-serif text-2xl font-light">Request a Callback</h3>
        <p className="mt-1 text-sm text-white/80 leading-relaxed">
          Fill in your details and our admissions team will reach out within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 px-8 pb-4 pt-6">

        {submitError && (
          <div className="rounded-lg bg-destructive/10 p-3 text-sm font-medium text-destructive">
            {submitError}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor={`${idPrefix}-firstName`}>First Name</Label>
            <Input
              id={`${idPrefix}-firstName`}
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`${idPrefix}-lastName`}>Last Name</Label>
            <Input
              id={`${idPrefix}-lastName`}
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor={`${idPrefix}-email`}>Email Address</Label>
            <Input
              id={`${idPrefix}-email`}
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`${idPrefix}-phone`}>Phone Number</Label>
            <Input
              id={`${idPrefix}-phone`}
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor={`${idPrefix}-program`}>Program Interested In</Label>
            <Input
              id={`${idPrefix}-program`}
              value={programName}
              readOnly
              className="bg-muted/50"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`${idPrefix}-location`}>Location / State</Label>
            <Input
              id={`${idPrefix}-location`}
              placeholder="e.g. Karnataka"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor={`${idPrefix}-message`}>
            Message <span className="text-muted-foreground">(Optional)</span>
          </Label>
          <Textarea
            id={`${idPrefix}-message`}
            placeholder="Any specific questions or concerns..."
            className="resize-none"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        {/* reCAPTCHA component */}
        <div className="py-2">
          <ReCAPTCHA
            ref={recaptchaRef}
            onChange={(token) => setRecaptchaToken(token)}
          />
        </div>

        <Button
          type="submit"
          className="w-full gap-2 bg-terracotta-900 hover:bg-terracotta-700 text-white"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <p className="px-8 pb-4 text-center text-xs text-muted-foreground">
        Your information is secure and will never be shared.
      </p>
    </Card>
  );
}

