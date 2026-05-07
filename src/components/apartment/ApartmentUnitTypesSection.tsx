import { motion } from 'framer-motion'
import { BedDouble, Building2, Check } from 'lucide-react'
import { apartmentTextCopy, apartmentUnitTypes, type ApartmentLanguage, type UnitType } from '../../data/apartmentLandingData'
import { buttonHover, cardHover, fadeUp } from './apartmentMotion'

type ApartmentUnitTypesSectionProps = {
  language: ApartmentLanguage
  onSelectUnit: (unit: UnitType) => void
}

export function ApartmentUnitTypesSection({ language, onSelectUnit }: ApartmentUnitTypesSectionProps) {
  const common = apartmentTextCopy[language].common

  return (
    <section id="apartment-unit-types" className="space-y-8">
      <motion.div {...fadeUp} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-[#8b7d67]">{language === 'id' ? 'Tipe unit' : 'Unit types'}</p>
          <h2 className="mt-3 font-['Georgia'] text-4xl md:text-5xl">
            {language === 'id' ? 'Layout yang dibentuk untuk kemewahan yang tetap praktis.' : 'Layouts shaped around practical luxury.'}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#5d5246]">
          {language === 'id'
            ? 'Setiap kartu unit menampilkan hal paling esensial: ukuran, konfigurasi, harga awal, status ketersediaan, dan angle komersial terkuat.'
            : 'Each unit card keeps the essentials visible: size, configuration, starting price, availability cue, and the strongest commercial angle.'}
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {apartmentUnitTypes.map((unit) => (
          <motion.article
            key={unit.id}
            {...fadeUp}
            whileHover={cardHover.whileHover}
            transition={cardHover.transition}
            className="overflow-hidden rounded-[2rem] border border-[#7d6b52]/15 bg-white shadow-[0_30px_70px_-48px_rgba(20,15,10,0.6)]"
          >
            <img src={unit.image} alt={unit.name} className="h-72 w-full object-cover" />
            <div className="flex min-h-[430px] flex-col p-6">
              <div className="flex min-h-[104px] items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8b7d67]">{language === 'id' ? unit.availabilityId : unit.availability}</p>
                  <h3 className="mt-2 font-['Georgia'] text-2xl">{language === 'id' ? unit.nameId : unit.name}</h3>
                </div>
                <span className="shrink-0 rounded-full bg-[#efe5d8] px-4 py-2 text-xs font-medium leading-none text-[#5f503d]">{unit.size}</span>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-[#5d5246] sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f7f1e8] px-4 py-3">
                  <p className="flex min-h-[44px] items-center gap-2 leading-5">
                    <BedDouble className="h-4 w-4 shrink-0" />
                    <span>{language === 'id' ? unit.bedroomsId : unit.bedrooms}</span>
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f1e8] px-4 py-3">
                  <p className="flex min-h-[44px] items-center gap-2 leading-5">
                    <Building2 className="h-4 w-4 shrink-0" />
                    <span>{language === 'id' ? unit.bathroomsId : unit.bathrooms}</span>
                  </p>
                </div>
              </div>
              <ul className="mt-5 min-h-[108px] space-y-2 text-sm text-[#52473b]">
                {(language === 'id' ? unit.highlightsId : unit.highlights).map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-[#847055]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#e8dece] pt-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">{common.startingFrom}</p>
                  <p className="mt-1 text-lg font-semibold text-[#241f18]">{language === 'id' ? unit.priceId ?? unit.price : unit.price}</p>
                </div>
                <motion.button
                  type="button"
                  onClick={() => onSelectUnit(unit)}
                  {...buttonHover}
                  className="rounded-full border border-[#352c21] px-4 py-2 text-sm font-semibold text-[#2b241c] transition hover:bg-[#2b241c] hover:text-[#f7f0e5]"
                >
                  {common.reserveInterest}
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
