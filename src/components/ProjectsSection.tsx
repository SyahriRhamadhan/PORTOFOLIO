import type { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '../data/portfolioData'
import { motion } from 'framer-motion'

type ActionButtonProps = {
  href: string
  className: string
  children: ReactNode
}

function ActionButton({ href, className, children }: ActionButtonProps) {
  const isOnProgress = href === '#'

  return (
    <div className="group relative">
      <motion.a
        href={href}
        onClick={(event) => {
          if (isOnProgress) event.preventDefault()
        }}
        whileHover={{ y: -3, x: -1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        className={`${className} ${isOnProgress ? 'cursor-not-allowed' : ''}`}
      >
        {children}
      </motion.a>
      {isOnProgress ? (
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-black bg-zinc-900 px-2 py-1 text-sm font-bold text-zinc-100 opacity-0 shadow-[3px_3px_0_0_#000] transition group-hover:opacity-100">
          On Progress
        </span>
      ) : null}
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-32 space-y-10">
      <div className="text-center">
        <h2 className="text-6xl font-extrabold text-sky-500 md:text-7xl">Projects</h2>
        <div className="mx-auto mt-4 h-2 w-28 bg-emerald-400" />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            whileHover={{ y: -4, x: -1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="relative overflow-hidden border-[4px] border-black bg-zinc-100 shadow-[6px_6px_0_0_#000]"
          >
            <div
              className={`relative h-72 bg-gradient-to-br p-4 md:h-80 ${project.theme.preview}`}
            >
              <span
                className={`inline-block border-[3px] border-black px-4 py-2 text-sm font-extrabold ${project.theme.label}`}
              >
                {project.category}
              </span>
            </div>

            <div className={`border-y-[4px] border-black p-6 ${project.theme.titleBar}`}>
              <h3 className="text-4xl font-black leading-tight">{project.name}</h3>
            </div>

            <div className="space-y-5 p-6">
              <p className="text-2xl leading-relaxed text-slate-600">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-[3px] border-black bg-zinc-100 px-4 py-1.5 text-lg font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <ActionButton
                  href={project.links.details}
                  className={`inline-flex items-center gap-2 border-[3px] border-black px-5 py-2.5 text-xl font-bold shadow-[4px_4px_0_0_#000] ${project.theme.actionPrimary}`}
                >
                  <ExternalLink className="h-5 w-5" />
                  View Details
                </ActionButton>
                <ActionButton
                  href={project.links.demo}
                  className="inline-flex items-center gap-2 border-[3px] border-black bg-fuchsia-500 px-5 py-2.5 text-xl font-bold text-white shadow-[4px_4px_0_0_#000]"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </ActionButton>
                <ActionButton
                  href={project.links.code}
                  className="inline-flex items-center gap-2 border-[3px] border-black bg-zinc-100 px-5 py-2.5 text-xl font-bold shadow-[4px_4px_0_0_#000]"
                >
                  <FaGithub className="h-5 w-5" />
                  Code
                </ActionButton>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
