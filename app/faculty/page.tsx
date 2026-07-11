"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar, BrandPattern, SectionBadge } from "@/components/brand-elements";
import {
  Search,
  Award,
  BookOpen,
  ArrowRight,
  Phone,
  ChevronRight,
  Users,
  GraduationCap,
  FileText,
} from "lucide-react";

export default function FacultyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState("all");

  const facultyData = [
    {
      id: 1,
      name: "Dr. Priya Verma",
      designation: "Professor & HOD",
      department: "Medical-Surgical Nursing",
      program: "B.Sc. Nursing",
      qualification: "PhD, M.Sc., B.Sc.",
      experience: "18 years",
      specialization: "Critical Care Nursing",
      publications: "45+",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      designation: "Associate Professor",
      department: "Community Health Nursing",
      program: "M.Sc. Nursing",
      qualification: "PhD, M.Sc., B.Sc.",
      experience: "15 years",
      specialization: "Public Health",
      publications: "32+",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Dr. Anjali Singh",
      designation: "Assistant Professor",
      department: "Obstetric & Pediatric Nursing",
      program: "B.Sc. Nursing",
      qualification: "M.Sc., B.Sc., Diploma",
      experience: "10 years",
      specialization: "Maternal-Child Health",
      publications: "18+",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Prof. Vikram Sharma",
      designation: "Professor",
      department: "Medical-Surgical Nursing",
      program: "M.Sc. Nursing",
      qualification: "PhD, M.Sc., B.Sc.",
      experience: "22 years",
      specialization: "Oncology Nursing",
      publications: "56+",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Dr. Meera Patel",
      designation: "Associate Professor",
      department: "Mental Health Nursing",
      program: "B.Sc. Nursing",
      qualification: "PhD, M.Sc., B.Sc.",
      experience: "12 years",
      specialization: "Psychiatric Care",
      publications: "28+",
      image:
        "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Dr. Sanjay Gupta",
      designation: "Assistant Professor",
      department: "Fundamentals of Nursing",
      program: "GNM Diploma",
      qualification: "M.Sc., B.Sc., Diploma",
      experience: "8 years",
      specialization: "Nursing Education",
      publications: "12+",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop",
    },
  ];

  const departments = [
    "all",
    "Medical-Surgical Nursing",
    "Community Health Nursing",
    "Obstetric & Pediatric Nursing",
    "Mental Health Nursing",
    "Fundamentals of Nursing",
  ];
  const programs = ["all", "B.Sc. Nursing", "M.Sc. Nursing", "GNM Diploma"];

  const filteredFaculty = facultyData.filter((faculty) => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept =
      selectedDept === "all" || faculty.department === selectedDept;
    const matchesProgram =
      selectedProgram === "all" || faculty.program === selectedProgram;
    return matchesSearch && matchesDept && matchesProgram;
  });

  const hasFilters =
    searchTerm !== "" || selectedDept !== "all" || selectedProgram !== "all";

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDept("all");
    setSelectedProgram("all");
  };

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

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="max-w-2xl">
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  50+ Expert Educators
                </Badge>
                <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl xl:text-6xl text-balance">
                  Faculty of
                  <span className="block">Excellence</span>
                </h1>
                <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-xl">
                  Meet our distinguished faculty members dedicated to nurturing
                  the next generation of nursing professionals through expert
                  teaching and mentorship.
                </p>

                {/* Dean's Quote Inline */}
                <div className="mt-8 border-l-2 border-primary-foreground/30 pl-4 italic text-sm opacity-90 bg-primary-foreground/5 p-4 rounded-r-lg max-w-xl">
                  &quot;Our faculty represents the pinnacle of academic excellence and clinical expertise. They are mentors, researchers, and advocates for the nursing profession.&quot;
                  <span className="block mt-2 font-semibold not-italic text-xs text-primary-foreground/80">— Dr. Priya Verma, Dean of Nursing</span>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <Link href="/admissions">
                      <ArrowRight className="h-4 w-4" /> Learn From the Best
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Dean's Featured Photo Card */}
              <div className="relative hidden lg:block">
                <div className="relative h-[450px] rounded-2xl overflow-hidden border border-primary-foreground/20 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop"
                    alt="Dr. Priya Verma - Dean of Nursing"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-serif text-xl font-semibold mb-1">Dr. Priya Verma</h3>
                    <p className="text-xs uppercase tracking-wider text-white/70">Dean of Nursing, HCNE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-muted/30 px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-4 text-center">
              {[
                {
                  icon: Users,
                  number: "50+",
                  label: "Faculty Members",
                  iconBg: "bg-primary/10",
                  iconColor: "text-primary",
                  numColor: "text-primary",
                },
                {
                  icon: GraduationCap,
                  number: "25+",
                  label: "PhDs",
                  iconBg: "bg-terracotta-100",
                  iconColor: "text-terracotta-700",
                  numColor: "text-terracotta-700",
                },
                {
                  icon: FileText,
                  number: "300+",
                  label: "Research Publications",
                  iconBg: "bg-olive-100",
                  iconColor: "text-olive-700",
                  numColor: "text-olive-700",
                },
                {
                  icon: Award,
                  number: "15+",
                  label: "International Collaborations",
                  iconBg: "bg-grey-100",
                  iconColor: "text-grey-700",
                  numColor: "text-grey-700",
                },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl mb-3 ${stat.iconBg}`}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${stat.numColor}`}>
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="px-6 py-12 lg:px-8 bg-muted">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6">
              <SectionBadge>
                Find Faculty
              </SectionBadge>
              <h2 className="font-serif text-2xl font-light lg:text-3xl">
                Search Our Faculty
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[220px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or specialty..."
                  className="pl-10 bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={selectedDept} onValueChange={setSelectedDept}>
                <SelectTrigger className="bg-background w-[200px]">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept === "all" ? "All Departments" : dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedProgram}
                onValueChange={setSelectedProgram}
              >
                <SelectTrigger className="bg-background w-[160px]">
                  <SelectValue placeholder="All Programs" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((prog) => (
                    <SelectItem key={prog} value={prog}>
                      {prog === "all" ? "All Programs" : prog}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasFilters && (
                <Button
                  onClick={clearFilters}
                  className="gap-2 bg-terracotta-900 text-white hover:bg-terracotta-700"
                >
                  Clear Filters
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Showing {filteredFaculty.length} of {facultyData.length} faculty
              members
            </p>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            {filteredFaculty.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredFaculty.map((faculty) => (
                  <Card
                    key={faculty.id}
                    className="overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge
                          variant="secondary"
                          className="bg-primary text-primary-foreground"
                        >
                          {faculty.designation}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-1">
                        {faculty.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-4">
                        {faculty.department}
                      </p>

                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <p>
                          <span className="font-medium text-foreground">
                            Specialization:
                          </span>{" "}
                          {faculty.specialization}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            Experience:
                          </span>{" "}
                          {faculty.experience}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            Qualification:
                          </span>{" "}
                          {faculty.qualification}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            Publications:
                          </span>{" "}
                          {faculty.publications}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BrandStar
                  size={64}
                  className="text-primary opacity-20 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  No faculty members found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDept("all");
                    setSelectedProgram("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
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
              Learn from the Best
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Join our programs and be mentored by leading nursing educators and
              researchers.
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
