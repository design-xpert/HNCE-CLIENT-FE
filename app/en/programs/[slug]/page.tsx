import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProspectusDialog } from "@/components/prospectus-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandStar, BrandPattern, SectionBadge } from "@/components/brand-elements";
import {
  Download,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  BookOpen,
  GraduationCap,
  Phone,
  Mail,
  Stethoscope,
} from "lucide-react";
import EnquiryForm from "./enquiry-form";

export const revalidate = 3600; // ISR cache revalidation every hour

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Complete static fallbacks for each program
const programStaticFallbacks: Record<string, any> = {
  "bsc-nursing": {
    name: "Bachelor of Science in Nursing",
    shortName: "B.Sc. Nursing",
    duration: "4 Years",
    intake: "60 Students",
    fee: "₹1.5L/Year",
    badge: "UG Program",
    eligibility: "12th with PCB",
    description: "Comprehensive degree program in nursing with emphasis on clinical excellence, research, and patient care management.",
    highlights: ["INC Recognized", "Clinical Focus", "Research Opportunities"],
    heroImage: "/images/nursing-head-img.jpg",
    aboutImage: "/images/college-nurses.jpeg",
    aboutDescription1: "B.Sc. Nursing is a 4-year comprehensive undergraduate program designed to produce competent, compassionate, and well-qualified nursing professionals equipped with the latest knowledge and skills in healthcare delivery.",
    aboutDescription2: "The program emphasizes a strong foundation in theoretical knowledge combined with extensive clinical experience across various healthcare settings including teaching hospitals, community health centers, and specialty clinics.",
    curriculum: [
      {
        year: "Year 1",
        title: "Foundations of Nursing",
        description: "Build your nursing foundation with core sciences and fundamental clinical skills.",
        subjects: ["Anatomy & Physiology", "Microbiology", "Biochemistry", "Nursing Fundamentals"],
        image: "/images/college-nurses.jpeg",
      },
      {
        year: "Year 2",
        title: "Medical-Surgical Nursing",
        description: "Master clinical practice in medical and surgical wards through hands-on training.",
        subjects: ["Medical Nursing", "Surgical Nursing", "Pharmacology", "Pathology"],
        image: "/images/nurses-together.jpeg",
      },
      {
        year: "Year 3",
        title: "Specialized Nursing",
        description: "Expand into specialized fields of community, mental health, and maternal care.",
        subjects: ["Community Health Nursing", "Mental Health Nursing", "Pediatric Nursing", "Obstetric Nursing"],
        image: "/images/child-about.webp",
      },
    ],
    eligibilityCriteria: [
      "Passed 10+2 with Physics, Chemistry, Biology",
      "Minimum 50% marks (45% for reserved categories)",
      "Age 17–35 years as on Dec 31st of admission year",
      "English as a subject or medium of education",
      "Medically fit with no color blindness",
      "Valid admission test score (as per state norms)",
    ],
    requiredDocs: [
      "10th & 12th Marks cards (Original)",
      "Transfer & Migration Certificates",
      "Character & Conduct Certificate",
      "Medical Fitness Certificate",
      "Passport-size photographs (6)",
      "Aadhar card / ID proof",
      "Admission test scorecard",
    ],
    feeStructure: {
      type: "semesters",
      semesters: ["Sem I", "Sem II", "Sem III", "Sem IV"],
      rows: [
        { head: "Tuition Fee", sem1: "₹37,500", sem2: "₹37,500", sem3: "₹37,500", sem4: "₹37,500", total: "₹1,50,000" },
        { head: "Educational Technology Services (ETS)*", sem1: "₹5,000", sem2: "—", sem3: "—", sem4: "—", total: "₹5,000" },
        { head: "Career Advancement Services (CAS)**", sem1: "—", sem2: "₹3,000", sem3: "—", sem4: "—", total: "₹3,000" },
        { head: "Laboratory Fee", sem1: "₹2,500", sem2: "₹2,500", sem3: "₹2,500", sem4: "₹2,500", total: "₹10,000" },
        { head: "Library Fee", sem1: "₹1,250", sem2: "₹1,250", sem3: "₹1,250", sem4: "₹1,250", total: "₹5,000" },
        { head: "Examination Fee", sem1: "₹2,000", sem2: "₹2,000", sem3: "₹2,000", sem4: "₹2,000", total: "₹8,000" }
      ],
      notes: [
        "*Fee for Educational Technology Services (ETS) payable at the time of Admission.",
        "**Fee for Career Advancement Services (CAS) payable along with the 2nd Semester fee.",
        "The fees for the above program is subject to revision."
      ],
      totals: { sem1: "₹48,250", sem2: "₹46,250", sem3: "₹43,250", sem4: "₹43,250", grand: "₹1,81,000" }
    },
    faculty: [
      { name: "Dr. Priya Sharma", role: "Ph.D. (Nursing)", exp: "18+ years", specialty: "Medical-Surgical Nursing", img: "10" },
      { name: "Prof. Rajesh Kumar", role: "M.Sc., B.Ed.", exp: "15+ years", specialty: "Community Health", img: "11" },
      { name: "Ms. Anjali Patel", role: "M.Sc. (Pediatric)", exp: "12+ years", specialty: "Pediatric Nursing", img: "12" }
    ],
    outcomes: [
      "Provide safe, compassionate, and culturally sensitive nursing care",
      "Apply critical thinking to solve complex healthcare problems",
      "Communicate effectively with healthcare teams and patients",
      "Demonstrate leadership in nursing and healthcare settings",
      "Conduct research and contribute to evidence-based practice",
      "Adapt to global healthcare environments and challenges",
      "Promote health and prevent diseases in community settings",
      "Practice ethically and maintain professional standards"
    ],
    faqs: [
      { q: "What is the admission process for B.Sc. Nursing?", a: "Admission is done through merit and entrance examination followed by counseling. Eligible candidates can apply during the admission window." },
      { q: "Are there scholarships available?", a: "Yes, merit-based and need-based scholarships are available for eligible candidates based on performance and financial need." },
      { q: "What are the job opportunities after graduation?", a: "Graduates can work as nurses in hospitals, clinics, community health centers, universities, and internationally in countries like USA, UK, Canada, and Australia." },
      { q: "Is the program recognized internationally?", a: "Yes, B.Sc. Nursing from HCNE is INC recognized and qualifies for international nursing licensure examinations." }
    ]
  },
  "gnm": {
    name: "General Nursing and Midwifery",
    shortName: "GNM",
    duration: "3 Years",
    intake: "40 Students",
    fee: "₹80K/Year",
    badge: "Diploma Program",
    eligibility: "10+2 Any Stream",
    description: "Practical-focused 3-year diploma program designed to produce job-ready nursing professionals for immediate employment.",
    highlights: ["Hands-On Training", "Clinical Placement", "Job Ready"],
    heroImage: "/images/nursing-head-img.jpg",
    aboutImage: "/images/nurses-together.jpeg",
    aboutDescription1: "General Nursing and Midwifery (GNM) is a 3-year diploma program designed to prepare students to work effectively as clinical nurse practitioners in various healthcare settings.",
    aboutDescription2: "The curriculum is heavily focused on practical training and clinical experience, ensuring that graduates are job-ready and able to handle real-world nursing responsibilities from day one.",
    curriculum: [
      {
        year: "Year 1",
        title: "Fundamentals of Nursing",
        description: "Build a strong foundation in anatomy, basic nursing theory, and fundamental clinical practice.",
        subjects: ["Anatomy & Physiology", "Microbiology", "Basic Nursing", "Psychology Basics"],
        image: "/images/college-nurses.jpeg",
      },
      {
        year: "Year 2",
        title: "Clinical Nursing Practice",
        description: "Develop hands-on clinical skills across medical, surgical, and community health settings.",
        subjects: ["Medical Nursing", "Surgical Nursing", "Pharmacology", "Community Health"],
        image: "/images/nurses-together.jpeg",
      },
      {
        year: "Year 3",
        title: "Specialized & Practical",
        description: "Complete clinical rotations and specialize in obstetric, child, and mental health nursing.",
        subjects: ["Obstetric & Child Health", "Mental Health Nursing", "Clinical Rotations", "Final Practicum"],
        image: "/images/child-about.webp",
      },
    ],
    eligibilityCriteria: [
      "Passed 10+2 / HSC in any stream (Science preferred)",
      "Minimum 45% aggregate marks in 10+2 (40% for reserved categories)",
      "Age 17–35 years as on Dec 31st of admission year",
      "English as a compulsory subject in 10+2",
      "Medically fit with certificate from authorized doctor",
    ],
    requiredDocs: [
      "10th & 12th Mark Sheets",
      "Transfer Certificate",
      "Character Certificate",
      "Medical Fitness Certificate",
      "Passport-size photographs (6)",
      "Aadhar card / ID proof",
      "Admission test scorecard",
    ],
    feeStructure: {
      type: "semesters_6",
      semesters: ["Sem I", "Sem II", "Sem III", "Sem IV", "Sem V", "Sem VI"],
      rows: [
        { head: "Tuition Fee", sems: ["₹40,000", "₹40,000", "₹40,000", "₹40,000", "₹40,000", "₹40,000"], total: "₹2,40,000" },
        { head: "Educational Technology Services (ETS)*", sems: ["₹2,000", "—", "—", "—", "—", "—"], total: "₹2,000" },
        { head: "Career Advancement Services (CAS)**", sems: ["—", "₹1,500", "—", "—", "—", "—"], total: "₹1,500" },
        { head: "Laboratory Fee", sems: ["₹800", "₹800", "₹800", "₹800", "₹800", "₹800"], total: "₹4,800" },
        { head: "Library Fee", sems: ["₹500", "₹500", "₹500", "₹500", "₹500", "₹500"], total: "₹3,000" },
        { head: "Examination Fee", sems: ["—", "₹1,600", "—", "₹1,600", "—", "₹1,600"], total: "₹4,800" }
      ],
      notes: [
        "*Fee for Educational Technology Services (ETS) payable at the time of Admission.",
        "**Fee for Career Advancement Services (CAS) payable along with the 2nd Semester fee.",
        "The fees for the GNM program is subject to revision."
      ],
      totals: { sems: ["₹43,300", "₹44,400", "₹41,300", "₹42,900", "₹41,300", "₹42,900"], grand: "₹2,56,100" }
    },
    faculty: [
      { name: "Mrs. Sarah D'Souza", role: "M.Sc. (Nursing)", exp: "14+ years", specialty: "Obstetric Nursing", img: "13" },
      { name: "Mr. Amit Patel", role: "M.Sc. (Nursing)", exp: "10+ years", specialty: "Mental Health", img: "14" },
      { name: "Ms. Preeti Verma", role: "B.Sc. (Nursing)", exp: "8+ years", specialty: "Fundamentals of Nursing", img: "15" }
    ],
    outcomes: [
      "Execute standard nursing care procedures with high competence",
      "Assist doctors in surgery, intensive care, and emergency wards",
      "Administer medications and monitor patient vitals accurately",
      "Educate patients on health management and post-discharge care",
      "Maintain complete and accurate patient documentation",
      "Respond effectively to emergency medical situations",
      "Adhere to ethical codes and nursing standards of practice"
    ],
    faqs: [
      { q: "Is GNM a degree or diploma?", a: "GNM is a 3-year diploma program. It focuses on hands-on practical nursing skills to enable immediate employment." },
      { q: "Can arts students apply for GNM?", a: "Yes, candidates from any stream (Science, Commerce, or Arts) in 10+2 are eligible to apply for the GNM program, provided they meet the minimum mark requirements." },
      { q: "What is the difference between GNM and B.Sc. Nursing?", a: "B.Sc. Nursing is a 4-year undergraduate degree, whereas GNM is a 3-year diploma. B.Sc. Nursing includes more academic and research focus, while GNM is more clinical and practical-focused." },
      { q: "Is there a hostel facility?", a: "Yes, separate residential hostel facilities are available for male and female students with all amenities." }
    ]
  }
};

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = slug === "gnm-diploma" ? "gnm" : slug;

  // 1. Fetch from API
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002";
  let apiProg: any = null;
  let apiSuccess = false;
  try {
    const res = await fetch(`${backendUrl}/api/programs/public`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const programs = data.programs || [];
      apiProg = programs.find(
        (p: any) => p.slug === normalizedSlug || (normalizedSlug === "gnm" && p.slug === "gnm-diploma")
      );
      apiSuccess = true;
    }
  } catch (err) {
    console.error("Error fetching program details in Dynamic Page:", err);
  }

  // Find the static fallback config
  const staticConfig = programStaticFallbacks[normalizedSlug];

  // If the API call succeeded but the program is not in the active list (deactivated on backend),
  // or if both the API program and static config are missing, trigger 404
  if ((apiSuccess && !apiProg) || (!apiProg && !staticConfig)) {
    notFound();
  }

  // 2. Merge API properties and fallback static properties
  // Prefer API data, fall back to static details if not coming or empty
  const name = apiProg?.name || staticConfig?.name;
  const shortName = apiProg?.shortName || staticConfig?.shortName;
  const duration = apiProg?.duration || staticConfig?.duration;
  const intake = apiProg?.totalSeats ? `${apiProg.totalSeats} Students` : staticConfig?.intake;
  const fee = apiProg?.annualFee
    ? `₹${apiProg.annualFee >= 100000 ? `${(apiProg.annualFee / 100000).toFixed(1)}L` : `${apiProg.annualFee / 1000}K`}/Year`
    : staticConfig?.fee;
  const eligibility = apiProg?.eligibility || staticConfig?.eligibility;
  const description = apiProg?.description || staticConfig?.description;
  
  const highlights =
    apiProg?.highlights && apiProg.highlights.length > 0
      ? apiProg.highlights
      : staticConfig?.highlights || [];

  const badge = staticConfig?.badge || (normalizedSlug === "gnm" ? "Diploma Program" : "UG Program");
  const heroImage = staticConfig?.heroImage || "/images/nursing-head-img.jpg";
  const aboutImage = staticConfig?.aboutImage || "/images/college-nurses.jpeg";
  const aboutDescription1 = staticConfig?.aboutDescription1;
  const aboutDescription2 = staticConfig?.aboutDescription2;
  const curriculum = staticConfig?.curriculum || [];
  const eligibilityCriteria = staticConfig?.eligibilityCriteria || [];
  const requiredDocs = staticConfig?.requiredDocs || [];
  const feeStructure = staticConfig?.feeStructure;
  const faculty = staticConfig?.faculty || [];
  const outcomes = staticConfig?.outcomes || [];
  const faqs = staticConfig?.faqs || [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <BrandPattern className="opacity-[0.18]" />
          <div className="absolute top-10 right-10 opacity-20">
            <BrandStar size={120} className="text-primary-foreground" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <BrandStar size={80} className="text-primary-foreground" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="max-w-3xl">
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary-foreground/15 text-primary-foreground"
                >
                  <Stethoscope className="h-3 w-3 mr-1" /> {badge}
                </Badge>
                <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl text-balance">
                  {name} ({duration})
                </h1>
                <p className="mt-4 text-lg opacity-80 leading-relaxed">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-6">
                  {duration && (
                    <div className="flex flex-col gap-1">
                      <span className="text-sm opacity-70">Duration</span>
                      <span className="font-semibold text-lg">{duration}</span>
                    </div>
                  )}
                  {intake && (
                    <div className="flex flex-col gap-1">
                      <span className="text-sm opacity-70">Intake</span>
                      <span className="font-semibold text-lg">{intake}</span>
                    </div>
                  )}
                  {fee && (
                    <div className="flex flex-col gap-1">
                      <span className="text-sm opacity-70">Fee</span>
                      <span className="font-semibold text-lg">{fee}</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <Link href="/admissions">
                      <ArrowRight className="h-4 w-4" /> Apply Now
                    </Link>
                  </Button>
                  <ProspectusDialog
                    defaultProgram={normalizedSlug === "gnm" ? "gnm" : "bsc-nursing"}
                    trigger={
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                      >
                        <Download className="h-4 w-4" /> Prospectus
                      </Button>
                    }
                  />
                </div>
              </div>

              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={heroImage}
                  alt={`${shortName} Students`}
                  fill
                  loading="eager"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative px-6 py-16 lg:px-8 lg:py-24">
          <div className="absolute right-0 top-20 opacity-5">
            <BrandStar size={300} className="text-primary" />
          </div>

          <div className="relative mx-auto max-w-7xl space-y-20">
            {/* About the Program */}
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg bg-muted">
                <Image
                  src={aboutImage}
                  alt="Program Overview"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionBadge>
                  About the Program
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-4">
                  Program Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {aboutDescription1}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutDescription2}
                </p>
              </div>
            </div>

            {/* Curriculum Structure / Highlights */}
            {curriculum.length > 0 && (
              <div>
                <SectionBadge>
                  Curriculum Structure
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                  Program Highlights
                </h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                  {curriculum.map((highlight: any, idx: number) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer bg-muted"
                    >
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute inset-0 bg-black/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-[calc(100%-5rem)] transition-transform duration-500 ease-out group-hover:translate-y-0">
                        <div className="p-6">
                          <span className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-1">
                            {highlight.year}
                          </span>
                          <h3 className="text-white font-serif text-xl font-medium mb-3">
                            {highlight.title}
                          </h3>
                          <div className="opacity-0 translate-y-2 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
                            <p className="text-white/80 text-sm mb-4">
                              {highlight.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {highlight.subjects.map((subject: string, i: number) => (
                                <span
                                  key={i}
                                  className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-sm"
                                >
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Eligibility & Documents */}
            <div>
              <SectionBadge>
                Eligibility & Admission
              </SectionBadge>
              <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                Who Can Apply
              </h2>
              <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-border shadow-sm">
                {/* Left — primary panel */}
                <div className="bg-primary text-primary-foreground p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-9 w-9 rounded-full bg-primary-foreground/15 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <h3 className="font-serif text-xl font-medium">
                      Eligibility Criteria
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {/* Display dynamic eligibility if available, otherwise display checklist */}
                    {eligibility ? (
                      <div className="flex gap-4 items-start">
                        <span className="h-6 w-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm opacity-85 leading-relaxed">
                          {eligibility}
                        </span>
                      </div>
                    ) : null}
                    {eligibilityCriteria.map((criterion: string, idx: number) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <span className="h-6 w-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {eligibility ? idx + 2 : idx + 1}
                        </span>
                        <span className="text-sm opacity-85 leading-relaxed">
                          {criterion}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — light panel */}
                <div className="bg-muted/40 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium">
                      Required Documents
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {requiredDocs.map((doc: string, idx: number) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {doc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Section */}
            {feeStructure && (
              <div>
                <SectionBadge>
                  Fees Structure
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                  Fee Details
                </h2>
                <Card className="border-2 border-transparent hover:border-primary/10">
                  <CardContent className="p-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm min-w-[600px]">
                        <thead>
                          <tr className="border-b-2 border-primary/20">
                            <th className="text-left py-3 pr-4 font-semibold">
                              Fee Head
                            </th>
                            {feeStructure.semesters.map((sem: string, idx: number) => (
                              <th key={idx} className="text-right py-3 px-4 font-semibold">
                                {sem}
                              </th>
                            ))}
                            <th className="text-right py-3 pl-4 font-semibold">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {feeStructure.rows.map((row: any, idx: number) => (
                            <tr key={idx} className="border-b border-border">
                              <td className="py-3 pr-4 font-medium">
                                {row.head}
                              </td>
                              {feeStructure.type === "semesters" ? (
                                <>
                                  <td className="text-right py-3 px-4 text-muted-foreground">{row.sem1}</td>
                                  <td className="text-right py-3 px-4 text-muted-foreground">{row.sem2}</td>
                                  <td className="text-right py-3 px-4 text-muted-foreground">{row.sem3}</td>
                                  <td className="text-right py-3 px-4 text-muted-foreground">{row.sem4}</td>
                                </>
                              ) : (
                                row.sems.map((s: string, sIdx: number) => (
                                  <td key={sIdx} className="text-right py-3 px-4 text-muted-foreground">
                                    {s}
                                  </td>
                                ))
                              )}
                              <td className="text-right py-3 pl-4 font-semibold text-primary">
                                {row.total}
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-primary/5">
                            <td className="py-4 pl-4 pr-4 font-bold text-base rounded-l-lg">
                              Semester Total
                            </td>
                            {feeStructure.type === "semesters" ? (
                              <>
                                <td className="text-right py-4 px-4 font-bold">{feeStructure.totals.sem1}</td>
                                <td className="text-right py-4 px-4 font-bold">{feeStructure.totals.sem2}</td>
                                <td className="text-right py-4 px-4 font-bold">{feeStructure.totals.sem3}</td>
                                <td className="text-right py-4 px-4 font-bold">{feeStructure.totals.sem4}</td>
                              </>
                            ) : (
                              feeStructure.totals.sems.map((t: string, tIdx: number) => (
                                <td key={tIdx} className="text-right py-4 px-4 font-bold">
                                  {t}
                                </td>
                              ))
                            )}
                            <td className="text-right py-4 pl-4 font-bold text-lg text-primary rounded-r-lg">
                              {feeStructure.totals.grand}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 space-y-1 text-xs text-muted-foreground">
                      {feeStructure.notes.map((note: string, idx: number) => (
                        <p key={idx}>{note}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* What You'll Achieve + Admission Form */}
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Left — Guide Card */}
              <div className="space-y-4">
                <Card className="overflow-hidden border-0 shadow-lg bg-card">
                  {/* Gradient header */}
                  <div className="relative bg-gradient-to-br from-primary to-primary/70 px-8 pt-8 pb-16 text-primary-foreground overflow-hidden">
                    <div className="absolute -top-4 -right-4 opacity-10">
                      <BrandStar
                        size={100}
                        className="text-primary-foreground"
                      />
                    </div>
                    <Badge
                      variant="secondary"
                      className="mb-3 bg-white/15 text-white hover:bg-white/20 border-0"
                    >
                      Your Admission Guide
                    </Badge>
                    <p className="text-sm opacity-85 leading-relaxed max-w-xs">
                      Have questions about admissions, fees, or the program? Our
                      dedicated counselor is here to help you every step of the
                      way.
                    </p>
                  </div>

                  {/* Profile + body */}
                  <div className="relative px-8 pb-6">
                    {/* Avatar overlapping header */}
                    <div className="flex items-end gap-4 -mt-10 mb-5">
                      <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-background shadow-md shrink-0">
                        <img
                          src="https://i.pravatar.cc/300?img=47"
                          alt="Program Advisor"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="pb-1">
                        <h3 className="font-semibold text-lg leading-tight">
                          Dr. Meera Krishnan
                        </h3>
                        <p className="text-sm text-primary-700 font-medium">
                          Senior Admissions Counselor
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4 mb-6 leading-relaxed bg-muted/30 p-3 rounded-r-lg">
                      &ldquo;I&apos;m here to guide you through every step of
                      the admission process and make sure you find the right
                      program for your goals.&rdquo;
                    </blockquote>

                    {/* Contact rows */}
                    <div className="space-y-3">
                      {[
                        {
                          icon: Phone,
                          label: "Call or WhatsApp",
                          value: "+91 98765 43210",
                        },
                        {
                          icon: Mail,
                          label: "Email",
                          value: "admissions@hcne.edu.in",
                        },
                        {
                          icon: Clock,
                          label: "Office Hours",
                          value: "Mon – Sat, 9 AM – 6 PM",
                        },
                      ].map(({ icon: Icon, label, value }, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                              {label}
                            </p>
                            <p className="text-sm font-semibold">{value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mt-6 gap-2 bg-[#044b54] hover:bg-[#033c43] text-white">
                      <Phone className="h-4 w-4" /> Book a Free Counseling
                      Session
                    </Button>
                  </div>
                </Card>

                <ProspectusDialog
                  defaultProgram={normalizedSlug === "gnm" ? "gnm" : "bsc-nursing"}
                  className="w-full block"
                  trigger={
                    <Button variant="outline" className="w-full gap-2 border border-border bg-background hover:bg-muted text-foreground">
                      <Download className="h-4 w-4" /> Download Prospectus
                    </Button>
                  }
                />
              </div>

              {/* Right — Enquiry Form component */}
              <div>
                <EnquiryForm
                  programName={`${shortName} (${duration})`}
                  slug={normalizedSlug}
                />
              </div>
            </div>

            {/* Faculty Section */}
            {faculty.length > 0 && (
              <div>
                <SectionBadge>
                  Faculty
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                  Experienced Faculty Team
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {faculty.map((member: any, idx: number) => (
                    <Card key={idx} className="overflow-hidden text-center hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-square bg-muted relative">
                        <img
                          src={`https://i.pravatar.cc/300?img=${member.img}`}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-primary">{member.role}</p>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {member.exp} Experience
                        </p>
                        <Badge variant="secondary" className="mt-2">
                          {member.specialty}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes Section (Render Outcomes below Faculty exactly matching original layout) */}
            {outcomes.length > 0 && (
              <div>
                <SectionBadge>
                  Program Outcomes
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                  What You&apos;ll Be Able To Do
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {outcomes.map((outcome: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
                    >
                      <Award className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <p className="text-sm">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Accordion */}
            {faqs.length > 0 && (
              <div>
                <SectionBadge>
                  FAQs
                </SectionBadge>
                <h2 className="font-serif text-3xl font-light lg:text-4xl mb-8">
                  Common Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq: any, idx: number) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-base font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {/* CTA Section */}
            <Card className="bg-primary text-primary-foreground border-0 overflow-hidden relative">
              <BrandPattern className="opacity-[0.15]" />
              <div className="absolute top-10 right-10 opacity-10">
                <BrandStar size={150} className="text-primary-foreground" />
              </div>
              <CardContent className="p-12 text-center relative">
                <h3 className="font-serif text-3xl font-light mb-4">
                  Ready to Start Your Nursing Journey?
                </h3>
                <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                  Join HCNE and become a skilled, compassionate nursing professional ready to make a difference in healthcare.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                  >
                    <Link href="/admissions">
                      <ArrowRight className="h-4 w-4" /> Apply for Admission
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                    asChild
                  >
                    <Link href="/contact">
                      <Phone className="h-4 w-4" /> Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
