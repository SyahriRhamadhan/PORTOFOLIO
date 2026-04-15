import { useEffect, useState } from 'react'
import { CalendarDays, ExternalLink, ScrollText, X } from 'lucide-react'
import { certificates } from '../data/portfolioData'
import { motion } from 'framer-motion'

export function CertificatesSection() {
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
            className="relative flex h-full flex-col overflow-hidden border-[4px] border-black bg-zinc-100 shadow-[6px_6px_0_0_#000]"
          >
            <div className={`flex min-h-44 flex-col justify-between border-b-[4px] border-black p-5 ${cert.color}`}>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="line-clamp-3 text-3xl font-black leading-tight">{cert.title}</h3>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-black bg-zinc-900 text-zinc-100 shadow-[3px_3px_0_0_#000]">
                  <ScrollText className="h-5 w-5" />
                </span>
              </div>
              <div>
                <p className="text-lg font-bold">{cert.issuer}</p>
                <p className="mt-1 inline-flex items-center gap-2 text-lg font-semibold">
                  <CalendarDays className="h-4 w-4" />
                  {cert.date}
                </p>
              </div>
            </div>

            <div className="border-b-[4px] border-black p-4">
              <div className="flex h-44 items-center justify-center overflow-hidden border-[3px] border-black bg-zinc-100 p-3 shadow-[3px_3px_0_0_#000]">
                {cert.imageUrl ? (
                  <button
                    type="button"
                    onClick={() => setPreview({ title: cert.title, imageUrl: cert.imageUrl! })}
                    className="flex h-full w-full cursor-zoom-in items-center justify-center"
                    aria-label={`Open ${cert.title} certificate preview`}
                  >
                    <img src={cert.imageUrl} alt={cert.title} className="max-h-full max-w-full object-contain" />
                  </button>
                ) : (
                  <ScrollText className="h-16 w-16 text-zinc-400" />
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-5 p-5">
              <p className="min-h-24 text-xl leading-relaxed text-slate-600">{cert.description}</p>

              <div className="min-h-24 space-y-2">
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
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, x: -1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                className="mt-auto inline-flex w-full items-center justify-center gap-2 border-[3px] border-black bg-zinc-900 px-4 py-3 text-xl font-bold text-zinc-100 shadow-[4px_4px_0_0_#000]"
              >
                <ExternalLink className="h-5 w-5" />
                View on Credly
              </motion.a>
            </div>

          </motion.article>
        ))}
      </div>

      {preview ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} certificate preview`}
          onClick={() => setPreview(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-5xl border-[4px] border-black bg-zinc-100 p-4 shadow-[8px_8px_0_0_#000]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black">{preview.title}</h3>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="flex h-11 w-11 items-center justify-center border-[3px] border-black bg-zinc-900 text-white shadow-[3px_3px_0_0_#000]"
                aria-label="Close certificate preview"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex max-h-[78vh] items-center justify-center overflow-auto border-[3px] border-black bg-white p-4">
              <img src={preview.imageUrl} alt={preview.title} className="max-h-[72vh] w-auto max-w-full object-contain" />
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  )
}
