import { experiences } from '../data/portfolioData'
import { motion } from 'framer-motion'

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-32 space-y-8">
      <h2 className="text-center text-5xl font-extrabold md:text-6xl">
        My <span className="text-fuchsia-500">Experience</span>
      </h2>
      <div className="space-y-10">
        {experiences.map((item) => (
          <article key={item.role} className="grid gap-5 md:grid-cols-[170px_1fr]">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="h-fit border-[4px] border-black bg-fuchsia-300 px-4 py-5 text-center text-3xl font-black shadow-[6px_6px_0_0_#000] md:sticky md:top-28"
            >
              {item.period}
            </motion.div>
            <motion.div
              whileHover={{ y: -4, x: -1 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="border-[4px] border-black bg-zinc-100 p-6 shadow-[6px_6px_0_0_#000] md:p-8"
            >
              <h3 className="text-5xl font-extrabold leading-tight">{item.role}</h3>
              <p className="mt-3 text-3xl font-bold text-fuchsia-500">{item.org}</p>
              <p className="mt-4 text-[1.7rem] leading-relaxed text-slate-600">{item.intro}</p>
              <ul className="mt-5 space-y-3 text-[1.55rem] leading-relaxed text-slate-700">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-3 w-3 shrink-0 border border-black bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  )
}
