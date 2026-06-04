"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const positions = [
    {
      title: "Assistant Professor - Medical-Surgical Nursing",
      dept: "Nursing",
      location: "On-Campus",
      type: "Full-Time",
      posted: "2 days ago",
    },
    {
      title: "Clinical Instructor",
      dept: "Nursing",
      location: "On-Campus",
      type: "Full-Time",
      posted: "1 week ago",
    },
    {
      title: "Research Associate",
      dept: "Research",
      location: "On-Campus",
      type: "Contract",
      posted: "5 days ago",
    },
    {
      title: "Administrative Officer",
      dept: "Administration",
      location: "On-Campus",
      type: "Full-Time",
      posted: "1 week ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Careers at HCNE</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team and contribute to nursing excellence and healthcare innovation.
            </p>
          </div>
        </section>

        {/* Why Work */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Why Work With HCNE?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Professional Growth", desc: "Continuous learning and career development opportunities" },
                { title: "Collaborative Culture", desc: "Work with dedicated professionals in a supportive environment" },
                { title: "Modern Facilities", desc: "State-of-the-art infrastructure and resources" },
                { title: "Competitive Benefits", desc: "Attractive salary packages and benefits" },
                { title: "Impact", desc: "Make a difference in nursing education and healthcare" },
                { title: "Work-Life Balance", desc: "Flexible schedules and wellness programs" },
              ].map((reason, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, idx) => (
                <Card key={idx} className="p-6 bg-background hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" /> {position.dept}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {position.posted}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button className="gap-2" asChild>
                      <Link href="#">Apply Now <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Submit your application and become part of the HCNE family.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">View All Positions</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
