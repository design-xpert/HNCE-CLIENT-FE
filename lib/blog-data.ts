export type ContentBlock = string | { quote: string; by: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hcne-ranked-3-nursing-college-south-india",
    title: "HCNE Ranked #3 Nursing College in South India",
    excerpt:
      "Heritage Centre for Nursing Excellence achieves a landmark ranking, cementing its position as one of the premier nursing institutions in the region.",
    category: "Achievement",
    date: "May 15, 2025",
    author: "Dr. Priya Verma",
    authorRole: "Dean of Nursing",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    readTime: "4 min read",
    tags: ["Ranking", "Achievement", "Excellence"],
    featured: true,
    content: [
      "Heritage Centre for Nursing Excellence (HCNE) has been ranked #3 among nursing colleges in South India by the prestigious Healthcare Education Excellence Survey 2025. This recognition reflects the institution's unwavering commitment to academic quality, clinical training, and holistic nursing education over the past three decades.",
      "The ranking was determined based on key parameters including faculty-student ratio, research output, clinical placement records, infrastructure quality, and alumni employability. HCNE scored exceptionally high in clinical exposure and faculty expertise, with a dedicated team of over 50 educators holding PhDs and international certifications.",
      {
        quote:
          "This achievement belongs to every student, faculty member, and staff who has contributed to HCNE's journey. We remain committed to advancing nursing education and producing compassionate healthcare leaders who make a real difference in their communities.",
        by: "Dr. Priya Verma, Dean of Nursing",
      },
      "The recognition comes on the heels of several institutional milestones, including the inauguration of a state-of-the-art simulation laboratory and the establishment of new clinical partnerships with leading hospitals across Karnataka. HCNE now serves over 2,000 active students across its B.Sc. Nursing and GNM Diploma programs.",
    ],
  },
  {
    slug: "new-simulation-lab-inauguration",
    title: "New Simulation Lab Inaugurated by Health Minister",
    excerpt:
      "A cutting-edge nursing simulation laboratory was inaugurated at HCNE campus, providing students with advanced hands-on training tools.",
    category: "Campus",
    date: "May 10, 2025",
    author: "Communications Office",
    authorRole: "HCNE",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    readTime: "3 min read",
    tags: ["Facilities", "Infrastructure", "Training"],
    content: [
      "The Hon'ble Health Minister inaugurated HCNE's newly built Advanced Nursing Simulation Laboratory on May 10, 2025, in a grand ceremony attended by faculty, students, and healthcare dignitaries from across the state. The ₹2.5 crore facility is equipped with high-fidelity patient simulators, vital-sign monitors, and immersive scenario rooms.",
      "The lab features six fully equipped simulation bays, each replicating real ICU, emergency, and general ward environments. Students can practice critical procedures — from airway management to obstetric emergencies — in a safe, controlled setting before entering clinical rotations.",
      {
        quote:
          "Hands-on training is the backbone of competent nursing practice. Facilities like this bridge the gap between theory and bedside care, and HCNE is setting an example for the entire state.",
        by: "Health Minister, Government of Karnataka",
      },
      "The simulation lab will be integrated into the curriculum for both B.Sc. Nursing and GNM Diploma students from the upcoming academic year, with dedicated lab hours built into each semester's timetable.",
    ],
  },
  {
    slug: "100-percent-placement-2024-batch",
    title: "100% Placement Achieved for 2024 Graduating Batch",
    excerpt:
      "All graduates from the 2024 batch have secured employment with leading healthcare institutions, maintaining HCNE's unbroken placement record.",
    category: "Placements",
    date: "May 5, 2025",
    author: "Placement Cell",
    authorRole: "HCNE",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    readTime: "3 min read",
    tags: ["Placement", "Careers", "Alumni"],
    content: [
      "HCNE's Placement Cell is proud to announce 100% placement for the B.Sc. Nursing graduating batch of 2024. All 58 students who completed their degree program have secured positions with reputed hospitals and healthcare organizations across India and abroad, with an average starting package of ₹3.8 LPA.",
      "Top recruiters this year included Manipal Hospitals, Apollo Healthcare, Fortis Health, and Aster DM Healthcare, along with several government healthcare institutions. Five students received international offers from nursing agencies operating in the UAE and the UK.",
      {
        quote:
          "Our placement record reflects the comprehensive training we provide — not just clinical skills, but also communication, empathy, and critical thinking. Employers consistently tell us that HCNE graduates stand out for their preparedness and professional attitude.",
        by: "Mr. Arvind Raj, Head of Placements",
      },
      "The Placement Cell will commence preparatory workshops for the 2025 batch from the third year, including resume-building sessions, mock interviews with senior HR professionals, and NCLEX preparation support for those targeting international roles.",
    ],
  },
  {
    slug: "admissions-open-2025-26-batch",
    title: "Admissions Open for 2025-26 Academic Year",
    excerpt:
      "Applications are now open for B.Sc. Nursing and GNM Diploma programs. Merit-based scholarships available for eligible candidates.",
    category: "Admissions",
    date: "April 20, 2025",
    author: "Admissions Office",
    authorRole: "HCNE",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    readTime: "2 min read",
    tags: ["Admissions", "2025-26", "Scholarships"],
    content: [
      "HCNE has officially opened admissions for the 2025-26 academic year across both its flagship programs — the four-year B.Sc. Nursing degree and the three-year GNM Diploma. Eligible candidates can apply online via the HCNE admissions portal or visit the campus admissions office during working hours.",
      "Eligibility for B.Sc. Nursing requires a 10+2 qualification with Physics, Chemistry, and Biology, along with a minimum aggregate of 50% marks. For the GNM Diploma, candidates with any 10+2 stream are eligible, with a minimum of 40% aggregate marks.",
      "Merit-based scholarships covering up to 50% of tuition fees are available for high-achieving students from economically disadvantaged backgrounds. Candidates are encouraged to submit scholarship applications along with their admission forms.",
      "The application deadline is July 15, 2025. Shortlisted candidates will be called for a counselling session, post which final seat allotment will be announced. For further details, contact the Admissions Office at admissions@hcne.edu.in or call +91 98765 43210.",
    ],
  },
  {
    slug: "faculty-research-paper-published",
    title: "Faculty Milestone: Research Published in International Journal",
    excerpt:
      "Dr. Priya Verma's research on simulation-based nursing education has been accepted in the International Journal of Nursing Studies.",
    category: "Research",
    date: "April 10, 2025",
    author: "Academic Affairs",
    authorRole: "HCNE",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    readTime: "3 min read",
    tags: ["Research", "Faculty", "Publication"],
    content: [
      "Dr. Priya Verma, Professor and Head of Department at HCNE's Medical-Surgical Nursing division, has achieved a significant academic milestone with the publication of her research paper titled 'Simulation-Based Learning Outcomes in Undergraduate Nursing Education: A Randomized Controlled Trial' in the International Journal of Nursing Studies.",
      "The research, conducted over 18 months with a cohort of B.Sc. Nursing students, demonstrates that simulation-based learning leads to a 34% improvement in clinical decision-making scores compared to traditional didactic methods. The findings have been cited positively by nursing educators globally.",
      {
        quote:
          "This research reaffirms what we have always believed — that experiential learning is at the heart of effective nursing education. I am grateful to HCNE for providing the infrastructure and support to conduct this study.",
        by: "Dr. Priya Verma, Professor & HOD",
      },
      "This publication brings HCNE's total research output to over 300 peer-reviewed papers across medical, nursing, and healthcare administration journals. The institution encourages all faculty members to pursue active research, with dedicated grants and publication incentives available through the Research & Development cell.",
    ],
  },
  {
    slug: "national-nursing-day-celebration",
    title: "National Nursing Day 2025 Celebrated at HCNE",
    excerpt:
      "HCNE marked International Nurses Day with a special felicitation ceremony honoring outstanding students, faculty, and community healthcare workers.",
    category: "Events",
    date: "May 12, 2025",
    author: "Student Affairs",
    authorRole: "HCNE",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    readTime: "3 min read",
    tags: ["Events", "Nursing Day", "Community"],
    content: [
      "On the occasion of International Nurses Day (May 12), HCNE organized a grand celebration honouring the contributions of nursing professionals to public health. The event, themed 'Our Nurses, Our Future', was attended by over 500 students, faculty, alumni, and healthcare workers from partner hospitals.",
      "The ceremony featured a felicitation program recognizing 12 outstanding students for academic excellence, clinical performance, and community service. Three faculty members were awarded the 'Distinguished Educator' award for their contributions to nursing pedagogy and research.",
      {
        quote:
          "Nurses are the backbone of healthcare. Their compassion, skill, and tireless service save lives every single day. Institutions like HCNE are instrumental in preparing the nursing workforce India needs.",
        by: "Dr. Nalini Ramesh, President, Karnataka Nursing Council",
      },
      "The event concluded with a cultural program and a community health camp at the nearby government hospital, where HCNE students and faculty provided free health screenings to over 200 community members.",
    ],
  },
  {
    slug: "student-wins-national-nursing-award",
    title: "HCNE Student Wins National Nursing Excellence Award",
    excerpt:
      "Final-year B.Sc. Nursing student Kavya Menon has been awarded the National Nursing Excellence Award for outstanding clinical performance and community health work.",
    category: "Achievement",
    date: "April 28, 2025",
    author: "Student Affairs",
    authorRole: "HCNE",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    readTime: "2 min read",
    tags: ["Award", "Student", "Excellence"],
    content: [
      "HCNE is proud to announce that Ms. Kavya Menon, a final-year B.Sc. Nursing student, has been awarded the prestigious National Nursing Excellence Award 2025 by the Indian Nursing Council. The award recognizes outstanding clinical performance, academic distinction, and exceptional community health contributions.",
      "Kavya was selected from among 2,400 nominations submitted nationwide, based on her clinical performance records, a published case study on pediatric emergency nursing, and her voluntary community health work in rural areas around Bangalore. She has consistently maintained a CGPA of 9.4 throughout her four-year program.",
      {
        quote:
          "I am deeply honoured by this recognition. HCNE has shaped me not just as a nurse, but as a compassionate human being committed to serving communities in need.",
        by: "Kavya Menon, B.Sc. Nursing Final Year",
      },
      "Her mentors describe her as a natural leader with exceptional empathy and clinical acumen. Dean Dr. Priya Verma congratulated Kavya and expressed pride in the institution's ability to nurture talent of this calibre. Kavya plans to pursue her M.Sc. Nursing from HCNE before specializing in pediatric intensive care.",
    ],
  },
  {
    slug: "new-course-advanced-geriatric-nursing",
    title: "New Certificate Course in Geriatric Nursing Launched",
    excerpt:
      "HCNE launches a six-month certificate course in Geriatric Nursing Care, addressing the growing demand for skilled elderly-care professionals.",
    category: "Programs",
    date: "April 5, 2025",
    author: "Academic Affairs",
    authorRole: "HCNE",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    readTime: "3 min read",
    tags: ["Programs", "Geriatric Care", "New Course"],
    content: [
      "HCNE has launched a new six-month Certificate Course in Geriatric Nursing Care, designed to equip nursing professionals with specialized skills in caring for elderly patients. The course is available to registered nurses and GNM graduates, offered in both daytime and weekend formats to accommodate working professionals.",
      "India's elderly population is projected to reach 300 million by 2050, creating an urgent need for trained geriatric care specialists. The curriculum covers gerontological nursing theories, management of age-related conditions, palliative care principles, and dementia care protocols, with significant clinical practicum hours.",
      {
        quote:
          "Every elderly patient deserves care from a nurse who truly understands the unique physical and emotional challenges of ageing. This course is our commitment to that standard.",
        by: "Dr. Sanjay Gupta, Course Coordinator",
      },
      "The course has been developed in collaboration with geriatrics specialists from affiliated hospitals and meets INC certification standards. Upon completion, participants receive a certificate endorsed by HCNE and recognized by leading healthcare employers. The inaugural batch is now accepting applications.",
    ],
  },
  {
    slug: "clinical-partnership-apollo-hospitals",
    title: "HCNE Signs MOU with Apollo Hospitals for Clinical Training",
    excerpt:
      "A landmark MOU signed between HCNE and Apollo Hospitals creates new structured internship pathways and preferential placement for top graduates.",
    category: "Partnerships",
    date: "March 28, 2025",
    author: "Communications Office",
    authorRole: "HCNE",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80",
    readTime: "3 min read",
    tags: ["Partnership", "Clinical Training", "Apollo"],
    content: [
      "HCNE has signed a landmark Memorandum of Understanding (MOU) with Apollo Hospitals, one of India's largest healthcare networks, to enhance clinical training opportunities for HCNE students. The agreement provides for structured internship rotations across Apollo's multi-specialty hospitals in Bangalore, Hyderabad, and Chennai.",
      "Under the MOU, students in their third and fourth years of B.Sc. Nursing will gain access to high-volume specialty departments including oncology, cardiac care, neuro-ICU, and orthopedics — areas rarely available to student nurses at many institutions. The partnership also creates a preferential recruitment pathway for top-performing graduates.",
      {
        quote:
          "This partnership is a testament to mutual trust built over years. Our students will now have exposure to the highest standards of hospital practice, preparing them for global-level nursing careers.",
        by: "Dr. Priya Verma, Dean of Nursing",
      },
      "Apollo's Director of Nursing noted that HCNE graduates had consistently performed well in previous clinical attachments. The MOU also includes provisions for joint research initiatives, faculty development programs, and collaborative CME sessions open to both HCNE staff and Apollo nurses.",
    ],
  },
];

export const categories = [
  "All",
  "Achievement",
  "Admissions",
  "Campus",
  "Events",
  "Placements",
  "Programs",
  "Research",
  "Partnerships",
];

export const categoryColors: Record<string, string> = {
  Achievement: "bg-olive-100 text-olive-900",
  Admissions: "bg-primary-100 text-primary-900",
  Campus: "bg-grey-100 text-grey-900",
  Events: "bg-terracotta-100 text-terracotta-900",
  Placements: "bg-olive-100 text-olive-700",
  Programs: "bg-primary-100 text-primary-700",
  Research: "bg-grey-100 text-grey-700",
  Partnerships: "bg-terracotta-100 text-terracotta-700",
  Notice: "bg-grey-100 text-grey-700",
};
