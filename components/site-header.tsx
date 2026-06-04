"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BrandStar } from "@/components/brand-elements";
import {
  GraduationCap,
  BookOpen,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";

const navItems = [
  { label: "Programs", href: "/programs", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Faculty", href: "/faculty" },
  { label: "Admissions", href: "/admissions" },
  { label: "News", href: "/news" },
];

const programs = [
  {
    icon: GraduationCap,
    title: "B.Sc. Nursing",
    duration: "4 Years",
    fee: "₹1.5L/year",
    intake: "60 Students",
    slug: "bsc-nursing",
    highlights: ["INC Recognized", "Clinical Focus", "98% Placement"],
  },
  {
    icon: BookOpen,
    title: "GNM Diploma",
    duration: "3 Years",
    fee: "₹80K/year",
    intake: "40 Students",
    slug: "gnm",
    highlights: ["Practical Training", "Job Ready", "Hospital Tie-ups"],
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/programs") {
      return pathname === "/programs" || pathname.startsWith("/programs/");
    }
    if (href === "/news") {
      return pathname === "/news" || pathname.startsWith("/news/");
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-primary.png"
            alt="HCNE Logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-semibold leading-tight">HCNE</p>
            <p className="text-xs text-muted-foreground">
              Heritage Centre for Nursing Excellence
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.hasDropdown && setProgramsDropdownOpen(true)
              }
              onMouseLeave={() =>
                item.hasDropdown && setProgramsDropdownOpen(false)
              }
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-sm rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-foreground font-medium bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${programsDropdownOpen ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {/* Programs Mega Menu - 2 Course Cards */}
              {item.hasDropdown && programsDropdownOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-2">
                  <div className="rounded-xl border border-border bg-background p-6 shadow-2xl">
                    {/* Header */}
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BrandStar size={20} className="text-primary" />
                        <h3 className="font-semibold">Our Programs</h3>
                      </div>
                      <span className="text-xs text-muted-foreground bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Admissions Open 2025-26
                      </span>
                    </div>

                    {/* Two Course Cards - Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      {programs.map((program, i) => (
                        <Link
                          key={i}
                          href={`/programs/${program.slug}`}
                          className="group relative overflow-hidden rounded-xl border-2 border-border p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-lg"
                        >
                          {/* Icon & Title */}
                          <div className="flex items-start gap-3 mb-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <program.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">
                                {program.title}
                              </h4>
                              <p className="text-sm text-primary font-medium">
                                {program.fee}
                              </p>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="h-3.5 w-3.5" />
                              <span>{program.intake}</span>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-1.5">
                            {program.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          {/* Hover Arrow */}
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="h-4 w-4 text-primary" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                      <Link
                        href="/programs"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        View all program details
                      </Link>
                      <Button size="sm" className="gap-1.5" asChild>
                        <Link href="/admissions">
                          Apply Now <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex gap-2"
            asChild
          >
            <Link href="/online-fee-payment">
              <CreditCard className="h-4 w-4" /> Online Fee Payment
            </Link>
          </Button>
          <Button size="sm" className="gap-2" asChild>
            <Link href="/admissions">
              <ArrowRight className="h-4 w-4" /> Apply Now
            </Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden hover:bg-muted transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-5 w-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-sm rounded-lg transition-colors ${
                        isActive(item.href)
                          ? "bg-primary/10 text-foreground font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileProgramsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Mobile Programs Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileProgramsOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="py-2 pl-4 space-y-2">
                        {programs.map((program, i) => (
                          <Link
                            key={i}
                            href={`/programs/${program.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <program.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">
                                {program.title}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {program.duration} • {program.fee}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        ))}
                        <Link
                          href="/programs"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-center text-sm text-primary py-2 hover:underline"
                        >
                          View All Programs
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/10 text-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-4 pt-4 border-t border-border space-y-2">
            <Button variant="outline" className="w-full gap-2" asChild>
              <Link
                href="/online-fee-payment"
                onClick={() => setMobileMenuOpen(false)}
              >
                <CreditCard className="h-4 w-4" /> Online Fee Payment
              </Link>
            </Button>
            <Button className="w-full gap-2" asChild>
              <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>
                <ArrowRight className="h-4 w-4" /> Apply Now
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
