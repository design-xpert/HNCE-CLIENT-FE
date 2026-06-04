"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AdvisorPopup } from "@/components/advisor-popup";
import { BrandStar, BrandPattern } from "@/components/brand-elements";
import {
  CreditCard,
  Building2,
  Smartphone,
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  Info,
  FileText,
  Lock,
  AlertCircle,
  Banknote,
  User,
  GraduationCap,
  BookOpen,
  ChevronUp,
} from "lucide-react";

export default function OnlineFeePaymentPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [mobileCardOpen, setMobileCardOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    email: "",
    phone: "",
    course: "",
    year: "",
    semester: "",
    feeType: "",
    amount: "",
  });

  const courses = [
    { value: "bsc-nursing", label: "B.Sc. Nursing", fee: "150000" },
    { value: "gnm", label: "GNM Diploma", fee: "80000" },
  ];

  const feeTypes = [
    { value: "tuition", label: "Tuition Fee" },
    { value: "hostel", label: "Hostel Fee" },
    { value: "exam", label: "Examination Fee" },
    { value: "library", label: "Library Fee" },
    { value: "lab", label: "Laboratory Fee" },
    { value: "other", label: "Other Fees" },
  ];

  const paymentMethods = [
    {
      id: "razorpay",
      name: "Razorpay",
      description: "Credit/Debit Card, UPI, Net Banking",
      icon: CreditCard,
    },
    {
      id: "phonepe",
      name: "PhonePe",
      description: "UPI Payment via PhonePe",
      icon: Smartphone,
    },
    {
      id: "netbanking",
      name: "Net Banking",
      description: "Direct bank transfer",
      icon: Building2,
    },
  ];

  const handleCourseChange = (value: string) => {
    const selectedCourse = courses.find((c) => c.value === value);
    setFormData({
      ...formData,
      course: value,
      amount: selectedCourse?.fee || "",
    });
  };

  const selectedCourse = courses.find((c) => c.value === formData.course);
  const displayAmount = parseInt(formData.amount || "0");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <BrandPattern className="opacity-[0.18]" />

          <div className="absolute top-10 right-10 opacity-20">
            <BrandStar size={120} className="text-primary-foreground" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <BrandStar size={80} className="text-primary-foreground" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <Badge
                variant="secondary"
                className="mb-6 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Lock className="h-3 w-3 mr-1" /> Secure Payment Gateway
              </Badge>
              <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl text-balance">
                Online Fee Payment
              </h1>
              <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-xl">
                Pay your fees securely through our authorized payment gateway.
                All transactions are encrypted and protected.
              </p>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { icon: Shield, label: "SSL Secured" },
                  { icon: Lock, label: "PCI DSS Compliant" },
                  { icon: CheckCircle2, label: "RBI Authorized" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm opacity-80"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="border-b border-border bg-muted/30 px-6 py-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {[
                { num: 1, label: "Student Details" },
                { num: 2, label: "Course & Fee" },
                { num: 3, label: "Payment" },
                { num: 4, label: "Confirmation" },
              ].map((s, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                      step >= s.num
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.num ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      s.num
                    )}
                  </div>
                  <span
                    className={`hidden sm:block text-sm ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {s.label}
                  </span>
                  {idx < 3 && (
                    <div className="hidden sm:block h-px w-8 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative px-6 py-12 lg:px-8 lg:py-16 pb-32 lg:pb-16">
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Student Details Section */}
                <Card className="border-2 border-transparent hover:border-primary/10 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Student Details
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Enter your registered information
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="studentId">
                          Student ID / Enrollment No.
                        </Label>
                        <Input
                          id="studentId"
                          placeholder="e.g., HCNE2024001"
                          value={formData.studentId}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              studentId: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Full Name</Label>
                        <Input
                          id="studentName"
                          placeholder="As per admission records"
                          value={formData.studentName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              studentName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Mobile Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Course Details Section */}
                <Card className="border-2 border-transparent hover:border-primary/10 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Pursuing Course Details
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Select your course and academic details
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Course / Program</Label>
                        <Select
                          onValueChange={handleCourseChange}
                          value={formData.course}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem
                                key={course.value}
                                value={course.value}
                              >
                                {course.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Academic Year</Label>
                        <Select
                          onValueChange={(v) =>
                            setFormData({ ...formData, year: v })
                          }
                          value={formData.year}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Semester</Label>
                        <Select
                          onValueChange={(v) =>
                            setFormData({ ...formData, semester: v })
                          }
                          value={formData.semester}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="odd">Odd Semester</SelectItem>
                            <SelectItem value="even">Even Semester</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Fee Type</Label>
                        <Select
                          onValueChange={(v) =>
                            setFormData({ ...formData, feeType: v })
                          }
                          value={formData.feeType}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select fee type" />
                          </SelectTrigger>
                          <SelectContent>
                            {feeTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Options Section */}
                <Card className="border-2 border-transparent hover:border-primary/10 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Payment Options
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred payment method
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-3"
                    >
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`relative flex items-center gap-4 rounded-lg border-2 p-4 cursor-pointer transition-all ${
                            paymentMethod === method.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <RadioGroupItem
                            value={method.id}
                            id={method.id}
                            className="sr-only"
                          />
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                            <method.icon className="h-6 w-6 text-primary" />
                          </div>
                          <label
                            htmlFor={method.id}
                            className="flex-1 cursor-pointer"
                          >
                            <p className="font-medium">{method.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </label>
                          {paymentMethod === method.id && (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          )}
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Bank Account Details */}
                <Card className="border-2 border-transparent hover:border-primary/10 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Banknote className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Account Details (For Direct Transfer)
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Use these details for NEFT/RTGS/IMPS
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="rounded-lg bg-muted/50 p-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Account Name
                        </span>
                        <span className="font-medium">
                          Heritage Centre for Nursing Excellence
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Account Number
                        </span>
                        <span className="font-medium">1234567890123456</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">IFSC Code</span>
                        <span className="font-medium">HDFC0001234</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Bank Name</span>
                        <span className="font-medium">
                          HDFC Bank, Medical District Branch
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground flex items-start gap-1">
                      <Info className="h-3 w-3 mt-0.5 shrink-0" />
                      For direct transfers, please share the transaction
                      reference with accounts@hcne.edu.in
                    </p>
                  </CardContent>
                </Card>

                {/* Policies Section */}
                <Card className="border-2 border-transparent hover:border-primary/10 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Payment Policy, Refund & Terms
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Please read before proceeding
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="payment-policy">
                        <AccordionTrigger className="text-sm font-medium">
                          Payment Policy
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground space-y-2">
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              All fees must be paid by the due date mentioned in
                              the fee schedule.
                            </li>
                            <li>
                              Late payment will attract a penalty of Rs. 100 per
                              day after the due date.
                            </li>
                            <li>
                              Fees can be paid in full or in installments as per
                              approved payment plan.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="refund-policy">
                        <AccordionTrigger className="text-sm font-medium">
                          Refund Policy
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground space-y-2">
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              Refunds will be processed within 7 business days
                              of cancellation.
                            </li>
                            <li>
                              A processing fee of 2% will be deducted from
                              refund amount.
                            </li>
                            <li>
                              No refund after course commencement except on
                              medical grounds.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="terms-conditions">
                        <AccordionTrigger className="text-sm font-medium">
                          Terms & Conditions
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground space-y-2">
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              By making payment, you agree to HCNE's admission
                              terms and conditions.
                            </li>
                            <li>
                              HCNE reserves the right to cancel admission if
                              false information is provided.
                            </li>
                            <li>
                              All payments are final and non-refundable except
                              as per refund policy.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="mt-6 flex items-center gap-3">
                      <Checkbox
                        id="terms"
                        checked={agreeTerms}
                        onCheckedChange={setAgreeTerms}
                      />
                      <label htmlFor="terms" className="text-sm cursor-pointer">
                        I agree to the payment policy, refund policy, and terms
                        & conditions
                      </label>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button
                  size="lg"
                  className="w-full gap-2"
                  disabled={!formData.course || !agreeTerms}
                >
                  <CreditCard className="h-4 w-4" /> Proceed to Payment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Sidebar - Desktop */}
              <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start space-y-6">
                {/* Summary Card */}
                <Card className="border-2 border-primary/20 bg-background shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Payment Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedCourse && (
                      <div className="space-y-3">
                        <div className="flex items-start justify-between pb-3 border-b border-primary/10">
                          <span className="text-sm text-muted-foreground">
                            Course
                          </span>
                          <span className="text-sm font-medium text-right">
                            {selectedCourse.label}
                          </span>
                        </div>
                        <div className="flex items-start justify-between pb-3 border-b border-primary/10">
                          <span className="text-sm text-muted-foreground">
                            Year
                          </span>
                          <span className="text-sm font-medium">
                            {formData.year || "—"}
                          </span>
                        </div>
                        <div className="flex items-start justify-between pb-3 border-b border-primary/10">
                          <span className="text-sm text-muted-foreground">
                            Semester
                          </span>
                          <span className="text-sm font-medium">
                            {formData.semester || "—"}
                          </span>
                        </div>
                        <div className="flex items-start justify-between pt-2">
                          <span className="font-semibold">Amount Due</span>
                          <span className="text-lg font-bold text-primary">
                            ₹{displayAmount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}
                    {!selectedCourse && (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        Select a course to see payment details
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Help Card */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-primary" />
                      Need Help?
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      For payment related queries, contact our accounts team.
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>accounts@hcne.edu.in</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky Summary Card */}
        <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-border z-40">
          <button
            onClick={() => setMobileCardOpen(!mobileCardOpen)}
            className="w-full px-6 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div>
                <p className="text-sm font-medium text-left">
                  {selectedCourse?.label || "Select Course"}
                </p>
                <p className="text-xs text-muted-foreground text-left">
                  {displayAmount > 0
                    ? `₹${displayAmount.toLocaleString()}`
                    : "—"}
                </p>
              </div>
            </div>
            <ChevronUp
              className={`h-4 w-4 text-muted-foreground transition-transform ${mobileCardOpen ? "rotate-180" : ""}`}
            />
          </button>

          {mobileCardOpen && (
            <div className="border-t border-border bg-muted/30 p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-4 mb-6">
                {selectedCourse && (
                  <>
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">
                        Course
                      </span>
                      <span className="text-sm font-medium">
                        {selectedCourse.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">
                        Year
                      </span>
                      <span className="text-sm font-medium">
                        {formData.year || "—"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">
                        Semester
                      </span>
                      <span className="text-sm font-medium">
                        {formData.semester || "—"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-semibold">Amount Due</span>
                      <span className="text-lg font-bold text-primary">
                        ₹{displayAmount.toLocaleString()}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <Button
                size="sm"
                className="w-full gap-2"
                disabled={!formData.course || !agreeTerms}
              >
                <CreditCard className="h-4 w-4" /> Proceed to Payment
              </Button>
            </div>
          )}
        </div>
      </main>

      <AdvisorPopup />
      <SiteFooter />
    </div>
  );
}
