import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  apartmentContactConfig,
  apartmentCommerceProducts,
  apartmentDemos,
  apartmentTextCopy,
  type ApartmentLanguage,
  type CommerceCategory,
  type CommerceProduct,
  type UnitType,
} from '../data/apartmentLandingData'
import { ApartmentBrochureSection } from './apartment/ApartmentBrochureSection'
import { ApartmentAiChatWidget } from './apartment/ApartmentAiChatWidget'
import { ApartmentDemoSection } from './apartment/ApartmentDemoSection'
import { ApartmentDemoViewerModal } from './apartment/ApartmentDemoViewerModal'
import { ApartmentFaqSection } from './apartment/ApartmentFaqSection'
import { ApartmentFacilitiesSection } from './apartment/ApartmentFacilitiesSection'
import { ApartmentHeroSection } from './apartment/ApartmentHeroSection'
import { ApartmentInquirySection } from './apartment/ApartmentInquirySection'
import { ApartmentLocationSection } from './apartment/ApartmentLocationSection'
import { fadeUp } from './apartment/apartmentMotion'
import { ApartmentCommerceSection } from './apartment/ApartmentCommerceSection'
import { ApartmentProductModal } from './apartment/ApartmentProductModal'
import { ApartmentStickyMobileBar } from './apartment/ApartmentStickyMobileBar'
import { ApartmentTestimonialsSection } from './apartment/ApartmentTestimonialsSection'
import { ApartmentUnitModal } from './apartment/ApartmentUnitModal'
import { ApartmentUnitTypesSection } from './apartment/ApartmentUnitTypesSection'

type ApartmentLandingPageProps = {
  language: ApartmentLanguage
}

export function ApartmentLandingPage({ language }: ApartmentLandingPageProps) {
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
  const copy = apartmentTextCopy[language]

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
      <ApartmentHeroSection language={language} onOpenDemo={() => setIsDemoViewerOpen(true)} />

      <main className="mx-auto max-w-7xl space-y-24 px-6 py-16 md:px-10 lg:px-12">
        <motion.section {...fadeUp} className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-[#8b7d67]">{copy.why.eyebrow}</p>
            <h2 className="mt-3 font-['Georgia'] text-4xl leading-tight md:text-5xl">{copy.why.title}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.why.points.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#7d6b52]/15 bg-white px-5 py-5 text-sm leading-7 text-[#544838] shadow-[0_22px_55px_-42px_rgba(32,24,18,0.42)]">
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <ApartmentUnitTypesSection language={language} onSelectUnit={setSelectedUnit} />

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
          salesWhatsAppUrl={apartmentContactConfig.salesWhatsAppUrl}
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

      <ApartmentStickyMobileBar salesWhatsAppUrl={apartmentContactConfig.salesWhatsAppUrl} />
      <ApartmentAiChatWidget language={language} />

      {selectedUnit ? <ApartmentUnitModal unit={selectedUnit} onClose={() => setSelectedUnit(null)} /> : null}

      {selectedProduct ? (
        <ApartmentProductModal
          product={selectedProduct}
          salesWhatsAppUrl={apartmentContactConfig.salesWhatsAppUrl}
          onAddToCart={handleAddToCart}
          onClose={() => setSelectedProduct(null)}
        />
      ) : null}

      {isDemoViewerOpen ? (
        <ApartmentDemoViewerModal
          demo={selectedDemo}
          remoteViewingWhatsAppUrl={apartmentContactConfig.remoteViewingWhatsAppUrl}
          onClose={() => setIsDemoViewerOpen(false)}
        />
      ) : null}
    </div>
  )
}
