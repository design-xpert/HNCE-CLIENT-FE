"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrandStar } from "@/components/brand-elements"
import { CheckCircle2, Award, Shield, ArrowRight } from "lucide-react"

export default function AccreditationsPage() {
  const accreditations = [
    {
      logo: "NCI",
      title: "Nursing Council of India",
      description: "Statutory regulation and recognition of nursing programs",
      status: "Recognized",
      details: ["INC Recognized", "RCI Approved", "Valid until 2028"],
    },
    {
      logo: "CCPI",
      title: "CCPI - Council of Colleges of Pharmacy of India",
      description: "International pharmacy education standards",
      status: "Accredited",
      details: ["Quality Assurance", "Curriculum Approved", "Regular Audits"],
    },
    {
      logo: "NAAC",
      title: "NAAC - National Assessment and Accreditation Council",
      description: "Institutional assessment and quality assurance",
      status: "Accredited",
      details: ["Grade A", "5-Year Accreditation", "Autonomous Status"],
    },
    {
      logo: "INC",
      title: "Indian Nursing Council",
      description: "Regulatory body for nursing professionals",
      status: "Approved",
      details: ["Program Approval", "Faculty Recognition", "Graduate Registration"],
    },
    {
      logo: "AICTE",
      title: "AICTE - All India Council for Technical Education",
      description: "Technical education quality and standards",
      status: "Approved",
      details: ["Annual Inspection", "Curriculum Compliance", "Valid Till 2026"],
    },
    {
      logo: "ISO",
      title: "ISO 9001:2015 Certified",
      description: "Quality Management System certification",
      status: "Certified",
      details: ["Process Excellence", "Continuous Improvement", "Third-Party Audited"],
    },
  ]

  const certifications = [
    {
      title: "Program Accreditation Certificate",
      issuer: "Indian Nursing Council",
      year: "2023-2028",
      category: "Academic",
    },
    {
      title: "Institutional Accreditation",
      issuer: "NAAC",
      year: "2022-2027",
      category: "Institutional",
    },
    {
      title: "Quality Management System",
      issuer: "ISO",
      year: "2021-2024",
      category: "Quality",
    },
    {
      title: "Clinical Laboratory Standards",
      issuer: "CAP",
      year: "2023-2025",
      category: "Clinical",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10" />
          </div>

          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Accreditations & Recognition
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              HCNE maintains the highest standards of quality and excellence through rigorous accreditation and continuous compliance with national and international standards.
            </p>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="py-16 lg:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">6+</div>
                <p className="text-muted-foreground">Major Accreditations</p>
              </Card>

              <Card className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-muted-foreground">Program Compliance</p>
              </Card>

              <Card className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">Grade A</div>
                <p className="text-muted-foreground">NAAC Rating</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Accreditations Grid */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Accrediting Bodies</h2>
              <p className="text-muted-foreground mt-2">Recognition from leading national and international organizations</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {accreditations.map((acc, idx) => (
                <Card key={idx} className="p-6 bg-background hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {acc.logo}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <CheckCircle2 className="h-3 w-3" />
                      {acc.status}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{acc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{acc.description}</p>
                  <ul className="space-y-2">
                    {acc.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Gallery */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Certificates & Awards</h2>
              <p className="text-muted-foreground mt-2">Official recognition of our commitment to excellence</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="p-6 flex flex-col">
                  <div className="h-32 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-border mb-4 flex items-center justify-center">
                    <BrandStar className="h-16 w-16 opacity-20" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {cert.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition Timeline */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">Milestones of Excellence</h2>

            <div className="space-y-8 max-w-3xl">
              {[
                { year: "1989", title: "Founded", desc: "Heritage Centre for Nursing Excellence established" },
                { year: "1995", title: "INC Recognition", desc: "Recognized by Indian Nursing Council" },
                { year: "2005", title: "NAAC Accreditation", desc: "Received Grade A accreditation" },
                { year: "2015", title: "ISO Certified", desc: "Achieved ISO 9001:2015 certification" },
                { year: "2023", title: "Recent Renewal", desc: "All accreditations renewed with excellence ratings" },
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {idx + 1}
                    </div>
                    {idx !== 4 && <div className="h-16 w-1 bg-primary/20 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-medium text-primary mb-1">{milestone.year}</p>
                    <h3 className="text-lg font-semibold mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Compliance */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">Our Compliance Standards</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Academic Excellence",
                  items: ["Curriculum Alignment", "Faculty Qualifications", "Continuous Updates", "Industry Relevance"],
                },
                {
                  title: "Student Safety",
                  items: ["Health & Safety Protocols", "Clinical Exposure Standards", "Student Welfare", "Anti-Harassment Policy"],
                },
                {
                  title: "Infrastructure",
                  items: ["Lab Standards", "Simulation Facilities", "Library Resources", "Technology Integration"],
                },
                {
                  title: "Quality Assurance",
                  items: ["Internal Audits", "External Reviews", "Feedback Systems", "Continuous Improvement"],
                },
              ].map((standard, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{standard.title}</h3>
                  <ul className="space-y-3">
                    {standard.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join an Accredited Institution</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Study at an institution recognized for excellence and commitment to quality education.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link href="/admissions">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
