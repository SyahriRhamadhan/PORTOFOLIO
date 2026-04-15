import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { ExternalLink, X } from 'lucide-react'
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
  const [preview, setPreview] = useState<{ title: string; imageUrl: string } | null>(null)

  useEffect(() => {
    if (!preview) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPreview(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [preview])

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
              {project.previewImage ? (
                <>
                  <button
                    type="button"
                    onClick={() => setPreview({ title: project.name, imageUrl: project.previewImage! })}
                    className="absolute inset-0 z-10 cursor-zoom-in"
                    aria-label={`Open ${project.name} image preview`}
                  >
                    <img
                      src={project.previewImage}
                      alt={`${project.name} preview`}
                      width={1600}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <div className="absolute inset-0 bg-black/20" />
                </>
              ) : null}
              <span
                className={`relative z-10 inline-block border-[3px] border-black px-4 py-2 text-sm font-extrabold ${project.theme.label}`}
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

      {preview ? (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-2 md:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} project preview`}
          onClick={() => setPreview(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative mx-auto my-2 w-full max-w-[calc(100vw-0.75rem)] border-[4px] border-black bg-zinc-100 p-3 shadow-[6px_6px_0_0_#000] md:my-4 md:max-w-6xl md:p-4 md:shadow-[8px_8px_0_0_#000]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between gap-3 md:mb-3 md:gap-4">
              <h3 className="text-lg font-black leading-tight md:text-2xl">{preview.title}</h3>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="flex h-10 w-10 items-center justify-center border-[3px] border-black bg-zinc-900 text-white shadow-[2px_2px_0_0_#000] md:h-11 md:w-11 md:shadow-[3px_3px_0_0_#000]"
                aria-label="Close project preview"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="flex max-h-[74vh] items-center justify-center overflow-auto border-[3px] border-black bg-white p-2 md:max-h-[80vh] md:p-4">
              <img
                src={preview.imageUrl}
                alt={preview.title}
                width={1600}
                height={900}
                decoding="async"
                className="max-h-[68vh] w-auto max-w-full object-contain md:max-h-[74vh]"
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  )
}
