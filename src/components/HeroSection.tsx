import {
  Download,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { personalInfo } from '../data/portfolioData'
import { motion } from 'framer-motion'

export function HeroSection() {
  const firstName = personalInfo.name.split(' ')[0] ?? personalInfo.name
  const remainingName = personalInfo.name.replace(`${firstName} `, '')

  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="space-y-6"
      >
        <p className="inline-block border-[3px] mb-5 border-black bg-emerald-400 px-5 py-3 text-xl font-bold shadow-[5px_5px_0_0_#000]">
          {personalInfo.role.toUpperCase()}
        </p>
        <h1 className="text-5xl mb-5 font-extrabold leading-[1.05] md:text-7xl">
          Hello I&apos;m
          <br />
          <span className="text-sky-500">{firstName} </span>
          <span className="text-emerald-500">{remainingName}</span>
        </h1>
        <p className="max-w-2xl text-2xl leading-relaxed text-slate-700">
          {personalInfo.heroSummary}
        </p>
        <div className="flex mb-5 flex-wrap gap-8 text-[1.15rem] font-semibold">
          <p className="inline-flex items-center gap-2">
            <Mail className="h-5 w-5" />
            {personalInfo.email}
          </p>
          <p className="inline-flex items-center gap-2">
            <MapPin className="h-5 w-5 text-pink-500" />
            {personalInfo.location}
          </p>
        </div>
        <div className="flex flex-wrap mb-5 gap-4">
          <motion.a
            href="#projects"
            whileHover={{ y: -3, x: -1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            className="border-[3px] border-black bg-fuchsia-500 px-8 py-3 text-2xl font-bold text-white shadow-[5px_5px_0_0_#000]"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -3, x: -1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            className="inline-flex items-center gap-3 border-[3px] border-black bg-zinc-100 px-8 py-3 text-2xl font-bold shadow-[5px_5px_0_0_#000]"
          >
            <Download className="h-7 w-7" />
            Download CV
          </motion.a>
        </div>
        <div className="flex gap-4 mb-5">
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
              className="flex h-14 w-14 items-center justify-center border-[3px] border-black bg-sky-500 text-white shadow-[4px_4px_0_0_#000]"
            >
              <item.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-md">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="-rotate-3 border-[5px] border-black bg-white p-3 shadow-[6px_6px_0_0_#000]"
        >
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img src="/photo.jpeg" alt={personalInfo.name} className="h-full w-full object-cover" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-3 -left-4 flex h-14 w-14 items-center justify-center border-[3px] border-black bg-fuchsia-500 shadow-[4px_4px_0_0_#000]"
        >
          <Rocket className="h-7 w-7 text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5.7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute -right-4 -top-3 flex h-14 w-14 items-center justify-center border-[3px] border-black bg-emerald-400 shadow-[4px_4px_0_0_#000]"
        >
          <Sparkles className="h-7 w-7 text-orange-500" />
        </motion.div>
      </div>
    </section>
  )
}
