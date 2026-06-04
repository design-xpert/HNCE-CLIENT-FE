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
  title: "Grievance Redressal Policy – HCNE",
  description:
    "Grievance redressal mechanism for students, staff, and stakeholders at Heritage Centre for Nursing Excellence.",
};

export default function GrievancePolicyPage() {
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
                <BreadcrumbPage>Grievance Redressal Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-3">
            <BrandStar size={18} className="text-primary/60" />
            <h1 className="font-serif text-3xl font-light lg:text-4xl">
              Grievance Redressal Policy
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
            Heritage Centre for Nursing Excellence ("HCNE") is committed to
            providing a fair, transparent, and timely mechanism for addressing
            grievances raised by students, parents, staff, and other
            stakeholders. This policy is established in accordance with UGC
            (Grievance Redressal) Regulations, 2023 and applicable guidelines of
            the Indian Nursing Council.
          </p>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              1. Scope
            </h2>
            <p>This policy covers grievances related to:</p>
            <ul className="space-y-2 pl-5">
              {[
                "Admission process, eligibility, and seat allotment",
                "Fee collection, receipts, and refund disputes",
                "Academic matters — examination, results, attendance, and assessments",
                "Quality of teaching, infrastructure, and facilities",
                "Hostel accommodation, mess services, and campus amenities",
                "Conduct of staff or fellow students including harassment or discrimination",
                "Delay or denial of certificates, transcripts, or migration documents",
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
              2. Grievance Redressal Committee
            </h2>
            <p>
              HCNE has constituted a Grievance Redressal Committee (GRC)
              comprising the following members:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-5 py-3 text-left font-medium text-foreground">
                      Role
                    </th>
                    <th className="px-5 py-3 text-left font-medium text-foreground">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Chairperson", "Principal, HCNE"],
                    ["Member", "Vice Principal / HOD Clinical"],
                    ["Member", "Student Welfare Officer"],
                    ["Member", "Senior Faculty Representative"],
                    ["Member (Student)", "Elected Student Representative"],
                    ["Member (External)", "Independent Academic Expert"],
                  ].map(([role, designation], i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">
                        {role}
                      </td>
                      <td className="px-5 py-3">{designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              The GRC meets at least once a month and on an ad-hoc basis when an
              urgent grievance is received.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              3. How to Submit a Grievance
            </h2>
            <p>
              Grievances may be submitted through any of the following channels:
            </p>
            <ul className="space-y-3 pl-5">
              {[
                {
                  channel: "Online Form",
                  detail:
                    "Submit via the Grievance Portal on the Student Dashboard (for enrolled students)",
                },
                {
                  channel: "Email",
                  detail:
                    "grievance@hcne.edu.in — include your name, registration number, and a clear description",
                },
                {
                  channel: "Written Application",
                  detail:
                    "Drop a signed letter in the Grievance Box located at the Administrative Block reception",
                },
                {
                  channel: "In Person",
                  detail:
                    "Visit the Student Welfare Office (Room 104, Admin Block) during office hours",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>
                    <span className="font-medium text-foreground">
                      {item.channel}:
                    </span>{" "}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              Anonymous grievances are accepted for serious misconduct matters
              only. All other grievances must include the complainant's identity
              for proper investigation and follow-up.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              4. Resolution Timeline
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-5 py-3 text-left font-medium text-foreground">
                      Stage
                    </th>
                    <th className="px-5 py-3 text-left font-medium text-foreground">
                      Timeline
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Acknowledgement of grievance", "Within 3 working days"],
                    [
                      "Initial review and assignment to relevant department",
                      "Within 7 working days",
                    ],
                    [
                      "Resolution and communication to complainant",
                      "Within 30 working days",
                    ],
                    [
                      "Appeal to GRC (if unsatisfied)",
                      "Within 15 days of receiving resolution",
                    ],
                    [
                      "GRC hearing and final decision",
                      "Within 30 days of appeal",
                    ],
                  ].map(([stage, timeline], i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-3">{stage}</td>
                      <td className="px-5 py-3 font-medium text-foreground">
                        {timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              5. Escalation
            </h2>
            <p>
              If a complainant is not satisfied with the resolution provided by
              the GRC, they may escalate the matter to:
            </p>
            <ul className="space-y-2 pl-5">
              {[
                "The affiliated university's Student Grievance Cell",
                "The State Nursing Council",
                "The Indian Nursing Council (for program-related matters)",
                "The UGC Online Grievance Portal at grievance.ugc.ac.in",
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
              6. Anti-Ragging Policy
            </h2>
            <p>
              HCNE maintains a strict zero-tolerance policy against ragging in
              any form as mandated by the Supreme Court of India and UGC
              Anti-Ragging Regulations. Any incident of ragging must be reported
              immediately to the Anti-Ragging Committee or the national helpline{" "}
              <span className="font-medium text-foreground">1800-180-5522</span>
              . Proven cases will result in immediate expulsion and may lead to
              criminal prosecution.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              7. Confidentiality
            </h2>
            <p>
              All grievances and related proceedings are treated with strict
              confidentiality. Details of the complainant and the nature of the
              grievance will not be disclosed to any party other than those
              directly involved in the resolution process.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b border-border pb-3 font-serif text-xl font-light text-foreground">
              8. Contact
            </h2>
            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <p className="font-medium text-foreground">
                Student Welfare Officer / GRC Coordinator
              </p>
              <p className="mt-1">Heritage Centre for Nursing Excellence</p>
              <p>Room 104, Administrative Block</p>
              <p>123 Healthcare Avenue, Medical District, City – 560001</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:grievance@hcne.edu.in"
                  className="text-primary hover:underline"
                >
                  grievance@hcne.edu.in
                </a>
              </p>
              <p>Phone: +91 98765 43213</p>
              <p className="mt-2 text-sm">
                Office hours: Monday – Saturday, 9:00 AM – 5:00 PM
              </p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
