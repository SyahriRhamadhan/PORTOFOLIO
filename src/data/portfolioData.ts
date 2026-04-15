import type { Certificate, Experience, Feature, Project } from '../types/portfolio'
import {
  certificates as cvCertificates,
  education as cvEducation,
  experiences as cvExperiences,
  profile,
  skills as cvSkills,
} from './cvData.js'
import { credlyBadges, credlyProfileUrl } from './credlyBadges'

export const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Certificates', 'Contact']

export const personalInfo = {
  name: profile.name,
  role: profile.role,
  email: profile.email,
  phone: profile.phone,
  github: profile.github ?? '#',
  location: profile.location,
  linkedin: profile.linkedin,
  summary: profile.summary,
  heroSummary:
    'Full-stack web engineer with 3+ years of experience building scalable applications across government, education, and operational domains.',
  credly: credlyProfileUrl,
}

export const features: Feature[] = [
  {
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code that stands the test of time.',
    icon: 'code',
    tone: 'bg-fuchsia-300',
  },
  {
    title: 'Problem Solving',
    desc: 'Applying critical thinking to overcome challenges and find solutions.',
    icon: 'brain',
    tone: 'bg-sky-300',
  },
  {
    title: 'Collaboration',
    desc: 'Working effectively with teams to deliver exceptional results.',
    icon: 'users',
    tone: 'bg-emerald-300',
  },
  {
    title: 'Performance',
    desc: 'Optimizing applications for speed, efficiency, and user experience.',
    icon: 'zap',
    tone: 'bg-violet-300',
  },
]

export const experiences: Experience[] = cvExperiences.map((item: (typeof cvExperiences)[number]) => ({
  // cvData.js is JS-based source; map into strict TS shape for UI components.
  period: item.period,
  role: item.position,
  org: item.company,
  intro: item.highlights[0] ?? '',
  points: item.highlights.slice(1),
}))

export const educationInfo =
  cvEducation[0] ??
  ({
    school: '',
    major: '',
    period: '',
    details: '',
  } as const)

export const groupedSkills = cvSkills as Record<string, string[]>

export const skills: string[] = (
  Array.from(
    new Set(
      Object.values(cvSkills as Record<string, string[]>).flatMap((skillGroup: string[]) => skillGroup),
    ),
  ) as string[]
).slice(0, 32)

const tones = [
  'bg-sky-300',
  'bg-slate-800 text-white',
  'bg-blue-400 text-white',
  'bg-emerald-600 text-white',
  'bg-slate-800 text-emerald-300',
  'bg-emerald-500 text-white',
  'bg-slate-600 text-black',
  'bg-green-200',
  'bg-sky-200',
  'bg-blue-400',
  'bg-yellow-300',
  'bg-violet-300',
  'bg-red-800 text-white',
  'bg-orange-400',
  'bg-orange-500 text-white',
  'bg-sky-400 text-white',
  'bg-indigo-500 text-white',
  'bg-teal-600 text-white',
]

export const skillTones = skills.map((_, idx) => tones[idx % tones.length])

export const projects: Project[] = [
  {
    name: 'Multi-Tenant Bimbel Platform',
    category: 'EDTECH PLATFORM',
    previewImage: '/project/bimbel.png',
    description:
      'Multi-tenant learning platform with role-based access, online exam workflows, QR attendance, and real-time monitoring for education operations.',
    tags: ['Remix', 'Express', 'Prisma', 'MySQL', 'Redis', 'Socket.IO'],
    theme: {
      preview: 'from-indigo-900 via-blue-800 to-cyan-700',
      titleBar: 'bg-emerald-400',
      label: 'bg-black text-zinc-100',
      actionPrimary: 'bg-sky-500 text-white',
    },
    links: {
      details: '#',
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'EWIL Training Platform',
    category: 'TRAINING SYSTEM',
    previewImage: '/project/ewil.png',
    description:
      'Training management application covering class enrollment, Midtrans payment flow, report approvals, role-based dashboards, and content modules.',
    tags: ['Laravel 12', 'React', 'Inertia.js', 'MySQL', 'Midtrans', 'Docker'],
    theme: {
      preview: 'from-emerald-950 via-slate-900 to-cyan-900',
      titleBar: 'bg-rose-400',
      label: 'bg-black text-zinc-100',
      actionPrimary: 'bg-fuchsia-500 text-white',
    },
    links: {
      details: '#',
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'GIS Report Management System',
    category: 'GIS WEB APP',
    previewImage: '/project/gispuprp.png',
    description:
      'Geospatial report system with GeoJSON management, interactive map dashboards, PDF reporting, and structured region/category master data.',
    tags: ['Laravel 12', 'React 19', 'TypeScript', 'Inertia.js', 'Leaflet', 'PostgreSQL'],
    theme: {
      preview: 'from-slate-800 via-cyan-900 to-emerald-900',
      titleBar: 'bg-sky-400',
      label: 'bg-black text-zinc-100',
      actionPrimary: 'bg-cyan-500 text-white',
    },
    links: {
      details: '#',
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'Document Compliance Management System',
    category: 'ENTERPRISE APP',
    previewImage: '/project/document.png',
    description:
      'Institutional document governance platform for assignment tracking, verification workflow, compliance reports, and audit log monitoring.',
    tags: ['Laravel 12', 'React', 'Inertia.js', 'MySQL', 'Tailwind', 'Fortify'],
    theme: {
      preview: 'from-zinc-900 via-slate-800 to-indigo-900',
      titleBar: 'bg-violet-400',
      label: 'bg-black text-zinc-100',
      actionPrimary: 'bg-indigo-500 text-white',
    },
    links: {
      details: '#',
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'Mortgage Titan SG',
    category: 'FINTECH WEB',
    previewImage: '/project/morgage.png',
    description:
      'Mortgage advisory platform with rate comparison, calculators, lead funnel, content CMS, and reminder automation for refinance lifecycle.',
    tags: ['Next.js', 'React 19', 'Prisma', 'MySQL', 'Express', 'HubSpot API'],
    theme: {
      preview: 'from-slate-900 via-indigo-900 to-blue-800',
      titleBar: 'bg-amber-300',
      label: 'bg-black text-zinc-100',
      actionPrimary: 'bg-blue-500 text-white',
    },
    links: {
      details: '#',
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'RDTR Filter App',
    category: 'SPATIAL TOOL',
    description:
      'Regulation analysis tool for RDTR zoning, intensitas, and kepsus data with advanced filtering, copy-to-JSON, and export capabilities.',
    tags: ['Remix', 'React', 'TypeScript', 'Tailwind', 'XLSX', 'GeoJSON'],
    theme: {
      preview: 'from-zinc-900 via-emerald-900 to-teal-800',
      titleBar: 'bg-lime-400',
      label: 'bg-black text-zinc-100',
      actionPrimary: 'bg-emerald-500 text-white',
    },
    links: {
      details: '#',
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'SIPPRA (Dishub)',
    category: 'GOVERNMENT SYSTEM',
    previewImage: '/project/sipra.png',
    description:
      'Port and retribution service platform with multi-role workflows, tariff management, service submissions, SKRD/STRD processing, and settlement modules.',
    tags: ['Next.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Swagger'],
    theme: {
      preview: 'from-slate-900 via-purple-900 to-fuchsia-800',
      titleBar: 'bg-pink-400',
      label: 'bg-black text-zinc-100',
      actionPrimary: 'bg-fuchsia-500 text-white',
    },
    links: {
      details: '#',
      demo: '#',
      code: '#',
    },
  },
  {
    name: 'Sisusan (UMRAH Survey)',
    category: 'SURVEY SYSTEM',
    previewImage: '/project/sisusan.png',
    description:
      'Survey satisfaction platform with token-based response submission, IKM analytics dashboard, and role-based management for institutional reporting.',
    tags: ['CodeIgniter 4', 'PHP', 'MySQL', 'Bootstrap', 'DataTables', 'Chart.js'],
    theme: {
      preview: 'from-slate-800 via-zinc-700 to-blue-700',
      titleBar: 'bg-cyan-300',
      label: 'bg-black text-zinc-100',
      actionPrimary: 'bg-sky-500 text-white',
    },
    links: {
      details: '#',
      demo: '#',
      code: '#',
    },
  },
]

const certificateColors = ['bg-sky-400', 'bg-fuchsia-400', 'bg-emerald-400']

export const certificates: Certificate[] = [
  ...credlyBadges.map((item, idx) => ({
    title: item.title,
    issuer: item.issuer,
    date: item.issuedAt,
    description: `Verified credential issued by ${item.issuer} via Credly.`,
    skills: ['Verified Badge', 'Credential Validation'],
    link: item.badgeUrl,
    imageUrl: item.imageUrl,
    color: certificateColors[idx % certificateColors.length],
  })),
  ...cvCertificates.map((item: (typeof cvCertificates)[number], idx: number) => ({
    title: item.title,
    issuer: 'Professional Certification',
    date: item.period,
    description: item.description,
    skills:
      idx === 0
        ? ['Linux', 'System Administration']
        : idx === 1
          ? ['Instructor', 'Red Hat', 'Linux']
          : ['MERN', 'Web Development', 'Scrum'],
    link: credlyProfileUrl,
    imageUrl:
      item.title === 'Red Hat Certified Instructor'
        ? '/certificate/image copy.png'
        : item.title === 'MERN Fullstack Web Developer'
          ? '/certificate/image.png'
          : undefined,
    color: certificateColors[(idx + credlyBadges.length) % certificateColors.length],
  })),
]
