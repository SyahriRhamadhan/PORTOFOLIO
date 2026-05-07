import { Check, X } from 'lucide-react'
import { apartmentTextCopy, type ApartmentLanguage, type DemoExperience } from '../../data/apartmentLandingData'

type ApartmentDemoViewerModalProps = {
  demo: DemoExperience
  language: ApartmentLanguage
  remoteViewingWhatsAppUrl: string
  onClose: () => void
}

export function ApartmentDemoViewerModal({ demo, language, remoteViewingWhatsAppUrl, onClose }: ApartmentDemoViewerModalProps) {
  const copy = apartmentTextCopy[language] ?? apartmentTextCopy.en
  const viewerUrl = demo.embedUrl.includes('autoLoad=true')
    ? demo.embedUrl
    : `${demo.embedUrl}&autoLoad=true`

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${language === 'id' ? demo.nameId : demo.name} viewer`}
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-6xl rounded-[2rem] bg-[#f7f0e5] p-4 text-[#221f1a] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.7)] md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#8b7d67]">
              {language === 'id' ? (demo.type === 'Photo Sphere' ? 'Photo Sphere' : 'Demo Walk-In') : demo.type}
            </p>
            <h3 className="mt-2 font-['Georgia'] text-3xl">{language === 'id' ? demo.nameId : demo.name}</h3>
            <p className="mt-2 text-sm leading-7 text-[#5d5246]">{language === 'id' ? demo.locationId : demo.location}</p>
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
              src={viewerUrl}
              title={`${language === 'id' ? demo.nameId : demo.name} 360 viewer`}
              className="h-[420px] w-full md:h-[560px]"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.5rem] bg-white p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">{copy.demo.viewerNote}</p>
              <p className="mt-3 text-sm leading-7 text-[#5d5246]">{copy.demo.viewerNoteBody}</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">{copy.demo.hotspotHighlights}</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#584d41]">
                {(language === 'id' ? demo.hotspotsId : demo.hotspots).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 text-[#847055]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] bg-[#2b241c] p-5 text-[#f7f0e5]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#cdbca3]">{copy.demo.nextStep}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="#apartment-contact" onClick={onClose} className="rounded-full bg-[#f0dfc6] px-4 py-2 text-sm font-semibold text-[#271f17]">
                    {copy.demo.bookPhysicalVisit}
                  </a>
                  <a href={remoteViewingWhatsAppUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">
                    {copy.common.remoteFollowUp}
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
