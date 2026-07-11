"use client";

import { useState } from "react";
import { ProspectusDialog } from "@/components/prospectus-dialog";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AdvisorPopup } from "@/components/advisor-popup";
import { BrandStar, BrandPattern, SectionBadge } from "@/components/brand-elements";
import {
  Download,
  ArrowRight,
  CheckCircle2,
  FileText,
  Upload,
  GraduationCap,
  Clock,
  Users,
  Award,
  Shield,
  Phone,
  Mail,
  HelpCircle,
  Globe,
  IndianRupee,
  Calendar,
  MapPin,
  BookOpen,
  Stethoscope,
  CreditCard,
  Building2,
  MessageCircle,
  ChevronUp,
} from "lucide-react";

// Admission Procedure Steps
const nationalAdmissionSteps = [
  {
    step: 1,
    title: "Online Application",
    description:
      "Fill the online application form with personal and academic details",
  },
  {
    step: 2,
    title: "Pay Token Amount",
    description:
      "Pay non-refundable token amount of ₹5,000 to secure your seat",
  },
  {
    step: 3,
    title: "Document Verification",
    description: "Submit original documents for verification at college",
  },
  {
    step: 4,
    title: "Complete Admission",
    description: "Pay remaining fees and complete admission formalities",
  },
];

const internationalAdmissionSteps = [
  {
    step: 1,
    title: "Online Application",
    description: "Fill application form with passport and visa details",
  },
  {
    step: 2,
    title: "Eligibility Check",
    description:
      "Submit equivalency certificate from AIU for qualification verification",
  },
  {
    step: 3,
    title: "Pay Token Amount",
    description: "Pay token amount of $100 USD to confirm seat reservation",
  },
  {
    step: 4,
    title: "Visa & Travel",
    description: "Apply for student visa and plan travel to India",
  },
  {
    step: 5,
    title: "Complete Admission",
    description: "Arrive at campus, verify documents, and pay remaining fees",
  },
];

// Program wise eligibility
const programEligibility = [
  {
    id: "bsc",
    title: "B.Sc. Nursing",
    duration: "4 Years",
    fee: "₹1,50,000/year",
    tokenAmount: "₹5,000",
    icon: Stethoscope,
    color: "bg-blue-500/10 text-blue-600",
    eligibility: [
      "10+2 with Physics, Chemistry & Biology from recognized board",
      "Minimum 50% aggregate marks (45% for reserved categories)",
      "Age: 17-35 years as on 31st December of admission year",
      "Medically fit with no color blindness",
      "English as a subject in 10+2",
    ],
    documents: [
      "10th & 12th Marksheets",
      "Transfer Certificate",
      "Character Certificate",
      "Medical Fitness Certificate",
      "Passport Photos (6)",
    ],
  },
  {
    id: "gnm",
    title: "GNM Diploma",
    duration: "3 Years",
    fee: "₹80,000/year",
    tokenAmount: "₹5,000",
    icon: BookOpen,
    color: "bg-green-500/10 text-green-600",
    eligibility: [
      "10+2 in any stream from recognized board",
      "Minimum 45% aggregate marks (40% for reserved categories)",
      "Age: 17-35 years as on 31st December of admission year",
      "English as a subject in 10+2 (preferred)",
      "Medically fit with no color blindness",
    ],
    documents: [
      "10th & 12th Marksheets",
      "Transfer Certificate",
      "Character Certificate",
      "Medical Fitness Certificate",
      "Passport Photos (6)",
    ],
  },
];

// FAQs
const faqs = [
  {
    question: "What is the token amount and is it refundable?",
    answer:
      "The token amount is a seat reservation fee (₹5,000 for UG programs, ₹10,000 for PG programs). This amount is NON-REFUNDABLE but will be adjusted against your total admission fee when you complete the admission process at the college.",
  },
  {
    question: "What is the last date to apply for admission?",
    answer:
      "Applications are open throughout the year but seats fill on a first-come-first-served basis. For the 2025-26 session, we recommend applying before July 31, 2025 to secure your preferred program.",
  },
  {
    question: "How long is my seat reserved after paying the token amount?",
    answer:
      "Your seat is reserved for 30 days after token payment. You must visit the college with original documents and pay the remaining fee within this period, else the reservation may be cancelled without refund.",
  },
  {
    question: "Can I change my program after paying the token amount?",
    answer:
      "Yes, you can request a program change before completing the final admission. The request is subject to seat availability and eligibility criteria for the new program. Token amount will be transferred to the new program.",
  },
  {
    question: "What documents do I need to bring for final admission?",
    answer:
      "Bring all original documents (10th, 12th marksheets, TC, CC, medical certificate, photos), the token payment receipt, and remaining fee amount. Additional documents may be required based on your category and program.",
  },
  {
    question: "Is hostel accommodation compulsory?",
    answer:
      "Hostel is not compulsory but highly recommended for outstation students. Hostel fees are separate from tuition fees. Limited hostel seats are available on first-come-first-served basis.",
  },
  {
    question: "Do you accept international students?",
    answer:
      "Yes, we welcome international students. Additional requirements include valid passport, student visa, equivalency certificate from Association of Indian Universities (AIU), and proof of English proficiency if applicable.",
  },
  {
    question: "What are the payment modes accepted for fees?",
    answer:
      "We accept payments via Credit/Debit Cards, Net Banking, UPI, and Demand Draft. For international students, wire transfer is also available. All online payments are processed through secure payment gateways.",
  },
];

export default function AdmissionsPage() {
  const router = useRouter();
  const [studentType, setStudentType] = useState<"national" | "international">(
    "national",
  );
  const [selectedProgram, setSelectedProgram] = useState(
    programEligibility[0].id,
  );
  const [mobileCardOpen, setMobileCardOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    nationality: "indian",
    fatherName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    program: "",
    qualification: "",
    passingYear: "",
    percentage: "",
    agreeTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const program = programEligibility.find((p) => p.id === formData.program);
    const params = new URLSearchParams({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      amount: program?.tokenAmount.replace(/[₹,]/g, "") || "5000",
      type: "token",
    });
    router.push(`/admissions/payment?${params.toString()}`);
  };

  const selectedProgramData = programEligibility.find(
    (p) => p.id === selectedProgram,
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <BrandPattern className="opacity-[0.18]" />

          {/* Decorative Stars */}
          <div className="absolute top-10 right-10 opacity-20">
            <BrandStar size={120} className="text-primary-foreground" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <BrandStar size={80} className="text-primary-foreground" />
          </div>
          <div className="absolute top-1/2 right-1/4 opacity-5">
            <BrandStar size={200} className="text-primary-foreground" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Admissions Open 2025-26
                </Badge>
                <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl xl:text-6xl">
                  Begin Your Journey in Healthcare Excellence
                </h1>
                <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-xl">
                  Join thousands of healthcare professionals who started their
                  career at HCNE. Reserve your seat with a small token amount
                  and complete admission at your convenience.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <a href="#apply">
                      <ArrowRight className="h-4 w-4" /> Apply Now
                    </a>
                  </Button>
                  <ProspectusDialog
                    trigger={
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                      >
                        <Download className="h-4 w-4" /> Download Prospectus
                      </Button>
                    }
                  />
                </div>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold">4</div>
                    <div className="text-sm opacity-70">Programs Offered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm opacity-70">Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-70">Hospital Partners</div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative hidden lg:block">
                <div className="relative h-[450px] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop"
                    alt="Nursing students at HCNE"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent" />
                </div>
                {/* Floating Card */}
                <Card className="absolute -bottom-6 -left-6 w-64 shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Last Date to Apply
                        </p>
                        <p className="text-lg font-bold text-primary">
                          July 31, 2025
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Procedure Section */}
        <section className="border-b border-border bg-muted/30 px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionBadge>
                Admission Process
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Simple Admission Procedure
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Follow our streamlined admission process designed for both
                national and international students
              </p>
            </div>

            {/* Student Type Toggle */}
            <div className="mb-10 flex justify-center">
              <div className="inline-flex rounded-lg border border-border bg-background p-1">
                <button
                  onClick={() => setStudentType("national")}
                  className={`flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
                    studentType === "national"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <MapPin className="h-4 w-4" /> National Students
                </button>
                <button
                  onClick={() => setStudentType("international")}
                  className={`flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
                    studentType === "international"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Globe className="h-4 w-4" /> International Students
                </button>
              </div>
            </div>

            {/* Steps */}
            <div
              className={`grid gap-6 ${studentType === "international" ? "md:grid-cols-5" : "md:grid-cols-4"}`}
            >
              {(studentType === "national"
                ? nationalAdmissionSteps
                : internationalAdmissionSteps
              ).map((item, index, arr) => (
                <div key={item.step} className="relative">
                  <Card className="relative h-full overflow-hidden border-2 border-transparent transition-all hover:border-primary/20 hover:shadow-lg">
                    <div className="absolute -right-2 -top-2 z-10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <CardContent className="p-5 pt-8">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < arr.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 translate-x-full bg-border md:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Token Amount Info */}
            <Card className="mt-10 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      Token Amount - Seat Reservation
                    </h3>
                    <p className="text-muted-foreground">
                      Pay a small non-refundable token amount (₹5,000 - ₹10,000
                      depending on program) to reserve your seat. This amount
                      will be{" "}
                      <span className="font-medium text-foreground">
                        adjusted against your total admission fee
                      </span>{" "}
                      when you complete admission at the college within 30 days.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Button size="lg" className="gap-2" asChild>
                      <a href="#apply">
                        Reserve Your Seat <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionBadge>
                Eligibility
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Program-wise Eligibility Criteria
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Check the eligibility requirements and fee structure for each
                program
              </p>
            </div>

            {/* Program Selection Tabs */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {programEligibility.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program.id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    selectedProgram === program.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  <program.icon className="h-4 w-4" />
                  {program.title}
                </button>
              ))}
            </div>

            {/* Selected Program Details */}
            {selectedProgramData ? (
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  {/* Left: Program Info */}
                  <div className="bg-primary p-8 text-primary-foreground">
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/20`}
                    >
                      <selectedProgramData.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-light">
                      {selectedProgramData.title}
                    </h3>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 opacity-70" />
                        <span>Duration: {selectedProgramData.duration}</span>
                      </div>
                    </div>

                    {/* Fee Structure - Clear separation */}
                    <div className="mt-6 p-4 rounded-xl bg-primary-foreground/10">
                      <div className="mb-3">
                        <p className="text-xs uppercase tracking-wide opacity-70 mb-1">
                          Annual Course Fee
                        </p>
                        <p className="text-xl font-semibold">
                          {selectedProgramData.fee}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-primary-foreground/20">
                        <p className="text-xs uppercase tracking-wide opacity-70 mb-1">
                          Token Amount (To Reserve Seat)
                        </p>
                        <p className="text-2xl font-bold text-primary-foreground">
                          {selectedProgramData.tokenAmount}
                        </p>
                        <p className="text-xs opacity-70 mt-1">
                          Adjustable against total fee
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="secondary"
                      size="lg"
                      className="mt-6 w-full gap-2"
                      asChild
                    >
                      <a href="#apply">
                        <ArrowRight className="h-4 w-4" /> Apply for{" "}
                        {selectedProgramData.title}
                      </a>
                    </Button>
                  </div>

                  {/* Right: Eligibility & Documents */}
                  <div className="lg:col-span-2 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Eligibility */}
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          Eligibility Criteria
                        </h4>
                        <ul className="space-y-3">
                          {selectedProgramData.eligibility.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm"
                            >
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              <span className="text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Documents */}
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-primary" />
                          Required Documents
                        </h4>
                        <ul className="space-y-3">
                          {selectedProgramData.documents.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm"
                            >
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              <span className="text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <GraduationCap className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Select a Program</h3>
                <p className="mt-2 text-muted-foreground">
                  Click on any program above to view eligibility criteria and
                  fee details
                </p>
              </Card>
            )}
          </div>
        </section>

        {/* Application Form Section */}
        <section
          id="apply"
          className="relative bg-muted/30 px-6 py-12 lg:px-8 pb-20 lg:pb-16"
        >
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <SectionBadge>
                    Application Form
                  </SectionBadge>
                  <h2 className="font-serif text-3xl font-light lg:text-4xl">
                    Reserve Your Seat
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Fill the form below and pay the token amount to reserve your
                    seat. Complete admission within 30 days at the college.
                  </p>
                </div>

                <Card className="overflow-hidden">
                  <div className="bg-terracotta-900 px-8 py-5 text-white">
                    <Badge
                      variant="secondary"
                      className="mb-3 bg-white/15 text-white hover:bg-white/20"
                    >
                      Application Form
                    </Badge>
                    <h3 className="font-serif text-xl font-light">
                      Reserve Your Seat
                    </h3>
                    <p className="mt-1 text-sm opacity-80">
                      Pay the token amount to confirm your seat. Complete
                      admission within 30 days at the college.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <CardContent className="p-6 space-y-6">
                      {/* Program Selection */}
                      <div className="space-y-2">
                        <Label className="text-base font-medium">
                          Select Program *
                        </Label>
                        <RadioGroup
                          value={formData.program}
                          onValueChange={(value) =>
                            handleInputChange("program", value)
                          }
                          className="grid sm:grid-cols-2 gap-3"
                        >
                          {programEligibility.map((program) => (
                            <Label
                              key={program.id}
                              htmlFor={program.id}
                              className={`flex items-center gap-3 rounded-lg border-2 p-4 cursor-pointer transition-all ${
                                formData.program === program.id
                                  ? "border-terracotta-700 bg-terracotta-100/30"
                                  : "border-border hover:border-terracotta-500/50"
                              }`}
                            >
                              <RadioGroupItem
                                value={program.id}
                                id={program.id}
                              />
                              <div className="flex-1">
                                <div className="font-medium">
                                  {program.title}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {program.duration} • Token:{" "}
                                  {program.tokenAmount}
                                </div>
                              </div>
                            </Label>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="border-t border-border pt-6">
                        <h3 className="font-medium mb-4 flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" /> Personal
                          Details
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">
                              Full Name (as per documents) *
                            </Label>
                            <Input
                              id="fullName"
                              placeholder="Enter full name"
                              value={formData.fullName}
                              onChange={(e) =>
                                handleInputChange("fullName", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="fatherName">
                              Father&apos;s Name *
                            </Label>
                            <Input
                              id="fatherName"
                              placeholder="Enter father's name"
                              value={formData.fatherName}
                              onChange={(e) =>
                                handleInputChange("fatherName", e.target.value)
                              }
                              required
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) =>
                                handleInputChange("phone", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth *</Label>
                            <Input
                              id="dob"
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={(e) =>
                                handleInputChange("dateOfBirth", e.target.value)
                              }
                              required
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="gender">Gender *</Label>
                            <Select
                              value={formData.gender}
                              onValueChange={(value) =>
                                handleInputChange("gender", value)
                              }
                            >
                              <SelectTrigger id="gender">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="nationality">Nationality *</Label>
                            <Select
                              value={formData.nationality}
                              onValueChange={(value) =>
                                handleInputChange("nationality", value)
                              }
                            >
                              <SelectTrigger id="nationality">
                                <SelectValue placeholder="Select nationality" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="indian">Indian</SelectItem>
                                <SelectItem value="nri">NRI</SelectItem>
                                <SelectItem value="international">
                                  International
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-border pt-6">
                        <h3 className="font-medium mb-4 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" /> Address
                          Details
                        </h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="address">Full Address *</Label>
                            <Textarea
                              id="address"
                              placeholder="House No, Street, Locality"
                              value={formData.address}
                              onChange={(e) =>
                                handleInputChange("address", e.target.value)
                              }
                              className="resize-none"
                              rows={2}
                              required
                            />
                          </div>
                          <div className="grid gap-4 sm:grid-cols-4">
                            <div className="space-y-2">
                              <Label htmlFor="city">City *</Label>
                              <Input
                                id="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={(e) =>
                                  handleInputChange("city", e.target.value)
                                }
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state">State *</Label>
                              <Input
                                id="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={(e) =>
                                  handleInputChange("state", e.target.value)
                                }
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="pincode">PIN Code *</Label>
                              <Input
                                id="pincode"
                                placeholder="PIN"
                                value={formData.pincode}
                                onChange={(e) =>
                                  handleInputChange("pincode", e.target.value)
                                }
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="country">Country</Label>
                              <Input
                                id="country"
                                value={formData.country}
                                onChange={(e) =>
                                  handleInputChange("country", e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-border pt-6">
                        <h3 className="font-medium mb-4 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-primary" />{" "}
                          Last Qualification
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-3">
                          <div className="space-y-2">
                            <Label htmlFor="qualification">
                              Qualification *
                            </Label>
                            <Select
                              value={formData.qualification}
                              onValueChange={(value) =>
                                handleInputChange("qualification", value)
                              }
                            >
                              <SelectTrigger id="qualification">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="12th">
                                  12th / Higher Secondary
                                </SelectItem>
                                <SelectItem value="gnm">GNM Diploma</SelectItem>
                                <SelectItem value="bsc">
                                  B.Sc. Nursing
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="passingYear">
                              Year of Passing *
                            </Label>
                            <Input
                              id="passingYear"
                              placeholder="e.g. 2024"
                              value={formData.passingYear}
                              onChange={(e) =>
                                handleInputChange("passingYear", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="percentage">
                              Percentage/CGPA *
                            </Label>
                            <Input
                              id="percentage"
                              placeholder="e.g. 75%"
                              value={formData.percentage}
                              onChange={(e) =>
                                handleInputChange("percentage", e.target.value)
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Terms */}
                      <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-4">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) =>
                            handleInputChange("agreeTerms", checked as boolean)
                          }
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor="terms"
                            className="cursor-pointer text-sm"
                          >
                            I agree to the Terms & Conditions *
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            I understand that the token amount is non-refundable
                            and will be adjusted against my admission fee. I
                            agree to complete admission formalities within 30
                            days of token payment.
                          </p>
                        </div>
                      </div>
                    </CardContent>

                    {/* Form Footer */}
                    <div className="flex items-center justify-between border-t border-border bg-muted/30 px-6 py-4">
                      <div className="text-sm text-muted-foreground">
                        {formData.program && (
                          <span>
                            Token Amount:{" "}
                            <span className="font-semibold text-foreground">
                              {
                                programEligibility.find(
                                  (p) => p.id === formData.program,
                                )?.tokenAmount
                              }
                            </span>
                          </span>
                        )}
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="gap-2 bg-terracotta-900 hover:bg-terracotta-700 text-white disabled:opacity-50"
                        disabled={
                          !formData.agreeTerms ||
                          !formData.program ||
                          !formData.fullName ||
                          !formData.email
                        }
                      >
                        <CreditCard className="h-4 w-4" /> Pay Token & Reserve
                        Seat
                      </Button>
                    </div>
                  </form>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Download Prospectus */}
                <Card className="overflow-hidden">
                  <div className="bg-primary px-6 py-4 text-primary-foreground">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Download className="h-5 w-5" /> Download Prospectus
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Get detailed information about programs, fee structure,
                      facilities, and admission process.
                    </p>
                    <ProspectusDialog
                      className="w-full"
                      trigger={
                        <Button variant="outline" className="w-full gap-2">
                          <Download className="h-4 w-4" /> Download Prospectus
                        </Button>
                      }
                    />
                  </CardContent>
                </Card>

                {/* Query Contact */}
                <Card className="overflow-hidden">
                  <div className="bg-primary px-6 py-4 text-primary-foreground">
                    <h3 className="font-semibold flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" /> Admission Queries
                    </h3>
                    <p className="text-sm opacity-80">
                      Our team is here to help
                    </p>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <a
                      href="tel:+911234567890"
                      className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Call Us</p>
                        <p className="font-medium">+91 123 456 7890</p>
                      </div>
                    </a>
                    <a
                      href="mailto:admissions@hcne.edu"
                      className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Email Us
                        </p>
                        <p className="font-medium">admissions@hcne.edu</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/911234567890"
                      className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          WhatsApp
                        </p>
                        <p className="font-medium">Chat with Us</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Fee Structure Quick View */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <IndianRupee className="h-5 w-5 text-primary" /> Fee
                      Structure
                    </h3>
                    <div className="space-y-3 text-sm">
                      {programEligibility.map((program) => (
                        <div
                          key={program.id}
                          className="flex justify-between items-center pb-2 border-b border-border last:border-0 last:pb-0"
                        >
                          <span className="text-muted-foreground">
                            {program.title}
                          </span>
                          <span className="font-medium">{program.fee}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Hostel and other charges are additional
                    </p>
                  </CardContent>
                </Card>

                {/* Important Dates */}
                <Card className="overflow-hidden border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" /> Important
                      Dates
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Application Start
                        </span>
                        <span className="font-medium">Jan 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Last Date to Apply
                        </span>
                        <span className="font-medium text-primary">
                          July 31, 2025
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Classes Begin
                        </span>
                        <span className="font-medium">Aug 16, 2025</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <SectionBadge>
                FAQs
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Find answers to common queries about our admission process
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-lg border border-border bg-background px-6 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <span className="text-left font-medium">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still Have Questions */}
            <Card className="mt-10 border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Still have questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our admission counselors are ready to help you with any
                  queries
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="tel:+911234567890">
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                  </Button>
                  <Button className="gap-2" asChild>
                    <Link href="/contact">
                      <Mail className="h-4 w-4" /> Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Mobile Sticky Summary Card */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-border z-40">
        <button
          onClick={() => setMobileCardOpen(!mobileCardOpen)}
          className="w-full px-6 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div>
              <p className="text-sm font-medium text-left">
                {selectedProgramData?.title || "Select Program"}
              </p>
              <p className="text-xs text-muted-foreground text-left">
                Token: {selectedProgramData?.tokenAmount || "—"}
              </p>
            </div>
          </div>
          <ChevronUp
            className={`h-4 w-4 text-muted-foreground transition-transform ${mobileCardOpen ? "rotate-180" : ""}`}
          />
        </button>

        {mobileCardOpen && (
          <div className="border-t border-border bg-background p-6 max-h-[60vh] overflow-y-auto">
            <div className="space-y-4 mb-6">
              {selectedProgramData && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                      Program
                    </span>
                    <span className="text-sm font-medium">
                      {selectedProgramData.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                      Duration
                    </span>
                    <span className="text-sm font-medium">
                      {selectedProgramData.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                      Annual Course Fee
                    </span>
                    <span className="text-sm font-medium">
                      {selectedProgramData.fee}
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold block">
                          Token Amount
                        </span>
                        <span className="text-xs text-muted-foreground">
                          To reserve your seat
                        </span>
                      </div>
                      <span className="text-xl font-bold text-primary">
                        {selectedProgramData.tokenAmount}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Button size="sm" className="w-full gap-2" asChild>
              <Link href={`/admissions/payment?program=${selectedProgram}`}>
                <CreditCard className="h-4 w-4" /> Pay Token Now
              </Link>
            </Button>
          </div>
        )}
      </div>

      <AdvisorPopup />
      <SiteFooter />
    </div>
  );
}
