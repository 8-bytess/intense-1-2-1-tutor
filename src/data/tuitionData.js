// Accurate data repository for Intense 1-2-1 GCSE English & Maths Tuition

export const TUTOR_DATA = {
  name: "Intense 1-2-1",
  fullName: "Intense 1-2-1 GCSE English & Maths Tuition",
  rating: 5.0,
  reviewsCount: 1,
  tagline: "Revision Summer School for Year 10",
  officialPitch: "Revision Summer School Targeting Year 10 Students to consolidate the GCSE Year 10 curriculum in preparation to move into Year 11 | Edexcel, AQA and OCR | Subjects: English Language | English Literature | Mathematics",
  phone: "+44 7976 264403",
  phoneDisplay: "07976 264403",
  address: "Hunters Moon, 34 Potter St, Northwood HA6 1QE, United Kingdom",
  shortAddress: "34 Potter St, Northwood HA6",
  mapsUrl: "https://www.google.com/maps/place/Intense+1-2-1+GCSE+English+%26+Maths+Tuition/@51.6052955,-0.4036244,550m/data=!3m1!1e3!4m16!1m9!3m8!1s0x48766bc935ad65e3:0x5dbd1d892c099326!2sIntense+1-2-1+GCSE+English+%26+Maths+Tuition!8m2!3d51.6052955!4d-0.4036244!9m1!1b1!16s%2Fg%2F11lkvyk2cf!3m5!1s0x48766bc935ad65e3:0x5dbd1d892c099326!8m2!3d51.6052955!4d-0.4036244!16s%2Fg%2F11lkvyk2cf",
  hours: [
    { day: "Saturday", time: "9:00 AM – 1:00 PM" },
    { day: "Sunday", time: "9:00 AM – 12:00 PM" },
    { day: "Monday", time: "2:00 PM – 8:00 PM" },
    { day: "Tuesday – Friday", time: "Summer School / By Appointment" }
  ],
  review: {
    author: "Brass Balls Comedy",
    role: "Local Guide · 47 reviews",
    rating: 5,
    text: "If there's one thing you want English and Maths to be, it's intense, and this place nails it"
  },
  examBoards: ["Edexcel", "AQA", "OCR"],
  images: {
    heroStudent: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    mathsStudent: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    englishStudent: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    literatureStudent: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
  }
};

export const SUBJECT_CARDS = [
  {
    id: "maths",
    title: "Mathematics",
    badge: "Edexcel • AQA • OCR",
    tagline: "Higher & Foundation Tier",
    desc: "Revising Year 10 algebraic methods, geometry, ratio, and non-calculator reasoning before Year 11.",
    bgClass: "bg-[#10B981] text-white", // Vibrant fresh green like reference
    badgeBg: "bg-emerald-700/40 text-emerald-100",
    subBadge: "Year 10 ➔ 11",
    img: TUTOR_DATA.images.mathsStudent
  },
  {
    id: "eng-lang",
    title: "English Language",
    badge: "Paper 1 & Paper 2",
    tagline: "Reading & Creative Writing",
    desc: "Consolidating analysis of unseen texts, writers' viewpoints, and high-scoring 40-mark writing technique.",
    bgClass: "bg-[#C4B5FD] text-slate-900", // Soft pastel lavender like reference
    badgeBg: "bg-purple-900/10 text-purple-950 font-semibold",
    subBadge: "Year 10 ➔ 11",
    img: TUTOR_DATA.images.englishStudent
  },
  {
    id: "eng-lit",
    title: "English Literature",
    badge: "Set Texts & Poetry",
    tagline: "Shakespeare, 19th C & Modern",
    desc: "Consolidating key quotes, thesis-driven essay arguments, and comparative poetry schemes.",
    bgClass: "bg-[#D9F99D] text-slate-900", // Soft pastel lime like reference
    badgeBg: "bg-lime-900/10 text-lime-950 font-semibold",
    subBadge: "Year 10 ➔ 11",
    img: TUTOR_DATA.images.literatureStudent
  }
];

export const WHY_CHOOSE = [
  {
    title: "100% 1-to-1 Attention",
    desc: "No group dilution. Every single minute is dedicated solely to your child's specific weaknesses.",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100"
  },
  {
    title: "Year 10 Consolidation",
    desc: "Targeted summer revision so students enter Year 11 confident, ahead of class, and ready for mock exams.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100"
  },
  {
    title: "Edexcel, AQA & OCR",
    desc: "Strictly aligned with your child's school exam board specifications and examiner marking criteria.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100"
  }
];
