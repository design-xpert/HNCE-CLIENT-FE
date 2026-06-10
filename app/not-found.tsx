"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrandStar } from "@/components/brand-elements"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <BrandStar className="h-32 w-32 opacity-20 mx-auto rotate-45" />
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold mb-4">404</h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Page Not Found</h2>

          <p className="text-lg text-muted-foreground mb-8">
            We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
          </p>

          <div className="space-y-4 mb-12">
            <p className="text-muted-foreground">
              Here are some helpful links to get you back on track:
            </p>
            <ul className="text-left max-w-xs mx-auto space-y-2">
              <li>
                <Link href="/admissions" className="text-primary hover:underline">
                  → Admissions
                </Link>
              </li>
              <li>
                <Link href="/en/programs" className="text-primary hover:underline">
                  → Programs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary hover:underline">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary hover:underline">
                  → Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gap-2" asChild>
              <Link href="/">
                <Home className="h-4 w-4" /> Go Home
              </Link>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <Link href="#" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4" /> Go Back
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
