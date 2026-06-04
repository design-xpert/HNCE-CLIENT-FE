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
  CheckCircle2,
  Download,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Clock,
  FileText,
  GraduationCap,
  Home,
  Share2,
  Printer,
  User,
  IndianRupee,
  Hash,
} from "lucide-react"

const programDetails: Record<string, { name: string; duration: string }> = {
  bsc: { name: "B.Sc. Nursing", duration: "4 Years" },
  gnm: { name: "GNM Diploma", duration: "3 Years" },
  msc: { name: "M.Sc. Nursing", duration: "2 Years" },
  "post-basic": { name: "Post Basic B.Sc.", duration: "2 Years" },
}

const nextSteps = [
  {
    step: 1,
    title: "Check Your Email",
    description: "We've sent a confirmation email with your admission details and receipt",
    icon: Mail,
  },
  {
    step: 2,
    title: "Upload Documents",
    description: "Complete document submission through your student portal within 7 days",
    icon: FileText,
  },
  {
    step: 3,
    title: "Attend Orientation",
    description: "Join the virtual orientation session scheduled for August 20, 2025",
    icon: Calendar,
  },
  {
    step: 4,
    title: "Start Your Journey",
    description: "Classes begin on August 25, 2025. Welcome to HCNE!",
    icon: GraduationCap,
  },
]

function SuccessContent() {
  const searchParams = useSearchParams()
  
  const paymentId = searchParams.get("paymentId") || `PAY${Date.now()}`
  const name = searchParams.get("name") || "Student"
  const email = searchParams.get("email") || "student@example.com"
  const program = searchParams.get("program") || "bsc"
  const amount = searchParams.get("amount") || "5250"
  
  const programInfo = programDetails[program] || programDetails.bsc
  const transactionDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const transactionTime = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Success Hero */}
        <section className="relative overflow-hidden bg-primary/5 px-6 py-16 lg:px-8 lg:py-20">
          <BrandPattern className="opacity-[0.15]" />
          
          {/* Decorative Stars */}
          <div className="absolute top-10 right-10 opacity-10">
            <BrandStar size={120} className="text-primary" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-5">
            <BrandStar size={80} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Success Animation */}
            <div className="mb-8 inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
              </div>
            </div>

            <Badge className="mb-4 bg-primary text-primary-foreground">Payment Successful</Badge>
            
            <h1 className="font-serif text-3xl font-light leading-tight lg:text-4xl xl:text-5xl text-balance">
              Congratulations, {name.split(" ")[0]}!
            </h1>
            
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Your admission registration has been confirmed. Welcome to the HCNE family!
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" /> Download Receipt
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </section>

        {/* Payment Details */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Transaction Details */}
              <Card className="overflow-hidden">
                <div className="bg-primary px-6 py-4 text-primary-foreground flex items-center justify-between">
                  <h2 className="font-semibold">Transaction Details</h2>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10">
                    <Printer className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <dl className="space-y-4">
                    <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Hash className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <dt className="text-xs text-muted-foreground">Transaction ID</dt>
                        <dd className="font-mono font-semibold">{paymentId}</dd>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <dt className="text-xs text-muted-foreground">Date</dt>
                          <dd className="text-sm font-medium">{transactionDate}</dd>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <dt className="text-xs text-muted-foreground">Time</dt>
                          <dd className="text-sm font-medium">{transactionTime}</dd>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Registration Fee</span>
                        <span>₹{(parseInt(amount) - 250).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Processing Fee</span>
                        <span>₹250</span>
                      </div>
                      <div className="flex justify-between text-sm border-t border-border pt-3">
                        <span className="font-semibold">Total Paid</span>
                        <span className="text-xl font-bold text-primary">₹{parseInt(amount).toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-primary/10 p-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-primary font-medium">Payment Verified & Confirmed</span>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              {/* Student & Program Details */}
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Student Details
                    </h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <dt className="text-muted-foreground">Name</dt>
                        <dd className="font-medium">{name}</dd>
                      </div>
                      <div className="flex justify-between text-sm">
                        <dt className="text-muted-foreground">Email</dt>
                        <dd className="font-medium">{email}</dd>
                      </div>
                      <div className="flex justify-between text-sm">
                        <dt className="text-muted-foreground">Application ID</dt>
                        <dd className="font-mono font-medium">HCNE2025{Math.floor(Math.random() * 10000).toString().padStart(4, "0")}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Program Details
                    </h3>
                    <div className="rounded-lg border border-border bg-muted/30 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{programInfo.name}</h4>
                        <Badge variant="secondary">{programInfo.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Academic Year: 2025-26</p>
                      <p className="text-sm text-muted-foreground">Session Start: August 2025</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold mb-3">Important Contacts</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>Admissions: +91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>admissions@hcne.edu.in</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="relative border-t border-border bg-muted/30 px-6 py-16 lg:px-8 lg:py-20">
          <BrandPattern className="opacity-[0.15]" />
          
          <div className="relative mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <SectionBadge>What&apos;s Next</SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Your Next Steps
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Follow these steps to complete your admission process
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {nextSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/20">
                    <CardContent className="p-6">
                      {/* Step Number */}
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Connector */}
                  {index < nextSteps.length - 1 && (
                    <div className="absolute right-0 top-1/3 hidden h-0.5 w-6 -translate-y-1/2 translate-x-full bg-border lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary p-8 text-primary-foreground">
                  <h3 className="font-serif text-2xl font-light mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="opacity-80 mb-6">
                    Access your student portal to track your application status, upload documents, 
                    and stay updated with all admission activities.
                  </p>
                  <Button variant="secondary" className="gap-2">
                    Go to Student Portal <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h4 className="font-semibold mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <Download className="h-4 w-4" />
                      Download Admission Letter
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <FileText className="h-4 w-4" />
                      View Document Checklist
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <Calendar className="h-4 w-4" />
                      Add Orientation to Calendar
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Return Home CTA */}
        <section className="border-t border-border px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-muted-foreground mb-4">
              A confirmation email has been sent to <strong>{email}</strong>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/">
                  <Home className="h-4 w-4" /> Back to Homepage
                </Link>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/admissions">
                  View Admissions Page
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading payment details...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
