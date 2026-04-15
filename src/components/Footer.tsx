import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { personalInfo } from '../data/portfolioData'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative mt-10 border-t-4 border-black bg-black px-6 py-10 text-zinc-100 md:px-10">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h3 className="text-3xl font-extrabold text-sky-500 md:text-4xl">{personalInfo.name.toUpperCase()}</h3>
          <p className="mt-2 text-lg text-zinc-300 md:text-xl">{personalInfo.role}</p>
        </div>

        <div className="flex gap-4">
          {[
            { label: 'GitHub', icon: FaGithub, href: personalInfo.github },
            { label: 'LinkedIn', icon: FaLinkedinIn, href: personalInfo.linkedin },
            { label: 'Email', icon: Mail, href: `mailto:${personalInfo.email}` },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={item.label}
              whileHover={{ y: -3, x: -1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              className="flex h-14 w-14 items-center justify-center border-[2px] border-slate-500 bg-slate-800 text-zinc-100"
            >
              <item.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </div>

        <div className="text-left xl:text-right">
          <p className="text-2xl md:text-3xl">
            Made with <span className="text-red-400">&hearts;</span> &copy; {new Date().getFullYear()}
          </p>
          <p className="mt-1 text-base text-slate-400 md:text-lg">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>

      <div className="my-8 h-px bg-slate-800" />

      <div className="space-y-3 text-center">
        <p className="text-xl font-bold text-fuchsia-300 md:text-2xl [text-shadow:0_0_10px_rgba(232,121,249,0.75)]">
          &quot;A computer would deserve to be called intelligent if it could deceive a human into
          believing that it was human.&quot;
        </p>
        <p className="text-sm text-slate-400 md:text-base">
          Alan Turing (1950), on the Turing Test. Modern claims about passing the test remain
          debated among experts.
        </p>
      </div>
    </footer>
  )
}
