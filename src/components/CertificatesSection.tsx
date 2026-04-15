import { CalendarDays, ExternalLink, ScrollText } from 'lucide-react'
import { certificates } from '../data/portfolioData'
import { motion } from 'framer-motion'

export function CertificatesSection() {
  return (
    <section id="certificates" className="scroll-mt-32 space-y-10">
      <div className="text-center">
        <h2 className="text-6xl font-extrabold md:text-7xl">
          My <span className="text-fuchsia-500">Certifications</span>
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-2xl leading-relaxed text-slate-600">
          Continuous learning journey through professional certifications.
        </p>
        <div className="mx-auto mt-4 h-2 w-28 bg-emerald-400" />
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        {certificates.map((cert) => (
          <motion.article
            key={cert.title}
            whileHover={{ y: -4, x: -1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="relative overflow-hidden border-[4px] border-black bg-zinc-100 shadow-[6px_6px_0_0_#000]"
          >
            <div className={`border-b-[4px] border-black p-5 ${cert.color}`}>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-3xl font-black leading-tight">{cert.title}</h3>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-black bg-zinc-900 text-zinc-100 shadow-[3px_3px_0_0_#000]">
                  <ScrollText className="h-5 w-5" />
                </span>
              </div>
              <p className="text-lg font-bold">{cert.issuer}</p>
              <p className="mt-1 inline-flex items-center gap-2 text-lg font-semibold">
                <CalendarDays className="h-4 w-4" />
                {cert.date}
              </p>
            </div>

            <div className="border-b-[4px] border-black p-4">
              <div className="h-44 border-[3px] border-black bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 shadow-[3px_3px_0_0_#000]" />
            </div>

            <div className="space-y-5 p-5">
              <p className="text-xl leading-relaxed text-slate-600">{cert.description}</p>

              <div className="space-y-2">
                <p className="text-lg font-black">SKILLS COVERED:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border-[2px] border-black bg-zinc-100 px-3 py-1 text-sm font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href={cert.link}
                whileHover={{ y: -3, x: -1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                className="inline-flex w-full items-center justify-center gap-2 border-[3px] border-black bg-zinc-900 px-4 py-3 text-xl font-bold text-zinc-100 shadow-[4px_4px_0_0_#000]"
              >
                <ExternalLink className="h-5 w-5" />
                View Certificate
              </motion.a>
            </div>

          </motion.article>
        ))}
      </div>
    </section>
  )
}
