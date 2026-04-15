import { ArrowLeft, Printer } from 'lucide-react'
import type { ReactNode } from 'react'
import { certificates, education, experiences, profile, skills } from '../data/cvData.js'

type Profile = typeof profile
type ExperienceItem = (typeof experiences)[number]
type EducationItem = (typeof education)[number]
type CertificateItem = (typeof certificates)[number]

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-slate-300 pt-4">
      <h2 className="text-lg font-bold uppercase tracking-wide text-slate-950">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  )
}

function getLinkedInLabel(linkedin: string) {
  try {
    const { pathname } = new URL(linkedin)
    const slug = pathname.split('/').filter(Boolean).pop()
    return slug ? `LinkedIn: /${slug}` : 'LinkedIn Profile'
  } catch {
    return 'LinkedIn Profile'
  }
}

function CvHeader({ data }: { data: Profile }) {
  const whatsappNumber = data.phone.replace(/^0/, '62')

  return (
    <header className="pb-4">
      <h1 className="text-4xl font-black leading-tight text-slate-950">{data.name}</h1>
      <p className="mt-1 text-base font-semibold text-slate-800">{data.role}</p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-700">
        <li>{data.location}</li>
        <li>
          <a className="underline decoration-slate-400" href={`https://wa.me/${whatsappNumber}`}>
            WhatsApp: {data.phone}
          </a>
        </li>
        <li>
          <a className="underline decoration-slate-400" href={`mailto:${data.email}`}>
            {data.email}
          </a>
        </li>
        <li>
          <a className="underline decoration-slate-400" href={data.linkedin} target="_blank" rel="noreferrer">
            {getLinkedInLabel(data.linkedin)}
          </a>
        </li>
        <li>
          <a className="underline decoration-slate-400" href={data.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </header>
  )
}

function CvExperience({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <article key={`${item.company}-${item.period}`}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-bold text-slate-950">{item.position}</h3>
            <span className="text-xs text-slate-600">{item.period}</span>
          </div>
          <p className="text-sm font-semibold text-slate-700">{item.company}</p>
          {item.techStack?.length ? (
            <p className="mt-1 text-sm leading-6 text-slate-700">
              <span className="font-bold text-slate-900">Tech Stack:</span> {item.techStack.join(', ')}
            </p>
          ) : null}
          <ul className="mt-1 list-disc space-y-1 pl-5 text-justify text-sm leading-6 text-slate-800">
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function CvSkills({ items }: { items: Record<string, string[]> }) {
  return (
    <div className="grid gap-3">
      {Object.entries(items).map(([group, groupItems]) => (
        <div key={group}>
          <p className="text-sm font-bold text-slate-950">{group}</p>
          <p className="text-justify text-sm leading-6 text-slate-800">{groupItems.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

function CvEducation({ items }: { items: EducationItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <article key={item.school}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-bold text-slate-950">{item.school}</h3>
            <span className="text-xs text-slate-600">{item.period}</span>
          </div>
          <p className="text-sm text-slate-700">{item.major}</p>
          <p className="text-sm text-slate-700">{item.details}</p>
        </article>
      ))}
    </div>
  )
}

function CvCertificates({ items }: { items: CertificateItem[] }) {
  return (
    <ul className="grid gap-2 text-justify text-sm leading-6 text-slate-800">
      {items.map((item) => (
        <li key={item.title}>
          <span className="font-bold text-slate-950">{item.title}</span> ({item.period}) - {item.description}
        </li>
      ))}
    </ul>
  )
}

export function AtsCvPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-950 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto mb-4 flex w-full max-w-[900px] flex-wrap justify-end gap-2 print:hidden">
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <Printer className="h-4 w-4" />
          Export PDF A4
        </button>
      </div>

      <main className="cv-a4 mx-auto grid w-full max-w-[900px] gap-4 bg-white p-8 text-slate-950 shadow-xl print:max-w-none print:p-0 print:shadow-none">
        <CvHeader data={profile} />

        <CvSection title="Professional Summary">
          <p className="text-justify text-sm leading-6 text-slate-800">{profile.summary}</p>
        </CvSection>

        <CvSection title="Core Skills">
          <CvSkills items={skills as Record<string, string[]>} />
        </CvSection>

        <CvSection title="Work Experience">
          <CvExperience items={experiences} />
        </CvSection>

        <CvSection title="Education">
          <CvEducation items={education} />
        </CvSection>

        <CvSection title="Certifications">
          <CvCertificates items={certificates} />
        </CvSection>
      </main>
    </div>
  )
}
