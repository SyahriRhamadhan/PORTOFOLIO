import { ArrowRight, Check, X } from 'lucide-react'
import { type UnitType } from '../../data/apartmentLandingData'

type ApartmentUnitModalProps = {
  unit: UnitType
  onClose: () => void
}

export function ApartmentUnitModal({ unit, onClose }: ApartmentUnitModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${unit.name} detail`}
      onClick={onClose}
    >
      <div
        className="mx-auto grid max-w-5xl gap-6 rounded-[2rem] bg-[#f7f0e5] p-4 text-[#221f1a] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.7)] md:grid-cols-[1.05fr_0.95fr] md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#8b7d67]">{unit.availability}</p>
              <h3 className="mt-2 font-['Georgia'] text-3xl">{unit.name}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7d6b52]/20 bg-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <img src={unit.floorPlanImage} alt={`${unit.name} floor plan`} className="h-[360px] w-full rounded-[1.5rem] object-cover" />
          <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-[#584d41]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Floor Plan Preview</p>
            <p className="mt-2">{unit.floorPlanLabel}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-white p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Quick facts</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f1e8] px-4 py-3 text-sm">{unit.size}</div>
              <div className="rounded-2xl bg-[#f7f1e8] px-4 py-3 text-sm">{unit.price}</div>
              <div className="rounded-2xl bg-[#f7f1e8] px-4 py-3 text-sm">{unit.bedrooms}</div>
              <div className="rounded-2xl bg-[#f7f1e8] px-4 py-3 text-sm">{unit.bathrooms}</div>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Feature highlights</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[#584d41]">
              {unit.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 text-[#847055]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-[#2b241c] p-5 text-[#f7f0e5]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#cdbca3]">Suggested next step</p>
            <p className="mt-3 text-sm leading-7">
              Review this plan, then continue to `Book Private Tour` or `Request Remote Viewing` in the CTA section below.
            </p>
            <a href="#apartment-contact" onClick={onClose} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#f0dfc6] px-4 py-2 text-sm font-semibold text-[#271f17]">
              Continue to Inquiry
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
