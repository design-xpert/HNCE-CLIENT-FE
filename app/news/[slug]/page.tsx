import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar, BrandPattern } from "@/components/brand-elements";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { blogPosts, categoryColors } from "@/lib/blog-data";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const recentPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  const categoryCounts = blogPosts.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30 px-6 py-4 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/news">
                    News &amp; Updates
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1 max-w-xs">
                    {post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Main Layout */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
              {/* Article */}
              <article>
                {/* Meta row */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h1 className="mb-6 font-serif text-3xl font-light leading-tight lg:text-4xl xl:text-5xl">
                  {post.title}
                </h1>

                {/* Author */}
                <div className="mb-8 flex items-center gap-3 border-b border-border pb-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.authorRole}
                    </p>
                  </div>
                </div>

                {/* Featured image */}
                <div className="relative mb-10 h-72 overflow-hidden rounded-2xl bg-muted lg:h-[420px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="space-y-5">
                  {post.content.map((block, i) => {
                    if (typeof block === "string") {
                      return (
                        <p
                          key={i}
                          className={
                            i === 0
                              ? "text-lg leading-relaxed text-foreground/90"
                              : "leading-relaxed text-foreground/80"
                          }
                        >
                          {block}
                        </p>
                      );
                    }
                    return (
                      <blockquote
                        key={i}
                        className="relative my-8 border-l-4 border-primary py-2 pl-6"
                      >
                        <BrandStar
                          size={16}
                          className="mb-2 text-primary opacity-50"
                        />
                        <p className="text-lg italic leading-relaxed text-foreground/80">
                          &ldquo;{block.quote}&rdquo;
                        </p>
                        <cite className="mt-3 block text-sm font-medium not-italic text-primary">
                          — {block.by}
                        </cite>
                      </blockquote>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-8">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Related — mobile only */}
                {relatedPosts.length > 0 && (
                  <div className="mt-12 lg:hidden">
                    <h3 className="mb-4 font-semibold">
                      More in {post.category}
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/news/${r.slug}`}
                          className="group flex gap-4"
                        >
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                            <Image
                              src={r.image}
                              alt={r.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                              {r.title}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {r.date}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* About HCNE */}
                  <Card className="relative overflow-hidden bg-primary text-primary-foreground">
                    <BrandPattern className="opacity-[0.15]" />
                    <CardContent className="relative p-6">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground p-1">
                        <Image
                          src="/images/logo-primary.png"
                          alt="HCNE"
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h3 className="mb-2 font-semibold">About HCNE</h3>
                      <p className="mb-4 text-sm leading-relaxed text-primary-foreground/80">
                        Heritage Centre for Nursing Excellence has been shaping
                        compassionate nursing leaders since 1989.
                      </p>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-full gap-2"
                        asChild
                      >
                        <Link href="/admissions">
                          Apply Now <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Categories */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-semibold">Browse by Category</h3>
                      <div className="space-y-1">
                        {Object.entries(categoryCounts).map(([cat, count]) => (
                          <Link
                            key={cat}
                            href="/news"
                            className="group flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                              {cat}
                            </span>
                            <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                              {count}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Posts */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-semibold">Recent Posts</h3>
                      <div className="space-y-4">
                        {recentPosts.map((r) => (
                          <Link
                            key={r.slug}
                            href={`/news/${r.slug}`}
                            className="group flex gap-3"
                          >
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                              <Image
                                src={r.image}
                                alt={r.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="line-clamp-2 text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                                {r.title}
                              </p>
                              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3" /> {r.date}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full gap-2"
                        asChild
                      >
                        <Link href="/news">
                          All Articles <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Subscribe */}
                  <Card className="bg-muted/50">
                    <CardContent className="p-6">
                      <h3 className="mb-2 font-semibold">Stay Updated</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Get the latest HCNE news in your inbox.
                      </p>
                      <div className="space-y-2">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <Button size="sm" className="w-full">
                          Subscribe
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles — desktop */}
        {relatedPosts.length > 0 && (
          <section className="hidden bg-muted/30 px-6 py-16 lg:block lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-serif text-2xl font-light">
                  More in {post.category}
                </h2>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link href="/news">
                    All Articles <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/news/${r.slug}`}
                    className="group block"
                  >
                    <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                      <div className="relative h-44 overflow-hidden bg-muted">
                        <Image
                          src={r.image}
                          alt={r.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex items-center gap-2">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[r.category] ?? "bg-gray-100 text-gray-700"}`}
                          >
                            {r.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {r.date}
                          </span>
                        </div>
                        <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors">
                          {r.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary px-6 py-20 text-primary-foreground lg:px-8 lg:py-24">
          <BrandPattern className="opacity-[0.15]" />
          <div className="absolute top-10 right-10 opacity-10">
            <BrandStar size={150} className="text-primary-foreground" />
          </div>
          <div className="relative mx-auto max-w-7xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-light lg:text-4xl">
              Begin Your Nursing Journey
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-80">
              Join HCNE and be part of a legacy of excellence in nursing
              education.
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
