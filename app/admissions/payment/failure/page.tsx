"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrandStar, BrandPattern, SectionBadge } from "@/components/brand-elements"
import {
  XCircle,
  RefreshCw,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  AlertTriangle,
  CreditCard,
  Wifi,
  Shield,
  HelpCircle,
  Home,
} from "lucide-react"

const programDetails: Record<string, { name: string }> = {
  bsc: { name: "B.Sc. Nursing" },
  gnm: { name: "GNM Diploma" },
  msc: { name: "M.Sc. Nursing" },
  "post-basic": { name: "Post Basic B.Sc." },
}

const commonIssues = [
  {
    icon: CreditCard,
    title: "Card Declined",
    description: "Your bank may have declined the transaction. Try a different card or contact your bank.",
  },
  {
    icon: Wifi,
    title: "Network Issue",
    description: "The payment was interrupted due to a network error. Check your connection and retry.",
  },
  {
    icon: Shield,
    title: "Security Block",
    description: "The payment was blocked for security reasons. Verify with your bank or try another method.",
  },
  {
    icon: Clock,
    title: "Session Timeout",
    description: "Your payment session expired. Please start the payment process again.",
  },
]

function FailureContent() {
  const searchParams = useSearchParams()
  
  const name = searchParams.get("name") || "Student"
  const program = searchParams.get("program") || "bsc"
  const errorCode = searchParams.get("error") || "PAYMENT_FAILED"
  
  const programInfo = programDetails[program] || programDetails.bsc

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Failure Hero */}
        <section className="relative overflow-hidden bg-destructive/5 px-6 py-16 lg:px-8 lg:py-20">
          <BrandPattern className="opacity-[0.15]" />
          
          {/* Decorative Stars */}
          <div className="absolute top-10 right-10 opacity-5">
            <BrandStar size={120} className="text-destructive" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Failure Icon */}
            <div className="mb-8 inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-destructive/20" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-destructive text-destructive-foreground">
                  <XCircle className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            <Badge variant="destructive" className="mb-4">Payment Failed</Badge>
            
            <h1 className="font-serif text-3xl font-light leading-tight lg:text-4xl xl:text-5xl text-balance">
              Oops! Something Went Wrong
            </h1>
            
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Don&apos;t worry, {name.split(" ")[0]}. Your application is safe. 
              The payment could not be processed this time, but you can try again.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm">
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Error Code: </span>
              <code className="font-mono font-medium">{errorCode}</code>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href={`/admissions/payment?name=${encodeURIComponent(name)}&program=${program}`}>
                  <RefreshCw className="h-4 w-4" /> Retry Payment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/admissions">
                  <ArrowLeft className="h-4 w-4" /> Back to Application
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Error Details & Solutions */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* What Happened */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-semibold mb-4 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    What Happened?
                  </h2>
                  
                  <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-destructive">Payment Not Completed</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          The payment transaction was not completed successfully. 
                          No amount has been deducted from your account.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <h4 className="font-medium text-sm mb-2">Transaction Details</h4>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Applicant</dt>
                          <dd className="font-medium">{name}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Program</dt>
                          <dd className="font-medium">{programInfo.name}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Status</dt>
                          <dd className="font-medium text-destructive">Failed</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Timestamp</dt>
                          <dd className="font-medium">{new Date().toLocaleString("en-IN")}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-primary/10 p-3 text-sm">
                      <Shield className="h-4 w-4 text-primary shrink-0" />
                      <span>Your application data is safe and secure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Issues */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    Common Issues & Solutions
                  </h2>
                  
                  <div className="space-y-4">
                    {commonIssues.map((issue, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg border border-border p-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                          <issue.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{issue.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{issue.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="border-t border-border bg-muted/30 px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <SectionBadge>Need Help?</SectionBadge>
              <h2 className="font-serif text-2xl font-light lg:text-3xl">
                Contact Our Support Team
              </h2>
              <p className="mt-3 text-muted-foreground">
                If the issue persists, our admissions team is ready to assist you
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center transition-all hover:shadow-lg hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9AM-6PM</p>
                  <p className="font-medium text-primary mt-2">+91 98765 43210</p>
                </CardContent>
              </Card>

              <Card className="text-center transition-all hover:shadow-lg hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-sm text-muted-foreground mt-1">Response within 24 hrs</p>
                  <p className="font-medium text-primary mt-2">support@hcne.edu.in</p>
                </CardContent>
              </Card>

              <Card className="text-center transition-all hover:shadow-lg hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mt-1">Instant support</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Alternative Actions */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative bg-primary p-8 text-primary-foreground">
                  <div className="absolute right-0 top-0 opacity-20">
                    <BrandStar size={100} className="text-primary-foreground" />
                  </div>
                  <h3 className="relative font-serif text-2xl font-light mb-4">
                    Try Again?
                  </h3>
                  <p className="relative opacity-80 mb-6">
                    Your application is saved. Simply retry the payment to complete your admission registration.
                  </p>
                  <Button variant="secondary" className="gap-2" asChild>
                    <Link href={`/admissions/payment?name=${encodeURIComponent(name)}&program=${program}`}>
                      <RefreshCw className="h-4 w-4" /> Retry Payment Now
                    </Link>
                  </Button>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h4 className="font-semibold mb-4">Other Options</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-3" asChild>
                      <Link href="/admissions">
                        <ArrowLeft className="h-4 w-4" />
                        Modify Application
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3" asChild>
                      <Link href="/#programs">
                        <Home className="h-4 w-4" />
                        Explore Programs
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3" asChild>
                      <Link href="/#contact">
                        <Phone className="h-4 w-4" />
                        Contact Admissions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Note */}
        <section className="border-t border-border px-6 py-8 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>
                If any amount was deducted, it will be refunded within 5-7 business days.
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default function PaymentFailurePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <FailureContent />
    </Suspense>
  )
}
