"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProspectusDialog } from "@/components/prospectus-dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar, BrandPattern, SectionBadge } from "@/components/brand-elements";
import {
  Download,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Award,
  BookOpen,
  Stethoscope,
  GraduationCap,
  Phone,
  Mail,
  IndianRupee,
  Shield,
} from "lucide-react";

export default function BScNursingPage() {
  const router = useRouter();
  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you?type=admissions");
  };
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

          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="max-w-3xl">
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary-foreground/15 text-primary-foreground"
                >
                  <Stethoscope className="h-3 w-3 mr-1" /> UG Program
                </Badge>
                <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl text-balance">
                  B.Sc. Nursing (4 Years)
                </h1>
                <p className="mt-4 text-lg opacity-80 leading-relaxed">
                  Comprehensive degree program in nursing with emphasis on
                  clinical excellence, research, and patient care management.
                </p>

                <div className="mt-8 flex flex-wrap gap-6">
                  {[
                    { label: "Duration", value: "4 Years" },
                    { label: "Intake", value: "60 Students" },
                    { label: "Fee", value: "₹1.5L/Year" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-sm opacity-70">{item.label}</span>
                      <span className="font-semibold text-lg">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <Link href="/admissions">
                      <ArrowRight className="h-4 w-4" /> Apply Now
                    </Link>
                  </Button>
                  <ProspectusDialog
                    defaultProgram="bsc-nursing"
                    trigger={
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                      >
                        <Download className="h-4 w-4" /> Prospectus
                      </Button>
                    }
                  />
                </div>
              </div>

              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/nursing-head-img.jpg"
                  alt="B.Sc. Nursing Students"
                  fill
                  loading="eager"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative px-6 py-16 lg:px-8 lg:py-24">
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl space-y-20">
            {/* About the Program */}
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/college-nurses.jpeg"
                  alt="Program Overview"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionBadge>
                  About the Program
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-4">
                  Program Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  B.Sc. Nursing is a 4-year comprehensive undergraduate program
                  designed to produce competent, compassionate, and
                  well-qualified nursing professionals equipped with the latest
                  knowledge and skills in healthcare delivery.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The program emphasizes a strong foundation in theoretical
                  knowledge combined with extensive clinical experience across
                  various healthcare settings including teaching hospitals,
                  community health centers, and specialty clinics.
                </p>
              </div>
            </div>

            {/* Program Highlights */}
            <div>
              <SectionBadge>
                Curriculum Structure
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                Program Highlights
              </h2>
              <div className="grid gap-6 grid-cols-3">
                {[
                  {
                    year: "Year 1",
                    title: "Foundations of Nursing",
                    description:
                      "Build your nursing foundation with core sciences and fundamental clinical skills.",
                    subjects: [
                      "Anatomy & Physiology",
                      "Microbiology",
                      "Biochemistry",
                      "Nursing Fundamentals",
                    ],
                    image: "/images/college-nurses.jpeg",
                  },
                  {
                    year: "Year 2",
                    title: "Medical-Surgical Nursing",
                    description:
                      "Master clinical practice in medical and surgical wards through hands-on training.",
                    subjects: [
                      "Medical Nursing",
                      "Surgical Nursing",
                      "Pharmacology",
                      "Pathology",
                    ],
                    image: "/images/nurses-together.jpeg",
                  },
                  {
                    year: "Year 3",
                    title: "Specialized Nursing",
                    description:
                      "Expand into specialized fields of community, mental health, and maternal care.",
                    subjects: [
                      "Community Health Nursing",
                      "Mental Health Nursing",
                      "Pediatric Nursing",
                      "Obstetric Nursing",
                    ],
                    image: "/images/child-about.webp",
                  },
                ].map((highlight, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer"
                  >
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient: transparent top → 50% opacity bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Caption — slides up from bottom, year+title always visible */}
                    <div className="absolute inset-x-0 bottom-0 z-10 translate-y-[calc(100%-5rem)] transition-transform duration-500 ease-out group-hover:translate-y-0">
                      <div className="p-6">
                        <span className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-1">
                          {highlight.year}
                        </span>
                        <h3 className="text-white font-serif text-xl font-medium mb-3">
                          {highlight.title}
                        </h3>
                        <div className="opacity-0 translate-y-2 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
                          <p className="text-white/80 text-sm mb-4">
                            {highlight.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {highlight.subjects.map((subject, i) => (
                              <span
                                key={i}
                                className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-sm"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <SectionBadge>
                Eligibility & Admission
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                Who Can Apply
              </h2>
              <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-border shadow-sm">
                {/* Left — primary panel */}
                <div className="bg-primary text-primary-foreground p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-9 w-9 rounded-full bg-primary-foreground/15 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <h3 className="font-serif text-xl font-medium">
                      Eligibility Criteria
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {[
                      "Passed 10+2 with Physics, Chemistry, Biology",
                      "Minimum 50% marks (45% for reserved categories)",
                      "Age 17–35 years as on Dec 31st of admission year",
                      "English as a subject or medium of education",
                      "Medically fit with no color blindness",
                      "Valid admission test score (as per state norms)",
                    ].map((criterion, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <span className="h-6 w-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-sm opacity-85 leading-relaxed">
                          {criterion}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — light panel */}
                <div className="bg-muted/40 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium">
                      Required Documents
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {[
                      "10th and 12th Mark Sheets",
                      "Transfer Certificate",
                      "Character Certificate",
                      "Medical Fitness Certificate",
                      "Passport-size photographs (6)",
                      "Aadhar card / ID proof",
                      "Admission test scorecard",
                    ].map((doc, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {doc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fees */}
            <div>
              <SectionBadge>
                Fees Structure
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                Fee Details
              </h2>
              <Card className="border-2 border-transparent hover:border-primary/10">
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-primary/20">
                          <th className="text-left py-3 pr-4 font-semibold">
                            Fee Head
                          </th>
                          <th className="text-right py-3 px-4 font-semibold">
                            Sem I
                          </th>
                          <th className="text-right py-3 px-4 font-semibold">
                            Sem II
                          </th>
                          <th className="text-right py-3 px-4 font-semibold">
                            Sem III
                          </th>
                          <th className="text-right py-3 px-4 font-semibold">
                            Sem IV
                          </th>
                          <th className="text-right py-3 pl-4 font-semibold">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            head: "Tuition Fee",
                            sem1: "₹37,500",
                            sem2: "₹37,500",
                            sem3: "₹37,500",
                            sem4: "₹37,500",
                            total: "₹1,50,000",
                          },
                          {
                            head: "Educational Technology Services (ETS)*",
                            sem1: "₹5,000",
                            sem2: "—",
                            sem3: "—",
                            sem4: "—",
                            total: "₹5,000",
                          },
                          {
                            head: "Career Advancement Services (CAS)**",
                            sem1: "—",
                            sem2: "₹3,000",
                            sem3: "—",
                            sem4: "—",
                            total: "₹3,000",
                          },
                          {
                            head: "Laboratory Fee",
                            sem1: "₹2,500",
                            sem2: "₹2,500",
                            sem3: "₹2,500",
                            sem4: "₹2,500",
                            total: "₹10,000",
                          },
                          {
                            head: "Library Fee",
                            sem1: "₹1,250",
                            sem2: "₹1,250",
                            sem3: "₹1,250",
                            sem4: "₹1,250",
                            total: "₹5,000",
                          },
                          {
                            head: "Examination Fee",
                            sem1: "₹2,000",
                            sem2: "₹2,000",
                            sem3: "₹2,000",
                            sem4: "₹2,000",
                            total: "₹8,000",
                          },
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-border">
                            <td className="py-3 pr-4 font-medium">
                              {row.head}
                            </td>
                            <td className="text-right py-3 px-4 text-muted-foreground">
                              {row.sem1}
                            </td>
                            <td className="text-right py-3 px-4 text-muted-foreground">
                              {row.sem2}
                            </td>
                            <td className="text-right py-3 px-4 text-muted-foreground">
                              {row.sem3}
                            </td>
                            <td className="text-right py-3 px-4 text-muted-foreground">
                              {row.sem4}
                            </td>
                            <td className="text-right py-3 pl-4 font-semibold text-primary">
                              {row.total}
                            </td>
                          </tr>
                        ))}
                        <tr className="bg-primary/5">
                          <td className="py-4 pl-4 pr-4 font-bold text-base rounded-l-lg">
                            Semester Total
                          </td>
                          <td className="text-right py-4 px-4 font-bold">
                            ₹48,250
                          </td>
                          <td className="text-right py-4 px-4 font-bold">
                            ₹46,250
                          </td>
                          <td className="text-right py-4 px-4 font-bold">
                            ₹43,250
                          </td>
                          <td className="text-right py-4 px-4 font-bold">
                            ₹43,250
                          </td>
                          <td className="text-right py-4 pl-4 font-bold text-lg text-primary rounded-r-lg">
                            ₹1,81,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 space-y-1 text-xs text-muted-foreground">
                    <p>
                      *Fee for Educational Technology Services (ETS) payable at
                      the time of Admission.
                    </p>
                    <p>
                      **Fee for Career Advancement Services (CAS) payable along
                      with the 2nd Semester fee.
                    </p>
                    <p>
                      The fees for the above program is subject to revision.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What You'll Achieve + Admission Form */}
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left — Program Manager Card */}
              <div className="space-y-4">
                <Card className="overflow-hidden border-0 shadow-lg">
                  {/* Gradient header */}
                  <div className="relative bg-gradient-to-br from-primary to-primary/70 px-8 pt-8 pb-16 text-primary-foreground overflow-hidden">
                    <div className="absolute -top-4 -right-4 opacity-10">
                      <BrandStar
                        size={100}
                        className="text-primary-foreground"
                      />
                    </div>
                    <Badge
                      variant="secondary"
                      className="mb-3 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20"
                    >
                      Your Admission Guide
                    </Badge>
                    <p className="text-sm opacity-85 leading-relaxed max-w-xs">
                      Have questions about admissions, fees, or the program? Our
                      dedicated counselor is here to help you every step of the
                      way.
                    </p>
                  </div>

                  {/* Profile + body */}
                  <div className="relative px-8 pb-6">
                    {/* Avatar overlapping header */}
                    <div className="flex items-end gap-4 -mt-10 mb-5">
                      <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-background shadow-md shrink-0">
                        <img
                          src="https://i.pravatar.cc/300?img=47"
                          alt="Program Advisor"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="pb-1">
                        <h3 className="font-semibold text-lg leading-tight">
                          Dr. Meera Krishnan
                        </h3>
                        <p className="text-sm text-primary">
                          Senior Admissions Counselor
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4 mb-6 leading-relaxed">
                      &ldquo;I&apos;m here to guide you through every step of
                      the admission process and make sure you find the right
                      program for your goals.&rdquo;
                    </blockquote>

                    {/* Contact rows */}
                    <div className="space-y-3">
                      {[
                        {
                          icon: Phone,
                          label: "Call or WhatsApp",
                          value: "+91 98765 43210",
                        },
                        {
                          icon: Mail,
                          label: "Email",
                          value: "admissions@hcne.edu.in",
                        },
                        {
                          icon: Clock,
                          label: "Office Hours",
                          value: "Mon – Sat, 9 AM – 6 PM",
                        },
                      ].map(({ icon: Icon, label, value }, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {label}
                            </p>
                            <p className="text-sm font-medium">{value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mt-6 gap-2">
                      <Phone className="h-4 w-4" /> Book a Free Counseling
                      Session
                    </Button>
                  </div>
                </Card>

                <ProspectusDialog
                  defaultProgram="bsc-nursing"
                  className="w-full"
                  trigger={
                    <Button variant="outline" className="w-full gap-2">
                      <Download className="h-4 w-4" /> Download Prospectus
                    </Button>
                  }
                />
              </div>

              {/* Right — Admission Lead Form */}
              <Card className="overflow-hidden">
                <div className="bg-terracotta-900 px-8 pt-5 pb-5 text-white">
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-white/15 text-white hover:bg-white/20"
                  >
                    Free Counseling
                  </Badge>
                  <h3 className="font-serif text-xl font-light">
                    Request a Callback
                  </h3>
                  <p className="mt-1 text-sm opacity-80">
                    Fill in your details and our admissions team will reach out
                    within 24 hours.
                  </p>
                </div>
                <form
                  onSubmit={handleEnquiry}
                  className="space-y-4 px-8 pb-2 pt-6"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="bsc-firstName">First Name</Label>
                      <Input id="bsc-firstName" placeholder="First name" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="bsc-lastName">Last Name</Label>
                      <Input id="bsc-lastName" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="bsc-email">Email Address</Label>
                      <Input
                        id="bsc-email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="bsc-phone">Phone Number</Label>
                      <Input
                        id="bsc-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="bsc-program">Program Interested In</Label>
                      <Input
                        id="bsc-program"
                        defaultValue="B.Sc. Nursing (4 Years)"
                        readOnly
                        className="bg-muted/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="bsc-location">Location / State</Label>
                      <Input id="bsc-location" placeholder="e.g. Karnataka" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="bsc-message">
                      Message{" "}
                      <span className="text-muted-foreground">(Optional)</span>
                    </Label>
                    <Textarea
                      id="bsc-message"
                      placeholder="Any specific questions or concerns..."
                      className="resize-none"
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border p-4">
                    <Checkbox id="bsc-captcha" />
                    <Label
                      htmlFor="bsc-captcha"
                      className="flex-1 cursor-pointer font-normal"
                    >
                      I&apos;m not a robot
                    </Label>
                    <div className="flex flex-col items-center gap-0.5 text-muted-foreground/40">
                      <Shield className="h-7 w-7" />
                      <span className="text-[10px] uppercase tracking-wide">
                        reCAPTCHA
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full gap-2 bg-terracotta-900 hover:bg-terracotta-700 text-white"
                    size="lg"
                  >
                    Submit Enquiry <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
                <p className="px-8 pb-4 text-center text-xs text-muted-foreground">
                  Your information is secure and will never be shared.
                </p>
              </Card>
            </div>

            {/* Faculty */}
            <div>
              <SectionBadge>
                Faculty
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                Experienced Faculty Team
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    name: "Dr. Priya Sharma",
                    role: "Ph.D. (Nursing)",
                    exp: "18+ years",
                    specialty: "Medical-Surgical Nursing",
                    img: 10,
                  },
                  {
                    name: "Prof. Rajesh Kumar",
                    role: "M.Sc., B.Ed.",
                    exp: "15+ years",
                    specialty: "Community Health",
                    img: 11,
                  },
                  {
                    name: "Ms. Anjali Patel",
                    role: "M.Sc. (Pediatric)",
                    exp: "12+ years",
                    specialty: "Pediatric Nursing",
                    img: 12,
                  },
                ].map((faculty, idx) => (
                  <Card key={idx} className="overflow-hidden text-center">
                    <div className="aspect-square bg-muted">
                      <img
                        src={`https://i.pravatar.cc/300?img=${faculty.img}`}
                        alt={faculty.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{faculty.name}</h3>
                      <p className="text-sm text-primary">{faculty.role}</p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {faculty.exp} Experience
                      </p>
                      <Badge variant="secondary" className="mt-2">
                        {faculty.specialty}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Program Outcomes */}
            <div>
              <SectionBadge>
                Program Outcomes
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                What You&apos;ll Be Able To Do
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Provide safe, compassionate, and culturally sensitive nursing care",
                  "Apply critical thinking to solve complex healthcare problems",
                  "Communicate effectively with healthcare teams and patients",
                  "Demonstrate leadership in nursing and healthcare settings",
                  "Conduct research and contribute to evidence-based practice",
                  "Adapt to global healthcare environments and challenges",
                  "Promote health and prevent diseases in community settings",
                  "Practice ethically and maintain professional standards",
                ].map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <Award className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p className="text-sm">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <SectionBadge>
                FAQs
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                Common Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "What is the admission process for B.Sc. Nursing?",
                    a: "Admission is done through merit and entrance examination followed by counseling. Eligible candidates can apply during the admission window.",
                  },
                  {
                    q: "Are there scholarships available?",
                    a: "Yes, merit-based and need-based scholarships are available for eligible candidates based on performance and financial need.",
                  },
                  {
                    q: "What are the job opportunities after graduation?",
                    a: "Graduates can work as nurses in hospitals, clinics, community health centers, universities, and internationally in countries like USA, UK, Canada, and Australia.",
                  },
                  {
                    q: "Is the program recognized internationally?",
                    a: "Yes, B.Sc. Nursing from HCNE is INC recognized and qualifies for international nursing licensure examinations.",
                  },
                ].map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-base font-medium">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* CTA Section */}
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-12 text-center">
                <h3 className="font-serif text-3xl font-light mb-4">
                  Ready to Start Your Nursing Journey?
                </h3>
                <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                  Join HCNE and become a skilled, compassionate nursing
                  professional ready to make a difference in healthcare.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <Link href="/admissions">
                      <ArrowRight className="h-4 w-4" /> Apply for Admission
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    <Phone className="h-4 w-4" /> Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
