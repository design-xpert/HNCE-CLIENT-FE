"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar, BrandPattern } from "@/components/brand-elements";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts, categories, categoryColors } from "@/lib/blog-data";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);
  const grid =
    activeCategory === "All"
      ? filtered.filter((p) => p.slug !== featured.slug)
      : filtered;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <BrandPattern />
          <div className="absolute top-10 right-10 opacity-20">
            <BrandStar size={120} className="text-primary-foreground" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <BrandStar size={80} className="text-primary-foreground" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <Badge
              variant="secondary"
              className="mb-6 bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Latest from HCNE
            </Badge>
            <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl xl:text-6xl">
              News &amp; Updates
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-80 leading-relaxed">
              Stay informed with the latest achievements, announcements, events,
              and stories from Heritage Centre for Nursing Excellence.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <div className="sticky top-[72px] z-40 border-b border-border bg-background/95 backdrop-blur px-6 py-3 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex gap-2 overflow-x-auto pb-0.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post — only shown when All is selected */}
        {activeCategory === "All" && (
          <section className="px-6 pt-14 pb-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <Link href={`/news/${featured.slug}`} className="group block">
                <Card className="overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-[3fr_2fr]">
                    <div className="relative min-h-[260px] bg-muted lg:h-auto">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="flex flex-col justify-center p-8 lg:p-10">
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-700"}`}
                        >
                          {featured.category}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      </div>
                      <h2 className="mb-3 font-serif text-2xl font-light leading-snug group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                        {featured.excerpt}
                      </p>
                      <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {featured.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5" /> {featured.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary">
                        Read Article{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            {activeCategory !== "All" && (
              <div className="mb-8 flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${categoryColors[activeCategory] ?? "bg-gray-100 text-gray-700"}`}
                >
                  {activeCategory}
                </span>
                <span className="text-sm text-muted-foreground">
                  {filtered.length} article{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}

            {grid.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {grid.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="group flex"
                  >
                    <Card className="flex flex-col overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 w-full">
                      <div className="relative h-52 overflow-hidden bg-muted">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-center gap-2">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}
                          >
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" /> {post.date}
                          </span>
                        </div>
                        <h3 className="mb-2 font-semibold leading-snug group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" /> {post.author}
                          </span>
                          <span className="flex items-center gap-1 font-medium text-primary">
                            <Clock className="h-3 w-3" /> {post.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <BrandStar
                  size={64}
                  className="mx-auto mb-4 text-primary opacity-20"
                />
                <h3 className="mb-2 text-lg font-semibold">
                  No articles in this category yet
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Check back soon for updates.
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View all articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary px-6 py-20 text-primary-foreground lg:px-8 lg:py-24">
          <BrandPattern className="opacity-[0.15]" />
          <div className="absolute top-10 right-10 opacity-10">
            <BrandStar size={150} className="text-primary-foreground" />
          </div>
          <div className="relative mx-auto max-w-7xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-light lg:text-4xl">
              Ready to Be Part of This Story?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-80">
              Join HCNE and be part of a legacy of excellence in nursing
              education and healthcare leadership.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
