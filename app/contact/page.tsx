"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  MessageSquare,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you?type=contact");
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
            <div className="max-w-2xl">
              <Badge
                variant="secondary"
                className="mb-6 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Get in Touch
              </Badge>
              <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl xl:text-6xl text-balance">
                Contact Us
              </h1>
              <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-xl">
                Have questions about admissions, programs, or campus life? Our
                team is here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="border-b border-border bg-muted/30 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "admissions@hcne.edu.in",
                  sub: "Response within 24 hours",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 98765 43210",
                  sub: "Mon-Sat: 9AM-6PM",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "123 Healthcare Avenue",
                  sub: "Medical District, City - 560001",
                },
                {
                  icon: Clock,
                  title: "Office Hours",
                  content: "Mon-Fri: 9AM-5PM",
                  sub: "Saturday: 9AM-1PM",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm font-medium mb-1">{item.content}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Department Cards */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <SectionBadge>
                    Send a Message
                  </SectionBadge>
                  <h2 className="font-serif text-3xl font-light lg:text-4xl">
                    We&apos;d Love to Hear From You
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Fill out the form below and our team will get back to you
                    shortly.
                  </p>
                </div>

                <Card className="overflow-hidden">
                  <div className="bg-terracotta-900 px-8 py-5 text-white">
                    <Badge
                      variant="secondary"
                      className="mb-3 bg-white/15 text-white hover:bg-white/20"
                    >
                      Send a Message
                    </Badge>
                    <h3 className="font-serif text-xl font-light">
                      We&apos;d Love to Hear From You
                    </h3>
                    <p className="mt-1 text-sm opacity-80">
                      Fill out the form and our team will get back to you within
                      24 hours.
                    </p>
                  </div>
                  <CardContent className="p-8">
                    <form onSubmit={handleContact} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiry">Inquiry Type *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admissions">
                                Admissions
                              </SelectItem>
                              <SelectItem value="programs">Programs</SelectItem>
                              <SelectItem value="fees">
                                Fees & Scholarships
                              </SelectItem>
                              <SelectItem value="campus">
                                Campus Visit
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="What is this about?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        size="lg"
                        className="w-full gap-2 bg-terracotta-900 hover:bg-terracotta-700 text-white"
                      >
                        <Send className="h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Department Contacts */}
              <div className="space-y-6">
                <div className="mb-2">
                  <SectionBadge>
                    Direct Lines
                  </SectionBadge>
                  <h3 className="font-serif text-2xl font-light">
                    Department Contacts
                  </h3>
                </div>

                {[
                  {
                    icon: MessageSquare,
                    title: "Admissions Office",
                    desc: "For admission queries and program information",
                    email: "admissions@hcne.edu.in",
                    phone: "+91 98765 43210",
                  },
                  {
                    icon: Building2,
                    title: "Academic Office",
                    desc: "For academic inquiries and student services",
                    email: "academics@hcne.edu.in",
                    phone: "+91 98765 43211",
                  },
                  {
                    icon: Phone,
                    title: "General Inquiries",
                    desc: "For general information and support",
                    email: "info@hcne.edu.in",
                    phone: "+91 98765 43212",
                  },
                ].map((dept, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <dept.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{dept.title}</h4>
                          <p className="text-xs text-muted-foreground mb-3">
                            {dept.desc}
                          </p>
                          <p className="text-sm font-medium">{dept.email}</p>
                          <p className="text-sm font-medium">{dept.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-muted px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <SectionBadge>
                Find Us
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl">
                Our Location
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Visit our campus in the heart of the Medical District
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985338320693!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Card>
              </div>

              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-4">Campus Address</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="font-medium">
                          Heritage Centre for Nursing Excellence
                        </p>
                        <p className="text-muted-foreground">
                          123 Healthcare Avenue
                        </p>
                        <p className="text-muted-foreground">
                          Medical District
                        </p>
                        <p className="text-muted-foreground">City - 560001</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9AM - 5PM
                        </p>
                        <p className="text-muted-foreground">
                          Saturday: 9AM - 1PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6 gap-2"
                    variant="outline"
                    asChild
                  >
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Apply now and take the first step towards a rewarding career in
              nursing.
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
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
