import { motion } from 'framer-motion'
import { MapPinned } from 'lucide-react'
import { fadeUp } from './apartmentMotion'

const locationItems = [
  ['Local convenience', 'Close to shopping, dining, and daily-needs traffic for end-user appeal.'],
  ['Domestic investor angle', 'A suitable product for second-home positioning and practical short-stay use.'],
  ['Singapore market fit', 'Useful for cross-border professionals needing a predictable urban base in Batam.'],
  ['Remote-first screening', '360 previews and walk-in demos reduce the need for early-stage physical filtering.'],
] as const

export function ApartmentLocationSection() {
  return (
    <motion.section {...fadeUp} className="grid gap-8 rounded-[2rem] border border-[#7d6b52]/15 bg-[#e8dcc8] px-6 py-8 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.26em] text-[#7b6d59]">Location and reach</p>
        <h2 className="mt-3 font-['Georgia'] text-4xl md:text-5xl">Positioned for local life and regional movement.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {locationItems.map(([title, body]) => (
          <div key={title} className="rounded-[1.5rem] bg-white/75 p-5 shadow-[0_20px_50px_-40px_rgba(22,16,11,0.48)]">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#2e261d]"><MapPinned className="h-4 w-4" /> {title}</p>
            <p className="mt-3 text-sm leading-7 text-[#5d5246]">{body}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
