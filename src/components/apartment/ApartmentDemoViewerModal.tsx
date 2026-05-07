import { Check, X } from 'lucide-react'
import { type DemoExperience } from '../../data/apartmentLandingData'

type ApartmentDemoViewerModalProps = {
  demo: DemoExperience
  remoteViewingWhatsAppUrl: string
  onClose: () => void
}

export function ApartmentDemoViewerModal({ demo, remoteViewingWhatsAppUrl, onClose }: ApartmentDemoViewerModalProps) {
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
            <iframe
              src={demo.embedUrl}
              title={`${demo.name} 360 viewer`}
              className="h-[420px] w-full md:h-[560px]"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-white p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Viewer note</p>
              <p className="mt-3 text-sm leading-7 text-[#5d5246]">
                This dummy viewer uses a public interior panorama so the experience stays focused on room layout, furniture flow, and finish reading. It should later be replaced with Nagoya Hill-specific 360 room assets.
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
                  <a href={remoteViewingWhatsAppUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">
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
