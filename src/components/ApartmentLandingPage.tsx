import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import {
  apartmentContactConfig,
  apartmentCommerceProducts,
  apartmentDemos,
  type CommerceCategory,
  type CommerceProduct,
  type UnitType,
} from '../data/apartmentLandingData'
import { ApartmentBrochureSection } from './apartment/ApartmentBrochureSection'
import { ApartmentDemoSection } from './apartment/ApartmentDemoSection'
import { ApartmentDemoViewerModal } from './apartment/ApartmentDemoViewerModal'
import { ApartmentFaqSection } from './apartment/ApartmentFaqSection'
import { ApartmentFacilitiesSection } from './apartment/ApartmentFacilitiesSection'
import { ApartmentHeroSection } from './apartment/ApartmentHeroSection'
import { ApartmentInquirySection } from './apartment/ApartmentInquirySection'
import { ApartmentLocationSection } from './apartment/ApartmentLocationSection'
import { fadeUp } from './apartment/apartmentMotion'
import { ApartmentCommerceSection } from './apartment/ApartmentCommerceSection'
import { ApartmentTestimonialsSection } from './apartment/ApartmentTestimonialsSection'
import { ApartmentUnitModal } from './apartment/ApartmentUnitModal'
import { ApartmentUnitTypesSection } from './apartment/ApartmentUnitTypesSection'

export function ApartmentLandingPage() {
  const [activeCategory, setActiveCategory] = useState<CommerceCategory | 'All'>('All')
  const [cart, setCart] = useState<CommerceProduct[]>([])
  const [selectedDemoId, setSelectedDemoId] = useState(apartmentDemos[0]?.id ?? '')
  const [openFaq, setOpenFaq] = useState(0)
  const [selectedUnit, setSelectedUnit] = useState<UnitType | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<CommerceProduct | null>(null)
  const [isDemoViewerOpen, setIsDemoViewerOpen] = useState(false)
  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false)
  const [isBrochureSubmitted, setIsBrochureSubmitted] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    interestType: 'Private Tour',
    preferredVisitDate: '',
    message: '',
  })
  const [brochureForm, setBrochureForm] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return apartmentCommerceProducts
    return apartmentCommerceProducts.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const selectedDemo = apartmentDemos.find((item) => item.id === selectedDemoId) ?? apartmentDemos[0]

  const handleAddToCart = (product: CommerceProduct) => {
    setCart((current) => [...current, product])
  }

  useEffect(() => {
    if (!selectedUnit && !selectedProduct && !isDemoViewerOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedUnit(null)
        setSelectedProduct(null)
        setIsDemoViewerOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isDemoViewerOpen, selectedProduct, selectedUnit])

  const handleInquiryChange = (field: keyof typeof inquiryForm, value: string) => {
    setInquiryForm((current) => ({ ...current, [field]: value }))
  }

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsInquirySubmitted(true)
  }

  const handleBrochureChange = (field: keyof typeof brochureForm, value: string) => {
    setBrochureForm((current) => ({ ...current, [field]: value }))
  }

  const handleBrochureSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsBrochureSubmitted(true)
  }

  const whatsappMessage = encodeURIComponent(
    [
      'Hello, I would like to continue with the apartment showcase inquiry.',
      `Name: ${inquiryForm.name || '-'}`,
      `WhatsApp: ${inquiryForm.phone || '-'}`,
      `Email: ${inquiryForm.email || '-'}`,
      `Interest: ${inquiryForm.interestType || '-'}`,
      `Preferred date: ${inquiryForm.preferredVisitDate || '-'}`,
      `Message: ${inquiryForm.message || '-'}`,
    ].join('\n'),
  )

  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#221f1a]">
      <ApartmentHeroSection onOpenDemo={() => setIsDemoViewerOpen(true)} />

      <main className="mx-auto max-w-7xl space-y-24 px-6 py-16 md:px-10 lg:px-12">
        <motion.section {...fadeUp} className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-[#8b7d67]">Why this residence</p>
            <h2 className="mt-3 font-['Georgia'] text-4xl leading-tight md:text-5xl">A residential landing page with hospitality-grade clarity.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Built for both local buyers and Singapore-based prospects who need remote-first screening.',
              'Lifestyle framing stays aspirational, while the information architecture stays conversion-oriented.',
              'Photo sphere and walk-in demos reduce friction before an onsite visit.',
              'Mini commerce turns the page into a light commercial layer for move-in services and amenity add-ons.',
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#7d6b52]/15 bg-white px-5 py-5 text-sm leading-7 text-[#544838] shadow-[0_22px_55px_-42px_rgba(32,24,18,0.42)]">
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <ApartmentUnitTypesSection onSelectUnit={setSelectedUnit} />

        <ApartmentDemoSection
          selectedDemoId={selectedDemoId}
          onSelectDemo={setSelectedDemoId}
          onOpenDemo={() => setIsDemoViewerOpen(true)}
        />

        <ApartmentFacilitiesSection />

        <ApartmentLocationSection />

        <ApartmentCommerceSection
          activeCategory={activeCategory}
          filteredProducts={filteredProducts}
          cart={cart}
          onSetCategory={setActiveCategory}
          onViewProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
        />

        <ApartmentTestimonialsSection />

        <ApartmentFaqSection openFaq={openFaq} onToggleFaq={setOpenFaq} />

        <ApartmentInquirySection
          isInquirySubmitted={isInquirySubmitted}
          inquiryForm={inquiryForm}
          whatsappHref={`https://wa.me/?text=${whatsappMessage}`}
          onOpenDemo={() => setIsDemoViewerOpen(true)}
          onChange={handleInquiryChange}
          onSubmit={handleInquirySubmit}
        />

        <ApartmentBrochureSection
          isSubmitted={isBrochureSubmitted}
          brochureForm={brochureForm}
          onChange={handleBrochureChange}
          onSubmit={handleBrochureSubmit}
        />
      </main>

      <div className="fixed inset-x-0 bottom-4 z-30 px-4 lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3 rounded-full border border-[#7d6b52]/20 bg-[#f8f2e9]/95 p-2 shadow-[0_24px_50px_-30px_rgba(20,15,10,0.55)] backdrop-blur">
          <a href={apartmentContactConfig.salesWhatsAppUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-[#1f1a14] px-4 py-3 text-center text-sm font-semibold text-[#f7f0e5]">
            Book Visit
          </a>
          <a href="#apartment-demo" className="flex-1 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-[#2a241d]">
            360 Demo
          </a>
        </div>
      </div>

      {selectedUnit ? <ApartmentUnitModal unit={selectedUnit} onClose={() => setSelectedUnit(null)} /> : null}

      {selectedProduct ? (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-3 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProduct.name} detail`}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="mx-auto grid max-w-4xl gap-6 rounded-[2rem] bg-[#f7f0e5] p-4 text-[#221f1a] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.7)] md:grid-cols-[0.95fr_1.05fr] md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8b7d67]">{selectedProduct.category}</p>
                  <h3 className="mt-2 font-['Georgia'] text-3xl">{selectedProduct.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7d6b52]/20 bg-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="h-[320px] w-full rounded-[1.5rem] object-cover" />
              <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-[#584d41]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Commercial Fit</p>
                <p className="mt-2">
                  This product is placed inside the residence story to support move-in readiness, smart living upgrades, or amenity-led monetization.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.5rem] bg-white p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Product summary</p>
                <p className="mt-4 text-sm leading-7 text-[#584d41]">{selectedProduct.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#efe5d8] px-3 py-1 text-xs font-medium text-[#5f503d]">{selectedProduct.tag}</span>
                  <span className="rounded-full bg-[#f7f1e8] px-3 py-1 text-xs font-medium text-[#5f503d]">{selectedProduct.price}</span>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Suggested order flow</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#584d41]">
                  <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-[#847055]" /> Review the package and decide if it is furnishing, service, or amenity intent.</li>
                  <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-[#847055]" /> Add to cart for assisted checkout tracking.</li>
                  <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-[#847055]" /> Continue to inquiry or WhatsApp follow-up.</li>
                </ul>
              </div>
              <div className="rounded-[1.5rem] bg-[#2b241c] p-5 text-[#f7f0e5]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#cdbca3]">Action</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedProduct)
                      setSelectedProduct(null)
                    }}
                    className="rounded-full bg-[#f0dfc6] px-4 py-2 text-sm font-semibold text-[#271f17]"
                  >
                    Add to Cart
                  </button>
                  <a
                    href="#apartment-contact"
                    onClick={() => setSelectedProduct(null)}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Continue to Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isDemoViewerOpen ? <ApartmentDemoViewerModal demo={selectedDemo} onClose={() => setIsDemoViewerOpen(false)} /> : null}
    </div>
  )
}
