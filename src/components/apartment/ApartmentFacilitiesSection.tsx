import { motion } from 'framer-motion'
import { apartmentFacilities } from '../../data/apartmentLandingData'
import { fadeUp } from './apartmentMotion'

export function ApartmentFacilitiesSection() {
  return (
    <section className="space-y-8">
      <motion.div {...fadeUp} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-[#8b7d67]">Facilities and amenities</p>
          <h2 className="mt-3 font-['Georgia'] text-4xl md:text-5xl">A more composed everyday environment.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#5d5246]">
          The visual language here should feel architectural and calm, not like a dashboard. Larger imagery leads; utility details support.
        </p>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-3">
        {apartmentFacilities.map((facility) => (
          <motion.article key={facility.title} {...fadeUp} className="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_70px_-48px_rgba(20,15,10,0.6)]">
            <img src={facility.image} alt={facility.title} className="h-72 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-['Georgia'] text-2xl">{facility.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5d5246]">{facility.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
