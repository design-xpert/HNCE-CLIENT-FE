"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BrandStar,
  BrandPattern,
  SectionBadge,
} from "@/components/brand-elements";
import { ProspectusDialog } from "@/components/prospectus-dialog";
import ReCAPTCHA, { ReCAPTCHARef } from "@/components/recaptcha";
import { submitEnquiryAction } from "@/app/actions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Download,
  ArrowRight,
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Building2,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Clock,
  Stethoscope,
  Shield,
  Star,
  Quote,
  Heart,
} from "lucide-react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80",
    badge: "Admissions Open 2025-26",
    title: "Build Your Career in",
    highlight: "Healthcare",
    description:
      "Join India's premier nursing institution with 35+ years of excellence. Industry-leading placement rates, world-class facilities, and expert faculty.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
    badge: "State-of-the-Art Facilities",
    title: "Learn with",
    highlight: "Modern Technology",
    description:
      "Experience hands-on training in our advanced simulation labs with high-fidelity mannequins and cutting-edge medical equipment.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1920&q=80",
    badge: "98% Placement Rate",
    title: "Launch Your",
    highlight: "Dream Career",
    description:
      "Our graduates work at top hospitals including Apollo, Fortis, AIIMS, and leading healthcare institutions worldwide.",
  },
];

export interface HomeProgram {
  icon: any;
  title: string;
  duration: string;
  eligibility: string;
  fee: string;
  highlights: string[];
  featured?: boolean;
  iconBg: string;
  iconColor: string;
  badgeClass: string;
  feeColor: string;
  slug: string;
}

const homeStaticPrograms: HomeProgram[] = [
  {
    icon: GraduationCap,
    title: "B.Sc. Nursing",
    duration: "4 Years",
    eligibility: "10+2 with PCB",
    fee: "₹1.5L/year",
    highlights: [
      "Clinical rotations",
      "Hospital internship",
      "Placement assistance",
    ],
    featured: true,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    badgeClass: "bg-primary/10 text-primary",
    feeColor: "text-primary",
    slug: "bsc-nursing",
  },
  {
    icon: BookOpen,
    title: "GNM Diploma",
    duration: "3 Years",
    eligibility: "10+2 any stream",
    fee: "₹80K/year",
    highlights: ["Practical focus", "Bedside training", "Job-ready skills"],
    featured: true,
    iconBg: "bg-terracotta-100",
    iconColor: "text-terracotta-700",
    badgeClass: "bg-terracotta-100 text-terracotta-700",
    feeColor: "text-terracotta-700",
    slug: "gnm",
  },
];

const testimonials = [
  {
    quote:
      "The hands-on training at HCNE prepared me for real hospital situations. I was confident from my first day at Apollo.",
    name: "Anjali Deshmukh",
    batch: "B.Sc. 2023",
    placement: "Apollo Hospitals, Chennai",
    rating: 5,
  },
  {
    quote:
      "From a small town to working in a metro city ICU—HCNE made my dream possible with their placement support.",
    name: "Preethi Kumar",
    batch: "GNM 2024",
    placement: "Fortis Healthcare, Mumbai",
    rating: 5,
  },
  {
    quote:
      "The simulation labs are incredible. We practiced on mannequins that felt like real patients. Best training ever!",
    name: "Kavitha Sharma",
    batch: "B.Sc. 2024",
    placement: "Max Healthcare, Bangalore",
    rating: 5,
  },
];

interface HomeClientProps {
  programs: any[];
}

export default function HomeClient({ programs }: HomeClientProps) {
  const router = useRouter();
  const displayPrograms: HomeProgram[] = programs && programs.length > 0
    ? programs.map((apiProg: any) => {
        const isGnm = apiProg.slug === "gnm" || apiProg.slug === "gnm-diploma";
        const staticMatch = homeStaticPrograms.find(
          (p) => (isGnm && p.title.toLowerCase().includes("gnm")) || (!isGnm && p.title.toLowerCase().includes("b.sc"))
        );
        return {
          icon: staticMatch?.icon || (isGnm ? BookOpen : GraduationCap),
          title: apiProg.name || "",
          duration: apiProg.duration || "",
          eligibility: apiProg.eligibility || "",
          fee: apiProg.annualFee
            ? `₹${apiProg.annualFee >= 100000 ? `${(apiProg.annualFee / 100000).toFixed(1)}L` : `${apiProg.annualFee / 1000}K`}/year`
            : "",
          highlights: apiProg.highlights && apiProg.highlights.length > 0 ? apiProg.highlights : (staticMatch?.highlights || []),
          iconBg: staticMatch?.iconBg || (isGnm ? "bg-terracotta-100" : "bg-primary/10"),
          iconColor: staticMatch?.iconColor || (isGnm ? "text-terracotta-700" : "text-primary"),
          badgeClass: staticMatch?.badgeClass || (isGnm ? "bg-terracotta-100 text-terracotta-700" : "bg-primary/10 text-primary"),
          feeColor: staticMatch?.feeColor || (isGnm ? "text-terracotta-700" : "text-primary"),
          slug: apiProg.slug === "gnm-diploma" ? "gnm" : apiProg.slug,
        };
      })
    : homeStaticPrograms;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const recaptchaRef = useRef<ReCAPTCHARef>(null);

  // Enquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    location: "",
    city: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleHomeLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formData.name || !formData.phone || !formData.email) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    const version = (process.env.NEXT_PUBLIC_RECAPTCHA_VERSION || "v2").trim().toLowerCase();
    const isV3OrEnterprise = version === "v3" || version === "enterprise";
    let token = recaptchaToken;

    if (isV3OrEnterprise) {
      setIsSubmitting(true);
      try {
        token = await recaptchaRef.current?.execute() || null;
      } catch (err) {
        console.error("reCAPTCHA execution error:", err);
      }
      if (!token) {
        setSubmitError("reCAPTCHA validation failed. Please try again.");
        setIsSubmitting(false);
        return;
      }
    } else {
      if (!token) {
        setSubmitError("Please complete the reCAPTCHA verification.");
        return;
      }
      setIsSubmitting(true);
    }

    try {
      const result = await submitEnquiryAction({
        ...formData,
        recaptchaToken: token,
      });

      if (!result.success) {
        throw new Error(result.error || "Failed to submit. Please try again.");
      }

      console.log("Form submission successful! Response:", result);
      console.log("Redirecting to thank-you page...");
      router.push(`/thank-you?type=lead&name=${encodeURIComponent(formData.name)}`);
    } catch (err: any) {
      console.error("Enquiry submission error:", err);
      setSubmitError(err.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero - Full Width Image with Carousel */}
        <section className="relative min-h-[90vh] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
            </div>
          ))}

          {/* Decorative brand star */}
          <div
            className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 opacity-[0.06]"
            aria-hidden="true"
          >
            <BrandStar
              size={520}
              variant="outline"
              className="text-foreground"
            />
          </div>

          {/* Content */}
          <div className="relative flex min-h-[90vh] flex-col justify-center px-6 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-2xl">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none absolute translate-y-8 opacity-0"
                      }`}
                  >
                    {index === currentSlide && (
                      <>
                        <Badge
                          variant="outline"
                          className="mb-6 border-primary/30 bg-primary/10 text-primary"
                        >
                          {slide.badge}
                        </Badge>

                        <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl xl:text-6xl text-balance">
                          {slide.title}
                          <span className="text-primary">
                            {" "}
                            {slide.highlight}
                          </span>
                        </h1>

                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                          {slide.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                          <Button size="lg" className="gap-2">
                            Apply Now <ArrowRight className="h-4 w-4" />
                          </Button>
                          <ProspectusDialog
                            trigger={
                              <Button
                                variant="outline"
                                size="lg"
                                className="gap-2"
                              >
                                <Download className="h-4 w-4" /> Get Prospectus
                              </Button>
                            }
                          />
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>Next Intake: August 2025</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>Last Date: July 31, 2025</span>
                          </div>
                        </div>

                        {/* Accreditation Badges */}
                        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-8">
                          <span className="text-xs text-muted-foreground">
                            Accredited by:
                          </span>
                          {["INC", "NABH", "ISO 9001"].map((badge) => (
                            <div
                              key={badge}
                              className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs"
                            >
                              <Shield className="h-3 w-3" />
                              {badge}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Stats Strip */}
        <section className="relative overflow-hidden border-y border-border bg-primary text-primary-foreground">
          <BrandPattern />
          <div className="relative mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {[
              { value: "98%", label: "Placement Rate", icon: CheckCircle2 },
              { value: "50+", label: "Hospital Partners", icon: Building2 },
              { value: "35+", label: "Years of Excellence", icon: Award },
              { value: "15,000+", label: "Alumni Worldwide", icon: Users },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center border-r border-primary-foreground/10 px-6 py-8 text-center last:border-r-0"
              >
                <stat.icon className="mb-3 h-6 w-6 opacity-80" />
                <span className="text-3xl font-bold lg:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <SectionBadge>Programs</SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Academic Programs
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Choose from our carefully designed nursing programs to launch
                your healthcare career.
              </p>
            </div>

            {/* Two Course Cards - Equal Width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {displayPrograms.map((program, i) => (
                <Card
                  key={i}
                  className="relative overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl ${program.iconBg}`}
                      >
                        <program.icon
                          className={`h-7 w-7 ${program.iconColor}`}
                        />
                      </div>
                      <Badge variant="secondary" className={program.badgeClass}>
                        {program.duration}
                      </Badge>
                    </div>

                    {/* Title & Fee */}
                    <h3 className="text-2xl font-semibold mb-2">
                      {program.title}
                    </h3>
                    <p
                      className={`text-lg font-medium mb-4 ${program.feeColor}`}
                    >
                      {program.fee}
                    </p>

                    {/* Eligibility */}
                    <p className="text-sm text-muted-foreground mb-6">
                      <span className="font-medium text-foreground">
                        Eligibility:
                      </span>{" "}
                      {program.eligibility}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-8">
                      {program.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <Button className="flex-1 gap-2" asChild>
                        <Link href="/admissions">
                          Apply Now <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link
                          href={`/en/programs/${program.slug}`}
                        >
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Tangible Promise Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground px-6 py-20 lg:px-8 lg:py-24">
          <BrandPattern />
          <div
            className="pointer-events-none absolute -right-20 -top-20 opacity-10"
            aria-hidden="true"
          >
            <BrandStar size={320} variant="outline" className="text-primary-foreground" />
          </div>
          <div className="relative mx-auto max-w-5xl text-center">
            <SectionBadge
              badgeClassName="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 backdrop-blur"
              starClassName="text-primary-foreground"
            >
              Core Promise
            </SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl lg:text-5xl text-balance">
              Job-Ready, Globally Relevant, <br className="hidden sm:inline" />
              <span className="font-semibold underline decoration-primary-foreground/30 underline-offset-8">
                Clinically Confident
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg lg:text-xl text-primary-foreground/90 leading-relaxed font-light">
              &ldquo;Graduates who are job‑ready, globally relevant, and clinically confident due to immersive hospital integration, high standards of clinical training, and strong placement pathways.&rdquo;
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Immersive Hospital Integration",
                  desc: "Guaranteed in-house clinical exposure in real healthcare environments from early training.",
                  icon: Stethoscope,
                },
                {
                  title: "High Clinical Standards",
                  desc: "Simulation lab mastery and continuous competency verification by expert medical faculty.",
                  icon: Shield,
                },
                {
                  title: "Strong Placement Pathways",
                  desc: "Direct hiring access with Heritage Healthcare and active global employer networks.",
                  icon: Award,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur transition-all duration-300 hover:bg-primary-foreground/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section id="brand-story" className="border-t border-primary/20 bg-background px-6 py-20 lg:px-8 lg:py-28 relative">
          <div className="mx-auto max-w-5xl">
            {/* Badge */}
            <div className="text-center mb-10">
              <SectionBadge>Brand Story</SectionBadge>
              <h2 className="mt-4 font-serif text-3xl font-light sm:text-4xl lg:text-5xl leading-tight text-balance max-w-4xl mx-auto">
                A cohesive narrative that encompasses the facts and feelings that are created by Heritage Centre for Nursing Excellence (HCNE)
              </h2>
            </div>

            {/* Main Narrative Card */}
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-sm space-y-8">
              {/* Highlight / Lead Paragraph */}
              <div className="relative pl-6 border-l-4 border-primary">
                <p className="text-lg lg:text-xl font-serif leading-relaxed text-foreground">
                  Born inside Heritage hospital, Heritage Centre for Nursing Excellence exists to produce nurses who are ready to work from day one by pairing sustained ward practice with accredited, competency-based assessment.
                </p>
              </div>

              {/* Story Paragraphs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-border/60">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Clinical Rigor & Validation</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    HCNE places students in supervised clinical rotations from early semesters and validates those skills through simulation-based competency checks and regular assessments.
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Accredited Programs & Career Pathways</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    Our accredited degree and diploma programmes are built for licensure and international hiring, and they are supported by a direct placement pipeline into Heritage Healthcare plus active employer partnerships.
                  </p>
                </div>

                <div className="space-y-6 rounded-2xl bg-muted/30 p-6 border border-border/50">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">For Students & Parents</span>
                    <p className="mt-2 text-sm lg:text-base font-medium text-foreground leading-relaxed">
                      HCNE replaces uncertain promises with verifiable clinical experience and credentialed outcomes.
                    </p>
                  </div>

                  <div className="border-t border-border/60 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-700">For Hospitals & Recruiters</span>
                    <p className="mt-2 text-sm lg:text-base font-medium text-foreground leading-relaxed">
                      HCNE is a trusted source of entry-level nurses who have already practiced under clinical supervision and passed standardized competency checks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section id="who-we-serve" className="bg-muted/40 px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <SectionBadge>Target Audience</SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Who We Serve
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Empowering students, healthcare professionals, and medical recruiters through specialized nursing pathways.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "Primary Audience",
                  title: "10+2 Science School-Leavers",
                  desc: "Students completing high school (Physics, Chemistry, Biology) eager to launch a high-impact, professional career in nursing and healthcare.",
                  icon: GraduationCap,
                  highlights: [
                    "Direct 4-Year B.Sc Nursing pathway",
                    "Foundation clinical hands-on practice",
                    "Comprehensive career & placement support",
                  ],
                  badgeColor: "bg-primary/10 text-primary border-primary/20",
                },
                {
                  category: "Secondary Audience",
                  title: "Healthcare Staff & Career-Changers",
                  desc: "Working healthcare personnel, GNM diploma holders, and career switchers seeking accredited qualifications and degree advancement.",
                  icon: Users,
                  highlights: [
                    "Post-Basic degree progression options",
                    "Skills verification & competency enhancement",
                    "Recognized academic accreditation",
                  ],
                  badgeColor: "bg-terracotta-100 text-terracotta-700 border-terracotta-200",
                },
                {
                  category: "Employers & Recruiters",
                  title: "Hospitals & Healthcare Agencies",
                  desc: "Premier hospital networks, clinics, and global recruitment agencies seeking reliably trained, clinically confident entry-level nurses.",
                  icon: Building2,
                  highlights: [
                    "Direct campus recruitment pipeline",
                    "Heritage Healthcare direct hiring pathways",
                    "Hospital-ready clinical candidates",
                  ],
                  badgeColor: "bg-olive-100 text-olive-700 border-olive-200",
                },
              ].map((card, i) => (
                <Card
                  key={i}
                  className="relative flex flex-col justify-between border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <card.icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline" className={card.badgeColor}>
                          {card.category}
                        </Badge>
                      </div>

                      <h3 className="font-serif text-2xl font-normal leading-tight mb-3">
                        {card.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <div className="border-t border-border pt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Key Opportunities
                      </p>
                      <ul className="space-y-2.5">
                        {card.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Proof Points & Evidence Section */}
        <section id="proof-points" className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <SectionBadge>Key Proof Points</SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Evidence of Excellence
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Our institutional accreditations, clinical model, and verified career outcomes set the gold standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Proof Point 1 */}
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-normal mb-2">
                  Guaranteed Hospital Immersion
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In-house hospital immersion providing real clinical exposure, patient interaction, and bedside training throughout the curriculum.
                </p>
              </div>

              {/* Proof Point 2 */}
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta-100 text-terracotta-700 mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-normal mb-2">
                  Recognized Accreditations
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Fully approved and affiliated with India&apos;s premier healthcare regulatory bodies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["INC (New Delhi)", "ABVMU Affiliated", "UPSMF Approved", "QCI Rated (Mission Nirmaya)"].map((acc, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-muted">
                      {acc}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Proof Point 3 */}
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive-100 text-olive-700 mb-6">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-normal mb-2">
                  High-Demand Programs
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Structured academic offerings with controlled batch sizes for focused clinical mentorship:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm border-b border-border pb-1.5">
                    <span className="font-medium">B.Sc. Nursing</span>
                    <span className="text-muted-foreground">4 Yrs &bull; 80 Seats/Yr</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">GNM Diploma</span>
                    <span className="text-muted-foreground">3 Yrs &bull; 60 Seats/Yr</span>
                  </div>
                </div>
              </div>

              {/* Proof Point 4 */}
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-normal mb-2">
                  Rigorous Assessment Model
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Regular written evaluations, simulation-based competency checks, field visits, and ongoing professional conduct monitoring.
                </p>
              </div>

              {/* Proof Point 5 */}
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta-100 text-terracotta-700 mb-6">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-normal mb-2">
                  Direct Career & Placement Pipeline
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Formal placement framework and direct hiring pathways with Heritage Healthcare, backed by proactive employer outreach across premier national and international medical institutions.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Direct Heritage Hiring
                  </span>
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Hospital Placement Drives
                  </span>
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5" /> International Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HCNE */}
        {/* <section id="why" className="bg-muted/50 px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="flex items-center gap-2.5">
                  <BrandStar size={14} className="text-primary/60" />
                  <span className="text-sm uppercase tracking-widest text-muted-foreground">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-light lg:text-5xl text-balance">
                  A Legacy of{" "}
                  <span className="font-medium">Nursing Excellence</span>
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  At HCNE, we believe nursing is both an art and a science. Our
                  curriculum bridges theoretical knowledge with hands-on
                  clinical experience, preparing graduates who are confident,
                  competent, and compassionate.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-8">
                  <div>
                    <span className="font-serif text-4xl font-light text-terracotta-700">
                      35+
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Years of Excellence
                    </p>
                  </div>
                  <div>
                    <span className="font-serif text-4xl font-light text-olive-700">
                      98%
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Placement Rate
                    </p>
                  </div>
                  <div>
                    <span className="font-serif text-4xl font-light text-primary">
                      50+
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Hospital Partners
                    </p>
                  </div>
                  <div>
                    <span className="font-serif text-4xl font-light text-grey-700">
                      15k+
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Alumni Network
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                    alt="Nursing students in clinical training"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 rounded-xl border border-border bg-background p-6 shadow-lg lg:-left-16">
                  <Quote className="h-6 w-6 text-terracotta-500" />
                  <p className="mt-3 max-w-xs text-sm italic leading-relaxed">
                    {'"'}HCNE gave me the foundation to become not just a nurse,
                    but a healthcare leader.{'"'}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    — Dr. Priya Sharma, ICU Head Nurse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Prominent Facilities & World-Class Infrastructure Section */}
        <section id="facilities" className="relative overflow-hidden bg-muted/30 px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16">
              <SectionBadge>World-Class Infrastructure</SectionBadge>
              <h2 className="font-serif text-3xl font-light sm:text-4xl lg:text-5xl text-balance">
                State-of-the-Art Campus & <br className="hidden sm:inline" />
                <span className="font-semibold text-primary">Clinical Infrastructure</span>
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                Spanning across a lush 15-acre campus, HCNE provides cutting-edge simulation laboratories, digital learning centers, and modern residential spaces designed for holistic nursing excellence.
              </p>
            </div>

            {/* Quick Stats Bar */}
            <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              {[
                { label: "Sprawling Campus", value: "15+ Acres", icon: MapPin },
                { label: "Advanced Labs", value: "10+ Specialized", icon: Stethoscope },
                { label: "Digital Library", value: "24/7 Access", icon: BookOpen },
                { label: "AC Hostels & Wi-Fi", value: "100% Secure", icon: Building2 },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-2 last:border-0 border-r-0 md:border-r border-border/60 md:last:border-r-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold font-serif text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Infrastructure Grid Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
              {/* Featured Large Card */}
              <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl flex flex-col justify-end min-h-[420px] lg:min-h-[520px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
                  alt="High-Fidelity Simulation Center"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative p-8 lg:p-10 text-white z-10">
                  <Badge className="mb-4 bg-primary text-primary-foreground border-none px-3 py-1 text-xs">
                    Flagship Facility
                  </Badge>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-white mb-3">
                    High-Fidelity Simulation Center
                  </h3>
                  <p className="text-sm lg:text-base text-gray-200 leading-relaxed max-w-xl">
                    Replicating real-world ICU, OT, and emergency ward scenarios with computerized high-fidelity mannequins for risk-free, hands-on clinical mastery.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                      Full ICU Setup
                    </span>
                    <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                      Computerized Mannequins
                    </span>
                    <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                      Live Video Debriefing
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Grid Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-500 hover:shadow-xl flex flex-col justify-end min-h-[240px]">
                  <img
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
                    alt="Digital Library & Research Hub"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="relative p-6 text-white z-10">
                    <Badge variant="secondary" className="mb-2 bg-white/20 backdrop-blur text-white border-none text-xs">
                      24/7 E-Resource
                    </Badge>
                    <h4 className="font-serif text-xl font-medium text-white mb-1">
                      Digital Library & Research Center
                    </h4>
                    <p className="text-xs text-gray-200">
                      Thousands of international medical journals, e-books, and quiet study zones.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-500 hover:shadow-xl flex flex-col justify-end min-h-[240px]">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
                    alt="Modern Campus & Hostels"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="relative p-6 text-white z-10">
                    <Badge variant="secondary" className="mb-2 bg-white/20 backdrop-blur text-white border-none text-xs">
                      Residential Life
                    </Badge>
                    <h4 className="font-serif text-xl font-medium text-white mb-1">
                      Modern AC Hostels & Dining
                    </h4>
                    <p className="text-xs text-gray-200">
                      Separate secure hostels with AC rooms, nutritious mess meals, and 24/7 security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature List Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Anatomy & Pathology Labs",
                  desc: "Equipped with 3D anatomical models, tissue specimens, and digital histology stations for comprehensive biological learning.",
                  icon: Stethoscope,
                  color: "bg-primary/10 text-primary",
                },
                {
                  title: "Community Health Lab",
                  desc: "Simulated rural & urban healthcare setup for public health training, field surveys, and family health studies.",
                  icon: Users,
                  color: "bg-terracotta-100 text-terracotta-700",
                },
                {
                  title: "Nutrition & Dietetics Lab",
                  desc: "Modern therapeutic kitchen setup where students learn patient dietary planning and clinical nutrition therapy.",
                  icon: Shield,
                  color: "bg-olive-100 text-olive-700",
                },
                {
                  title: "Computer & Informatics Lab",
                  desc: "High-speed workstation lab featuring Electronic Health Records (EHR) software training and hospital management systems.",
                  icon: BookOpen,
                  color: "bg-primary/10 text-primary",
                },
                {
                  title: "Auditorium & Seminar Halls",
                  desc: "State-of-the-art air-conditioned auditoriums equipped with smart AV systems for national conferences & workshops.",
                  icon: Building2,
                  color: "bg-terracotta-100 text-terracotta-700",
                },
                {
                  title: "Sports & Recreation Complex",
                  desc: "Extensive indoor and outdoor sports grounds including badminton, volleyball, table tennis, and gymnasium.",
                  icon: Award,
                  color: "bg-olive-100 text-olive-700",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="border border-border/80 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-serif text-lg font-medium leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        {/* <section
          id="faculty"
          className="bg-muted/50 px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge>Faculty</SectionBadge>

              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Learn From the Best
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Our faculty includes accomplished educators, researchers, and
                practitioners.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Dr. Meera Krishnan",
                  role: "Principal",
                  exp: "25+ years",
                  specialty: "Medical-Surgical",
                  roleColor: "text-primary",
                  badgeClass: "bg-primary/10 text-primary",
                },
                {
                  name: "Prof. Anita Rao",
                  role: "Vice Principal",
                  exp: "20+ years",
                  specialty: "Pediatric Care",
                  roleColor: "text-terracotta-700",
                  badgeClass: "bg-terracotta-100 text-terracotta-700",
                },
                {
                  name: "Dr. Sanjay Verma",
                  role: "HOD Clinical",
                  exp: "18+ years",
                  specialty: "Critical Care",
                  roleColor: "text-olive-700",
                  badgeClass: "bg-olive-100 text-olive-700",
                },
                {
                  name: "Dr. Lakshmi Nair",
                  role: "Research Head",
                  exp: "15+ years",
                  specialty: "Community Health",
                  roleColor: "text-grey-700",
                  badgeClass: "bg-grey-100 text-grey-700",
                },
              ].map((faculty, i) => (
                <Card key={i} className="overflow-hidden text-center">
                  <div className="aspect-square bg-muted">
                    <img
                      src={`https://i.pravatar.cc/300?img=${i + 10}`}
                      alt={faculty.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{faculty.name}</h3>
                    <p className={`text-sm ${faculty.roleColor}`}>
                      {faculty.role}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {faculty.exp} Experience
                    </p>
                    <Badge
                      variant="secondary"
                      className={`mt-2 ${faculty.badgeClass}`}
                    >
                      {faculty.specialty}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        <section className="border-y border-border bg-background px-6 py-8 md:py-12 lg:px-8">
          <div className="mx-auto grid grid-cols-2 gap-x-4 gap-y-6 md:flex md:flex-wrap md:items-center md:justify-center md:gap-12 opacity-60">
            {[
              "INC Approved",
              "State University Affiliated",
              "NABH Accredited",
              "ISO 9001:2015",
            ].map((accred, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-sm">
                <Award className="h-5 w-5 shrink-0" />
                <span>{accred}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge>Testimonials</SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                What Our Students Say
              </h2>
            </div>

            <div className="relative mt-12">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentTestimonial * (100 / 3)}%)`,
                  }}
                >
                  {testimonials.map((testimonial, i) => (
                    <div
                      key={i}
                      className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
                    >
                      <Card className="h-full px-6 pb-6">
                        <div className="flex gap-1 pt-5">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, j) => (
                              <Star
                                key={j}
                                className="h-4 w-4 fill-primary text-primary"
                              />
                            ),
                          )}
                        </div>
                        <p className="mt-4 text-sm leading-relaxed">{`"${testimonial.quote}"`}</p>
                        <div className="mt-6 flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                            <img
                              src={`https://i.pravatar.cc/100?img=${i + 20}`}
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {testimonial.batch}
                            </p>
                            <p className="text-xs text-primary">
                              {testimonial.placement}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${index === currentTestimonial
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Admission Timeline */}
        <section
          id="admissions"
          className="relative overflow-hidden bg-primary text-primary-foreground px-6 py-12 lg:px-8 lg:py-16"
        >
          <BrandPattern />
          <div
            className="pointer-events-none absolute -left-14 -top-14 opacity-[0.08]"
            aria-hidden="true"
          >
            <BrandStar
              size={180}
              variant="outline"
              className="text-primary-foreground"
            />
          </div>
          <div
            className="pointer-events-none absolute -bottom-10 right-10 opacity-[0.06]"
            aria-hidden="true"
          >
            <BrandStar size={140} className="text-primary-foreground" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge
                badgeClassName="bg-primary-foreground text-primary"
                starClassName="text-primary/90"
              >
                Admissions
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Admission Process
              </h2>
              <p className="mx-auto mt-3 max-w-2xl opacity-80">
                Follow these simple steps to join HCNE.
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Online Application",
                  desc: "Fill the form & upload documents",
                  deadline: "June 1 - July 31",
                },
                {
                  step: 2,
                  title: "Entrance Test",
                  desc: "HCNE entrance exam at centers",
                  deadline: "August 10",
                },
                {
                  step: 3,
                  title: "Counseling",
                  desc: "Merit-based seat allocation",
                  deadline: "August 20-25",
                },
                {
                  step: 4,
                  title: "Enrollment",
                  desc: "Fee payment & registration",
                  deadline: "August 30",
                },
              ].map((item, i) => (
                <div key={i} className="relative text-center">
                  <span className="font-serif text-6xl font-light text-primary-foreground/20">
                    {String(item.step).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-light">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm opacity-80">{item.desc}</p>
                  <Badge
                    variant="outline"
                    className="mt-3 border-primary-foreground/30 text-primary-foreground"
                  >
                    {item.deadline}
                  </Badge>
                  {i < 3 && (
                    <ChevronRight className="absolute right-0 top-8 hidden h-6 w-6 -translate-x-1/2 opacity-30 lg:block" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Application <ArrowRight className="h-4 w-4" />
              </Button>
              <ProspectusDialog
                trigger={
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Download className="h-4 w-4" /> Download Prospectus
                  </Button>
                }
              />
            </div>
          </div>
        </section>

        {/* News/Announcements */}
        

        {/* FAQ Section */}
        <section className="bg-muted/50 px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <SectionBadge>FAQ</SectionBadge>
              <h2 className="font-serif text-4xl font-light lg:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="mt-12">
              {[
                {
                  q: "What are the eligibility criteria for B.Sc. Nursing?",
                  a: "Candidates must have completed 10+2 with Physics, Chemistry, and Biology with a minimum of 50% aggregate. Age should be between 17-35 years.",
                },
                {
                  q: "Does HCNE provide hostel accommodation?",
                  a: "Yes, we have separate hostels for boys and girls with AC rooms, mess facility, Wi-Fi, and 24/7 security.",
                },
                {
                  q: "What is the placement record of HCNE?",
                  a: "HCNE has a 98% placement rate with students placed in premier hospitals like Apollo, Fortis, AIIMS, and international healthcare institutions.",
                },
                {
                  q: "Are there scholarship opportunities available?",
                  a: "Yes, merit scholarships covering up to 100% tuition are available. We also assist students with government scholarship applications.",
                },
                {
                  q: "Can GNM graduates apply for B.Sc. Nursing?",
                  a: "Yes, GNM graduates can apply for the Post Basic B.Sc. Nursing program, which is a 2-year course.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-lg md:text-xl font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 text-center">
              <p className="text-muted-foreground text-base md:text-lg">Have more questions?</p>
              <Button variant="link" className="text-primary text-base md:text-lg">
                Contact our admissions team{" "}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <SectionBadge>Contact</SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl">
                  Get In Touch
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Have questions about admissions or our programs? Our team is
                  here to help.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-sm text-muted-foreground">
                        123 Healthcare Avenue, Medical District, City - 560001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-sm text-muted-foreground">
                        +91 98765 43210 (Admissions)
                        <br />
                        +91 98765 43211 (General)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-muted-foreground">
                        admissions@hcne.edu.in
                        <br />
                        info@hcne.edu.in
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium">Office Hours</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="mt-8 h-[190px] overflow-hidden rounded-xl border border-border bg-muted">
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
                    <MapPin className="h-8 w-8 opacity-40" />
                    <p className="text-sm opacity-60">Google Map</p>
                  </div>
                </div>
              </div>

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
                  onSubmit={handleHomeLead}
                  className="space-y-4 px-8 pb-2 pt-6"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-name">Full Name</Label>
                      <Input
                        id="lead-name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-phone">Phone Number</Label>
                      <Input
                        id="lead-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-email">Email Address</Label>
                      <Input
                        id="lead-email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-program">
                        Program Interested In
                      </Label>
                      <Select
                        value={formData.program}
                        onValueChange={(val) => setFormData({ ...formData, program: val })}
                      >
                        <SelectTrigger id="lead-program" className="w-full">
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent className="w-[var(--radix-select-trigger-width)]">
                          {programs.length > 0 ? (
                            programs.map((prog: any) => (
                              <SelectItem key={prog.id} value={prog.shortName || prog.name}>
                                {prog.name} ({prog.duration})
                              </SelectItem>
                            ))
                          ) : (
                            <>
                              <SelectItem value="B.Sc. Nursing">
                                B.Sc. Nursing (4 Years)
                              </SelectItem>
                              <SelectItem value="GNM">
                                GNM Diploma (3 Years)
                              </SelectItem>
                              <SelectItem value="M.Sc. Nursing">
                                M.Sc. Nursing (2 Years)
                              </SelectItem>
                              <SelectItem value="Post Basic B.Sc.">
                                Post Basic B.Sc. (2 Years)
                              </SelectItem>
                              <SelectItem value="Nurse Practitioner">
                                Nurse Practitioner (1 Year)
                              </SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-location">Location / State</Label>
                      <Input
                        id="lead-location"
                        placeholder="e.g. Karnataka"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-city">City</Label>
                      <Input
                        id="lead-city"
                        placeholder="e.g. Bangalore"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="lead-message">
                      Message{" "}
                      <span className="text-muted-foreground">(Optional)</span>
                    </Label>
                    <Textarea
                      id="lead-message"
                      placeholder="Any specific questions or concerns..."
                      className="resize-none"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex justify-center py-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      onChange={(token) => setRecaptchaToken(token)}
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-destructive text-center">
                      {submitError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || (
                      (process.env.NEXT_PUBLIC_RECAPTCHA_VERSION || "v2").trim().toLowerCase() !== "v3" &&
                      (process.env.NEXT_PUBLIC_RECAPTCHA_VERSION || "v2").trim().toLowerCase() !== "enterprise" &&
                      !recaptchaToken
                    )}
                    className="w-full gap-2 bg-terracotta-900 hover:bg-terracotta-700 text-white disabled:opacity-50"
                    size="lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>

                <p className="px-8 pb-2 text-center text-xs text-muted-foreground">
                  Your information is secure and will never be shared.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-border bg-background px-6 py-16 lg:px-8">
          <div
            className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.04]"
            aria-hidden="true"
          >
            <BrandStar size={220} variant="outline" className="text-primary" />
          </div>
          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl">
                Ready to Begin Your Nursing Journey?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Applications for 2025-26 intake are now open. Limited seats
                available.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Admissions
              </Button>
            </div>
          </div>
        </section>

        <footer className="relative overflow-hidden bg-primary text-primary-foreground px-6 py-16 lg:px-8">
          <BrandPattern className="opacity-30" />
          <div
            className="pointer-events-none absolute -right-16 -top-16 opacity-[0.07]"
            aria-hidden="true"
          >
            <BrandStar
              size={200}
              variant="outline"
              className="text-primary-foreground"
            />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
              <div className="col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground p-1">
                    <img
                      src="/images/logo-primary.png"
                      alt="HCNE"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-lg">HCNE</p>
                    <p className="text-xs opacity-70">
                      Heritage Centre for Nursing Excellence
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm opacity-70 leading-relaxed">
                  Shaping compassionate healthcare leaders since 1989.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Quick Links</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Programs", href: "/en/programs" },
                    { label: "Admissions", href: "/admissions" },
                    { label: "Placements", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-primary-foreground/70 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Resources</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    { label: "Library", href: "#" },
                    { label: "Downloads", href: "#" },
                    { label: "Alumni", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-primary-foreground/70 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <h4 className="font-medium">Contact</h4>
                <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      123 Healthcare Avenue, Medical District, City - 560001
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>admissions@hcne.edu.in</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-sm">
              <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-primary-foreground/50">
                  © {new Date().getFullYear()} Heritage Centre for Nursing
                  Excellence. All rights reserved.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                  {[
                    { label: "Privacy Policy", href: "/policy/privacy" },
                    { label: "Terms & Conditions", href: "/policy/terms" },
                    { label: "Refund Policy", href: "/policy/refund" },
                    { label: "Grievance Policy", href: "/policy/grievance" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-primary-foreground/50 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-primary-foreground/50">
                Made with{" "}
                <Heart
                  className="inline h-3.5 w-3.5 fill-rose-400 text-rose-400"
                  style={{ animation: "heartbeat 1.4s ease-in-out infinite" }}
                />{" "}
                by{" "}
                <a
                  href="https://kvtmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary-foreground/70 hover:text-white transition-colors"
                >
                  KV TechMedia
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
