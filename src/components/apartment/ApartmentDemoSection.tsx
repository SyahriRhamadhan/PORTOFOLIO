import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { apartmentDemos, apartmentTextCopy, type ApartmentLanguage } from '../../data/apartmentLandingData'
import { buttonHover, cardHover, fadeUp } from './apartmentMotion'

type ApartmentDemoSectionProps = {
  language: ApartmentLanguage
  selectedDemoId: string
  onSelectDemo: (demoId: string) => void
  onOpenDemo: () => void
}

export function ApartmentDemoSection({ language, selectedDemoId, onSelectDemo, onOpenDemo }: ApartmentDemoSectionProps) {
  const selectedDemo = apartmentDemos.find((item) => item.id === selectedDemoId) ?? apartmentDemos[0]
  const copy = apartmentTextCopy[language] ?? apartmentTextCopy.en

  return (
    <section id="apartment-demo" className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <motion.div {...fadeUp} className="space-y-5">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-[#8b7d67]">{copy.demo.eyebrow}</p>
          <h2 className="mt-3 font-['Georgia'] text-4xl md:text-5xl">{copy.demo.title}</h2>
        </div>
        <p className="text-sm leading-7 text-[#5d5246]">{copy.demo.description}</p>
        <div className="grid gap-4">
          {apartmentDemos.map((demo) => (
            <motion.button
              key={demo.id}
              type="button"
              onClick={() => onSelectDemo(demo.id)}
              {...cardHover}
              className={`rounded-[1.5rem] border px-5 py-5 text-left transition ${
                selectedDemo.id === demo.id
                  ? 'border-[#4c402f] bg-[#2b241c] text-[#f7f0e5]'
                  : 'border-[#7d6b52]/15 bg-white text-[#2a241d] hover:border-[#7d6b52]/30'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] opacity-70">
                    {language === 'id' ? (demo.type === 'Photo Sphere' ? 'Photo Sphere' : 'Demo Walk-In') : demo.type}
                  </p>
                  <p className="mt-2 font-['Georgia'] text-2xl">{language === 'id' ? demo.nameId : demo.name}</p>
                  <p className="mt-2 text-sm leading-6 opacity-85">{language === 'id' ? demo.locationId : demo.location}</p>
                </div>
                <Play className="h-5 w-5 shrink-0" />
                </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        whileHover={cardHover.whileHover}
        transition={cardHover.transition}
        className="overflow-hidden rounded-[2rem] border border-[#7d6b52]/15 bg-white shadow-[0_34px_80px_-50px_rgba(22,16,11,0.55)]"
      >
        <div className="relative">
          <img src={selectedDemo.image} alt={selectedDemo.name} className="h-[420px] w-full object-cover md:h-[520px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,18,14,0.08),rgba(22,18,14,0.52))]" />
          <div className="absolute left-6 top-6 rounded-full bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2b241c] backdrop-blur">
            {copy.demo.placeholder}
          </div>
          <motion.button
            type="button"
            onClick={onOpenDemo}
            {...buttonHover}
            className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <Play className="h-4 w-4" />
            {language === 'id' ? selectedDemo.ctaId : selectedDemo.cta}
          </motion.button>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#8b7d67]">{language === 'id' ? selectedDemo.locationId : selectedDemo.location}</p>
            <h3 className="mt-2 font-['Georgia'] text-3xl">{language === 'id' ? selectedDemo.nameId : selectedDemo.name}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#564c40]">{language === 'id' ? selectedDemo.descriptionId : selectedDemo.description}</p>
          </div>
          <a href="#apartment-contact" className="inline-flex items-center gap-2 rounded-full bg-[#1f1a14] px-5 py-3 text-sm font-semibold text-[#f7f0e5]">
            {copy.demo.bookPhysicalVisit}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
