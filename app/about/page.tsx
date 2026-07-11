"use client";

import { useState } from "react";
import { ProspectusDialog } from "@/components/prospectus-dialog";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar, BrandPattern, SectionBadge } from "@/components/brand-elements";
import {
  Award,
  Users,
  BookOpen,
  Heart,
  Zap,
  Globe,
  ArrowRight,
  Phone,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  const [lifeSlide, setLifeSlide] = useState(0);

  const lifeAtHCNE = [
    {
      title: "Modern Classrooms",
      description:
        "State-of-the-art smart classrooms with interactive boards, AV systems, and ergonomic furniture for optimal learning.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop",
    },
    {
      title: "Simulation Labs",
      description:
        "High-fidelity simulation center with patient mannequins and virtual reality training for hands-on clinical practice.",
      image:
        "https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?w=800&h=500&fit=crop",
    },
    {
      title: "Clinical Research Centers",
      description:
        "Advanced research facilities with modern diagnostic equipment supporting academic research and innovation.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop",
    },
    {
      title: "State of the Art Hostels",
      description:
        "Comfortable residential accommodation with modern amenities, 24/7 security, and a supportive community environment.",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=500&fit=crop",
    },
    {
      title: "Academic Library",
      description:
        "Comprehensive library with 15,000+ books, digital resources, reading halls, and 24-hour study access.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=500&fit=crop",
    },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Patient-centered care and empathy in all endeavors.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Pursuit of highest standards in education and practice.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing modern healthcare practices and technologies.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive and inclusive learning environment.",
    },
  ];

  const highlights = [
    {
      icon: Award,
      stat: "35+",
      label: "Years of Excellence",
    },
    {
      icon: Users,
      stat: "5000+",
      label: "Alumni Worldwide",
    },
    {
      icon: BookOpen,
      stat: "98%",
      label: "Placement Rate",
    },
    {
      icon: Heart,
      stat: "100%",
      label: "Accredited Programs",
    },
  ];

  const milestones = [
    {
      year: "1989",
      title: "Foundation",
      desc: "HCNE established with a vision to transform nursing education",
    },
    {
      year: "1995",
      title: "INC Recognition",
      desc: "Received official recognition from Indian Nursing Council",
    },
    {
      year: "2005",
      title: "NAAC Grade A",
      desc: "Achieved Grade A accreditation for academic excellence",
    },
    {
      year: "2015",
      title: "Research Centre",
      desc: "Launched dedicated nursing research centre",
    },
    {
      year: "2023",
      title: "International Tie-ups",
      desc: "Established partnerships with global healthcare institutions",
    },
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
                  Established 1989
                </Badge>
                <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl xl:text-6xl text-balance">
                  Shaping Compassionate
                  <span className="block">Healthcare Leaders</span>
                </h1>
                <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-xl">
                  For over three decades, Heritage Centre for Nursing Excellence
                  has been pioneering nursing education and fostering a culture
                  of compassionate care, clinical excellence, and professional
                  growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <Link href="/admissions">
                      <ArrowRight className="h-4 w-4" /> Join Our Community
                    </Link>
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

              {/* Hero Image Area */}
              <div className="relative hidden lg:block">
                <div className="relative h-[450px] rounded-2xl overflow-hidden border border-primary-foreground/20">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                    alt="Nursing students in training"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm opacity-90">
                      Our students during clinical training
                    </p>
                  </div>
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-background text-foreground p-4 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-primary">35+</div>
                  <p className="text-sm text-muted-foreground">
                    Years of Legacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-muted/30 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-2 border-transparent transition-all hover:border-primary/20 hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-2">{item.stat}</div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          {/* Background Decorative Stars */}
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionBadge>
                Our Story
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                A Legacy of Excellence
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Founded in 1989, HCNE emerged from a vision to revolutionize
                nursing education in India
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Heritage",
                  description:
                    "With 35+ years of dedication to nursing excellence, we have consistently maintained high standards of education and clinical practice, earning recognition across the healthcare sector.",
                },
                {
                  title: "Foundation",
                  description:
                    "Built on principles of integrity, compassion, and continuous improvement, our foundation emphasizes both academic rigor and patient-centered values in every program we offer.",
                },
                {
                  title: "Philosophy",
                  description:
                    "We believe in holistic nursing education that combines theoretical knowledge with practical experience, preparing graduates who are clinically competent and compassionate practitioners.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border border-border bg-card shadow-md transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="h-2 bg-primary" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground px-6 py-20 lg:px-8 lg:py-28">
          <BrandPattern className="opacity-[0.12]" />
          <div className="absolute -left-16 -top-16 opacity-[0.07] pointer-events-none">
            <BrandStar size={220} variant="outline" className="text-primary-foreground" />
          </div>
          <div className="absolute -right-16 -bottom-16 opacity-[0.07] pointer-events-none">
            <BrandStar size={220} variant="outline" className="text-primary-foreground" />
          </div>

          <div className="relative mx-auto max-w-7xl z-10">
            <div className="mb-12 text-center">
              <SectionBadge
                badgeClassName="bg-primary-foreground text-primary hover:bg-primary-foreground/95"
                starClassName="text-primary-foreground/80"
              >
                Our Purpose
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl text-white">
                Mission, Vision & Values
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  letter: "M",
                  title: "Mission",
                  content:
                    "To provide innovative, globally relevant nursing education that develops compassionate, competent, and ethical professionals committed to excellence in healthcare delivery.",
                },
                {
                  letter: "V",
                  title: "Vision",
                  content:
                    "To be a leading center of excellence in nursing education, recognized nationally and internationally for producing healthcare leaders who advance the profession.",
                },
                {
                  letter: "C",
                  title: "Core Values",
                  content:
                    "Compassion in care, excellence in practice, innovation in learning, integrity in conduct, and commitment to community-centered healthcare.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white mb-6">
                      <span className="text-xl font-bold">{item.letter}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-white/85 leading-relaxed text-sm">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute left-0 bottom-20 opacity-5">
            <BrandStar size={200} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionBadge>
                What Drives Us
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Our Guiding Principles
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {coreValues.map((value, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border-2 border-transparent transition-all hover:border-primary/20 hover:shadow-lg"
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-muted px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionBadge>
                Leadership
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Meet Our Leadership
              </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto items-center">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-primary/20 mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
                    alt="Dr. Sarah Sharma - Founder & Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  Dr. Sarah Sharma
                </h3>
                <p className="text-primary font-medium mb-4">
                  Founder & Director
                </p>
                <p className="text-muted-foreground max-w-sm">
                  With 40+ years of experience in nursing education and
                  healthcare leadership, Dr. Sharma&apos;s vision transformed
                  HCNE into a beacon of excellence.
                </p>
              </div>

              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    <BrandStar size={32} className="opacity-50" />
                  </div>
                  <blockquote className="text-lg italic mb-4 leading-relaxed">
                    &quot;Nursing is not just a profession; it&apos;s a calling
                    to serve humanity with compassion and integrity. Our mission
                    at HCNE is to nurture the next generation of healthcare
                    leaders who will make a meaningful difference in
                    people&apos;s lives.&quot;
                  </blockquote>
                  <p className="text-sm text-muted-foreground">
                    — Dr. Sarah Sharma, Founder & Director
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute right-0 top-1/2 opacity-5">
            <BrandStar size={250} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionBadge>
                Our Journey
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Milestones of Excellence
              </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left Column - Timeline */}
              <div className="space-y-8 max-w-3xl">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {milestone.year.slice(2)}
                      </div>
                      {idx !== milestones.length - 1 && (
                        <div className="h-16 w-1 bg-primary/20 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <p className="text-sm font-medium text-primary mb-1">
                        {milestone.year}
                      </p>
                      <h3 className="text-lg font-semibold mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl sticky top-24 hidden lg:block bg-muted border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1000&fit=crop"
                  alt="HCNE History & Milestones"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Since 1989</p>
                  <h4 className="font-serif text-lg font-medium">Over 35 Years of Educational Excellence</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Life at HCNE Carousel */}
        <section className="bg-muted px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionBadge>
                Campus Life
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Life at HCNE
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Experience world-class facilities designed for academic
                excellence and holistic development
              </p>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${lifeSlide * 100}%)` }}
                >
                  {lifeAtHCNE.map((item, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                      <div className="grid gap-8 lg:grid-cols-2 items-center">
                        <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent" />
                        </div>
                        <div className="p-4 lg:p-8">
                          <h3 className="font-serif text-2xl lg:text-3xl font-light mb-4">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {item.description}
                          </p>
                          <Button
                            variant="outline"
                            className="mt-6 gap-2"
                            asChild
                          >
                            <Link href="/facilities">
                              Explore Facilities{" "}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() =>
                    setLifeSlide((prev) =>
                      prev === 0 ? lifeAtHCNE.length - 1 : prev - 1,
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex gap-2">
                  {lifeAtHCNE.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLifeSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        lifeSlide === idx
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setLifeSlide((prev) =>
                      prev === lifeAtHCNE.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Slide Labels */}
              <div className="flex justify-center gap-2 mt-6 flex-wrap">
                {lifeAtHCNE.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLifeSlide(idx)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      lifeSlide === idx
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations Preview */}
        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-lg">
                <SectionBadge>
                  Recognition
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-4">
                  Recognized Excellence
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our programs are accredited by leading national and
                  international bodies, ensuring quality and relevance in
                  nursing education.
                </p>
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="/accreditations">
                    View All Accreditations <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {["NCI", "NAAC", "INC", "AICTE", "ISO", "CCPI"].map(
                  (acc, idx) => (
                    <Card
                      key={idx}
                      className="h-24 w-24 lg:h-28 lg:w-28 flex items-center justify-center hover:shadow-lg transition-shadow"
                    >
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl font-bold text-primary mb-1">
                          {acc}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Accredited
                        </p>
                      </div>
                    </Card>
                  ),
                )}
              </div>
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
              Ready to Join Our Community?
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Start your journey towards excellence in nursing education and
              healthcare leadership today.
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
