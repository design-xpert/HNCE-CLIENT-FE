import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BrandPattern } from "@/components/brand-elements";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CreditCard,
  Heart,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <BrandPattern />
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/20 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-light">
                Ready to Start Your Journey?
              </h3>
              <p className="mt-2 opacity-70">
                Join HCNE and shape your future in nursing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/admissions">
                  <ArrowRight className="h-4 w-4" /> Apply Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                asChild
              >
                <Link href="/online-fee-payment">
                  <CreditCard className="h-4 w-4" /> Pay Fees Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground p-1">
                  <Image
                    src="/images/logo-primary.png"
                    alt="HCNE"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg">HCNE</p>
                  <p className="text-xs text-primary-foreground/70">
                    Heritage Centre for Nursing Excellence
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed">
                Shaping compassionate healthcare leaders since 1989.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Programs", href: "/en/programs" },
                  { label: "Admissions", href: "/admissions" },
                  { label: "Careers", href: "/careers" },
                  { label: "News & Updates", href: "/news" },
                  { label: "Contact Us", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Resources</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { label: "Faculty", href: "/faculty" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Research", href: "/research" },
                  { label: "Facilities", href: "/facilities" },
                  { label: "Accreditations", href: "/accreditations" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-medium">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    123 Healthcare Avenue, Medical District, City - 560001
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>admissions@hcne.edu.in</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-sm">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-primary-foreground/50">
                &copy; {new Date().getFullYear()} Heritage Centre for Nursing
                Excellence. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                {[
                  { label: "Privacy Policy", href: "/policy/privacy" },
                  { label: "Terms & Conditions", href: "/policy/terms" },
                  { label: "Refund Policy", href: "/policy/refund" },
                  { label: "Grievance Policy", href: "/policy/grievance" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-primary-foreground/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <p className="mt-4 text-center text-primary-foreground/50">
              Made with{" "}
              <Heart
                className="inline h-3.5 w-3.5 fill-rose-400 text-rose-400"
                style={{ animation: "heartbeat 1.4s ease-in-out infinite" }}
              />{" "}
              by{" "}
              <a
                href="https://kvtmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-foreground/70 hover:text-white transition-colors"
              >
                KV TechMedia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
