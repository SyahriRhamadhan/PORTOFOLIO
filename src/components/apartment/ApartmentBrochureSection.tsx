import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from './apartmentMotion'

type BrochureFormState = {
  name: string
  phone: string
  email: string
}

type ApartmentBrochureSectionProps = {
  isSubmitted: boolean
  brochureForm: BrochureFormState
  onChange: (field: keyof BrochureFormState, value: string) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function ApartmentBrochureSection({
  isSubmitted,
  brochureForm,
  onChange,
  onSubmit,
}: ApartmentBrochureSectionProps) {
  return (
    <motion.section
      {...fadeUp}
      id="apartment-brochure"
      className="grid gap-8 rounded-[2rem] border border-[#7d6b52]/15 bg-white px-6 py-8 shadow-[0_24px_60px_-44px_rgba(22,16,11,0.5)] md:px-8 lg:grid-cols-[0.85fr_1.15fr]"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.26em] text-[#8b7d67]">Brochure flow</p>
        <h2 className="mt-3 font-['Georgia'] text-4xl md:text-5xl">Capture brochure demand without breaking the premium tone.</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#5d5246]">
          This follows the PRD requirement for brochure download capture. In the current MVP, it uses a gated request flow with success state before any real file delivery integration.
        </p>
      </div>
      <div className="rounded-[1.75rem] bg-[#f7f1e8] p-5">
        {isSubmitted ? (
          <div className="rounded-[1.25rem] bg-white p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Brochure request received</p>
            <h3 className="mt-2 font-['Georgia'] text-3xl text-[#221f1a]">Lead captured for brochure follow-up.</h3>
            <p className="mt-3 text-sm leading-7 text-[#5d5246]">
              The final integration can send a PDF link, email attachment, or WhatsApp document automatically after submit.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-3">
            <input
              value={brochureForm.name}
              onChange={(event) => onChange('name', event.target.value)}
              placeholder="Full name"
              className="rounded-2xl border border-[#d9cdbb] bg-white px-4 py-3 text-sm text-[#221f1a] outline-none"
              required
            />
            <div className="grid gap-3 md:grid-cols-2">
              <input
                value={brochureForm.phone}
                onChange={(event) => onChange('phone', event.target.value)}
                placeholder="WhatsApp number"
                className="rounded-2xl border border-[#d9cdbb] bg-white px-4 py-3 text-sm text-[#221f1a] outline-none"
                required
              />
              <input
                type="email"
                value={brochureForm.email}
                onChange={(event) => onChange('email', event.target.value)}
                placeholder="Email address"
                className="rounded-2xl border border-[#d9cdbb] bg-white px-4 py-3 text-sm text-[#221f1a] outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f1a14] px-5 py-3 text-sm font-semibold text-[#f7f0e5] transition hover:bg-[#342b21]"
            >
              Request Brochure
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </motion.section>
  )
}
