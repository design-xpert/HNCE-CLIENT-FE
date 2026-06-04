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
  title: "Refund & Cancellation Policy – HCNE",
  description:
    "Refund and cancellation terms for fee payments at Heritage Centre for Nursing Excellence.",
};

export default function RefundPolicyPage() {
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
                <BreadcrumbPage>
                  Refund &amp; Cancellation Policy
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-3">
            <BrandStar size={18} className="text-primary/60" />
            <h1 className="font-serif text-3xl font-light lg:text-4xl">
              Refund &amp; Cancellation Policy
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
            This Refund &amp; Cancellation Policy governs the return of fees
            paid to Heritage Centre for Nursing Excellence ("HCNE"). It is
            framed in accordance with the guidelines issued by the University
            Grants Commission (UGC) and the Indian Nursing Council (INC). Please
            read this policy carefully before making any fee payment.
          </p>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              1. Application Fee
            </h2>
            <p>
              The application processing fee paid at the time of submitting an
              admission application is non-refundable under all circumstances,
              including non-selection, withdrawal of application, or failure to
              appear for the entrance test or counseling.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              2. Seat Confirmation Deposit
            </h2>
            <p>
              A non-refundable seat confirmation deposit is collected upon
              acceptance of an admission offer. This amount will be adjusted
              against the first semester fee. It is forfeited if the candidate
              fails to enroll by the stipulated date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              3. Refund on Withdrawal of Admission
            </h2>
            <p>
              Refunds upon withdrawal are processed as per UGC notification and
              are applicable only after full semester fees have been paid. The
              following schedule applies:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-5 py-3 text-left font-medium text-foreground">
                      Date of Withdrawal
                    </th>
                    <th className="px-5 py-3 text-left font-medium text-foreground">
                      Refund Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    [
                      "15 days or more before the start of classes",
                      "Full fees minus processing charges (₹1,000)",
                    ],
                    [
                      "Less than 15 days before the start of classes",
                      "80% of fees paid",
                    ],
                    [
                      "Within 30 days after the start of classes",
                      "50% of fees paid",
                    ],
                    [
                      "More than 30 days after the start of classes",
                      "No refund",
                    ],
                  ].map(([period, refund], i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-3">{period}</td>
                      <td className="px-5 py-3 font-medium text-foreground">
                        {refund}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm">
              The seat confirmation deposit is not included in the refund
              calculation and is forfeited in all withdrawal scenarios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              4. Non-Refundable Charges
            </h2>
            <p>
              The following fees are non-refundable under any circumstances:
            </p>
            <ul className="space-y-2 pl-5">
              {[
                "Application and registration fee",
                "Seat confirmation deposit",
                "Enrollment and affiliation fee paid to the university",
                "One-time amenity charges (identity card, library membership, uniform deposit)",
                "Examination registration fees once submitted to the university",
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
              5. Online Payment Failures & Duplicate Payments
            </h2>
            <ul className="space-y-2 pl-5">
              {[
                "If an online payment is debited from your account but not reflected in HCNE records, please contact the accounts office within 48 hours with the transaction reference number.",
                "Duplicate or excess payments will be refunded within 7–10 working days to the original payment source.",
                "HCNE is not responsible for delays caused by banking or payment gateway systems.",
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
              6. Refund Process
            </h2>
            <p>To initiate a refund request:</p>
            <ol className="space-y-2 pl-5">
              {[
                "Submit a written application to the Accounts Office addressed to the Principal.",
                "Attach the original fee receipts and a copy of your admission letter.",
                "Provide a cancelled cheque or bank account details for NEFT transfer.",
                "Eligible refunds will be processed within 30 working days of receiving a complete application.",
                "Refunds are transferred directly to the bank account of the student or parent/guardian.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 shrink-0 font-medium text-primary">
                    {i + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              7. Contact for Refund Queries
            </h2>
            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <p className="font-medium text-foreground">Accounts Office</p>
              <p className="mt-1">Heritage Centre for Nursing Excellence</p>
              <p>123 Healthcare Avenue, Medical District, City – 560001</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:accounts@hcne.edu.in"
                  className="text-primary hover:underline"
                >
                  accounts@hcne.edu.in
                </a>
              </p>
              <p>Phone: +91 98765 43212</p>
              <p className="mt-2 text-sm">
                Office hours: Monday – Saturday, 9:00 AM – 4:00 PM
              </p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
