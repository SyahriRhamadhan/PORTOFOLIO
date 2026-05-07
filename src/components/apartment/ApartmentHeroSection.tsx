import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { apartmentQuickStats, type ApartmentLanguage } from '../../data/apartmentLandingData'
import { buttonHover, cardHover, fadeUp } from './apartmentMotion'

type ApartmentHeroSectionProps = {
  language: ApartmentLanguage
  onOpenDemo: () => void
}

export function ApartmentHeroSection({ language, onOpenDemo }: ApartmentHeroSectionProps) {
  return (
    <section
      id="apartment-living"
      className="relative overflow-hidden border-b border-black/10 bg-[radial-gradient(circle_at_top,_rgba(212,190,155,0.25),_transparent_36%),linear-gradient(135deg,#f6f1e8_0%,#efe6d7_52%,#e6dccd_100%)]"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(180deg,rgba(24,22,20,0.08),rgba(24,22,20,0.22))] lg:block" />
      <div className="mx-auto grid min-h-[78vh] max-w-7xl gap-10 px-6 pb-16 pt-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pt-24">
        <motion.div {...fadeUp} className="relative z-10 flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#7d6b52]/25 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f614e] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {language === 'id' ? 'Hunian apartemen modern untuk pembeli lokal dan luar negeri' : 'Modern apartment living for local and overseas buyers'}
          </p>
          <h1 className="max-w-3xl font-['Georgia'] text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            {language === 'id'
              ? 'Hunian premium yang tenang, dirancang untuk ritme kota dan mobilitas lintas batas.'
              : 'Calm, premium residences designed for city rhythm and cross-border mobility.'}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#574d40] md:text-lg">
            {language === 'id'
              ? 'Jelajahi show unit, bandingkan layout, buka demo imersif, dan reservasi add-on sebelum move-in. Dirancang untuk pasar Batam, investor domestik, dan prospek berbasis Singapura yang membutuhkan kejelasan sebelum kunjungan fisik.'
              : 'Explore show units, compare layouts, open immersive demos, and reserve add-ons before move-in. Built for Batam, domestic investors, and Singapore-based prospects who need clarity before a physical visit.'}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#apartment-contact"
              {...buttonHover}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f1a14] px-6 py-3 text-sm font-semibold text-[#f7f0e5] transition hover:bg-[#342b21]"
            >
              {language === 'id' ? 'Jadwalkan Kunjungan' : 'Schedule a Visit'}
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#apartment-unit-types"
              {...buttonHover}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#6f614e]/40 bg-white/65 px-6 py-3 text-sm font-semibold text-[#2a241d] backdrop-blur transition hover:bg-white"
            >
              {language === 'id' ? 'Lihat Tipe Unit' : 'Explore Unit Types'}
            </motion.a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {apartmentQuickStats.map((item) => (
              <motion.div
                key={item.label}
                {...cardHover}
                className="flex min-h-[188px] flex-col rounded-[1.75rem] border border-[#7a6a52]/15 bg-white/72 p-6 shadow-[0_20px_60px_-36px_rgba(43,33,21,0.55)] backdrop-blur"
              >
                <p className="text-left text-[11px] uppercase tracking-[0.24em] text-[#7f735f]">{language === 'id' ? item.labelId : item.label}</p>
                <p className="mt-4 font-['Georgia'] text-[2.45rem] leading-[0.95] text-[#2a241d]">{item.value}</p>
                <p className="mt-4 max-w-[22ch] text-left text-sm leading-7 text-[#5e5447]">{language === 'id' ? item.noteId : item.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="relative z-10 flex items-start lg:items-center">
          <motion.div
            {...cardHover}
            className="relative w-full overflow-hidden rounded-[2rem] bg-[#ddd0be] shadow-[0_35px_90px_-45px_rgba(20,15,10,0.55)]"
          >
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80"
              alt="Modern apartment interior"
              className="h-[460px] w-full object-cover md:h-[560px] lg:h-[620px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,18,14,0.06),rgba(22,18,14,0.44))]" />
            <div className="absolute bottom-0 left-0 right-0 grid gap-4 p-6 text-[#f6f0e8] md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#e9dccc]">{language === 'id' ? 'Sorotan Show Unit' : 'Show Unit Highlight'}</p>
                <h2 className="mt-2 font-['Georgia'] text-3xl">{language === 'id' ? 'Signature Satu Kamar' : 'Signature One Bedroom'}</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#f1e6da]">
                  {language === 'id'
                    ? 'Palet material yang hangat, bentang living lebih lebar, dan view balkon yang dirancang untuk pembeli lifestyle maupun positioning pasar sewa.'
                    : 'Warm material palette, wider living span, and balcony view designed for both lifestyle buyers and rental-market positioning.'}
                </p>
              </div>
              <div className="flex items-end">
                <motion.button
                  type="button"
                  onClick={onOpenDemo}
                  {...buttonHover}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/12 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Play className="h-4 w-4" />
                  {language === 'id' ? 'Lihat Demo 360' : 'View 360 Demo'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
