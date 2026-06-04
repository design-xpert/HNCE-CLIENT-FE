"use client";

import Link from "next/link";
import { ProspectusDialog } from "@/components/prospectus-dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar, BrandPattern, SectionBadge } from "@/components/brand-elements";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Stethoscope,
  Clock,
  Users2,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  Phone,
  Download,
} from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      icon: GraduationCap,
      title: "B.Sc. Nursing",
      duration: "4 Years",
      intake: "60 Students",
      fee: "₹1.5L/Year",
      eligibility: "12th with PCB",
      description:
        "Comprehensive 4-year degree program covering all aspects of nursing practice.",
      highlights: [
        "INC Recognized",
        "Clinical Focus",
        "Research Opportunities",
      ],
      slug: "bsc-nursing",
    },
    {
      id: 2,
      icon: BookOpen,
      title: "GNM Diploma",
      duration: "3 Years",
      intake: "40 Students",
      fee: "₹80K/Year",
      eligibility: "10+2 Any Stream",
      description:
        "3-year diploma course for immediate entry into nursing practice.",
      highlights: ["Hands-On Training", "Clinical Placement", "Job Ready"],
      slug: "gnm-diploma",
    },
  ];

  const careerOps = [
    "Staff Nurse in Hospitals",
    "Community Health Worker",
    "Nurse Educator",
    "Nurse Administrator",
    "Research Nurse",
    "ICU Specialist",
    "Midwife",
    "Occupational Health Nurse",
    "International Positions",
    "Public Health Manager",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero Section - Admissions Style */}
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

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="max-w-2xl">
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  2 Accredited Programs
                </Badge>
                <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl xl:text-6xl text-balance">
                  Our Programs
                  <span className="block">Build Your Future</span>
                </h1>
                <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-xl">
                  Comprehensive nursing education programs designed to develop
                  competent, compassionate healthcare professionals ready to
                  make a difference.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <Link href="/admissions">
                      <ArrowRight className="h-4 w-4" /> Explore & Apply
                    </Link>
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
              </div>

              {/* Hero Image Area */}
              <div className="relative hidden lg:block">
                <div className="relative h-[450px] rounded-2xl overflow-hidden border border-primary-foreground/20">
                  <Image
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop"
                    alt="Nursing students in classroom"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm opacity-90">
                      Students during clinical simulation training
                    </p>
                  </div>
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-background text-foreground p-4 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <p className="text-sm text-muted-foreground">
                    Placement Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="border-b border-border bg-muted/30 px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-4 text-center">
              {[
                { number: "2", label: "Accredited Programs" },
                { number: "50+", label: "Faculty Members" },
                { number: "2000+", label: "Active Students" },
                { number: "5000+", label: "Alumni Worldwide" },
              ].map((stat, idx) => (
                <div key={idx} className="p-4">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          {/* Background Decorative Stars */}
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>
          <div className="absolute left-0 bottom-20 opacity-5">
            <BrandStar size={200} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionBadge>
                All Programs
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Choose Your Path
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Select from our range of INC-recognized nursing programs
                designed for various career stages
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  className="overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                        <program.icon className="h-7 w-7 text-primary" />
                      </div>
                      <BrandStar
                        size={20}
                        className="text-primary opacity-30"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {program.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {program.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {program.duration}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Intake:</span>
                        <span className="font-semibold flex items-center gap-1">
                          <Users2 className="h-4 w-4" /> {program.intake}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Fee:</span>
                        <span className="font-semibold flex items-center gap-1">
                          <IndianRupee className="h-4 w-4" /> {program.fee}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Eligibility:
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {program.eligibility}
                        </Badge>
                      </div>
                    </div>

                    <Button className="w-full gap-2 mt-auto" asChild>
                      <Link href={`/programs/${program.slug}`}>
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Study Nursing at HCNE */}
        <section className="bg-muted px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionBadge>
                Why HCNE
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Why Study Nursing at HCNE?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "World-Class Faculty",
                  desc: "Learn from experienced educators with PhDs and international certifications.",
                },
                {
                  title: "State-of-the-Art Labs",
                  desc: "Access modern simulation labs and clinical facilities for practical training.",
                },
                {
                  title: "Clinical Exposure",
                  desc: "Gain hands-on experience through partnerships with leading hospitals.",
                },
                {
                  title: "Research Opportunities",
                  desc: "Participate in ongoing nursing research and contribute to the field.",
                },
              ].map((benefit, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border-2 border-transparent transition-all hover:border-primary/20 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <BrandStar
                          size={24}
                          className="text-primary opacity-60"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute left-0 top-1/2 opacity-5">
            <BrandStar size={250} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionBadge>
                Career Paths
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Career Opportunities
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-3 md:grid-cols-2 mb-8">
                {careerOps.map((career, idx) => (
                  <Card
                    key={idx}
                    className="border-2 border-transparent hover:border-primary/20 transition-colors"
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{career}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="overflow-hidden bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    98%+ Placement Rate
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our graduates are highly sought after by leading hospitals
                    and healthcare organizations nationwide and internationally.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Average Starting Salary: ₹3-4 LPA | International
                    Opportunities: 20%
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground px-6 py-20 lg:px-8 lg:py-28">
          <BrandPattern className="opacity-[0.15]" />
          <div className="absolute top-10 right-10 opacity-10">
            <BrandStar size={150} className="text-primary-foreground" />
          </div>

          <div className="relative mx-auto max-w-7xl text-center">
            <h2 className="font-serif text-3xl font-light lg:text-4xl mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Choose the program that suits your aspirations and join our
              community of nursing professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/admissions">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">
                  <Phone className="h-4 w-4" /> Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
