import type { Certificate, Experience, Feature, Project } from '../types/portfolio'
import {
  certificates as cvCertificates,
  education as cvEducation,
  experiences as cvExperiences,
  profile,
  skills as cvSkills,
} from './cvData.js'

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
    name: 'The Wild Oasis Next',
    category: 'WEB APP',
    description:
      'A modern hotel booking web application built with Next.js and Supabase. It features secure authentication and responsive booking management.',
    tags: ['Next.js', 'NextAuth', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    theme: {
      preview: 'from-slate-900 via-slate-800 to-emerald-900',
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
    name: 'SiKembar (Sistem Informasi Keluar Masuk Barang)',
    category: 'WEB APP',
    description:
      'A web-based logistics and disaster response support application with integrated modules for admin, donation, inventory, and distribution management.',
    tags: ['CodeIgniter', 'Bootstrap', 'MySQL', 'PHP'],
    theme: {
      preview: 'from-zinc-300 via-zinc-100 to-zinc-300',
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
]

export const certificates: Certificate[] = [
  ...cvCertificates.map((item: (typeof cvCertificates)[number], idx: number) => ({
    title: item.title,
    issuer: 'Professional Certification',
    date: item.period,
    description: item.description,
    skills: idx === 0 ? ['Linux', 'System Administration'] : ['Professional Development'],
    link: '#',
    color: ['bg-sky-400', 'bg-fuchsia-400', 'bg-emerald-400'][idx % 3],
  })),
]
