import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, MapPinned, ShoppingBag } from 'lucide-react'
import { fadeUp } from './apartmentMotion'

type InquiryFormState = {
  name: string
  phone: string
  email: string
  interestType: string
  preferredVisitDate: string
  message: string
}

type ApartmentInquirySectionProps = {
  isInquirySubmitted: boolean
  inquiryForm: InquiryFormState
  whatsappHref: string
  onOpenDemo: () => void
  onChange: (field: keyof InquiryFormState, value: string) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function ApartmentInquirySection({
  isInquirySubmitted,
  inquiryForm,
  whatsappHref,
  onOpenDemo,
  onChange,
  onSubmit,
}: ApartmentInquirySectionProps) {
  return (
    <motion.section
      {...fadeUp}
      id="apartment-contact"
      className="overflow-hidden rounded-[2.25rem] bg-[linear-gradient(135deg,#221d17_0%,#3a2f24_55%,#5b4a36_100%)] px-6 py-8 text-[#f7f0e5] md:px-10 md:py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-[#d7c8b1]">Final CTA</p>
          <h2 className="mt-3 font-['Georgia'] text-4xl leading-tight md:text-5xl">Book a private tour, request the brochure, or continue your remote review.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#eadfce]">
            The last section should not feel like a generic form dump. It should close the narrative with confidence and give the user a fast next step whether they are in Batam, Jakarta, Singapore, or elsewhere.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="rounded-full bg-[#f0dfc6] px-5 py-3 text-sm font-semibold text-[#271f17]">
              Talk to Sales
            </a>
            <button
              type="button"
              onClick={onOpenDemo}
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              View 360 Again
            </button>
          </div>
        </div>
        <div className="rounded-[1.75rem] bg-white/8 p-5 backdrop-blur">
          {isInquirySubmitted ? (
            <div className="grid gap-4">
              <div className="rounded-[1.25rem] bg-[#f0dfc6] p-4 text-[#271f17]">
                <p className="text-xs uppercase tracking-[0.22em]">Inquiry Submitted</p>
                <h3 className="mt-2 font-['Georgia'] text-3xl">Private viewing request received.</h3>
                <p className="mt-3 text-sm leading-7">
                  The page now has a basic success state per PRD. Next integration can send this to WhatsApp or a backend endpoint.
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-black/10 p-4 text-sm leading-7 text-[#efe3d6]">
                Recommended CTA flow:
                `Book Private Tour` for local prospects,
                `Request Remote Viewing` for SG and overseas buyers,
                and `Continue Assisted Checkout` for service or add-on intent.
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#d9ccb9]">Lead capture form</p>
                <ul className="mt-3 space-y-2 text-sm leading-6">
                  <li className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Preferred viewing date</li>
                  <li className="flex items-center gap-2"><MapPinned className="h-4 w-4" /> Local, SG, or overseas location</li>
                  <li className="flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Unit interest or mini-commerce request</li>
                </ul>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  value={inquiryForm.name}
                  onChange={(event) => onChange('name', event.target.value)}
                  placeholder="Full name"
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-[#d7c8b1]"
                  required
                />
                <input
                  value={inquiryForm.phone}
                  onChange={(event) => onChange('phone', event.target.value)}
                  placeholder="WhatsApp number"
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-[#d7c8b1]"
                  required
                />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  type="email"
                  value={inquiryForm.email}
                  onChange={(event) => onChange('email', event.target.value)}
                  placeholder="Email address"
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-[#d7c8b1]"
                  required
                />
                <select
                  value={inquiryForm.interestType}
                  onChange={(event) => onChange('interestType', event.target.value)}
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white outline-none"
                >
                  <option className="text-black">Private Tour</option>
                  <option className="text-black">Remote Viewing</option>
                  <option className="text-black">Brochure Request</option>
                  <option className="text-black">Mini Commerce Order</option>
                </select>
              </div>
              <input
                type="date"
                value={inquiryForm.preferredVisitDate}
                onChange={(event) => onChange('preferredVisitDate', event.target.value)}
                className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white outline-none"
              />
              <textarea
                value={inquiryForm.message}
                onChange={(event) => onChange('message', event.target.value)}
                placeholder="Tell us which unit, demo, or service you want to continue with."
                rows={4}
                className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-[#d7c8b1]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0dfc6] px-5 py-3 text-sm font-semibold text-[#271f17] transition hover:bg-[#f6e9d6]"
              >
                Submit Inquiry
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Continue via WhatsApp
              </a>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  )
}
