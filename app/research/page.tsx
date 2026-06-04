"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrandStar } from "@/components/brand-elements"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Brain,
  Briefcase,
} from "lucide-react"

export default function ResearchCentrePage() {
  const researchAreas = [
    {
      title: "Clinical Nursing Research",
      description: "Studies on patient care outcomes, nursing interventions, and clinical practice improvement.",
    },
    {
      title: "Community Health Research",
      description: "Public health initiatives, disease prevention, and community-based health programs.",
    },
    {
      title: "Nursing Education Research",
      description: "Educational strategies, curriculum development, and learning outcome assessments.",
    },
    {
      title: "Healthcare Management",
      description: "Organizational effectiveness, leadership, and healthcare delivery systems.",
    },
    {
      title: "Mental Health & Wellness",
      description: "Psychiatric nursing, mental health promotion, and psychological well-being.",
    },
    {
      title: "Gerontological Nursing",
      description: "Aging, elder care, and quality of life in senior populations.",
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
              Research Centre
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Advancing nursing knowledge through rigorous research, innovation, and evidence-based practice initiatives.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Join Our Research Programs</Link>
            </Button>
          </div>
        </section>

        {/* Research Overview */}
        <section className="py-16 lg:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Research Overview</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  To conduct rigorous, innovative nursing research that contributes to advancing the nursing profession and improving patient outcomes through evidence-based practice.
                </p>
                <div className="space-y-2">
                  {[
                    "Evidence generation for practice",
                    "Interdisciplinary collaboration",
                    "Student-led research projects",
                    "Publication in peer-reviewed journals",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-muted">
                <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <p className="text-muted-foreground">Research Publications</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <p className="text-muted-foreground">Ongoing Projects</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <p className="text-muted-foreground">Student Researchers</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">Research Areas</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {researchAreas.map((area, idx) => (
                <Card key={idx} className="p-6 bg-background">
                  <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Recent Publications</h2>
            <div className="space-y-4 max-w-3xl">
              {[
                {
                  title: "Impact of Simulation-Based Learning on Nursing Student Competency",
                  journal: "International Journal of Nursing Education",
                  authors: "Dr. Priya Verma, et al.",
                  year: 2024,
                },
                {
                  title: "Community Health Interventions in Rural Areas",
                  journal: "Journal of Community Health Nursing",
                  authors: "Dr. Rajesh Kumar, et al.",
                  year: 2023,
                },
                {
                  title: "Mental Health Awareness in Adolescents",
                  journal: "Mental Health Review Quarterly",
                  authors: "Dr. Meera Patel, et al.",
                  year: 2023,
                },
              ].map((pub, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <p className="text-sm text-muted-foreground mb-2">{pub.year}</p>
                  <h3 className="font-semibold mb-2">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pub.authors} • {pub.journal}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborations */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Research Collaborations</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {[
                "National Institute of Nursing",
                "International Nursing Association",
                "Leading Medical Colleges",
                "Hospital Networks",
                "NGO Partners",
                "Government Health Departments",
              ].map((collab, idx) => (
                <Card key={idx} className="p-6 bg-background text-center">
                  <p className="font-medium">{collab}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Research */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Student Research Opportunities</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-8">
                <h3 className="text-lg font-semibold mb-4">Undergraduate Research</h3>
                <ul className="space-y-3">
                  {[
                    "Capstone projects in specialty areas",
                    "Literature reviews and evidence synthesis",
                    "Clinical observation studies",
                    "Quality improvement initiatives",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 bg-muted">
                <h3 className="text-lg font-semibold mb-4">Postgraduate Research</h3>
                <ul className="space-y-3">
                  {[
                    "Thesis research with faculty guidance",
                    "Interdisciplinary research projects",
                    "Publication opportunities",
                    "Research funding available",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contribute to Nursing Research</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our research center and be part of advancing nursing science and evidence-based practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/admissions">Apply for Program</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Explore Opportunities</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
