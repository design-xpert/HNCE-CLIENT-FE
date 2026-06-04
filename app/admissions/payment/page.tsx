"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrandStar, BrandPattern } from "@/components/brand-elements"
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Lock,
  CreditCard,
  Smartphone,
  Building,
  CheckCircle2,
  Clock,
  User,
  Mail,
  Phone,
  GraduationCap,
  IndianRupee,
  AlertCircle,
} from "lucide-react"

const programDetails: Record<string, { name: string; duration: string; fee: number; tokenAmount: number }> = {
  bsc: { name: "B.Sc. Nursing", duration: "4 Years", fee: 150000, tokenAmount: 5000 },
  gnm: { name: "GNM Diploma", duration: "3 Years", fee: 80000, tokenAmount: 5000 },
  msc: { name: "M.Sc. Nursing", duration: "2 Years", fee: 200000, tokenAmount: 10000 },
  "post-basic": { name: "Post Basic B.Sc.", duration: "2 Years", fee: 120000, tokenAmount: 5000 },
}

function PaymentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  })
  
  const [paymentMethod, setPaymentMethod] = useState("razorpay")
  const [isProcessing, setIsProcessing] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    const name = searchParams.get("name") || ""
    const email = searchParams.get("email") || ""
    const phone = searchParams.get("phone") || ""
    const program = searchParams.get("program") || "bsc"
    
    setStudentData({ name, email, phone, program })
  }, [searchParams])

  const program = programDetails[studentData.program] || programDetails.bsc
  const tokenAmount = program.tokenAmount
  const processingFee = 0
  const totalBeforeDiscount = tokenAmount + processingFee
  const discountAmount = couponApplied ? Math.round(totalBeforeDiscount * (discount / 100)) : 0
  const totalAmount = totalBeforeDiscount - discountAmount

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "HCNE2025") {
      setCouponApplied(true)
      setDiscount(10)
    } else if (couponCode.toUpperCase() === "EARLY20") {
      setCouponApplied(true)
      setDiscount(20)
    }
  }

  const removeCoupon = () => {
    setCouponCode("")
    setCouponApplied(false)
    setDiscount(0)
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate success/failure (90% success rate for demo)
    const isSuccess = Math.random() > 0.1
    
    if (isSuccess) {
      const paymentId = `PAY${Date.now()}`
      router.push(`/admissions/payment/success?paymentId=${paymentId}&name=${encodeURIComponent(studentData.name)}&email=${encodeURIComponent(studentData.email)}&program=${studentData.program}&amount=${totalAmount}`)
    } else {
      router.push(`/admissions/payment/failure?name=${encodeURIComponent(studentData.name)}&program=${studentData.program}`)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Header */}
        <section className="relative overflow-hidden border-b border-border bg-muted/30">
          <div className="absolute right-0 top-0 opacity-5">
            <BrandStar size={200} className="text-primary" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <Link 
              href="/admissions" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Application
            </Link>
            <h1 className="font-serif text-3xl font-light lg:text-4xl">
              Complete Your Payment
            </h1>
            <p className="mt-2 text-muted-foreground">
              Secure payment for admission registration
            </p>
          </div>
        </section>

        {/* Payment Content */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Payment Form */}
              <div className="lg:col-span-3 space-y-6">
                {/* Student Summary */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-semibold mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Applicant Details
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Full Name</p>
                          <p className="font-medium">{studentData.name || "Not provided"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Email</p>
                          <p className="font-medium">{studentData.email || "Not provided"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Phone</p>
                          <p className="font-medium">{studentData.phone || "Not provided"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Program</p>
                          <p className="font-medium">{program.name}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Course Information */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-semibold mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Course Information
                    </h2>
                    <div className="rounded-lg border border-border bg-muted/30 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{program.name}</h3>
                          <p className="text-sm text-muted-foreground">Duration: {program.duration}</p>
                        </div>
                        <Badge variant="secondary">2025-26 Intake</Badge>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Annual Tuition Fee</span>
                          <span className="font-medium">₹{program.fee.toLocaleString()}/year</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          * Annual fee to be paid at the start of each academic year
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-semibold mb-4 flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Select Payment Method
                    </h2>
                    
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                      <div className={`relative rounded-lg border-2 p-4 transition-all ${paymentMethod === "razorpay" ? "border-primary bg-primary/5" : "border-border"}`}>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="razorpay" id="razorpay" />
                          <Label htmlFor="razorpay" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#072654]">
                                  <span className="text-white font-bold text-sm">R</span>
                                </div>
                                <div>
                                  <p className="font-medium">Razorpay</p>
                                  <p className="text-xs text-muted-foreground">Cards, UPI, Netbanking, Wallets</p>
                                </div>
                              </div>
                              <Badge variant="secondary" className="text-xs">Recommended</Badge>
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div className={`relative rounded-lg border-2 p-4 transition-all ${paymentMethod === "phonepe" ? "border-primary bg-primary/5" : "border-border"}`}>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="phonepe" id="phonepe" />
                          <Label htmlFor="phonepe" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5f259f]">
                                <Smartphone className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="font-medium">PhonePe</p>
                                <p className="text-xs text-muted-foreground">UPI, Cards, Wallet</p>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div className={`relative rounded-lg border-2 p-4 transition-all ${paymentMethod === "netbanking" ? "border-primary bg-primary/5" : "border-border"}`}>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem value="netbanking" id="netbanking" />
                          <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                                <Building className="h-5 w-5 text-foreground" />
                              </div>
                              <div>
                                <p className="font-medium">Direct Bank Transfer</p>
                                <p className="text-xs text-muted-foreground">NEFT, RTGS, IMPS</p>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Coupon Code */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-semibold mb-4">Have a Coupon Code?</h2>
                    {!couponApplied ? (
                      <div className="flex gap-3">
                        <Input
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1"
                        />
                        <Button variant="outline" onClick={applyCoupon}>Apply</Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium text-primary">{couponCode.toUpperCase()}</p>
                            <p className="text-sm text-muted-foreground">{discount}% discount applied</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={removeCoupon}>Remove</Button>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-3">
                      Try: HCNE2025 (10% off) or EARLY20 (20% off)
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 space-y-6">
                  <Card className="overflow-hidden">
                    <div className="bg-primary px-6 py-4 text-primary-foreground">
                      <h2 className="font-semibold flex items-center gap-2">
                        <IndianRupee className="h-5 w-5" />
                        Payment Summary
                      </h2>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Registration Fee</span>
                          <span>₹{registrationFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Processing Fee</span>
                          <span>₹{processingFee.toLocaleString()}</span>
                        </div>
                        {couponApplied && (
                          <div className="flex justify-between text-sm text-primary">
                            <span>Discount ({discount}%)</span>
                            <span>- ₹{discountAmount.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="border-t border-border pt-3">
                          <div className="flex justify-between">
                            <span className="font-semibold">Total Amount</span>
                            <span className="text-2xl font-bold text-primary">₹{totalAmount.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <Button 
                        className="w-full gap-2" 
                        size="lg"
                        onClick={handlePayment}
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Pay ₹{totalAmount.toLocaleString()} <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By proceeding, you agree to our Terms of Service and Refund Policy
                      </p>
                    </CardContent>
                  </Card>

                  {/* Trust Indicators */}
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Secure Payment
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm">
                          <Lock className="h-4 w-4 text-primary" />
                          <span>256-bit SSL Encryption</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm">
                          <Shield className="h-4 w-4 text-primary" />
                          <span>PCI DSS Compliant</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>RBI Authorized Payment Gateway</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm">
                          <Building className="h-4 w-4 text-primary" />
                          <span>Institution Verified by AICTE</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Need Help */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <AlertCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Need Help?</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Contact our support team
                          </p>
                          <p className="text-sm font-medium mt-2">+91 98765 43210</p>
                          <p className="text-sm text-muted-foreground">admissions@hcne.edu.in</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading payment details...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}
