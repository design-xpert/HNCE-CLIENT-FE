import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar } from "@/components/brand-elements";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Privacy Policy – HCNE",
  description:
    "How Heritage Centre for Nursing Excellence collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Page Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-3">
            <BrandStar size={18} className="text-primary/60" />
            <h1 className="font-serif text-3xl font-light lg:text-4xl">
              Privacy Policy
            </h1>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: January 1, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <div className="prose-like space-y-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <p>
            Heritage Centre for Nursing Excellence ("HCNE", "we", "our", or
            "us") is committed to protecting the privacy and personal
            information of our students, applicants, staff, and website
            visitors. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you interact with our
            website, admissions process, or academic services.
          </p>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              1. Information We Collect
            </h2>
            <p>
              We may collect the following categories of personal information:
            </p>
            <ul className="space-y-2 pl-5">
              {[
                "Identity data: full name, date of birth, photograph, gender",
                "Contact data: postal address, email address, phone number",
                "Academic data: 10+2 marks, qualifying examination scores, previous institution details",
                "Payment data: transaction IDs and fee payment records (card/bank details are not stored)",
                "Device & usage data: IP address, browser type, pages visited, session duration via cookies",
                "Communication records: enquiry forms, counseling sessions, and email correspondence",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-2 pl-5">
              {[
                "To process admissions applications and communicate admission status",
                "To collect and manage academic fees and issue receipts",
                "To maintain student academic and attendance records as required by INC and affiliated universities",
                "To send important institutional notices, exam schedules, and result updates",
                "To respond to enquiries submitted via our website or admissions office",
                "To improve our website and tailor our digital outreach",
                "To comply with legal obligations under applicable Indian law",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              3. Information Sharing & Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. We may
              share it only in the following limited circumstances:
            </p>
            <ul className="space-y-2 pl-5">
              {[
                "Affiliated university and regulatory bodies (INC, State Nursing Council) as required for enrollment and examination",
                "Government agencies when required by law, court order, or regulatory obligation",
                "Third-party service providers (e.g., payment gateways, SMS providers) under strict confidentiality agreements",
                "Hospital partners for clinical rotation and internship coordination",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              4. Cookies & Tracking
            </h2>
            <p>
              Our website uses cookies to enhance your browsing experience,
              analyze site traffic, and personalise content. Cookies are small
              text files stored on your device. You may disable cookies in your
              browser settings; however, some features of the website may not
              function correctly without them. We use both session cookies
              (deleted when you close the browser) and persistent cookies
              (retained for a set period).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access,
              alteration, disclosure, or destruction. All payment transactions
              are processed through PCI-DSS compliant payment gateways. Access
              to student records is restricted to authorised staff only.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              6. Retention of Data
            </h2>
            <p>
              Student academic records are retained for the duration prescribed
              by INC regulations and affiliated university norms. Enquiry and
              application data for non-admitted candidates is retained for one
              academic year and thereafter securely deleted. Payment records are
              retained for seven years as required under Indian financial
              regulations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="space-y-2 pl-5">
              {[
                "Access the personal information we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of data that is no longer required (subject to legal retention obligations)",
                "Withdraw consent for marketing communications at any time",
                "Lodge a complaint with the relevant data protection authority",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. The updated
              version will be posted on this page with a revised date. Continued
              use of our services after any changes constitutes acceptance of
              the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              9. Contact Us
            </h2>
            <p>
              For any questions, concerns, or requests regarding this Privacy
              Policy or your personal data, please contact:
            </p>
            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <p className="font-medium text-foreground">
                Data Protection Officer
              </p>
              <p className="mt-1">Heritage Centre for Nursing Excellence</p>
              <p>123 Healthcare Avenue, Medical District, City – 560001</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:privacy@hcne.edu.in"
                  className="text-primary hover:underline"
                >
                  privacy@hcne.edu.in
                </a>
              </p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
