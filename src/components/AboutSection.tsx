import { features } from '../data/portfolioData'
import { Brain, CodeXml, Users, Zap } from 'lucide-react'
import { educationInfo, personalInfo } from '../data/portfolioData'
import { motion } from 'framer-motion'

const featureIcons = {
  code: CodeXml,
  brain: Brain,
  users: Users,
  zap: Zap,
}

export function AboutSection() {
  const aboutSummary =
    'Computer Science graduate with 3+ years of experience building full-stack web applications for government, education, and operational needs.'

  return (
    <section id="about" className="scroll-mt-32 space-y-8">
      <h2 className="text-5xl font-extrabold md:text-7xl">
        About <span className="text-sky-500">Me</span>
      </h2>
      <div className="h-2 w-28 bg-emerald-400" />
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-xl leading-relaxed text-slate-700 md:text-[1.7rem]">
          <p>
            Hi there! I&apos;m <span className="font-bold text-fuchsia-500">{personalInfo.name}</span>,
            {` `}
            {aboutSummary}
          </p>
          <p>
            I specialize in JavaScript, TypeScript, React, Node.js, Laravel, and SQL-based
            systems with strong hands-on experience in API integration and role-based workflows.
          </p>
          <p>
            My focus is delivering maintainable production-ready solutions and collaborating
            effectively across teams.
          </p>
          <div className="space-y-3 text-base font-bold md:text-lg">
            <p className="border-[3px] border-fuchsia-700 bg-fuchsia-100 px-5 py-3 text-fuchsia-900">
              {educationInfo.major} - {educationInfo.school} ({educationInfo.period})
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <p className="border-[3px] border-sky-700 bg-sky-100 px-5 py-3 text-sky-900">
                {personalInfo.location}
              </p>
              <p className="border-[3px] border-emerald-700 bg-emerald-100 px-5 py-3 text-emerald-900">
                {educationInfo.details}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((item) => {
            const Icon = featureIcons[item.icon]
            return (
              <motion.article
                key={item.title}
                whileHover={{ y: -4, x: -1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="border-[4px] border-black bg-zinc-100 p-6 shadow-[6px_6px_0_0_#000]"
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center border-[3px] border-black shadow-[3px_3px_0_0_#000] ${item.tone}`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-4xl font-black">{item.title}</h3>
                <p className="text-xl leading-relaxed text-slate-700">{item.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
