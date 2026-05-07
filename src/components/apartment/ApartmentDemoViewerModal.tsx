import { Check, X } from 'lucide-react'
import { type DemoExperience } from '../../data/apartmentLandingData'

type ApartmentDemoViewerModalProps = {
  demo: DemoExperience
  onClose: () => void
}

export function ApartmentDemoViewerModal({ demo, onClose }: ApartmentDemoViewerModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${demo.name} viewer`}
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-6xl rounded-[2rem] bg-[#f7f0e5] p-4 text-[#221f1a] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.7)] md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#8b7d67]">{demo.type}</p>
            <h3 className="mt-2 font-['Georgia'] text-3xl">{demo.name}</h3>
            <p className="mt-2 text-sm leading-7 text-[#5d5246]">{demo.location}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7d6b52]/20 bg-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#ddd0be]">
            <img src={demo.image} alt={demo.name} className="h-[420px] w-full object-cover md:h-[560px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(22,18,14,0.18)_68%,rgba(22,18,14,0.42)_100%)]" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 backdrop-blur">
              <div className="flex h-full items-center justify-center text-center text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Demo
                <br />
                Viewer
              </div>
            </div>
            <button className="absolute left-[22%] top-[36%] h-4 w-4 rounded-full border-2 border-white bg-[#f0dfc6]" />
            <button className="absolute left-[62%] top-[44%] h-4 w-4 rounded-full border-2 border-white bg-[#f0dfc6]" />
            <button className="absolute left-[48%] top-[63%] h-4 w-4 rounded-full border-2 border-white bg-[#f0dfc6]" />
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-white p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Viewer note</p>
              <p className="mt-3 text-sm leading-7 text-[#5d5246]">
                This is a richer placeholder for the photo sphere / walk-in requirement in the PRD. It simulates hotspot-based review flow before real 360 integration.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Hotspot highlights</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#584d41]">
                {demo.hotspots.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 text-[#847055]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] bg-[#2b241c] p-5 text-[#f7f0e5]">
              <p className="text-xs uppercase tracking-[0.22em] text-[#cdbca3]">Next step</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#apartment-contact" onClick={onClose} className="rounded-full bg-[#f0dfc6] px-4 py-2 text-sm font-semibold text-[#271f17]">
                  Book Physical Visit
                </a>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">
                  Remote Viewing Follow-Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
