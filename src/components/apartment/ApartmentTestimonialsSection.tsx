import { motion } from 'framer-motion'
import { apartmentTestimonials } from '../../data/apartmentLandingData'
import { fadeUp } from './apartmentMotion'

export function ApartmentTestimonialsSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {apartmentTestimonials.map((item) => (
        <motion.article key={item.name} {...fadeUp} className="rounded-[2rem] border border-[#7d6b52]/15 bg-white p-6 shadow-[0_30px_70px_-48px_rgba(20,15,10,0.6)]">
          <p className="font-['Georgia'] text-2xl leading-10 text-[#2a241d]">&quot;{item.quote}&quot;</p>
          <p className="mt-6 text-sm font-semibold text-[#322920]">{item.name}</p>
          <p className="text-sm text-[#6d6151]">{item.role}</p>
        </motion.article>
      ))}
    </section>
  )
}
