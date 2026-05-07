import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { apartmentTextCopy, type ApartmentLanguage } from '../data/apartmentLandingData'

type ApartmentLandingNavbarProps = {
  links: Array<{ label: string; href: string }>
  language: ApartmentLanguage
  onChangeLanguage: (language: ApartmentLanguage) => void
}

export function ApartmentLandingNavbar({ links, language, onChangeLanguage }: ApartmentLandingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const copy = apartmentTextCopy[language]

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onHashChange = () => setIsMenuOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <nav className="fixed inset-x-0 top-0 z-40 px-4 py-4 md:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition ${
          isScrolled
            ? 'border-[#7d6b52]/20 bg-[#f8f2e9]/88 shadow-[0_20px_50px_-35px_rgba(25,18,12,0.55)] backdrop-blur'
            : 'border-white/35 bg-white/12 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#apartment-living" className="font-['Georgia'] text-lg tracking-[0.18em] text-[#2c251d] md:text-xl">
            {copy.nav.brand}
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="mr-2 flex items-center gap-2 rounded-full border border-[#7d6b52]/15 bg-white/70 p-1">
              <button
                type="button"
                onClick={() => onChangeLanguage('en')}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${language === 'en' ? 'bg-[#1f1a14] text-[#f7f0e5]' : 'text-[#4f4334]'}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onChangeLanguage('id')}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${language === 'id' ? 'bg-[#1f1a14] text-[#f7f0e5]' : 'text-[#4f4334]'}`}
              >
                ID
              </button>
            </div>
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#4f4334] transition hover:bg-[#efe6d8] hover:text-[#1f1a14]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apartment-contact"
              className="rounded-full bg-[#1f1a14] px-5 py-2.5 text-sm font-semibold text-[#f7f0e5] transition hover:bg-[#342b21]"
            >
              {copy.nav.bookTour}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close apartment navigation' : 'Open apartment navigation'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7d6b52]/20 bg-[#f8f2e9]/88 text-[#2a241d] lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-[#7d6b52]/15 px-4 pb-4 pt-2 lg:hidden">
            <div className="grid gap-2">
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                <span className="text-sm font-medium text-[#2a241d]">{copy.nav.language}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onChangeLanguage('en')}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${language === 'en' ? 'bg-[#1f1a14] text-[#f7f0e5]' : 'bg-[#f2ebdf] text-[#2a241d]'}`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => onChangeLanguage('id')}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${language === 'id' ? 'bg-[#1f1a14] text-[#f7f0e5]' : 'bg-[#f2ebdf] text-[#2a241d]'}`}
                  >
                    ID
                  </button>
                </div>
              </div>
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#2a241d] shadow-[0_18px_35px_-28px_rgba(20,15,10,0.45)]"
                >
                  <span className="inline-flex items-center gap-2">
                    {item.label}
                    <ChevronDown className="h-4 w-4 -rotate-90 text-[#8a7b66]" />
                  </span>
                </a>
              ))}
              <a
                href="#apartment-contact"
                className="rounded-2xl bg-[#1f1a14] px-4 py-3 text-sm font-semibold text-[#f7f0e5]"
              >
                {copy.nav.bookTour}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
