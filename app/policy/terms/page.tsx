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
  title: "Terms & Conditions – HCNE",
  description:
    "Terms and conditions governing admission, use of facilities, and academic conduct at Heritage Centre for Nursing Excellence.",
};

export default function TermsPage() {
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
                <BreadcrumbPage>Terms &amp; Conditions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-3">
            <BrandStar size={18} className="text-primary/60" />
            <h1 className="font-serif text-3xl font-light lg:text-4xl">
              Terms &amp; Conditions
            </h1>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: January 1, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <div className="space-y-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <p>
            By accessing the HCNE website, submitting an application for
            admission, or enrolling as a student at Heritage Centre for Nursing
            Excellence ("HCNE"), you agree to be bound by the following Terms
            and Conditions. Please read them carefully before proceeding.
          </p>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              1. Admission & Eligibility
            </h2>
            <ul className="space-y-2 pl-5">
              {[
                "Admission to all programs is subject to eligibility criteria prescribed by the Indian Nursing Council (INC) and the affiliated university.",
                "Submission of an application does not guarantee admission. HCNE reserves the right to reject any application without stating reasons.",
                "All documents submitted for admission must be genuine. Any misrepresentation will result in immediate cancellation of admission without refund.",
                "Admission is provisional until verification of original certificates is completed.",
                "HCNE reserves the right to modify intake numbers, program structure, or eligibility criteria in accordance with regulatory requirements.",
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
              2. Fees & Payments
            </h2>
            <ul className="space-y-2 pl-5">
              {[
                "All fees must be paid by the dates specified in the admission offer letter. Delay may result in cancellation of the seat.",
                "Fees are subject to revision by the Fee Regulatory Committee or the affiliated university. Any revision will be communicated in advance.",
                "Fee receipts will be issued for all payments. Students must preserve receipts for the duration of the program.",
                "Online payments are processed through secure, third-party payment gateways. HCNE is not responsible for transaction failures caused by bank or gateway errors.",
                "Refund of fees, where applicable, is governed by the Refund & Cancellation Policy available on this website.",
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
              3. Academic Conduct & Attendance
            </h2>
            <ul className="space-y-2 pl-5">
              {[
                "Students must maintain a minimum of 75% attendance in theory and practical classes as mandated by INC and the affiliated university.",
                "Students are expected to adhere to the academic calendar, examination schedules, and submission deadlines.",
                "Any form of academic dishonesty including plagiarism, impersonation, or use of unfair means in examinations will be subject to disciplinary action.",
                "Clinical postings and hospital internships are compulsory. Absence without prior approval will be treated as a breach of academic terms.",
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
              4. Code of Conduct
            </h2>
            <p>
              All students are required to conduct themselves with dignity,
              respect, and professionalism at all times — within the campus,
              affiliated hospitals, and during any HCNE-related activity. The
              following are strictly prohibited:
            </p>
            <ul className="space-y-2 pl-5">
              {[
                "Ragging in any form — HCNE maintains a zero-tolerance anti-ragging policy in compliance with UGC regulations",
                "Sexual harassment — addressed under the POSH Act, 2013",
                "Damage to institutional property or equipment",
                "Possession or consumption of alcohol, tobacco, or illegal substances on campus",
                "Unauthorised use of another person's identity, credentials, or academic work",
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
              5. Intellectual Property
            </h2>
            <p>
              All content on the HCNE website — including text, images, logos,
              study materials, and research publications — is the intellectual
              property of HCNE or its licensors. Reproduction, distribution, or
              commercial use of any content without prior written permission is
              strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              6. Hostel & Campus Facilities
            </h2>
            <ul className="space-y-2 pl-5">
              {[
                "Hostel accommodation is allotted on a first-come, first-served basis and is subject to availability.",
                "Hostel residents must abide by the hostel rules communicated at the time of allotment.",
                "HCNE reserves the right to revoke hostel accommodation for disciplinary reasons.",
                "Use of campus facilities is subject to institutional policies and prescribed timings.",
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
              7. Disclaimer of Liability
            </h2>
            <p>
              HCNE endeavours to maintain accurate and up-to-date information on
              its website but does not warrant the completeness or accuracy of
              any content. HCNE shall not be liable for any direct, indirect, or
              consequential loss arising from reliance on website information or
              any interruption of services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              8. Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by the laws of India. Any
              disputes arising out of these terms shall be subject to the
              exclusive jurisdiction of the courts located in the city where
              HCNE is registered.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              9. Amendments
            </h2>
            <p>
              HCNE reserves the right to amend these Terms and Conditions at any
              time. Updated terms will be published on this page. Continued
              enrollment or use of our services constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              10. Contact
            </h2>
            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <p className="font-medium text-foreground">Registrar's Office</p>
              <p className="mt-1">Heritage Centre for Nursing Excellence</p>
              <p>123 Healthcare Avenue, Medical District, City – 560001</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:registrar@hcne.edu.in"
                  className="text-primary hover:underline"
                >
                  registrar@hcne.edu.in
                </a>
              </p>
              <p>Phone: +91 98765 43211</p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
