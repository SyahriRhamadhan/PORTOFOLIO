import { Mail, MapPinned, Phone } from 'lucide-react'
import { apartmentContactConfig } from '../data/apartmentLandingData'

export function ApartmentLandingFooter() {
  return (
    <footer className="border-t border-[#7d6b52]/15 bg-[#1f1a14] px-6 py-12 text-[#efe4d5] md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#c5b49b]">Developed by</p>
          <h3 className="mt-3 font-['Georgia'] text-4xl">Nagoya Hill Condominium</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#d7cab8]">
            Marketing Gallery & Show Unit located at Nagoya Hill Shopping Mall, supporting property inquiry, physical viewing, and remote-first showcase flow in this dummy project.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#c5b49b]">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-[#efe4d5]">
            <a href="#apartment-unit-types" className="transition hover:text-white">Unit Types</a>
            <a href="#apartment-demo" className="transition hover:text-white">360 Demo</a>
            <a href="#apartment-commerce" className="transition hover:text-white">Mini Commerce</a>
            <a href="#apartment-contact" className="transition hover:text-white">Book Tour</a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#c5b49b]">Contact Direction</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[#d7cab8]">
            <p className="flex items-center gap-3">
              <MapPinned className="h-4 w-4 text-[#f0dfc6]" />
              {apartmentContactConfig.salesLocationLabel}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#f0dfc6]" />
              {apartmentContactConfig.salesPhoneLabel}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#f0dfc6]" />
              {apartmentContactConfig.salesEmail}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/8 pt-6 text-sm text-[#bcae9b] md:flex-row md:items-center md:justify-between">
        <p>Marketing Gallery & Show Unit at Nagoya Hill Shopping Mall</p>
        <p>Dummy showcase route: `#apartment-living`</p>
      </div>
    </footer>
  )
}
