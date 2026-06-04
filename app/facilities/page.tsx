"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar, BrandPattern, SectionBadge } from "@/components/brand-elements";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Trees,
  Building2,
  Microscope,
  FlaskConical,
  BookOpen,
  Home,
  Dumbbell,
  Music,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function FacilitiesPage() {
  const [activeSection, setActiveSection] = useState(0);

  const facilitySections = [
    {
      id: "campus",
      icon: Trees,
      title: "Lush Green Campus",
      subtitle: "Modern Campus in Nature",
      description:
        "Spread across 50+ acres of lush green landscape, our campus provides a serene and conducive environment for learning. The beautifully landscaped gardens, tree-lined pathways, and open spaces create a peaceful atmosphere that promotes both academic focus and personal well-being.",
      highlights: [
        "50+ acres of green landscape",
        "Botanical garden with medicinal plants",
        "Jogging tracks and walking paths",
        "Eco-friendly waste management",
        "Rainwater harvesting system",
        "Solar-powered infrastructure",
      ],
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop",
      stats: [
        { number: "50+", label: "Acres" },
        { number: "1000+", label: "Trees" },
        { number: "100%", label: "Green Energy" },
      ],
    },
    {
      id: "classrooms",
      icon: Building2,
      title: "State of the Art Classrooms",
      subtitle: "Modern Education Spaces",
      description:
        "Our classrooms are designed with cutting-edge technology and ergonomic furniture to create an optimal learning environment. Each classroom features smart boards, high-definition projectors, and integrated audio-visual systems that facilitate interactive and engaging lectures.",
      highlights: [
        "Interactive smart boards in every room",
        "HD projectors and audio systems",
        "Climate-controlled environment",
        "Ergonomic seating arrangements",
        "High-speed WiFi connectivity",
        "Recording facility for lectures",
      ],
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop",
      stats: [
        { number: "25+", label: "Classrooms" },
        { number: "60", label: "Capacity Each" },
        { number: "100%", label: "Smart Enabled" },
      ],
    },
    {
      id: "simulation",
      icon: Microscope,
      title: "Simulation Labs",
      subtitle: "Practice Makes Perfect",
      description:
        "Our state-of-the-art simulation center features high-fidelity mannequins and virtual reality systems that replicate real clinical scenarios. Students can practice procedures, emergency responses, and patient care techniques in a safe, controlled environment before entering actual clinical settings.",
      highlights: [
        "High-fidelity patient simulators",
        "Virtual reality training modules",
        "Mock hospital ward setups",
        "Emergency scenario simulation",
        "Debriefing and video analysis rooms",
        "24/7 access for practice sessions",
      ],
      image:
        "https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?w=1200&h=800&fit=crop",
      stats: [
        { number: "8", label: "Simulation Stations" },
        { number: "15+", label: "Mannequins" },
        { number: "50+", label: "Scenarios" },
      ],
    },
    {
      id: "research",
      icon: FlaskConical,
      title: "Clinical Research Labs",
      subtitle: "Innovation & Discovery",
      description:
        "Our clinical research laboratories are equipped with advanced diagnostic and research equipment that supports both academic research and student training. The labs provide hands-on experience with the latest technologies used in modern healthcare facilities.",
      highlights: [
        "Advanced diagnostic equipment",
        "Microbiology and pathology labs",
        "Biochemistry analysis facilities",
        "Research project workstations",
        "Data analysis and computing center",
        "Collaborative research spaces",
      ],
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&h=800&fit=crop",
      stats: [
        { number: "6", label: "Research Labs" },
        { number: "100+", label: "Equipment Units" },
        { number: "20+", label: "Research Projects" },
      ],
    },
    {
      id: "library",
      icon: BookOpen,
      title: "Academic Modern Library",
      subtitle: "Knowledge Hub",
      description:
        "Our comprehensive library houses an extensive collection of nursing and medical literature, journals, and digital resources. The spacious reading halls, individual study pods, and group discussion rooms provide the perfect environment for academic pursuit and research.",
      highlights: [
        "15,000+ books and journals",
        "Digital library with e-resources",
        "Individual study pods",
        "Group discussion rooms",
        "24-hour reading room access",
        "Online database subscriptions",
      ],
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop",
      stats: [
        { number: "15K+", label: "Books" },
        { number: "500+", label: "Journals" },
        { number: "24/7", label: "Access" },
      ],
    },
    {
      id: "residential",
      icon: Home,
      title: "Residential Accommodation",
      subtitle: "Home Away From Home",
      description:
        "Our residential facilities provide comfortable, secure, and well-maintained accommodation for students. Separate hostels for boys and girls feature modern amenities, nutritious dining, recreational spaces, and round-the-clock security for a complete campus living experience.",
      highlights: [
        "Furnished rooms with attached bathrooms",
        "24/7 security and CCTV surveillance",
        "Nutritious meals in modern cafeteria",
        "Recreation and common rooms",
        "Laundry and housekeeping services",
        "WiFi connectivity in all rooms",
      ],
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&h=800&fit=crop",
      stats: [
        { number: "500+", label: "Rooms" },
        { number: "2000+", label: "Capacity" },
        { number: "24/7", label: "Security" },
      ],
    },
  ];

  const extracurriculars = [
    {
      icon: Dumbbell,
      title: "Sports Complex",
      desc: "Indoor and outdoor sports facilities including basketball, volleyball, badminton courts, and fitness center.",
    },
    {
      icon: Music,
      title: "Cultural Center",
      desc: "Auditorium and practice rooms for music, dance, drama, and other cultural activities.",
    },
    {
      icon: Trees,
      title: "Yoga & Meditation",
      desc: "Dedicated spaces for yoga, meditation, and mental wellness programs.",
    },
  ];

  const currentFacility = facilitySections[activeSection];

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
                  World-Class Infrastructure
                </Badge>
                <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl xl:text-6xl text-balance">
                  Facilities &<span className="block">Campus Life</span>
                </h1>
                <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-xl">
                  Experience world-class infrastructure designed to nurture
                  academic excellence and holistic development. Our campus
                  combines modern facilities with a serene learning environment.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <Link href="/contact">
                      <ArrowRight className="h-4 w-4" /> Schedule Campus Visit
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href="/gallery">View Gallery</Link>
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative hidden lg:block">
                <div className="relative h-[450px] rounded-2xl overflow-hidden border border-primary-foreground/20">
                  <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
                    alt="HCNE Campus Overview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm opacity-90">
                      Our sprawling 50+ acre green campus
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background text-foreground p-4 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <p className="text-sm text-muted-foreground">
                    Acres Green Campus
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
                { number: "50+", label: "Acres Campus" },
                { number: "25+", label: "Modern Buildings" },
                { number: "2000+", label: "Students Capacity" },
                { number: "100%", label: "WiFi Coverage" },
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

        {/* Facility Navigation */}
        <section className="border-b border-border bg-background px-6 py-4 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {facilitySections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(idx)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeSection === idx
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <section.icon className="h-4 w-4" />
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Facility Section */}
        <section className="relative px-6 py-16 lg:px-8 lg:py-24">
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={currentFacility.image}
                    alt={currentFacility.title}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={() =>
                      setActiveSection((prev) =>
                        prev === 0 ? facilitySections.length - 1 : prev - 1,
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 shadow-lg hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveSection((prev) =>
                        prev === facilitySections.length - 1 ? 0 : prev + 1,
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 shadow-lg hover:bg-background transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Stats Overlay */}
                <div className="absolute -bottom-6 left-6 right-6 lg:left-6 lg:right-auto">
                  <div className="flex gap-4 bg-background p-4 rounded-xl shadow-xl">
                    {currentFacility.stats.map((stat, idx) => (
                      <div key={idx} className="text-center px-4">
                        <div className="text-2xl font-bold text-primary">
                          {stat.number}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:pl-8">
                <SectionBadge>
                  <currentFacility.icon className="h-3 w-3 mr-1" />
                  {currentFacility.subtitle}
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-4">
                  {currentFacility.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {currentFacility.description}
                </p>

                <div className="space-y-3">
                  {currentFacility.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-8">
                  {facilitySections.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSection(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeSection === idx
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Facilities Grid */}
        <section className="bg-muted px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionBadge>
                Complete Overview
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                All Facilities at a Glance
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {facilitySections.map((facility, idx) => (
                <Card
                  key={facility.id}
                  className={`overflow-hidden border-2 transition-all cursor-pointer group ${
                    activeSection === idx
                      ? "border-primary shadow-lg"
                      : "border-transparent hover:border-primary/20"
                  }`}
                  onClick={() => setActiveSection(idx)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <facility.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-1">{facility.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Extracurricular Activities */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute left-0 bottom-20 opacity-5">
            <BrandStar size={250} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionBadge>
                Beyond Academics
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Extracurricular Facilities
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Holistic development through sports, arts, and wellness programs
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {extracurriculars.map((item, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="bg-muted px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Card className="overflow-hidden relative">
              <BrandPattern className="opacity-[0.15]" />
              <CardContent className="p-12 text-center relative">
                <BrandStar
                  size={64}
                  className="text-primary opacity-30 mx-auto mb-4"
                />
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-4">
                  Experience Our Campus
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Schedule a campus visit to explore our state-of-the-art
                  facilities and experience the HCNE environment firsthand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2" asChild>
                    <Link href="/contact">
                      <ArrowRight className="h-4 w-4" /> Schedule Campus Visit
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/gallery">View Photo Gallery</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground px-6 py-20 lg:px-8 lg:py-28">
          <BrandPattern className="opacity-[0.15]" />
          <div className="absolute top-10 right-10 opacity-10">
            <BrandStar size={150} className="text-primary-foreground" />
          </div>

          <div className="relative mx-auto max-w-7xl text-center">
            <h2 className="font-serif text-3xl font-light lg:text-4xl mb-6">
              Experience World-Class Infrastructure
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Study in an environment designed for excellence. Join HCNE today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/admissions">
                  <ArrowRight className="h-4 w-4" /> Apply Now
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
