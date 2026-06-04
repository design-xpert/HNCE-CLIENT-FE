"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrandStar } from "@/components/brand-elements"
import { ArrowRight, X } from "lucide-react"
import { useState } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { category: "Campus", title: "Main Campus Building", id: 1 },
    { category: "Labs", title: "Simulation Lab", id: 2 },
    { category: "Events", title: "Nursing Day Celebration", id: 3 },
    { category: "Students", title: "Clinical Training", id: 4 },
    { category: "Faculty", title: "Faculty Meeting", id: 5 },
    { category: "Campus", title: "Outdoor Area", id: 6 },
    { category: "Labs", title: "Laboratory Session", id: 7 },
    { category: "Events", title: "Graduation Ceremony", id: 8 },
  ]

  const categories = ["All", "Campus", "Labs", "Events", "Students", "Faculty"]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our campus, facilities, and community through our photo gallery.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-max">
              {images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
                    <BrandStar className="h-12 w-12 opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-semibold text-center">{image.title}</p>
                    <p className="text-white/70 text-sm mt-2">{image.category}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                <BrandStar className="h-24 w-24 opacity-30" />
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience HCNE</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a campus visit to see our facilities in person.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
