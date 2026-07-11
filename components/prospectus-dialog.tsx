"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Download, X, Loader2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
  /** The element that triggers the dialog — rendered as-is, click wired automatically */
  trigger: React.ReactNode;
  /** Pre-select a program in the form */
  defaultProgram?: string;
  /** Extra className for the trigger wrapper */
  className?: string;
};

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function useCaptcha() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const refresh = () => {
    setA(randomInt(2, 9));
    setB(randomInt(1, 9));
  };

  useEffect(() => {
    refresh();
  }, []);

  return { a, b, refresh };
}

export function ProspectusDialog({
  trigger,
  defaultProgram = "",
  className,
}: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { a, b, refresh: refreshCaptcha } = useCaptcha();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: defaultProgram,
  });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const captchaCorrect =
    captchaInput.trim() !== "" && parseInt(captchaInput) === a + b;

  const resetForm = () => {
    setForm({ name: "", phone: "", email: "", program: defaultProgram });
    setCaptchaInput("");
    setCaptchaError(false);
    refreshCaptcha();
  };

  const handleOpen = (v: boolean) => {
    if (!v) resetForm();
    setOpen(v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaCorrect) {
      setCaptchaError(true);
      refreshCaptcha();
      setCaptchaInput("");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setOpen(false);
    resetForm();
    router.push(
      `/thank-you?type=prospectus&name=${encodeURIComponent(form.name)}`,
    );
  };

  const isValid =
    form.name.trim() &&
    form.phone.trim().length >= 10 &&
    form.email.includes("@") &&
    form.program &&
    captchaCorrect;

  return (
    <>
      <span
        className={cn("cursor-pointer", className)}
        onClick={() => setOpen(true)}
      >
        {trigger}
      </span>

      <Dialog open={open} onOpenChange={handleOpen}>
        <DialogContent
          className="max-w-md p-0 overflow-hidden"
          showCloseButton={false}
        >
          {/* Terracotta header */}
          <div className="relative bg-terracotta-900 px-6 py-5">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Download className="h-5 w-5 text-white" />
              </div>
              <div>
                <DialogTitle className="font-serif text-lg font-light text-white">
                  Download Prospectus
                </DialogTitle>
                <p className="text-xs text-white/70">
                  Free · Sent to your email instantly
                </p>
              </div>
            </div>
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
            <p className="text-sm text-muted-foreground">
              Fill in your details and we&apos;ll send the prospectus directly
              to your inbox — along with personalised guidance from our
              admissions team.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="pd-name">Full Name *</Label>
                <Input
                  id="pd-name"
                  placeholder="Anjali Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pd-phone">Mobile Number *</Label>
                <Input
                  id="pd-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="pd-email">Email Address *</Label>
              <Input
                id="pd-email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label>Program Interest *</Label>
              <Select
                value={form.program}
                onValueChange={(v) => setForm({ ...form, program: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bsc-nursing">
                    B.Sc. Nursing (4 Years)
                  </SelectItem>
                  <SelectItem value="gnm">
                    GNM — General Nursing & Midwifery
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Math CAPTCHA */}
            <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">
                  Verification
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 items-center justify-center rounded-lg border-2 border-primary/30 bg-primary/5 px-4 font-mono text-base font-semibold tracking-widest text-primary select-none">
                  {a} + {b} = ?
                </div>
                <Input
                  type="number"
                  placeholder="Answer"
                  className={cn(
                    "w-28 text-center font-mono",
                    captchaError &&
                      "border-destructive focus-visible:ring-destructive",
                  )}
                  value={captchaInput}
                  onChange={(e) => {
                    setCaptchaInput(e.target.value);
                    setCaptchaError(false);
                  }}
                  required
                />
                {captchaCorrect && (
                  <span className="text-xs font-medium text-olive-700">
                    ✓ Correct
                  </span>
                )}
              </div>
              {captchaError && (
                <p className="text-xs text-destructive">
                  Incorrect answer. A new question has been generated.
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={!isValid || loading}
              className="w-full gap-2 bg-terracotta-900 text-white hover:bg-terracotta-700 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {loading ? "Sending prospectus…" : "Get My Free Prospectus"}
            </Button>

            <p className="text-center text-[11px] text-muted-foreground">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
