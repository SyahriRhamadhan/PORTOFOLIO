import { motion } from 'framer-motion'
import { apartmentFaqs } from '../../data/apartmentLandingData'
import { fadeUp } from './apartmentMotion'

type ApartmentFaqSectionProps = {
  openFaq: number
  onToggleFaq: (index: number) => void
}

export function ApartmentFaqSection({ openFaq, onToggleFaq }: ApartmentFaqSectionProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <motion.div {...fadeUp}>
        <p className="text-sm uppercase tracking-[0.26em] text-[#8b7d67]">FAQ</p>
        <h2 className="mt-3 font-['Georgia'] text-4xl md:text-5xl">Questions that matter before the first visit.</h2>
      </motion.div>
      <div className="space-y-4">
        {apartmentFaqs.map((item, index) => (
          <motion.div key={item.question} {...fadeUp} className="overflow-hidden rounded-[1.5rem] border border-[#7d6b52]/15 bg-white">
            <button
              type="button"
              onClick={() => onToggleFaq(openFaq === index ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="font-medium text-[#2a241d]">{item.question}</span>
              <span className="text-xl text-[#7d6b52]">{openFaq === index ? '-' : '+'}</span>
            </button>
            {openFaq === index ? (
              <div className="border-t border-[#eee2d1] px-5 py-4 text-sm leading-7 text-[#5d5246]">
                {item.answer}
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
