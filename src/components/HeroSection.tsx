import {
  Download,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { personalInfo } from '../data/portfolioData'

export function HeroSection() {
  const firstName = personalInfo.name.split(' ')[0] ?? personalInfo.name
  const remainingName = personalInfo.name.replace(`${firstName} `, '')

  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="inline-block border-[3px] border-black bg-emerald-400 px-5 py-3 text-xl font-bold shadow-[5px_5px_0_0_#000]">
          {personalInfo.role.toUpperCase()}
        </p>
        <h1 className="text-5xl font-extrabold leading-[1.05] md:text-7xl">
          Hello I&apos;m
          <br />
          <span className="text-sky-500">{firstName} </span>
          <span className="text-emerald-500">{remainingName}</span>
        </h1>
        <p className="max-w-2xl text-2xl leading-relaxed text-slate-700">
          {personalInfo.heroSummary}
        </p>
        <div className="flex flex-wrap gap-8 text-[1.15rem] font-semibold">
          <p className="inline-flex items-center gap-2">
            <Mail className="h-5 w-5" />
            {personalInfo.email}
          </p>
          <p className="inline-flex items-center gap-2">
            <MapPin className="h-5 w-5 text-pink-500" />
            {personalInfo.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="border-[3px] border-black bg-fuchsia-500 px-8 py-3 text-2xl font-bold text-white shadow-[5px_5px_0_0_#000]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-[3px] border-black bg-zinc-100 px-8 py-3 text-2xl font-bold shadow-[5px_5px_0_0_#000]"
          >
            <Download className="h-7 w-7" />
            Download CV
          </a>
        </div>
        <div className="flex gap-4">
          {[
            { label: 'GitHub', icon: FaGithub, href: personalInfo.github },
            { label: 'LinkedIn', icon: FaLinkedinIn, href: personalInfo.linkedin },
            { label: 'Email', icon: Mail, href: `mailto:${personalInfo.email}` },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={item.label}
              className="flex h-14 w-14 items-center justify-center border-[3px] border-black bg-sky-500 text-white shadow-[4px_4px_0_0_#000]"
            >
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="-rotate-3 border-[5px] border-black bg-white p-3 shadow-[6px_6px_0_0_#000]">
          <div className="aspect-[4/5] w-full bg-gradient-to-br from-sky-200 via-zinc-100 to-emerald-200" />
        </div>
        <div className="absolute -bottom-3 -left-4 flex h-14 w-14 items-center justify-center border-[3px] border-black bg-fuchsia-500 shadow-[4px_4px_0_0_#000]">
          <Rocket className="h-7 w-7 text-white" />
        </div>
        <div className="absolute -right-4 -top-3 flex h-14 w-14 items-center justify-center border-[3px] border-black bg-emerald-400 shadow-[4px_4px_0_0_#000]">
          <Sparkles className="h-7 w-7 text-orange-500" />
        </div>
      </div>
    </section>
  )
}
