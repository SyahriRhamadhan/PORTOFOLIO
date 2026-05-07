import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Bot, MessageCircle, SendHorizontal, X } from 'lucide-react'
import {
  apartmentChatSeeds,
  apartmentContactConfig,
  type ApartmentChatMessage,
  type ApartmentLanguage,
} from '../../data/apartmentLandingData'
import { buttonHover, cardHover } from './apartmentMotion'

type ApartmentAiChatWidgetProps = {
  language: ApartmentLanguage
}

type QuickAction = {
  id: string
  label: string
  prompt: string
  targetId?: string
}

function buildAssistantReply(input: string, language: ApartmentLanguage) {
  const text = input.toLowerCase()

  if (text.includes('brochure') || text.includes('brosur')) {
    return language === 'id'
      ? `Saya bisa bantu alur permintaan brosur. Silakan isi form brosur di section bawah atau lanjut ke WhatsApp sales: ${apartmentContactConfig.salesWhatsAppUrl}`
      : `I can help with the brochure request flow. Please use the brochure form below or continue to sales WhatsApp: ${apartmentContactConfig.salesWhatsAppUrl}`
  }

  if (text.includes('remote') || text.includes('360') || text.includes('walk') || text.includes('viewer')) {
    return language === 'id'
      ? `Untuk remote viewing, buka section demo 360 atau gunakan CTA follow-up remote viewing. Ini dummy assistant, jadi responsnya masih berbasis intent sederhana.`
      : `For remote viewing, open the 360 demo section or use the remote follow-up CTA. This is still a dummy assistant, so replies are intent-based only.`
  }

  if (text.includes('unit') || text.includes('bedroom') || text.includes('studio') || text.includes('kamar')) {
    return language === 'id'
      ? `Tipe unit yang tersedia di demo ini mencakup Studio, Signature Satu Kamar, dan Sudut Dua Kamar. Anda bisa buka detail unit untuk floor plan preview.`
      : `Available unit types in this demo include Urban Studio, Signature One Bedroom, and Corner Two Bedroom. You can open each unit detail for the floor plan preview.`
  }

  if (text.includes('service') || text.includes('clean') || text.includes('furnish') || text.includes('cart')) {
    return language === 'id'
      ? `Mini commerce demo ini mendukung furnishing pack, smart living bundle, cleaning service, dan amenity pass. Anda bisa buka detail produk lalu tambah ke cart.`
      : `This mini commerce demo supports furnishing packs, smart living bundles, cleaning services, and amenity passes. You can open product details and add them to the cart.`
  }

  if (text.includes('visit') || text.includes('tour') || text.includes('booking') || text.includes('kunjung')) {
    return language === 'id'
      ? `Untuk booking visit, gunakan CTA Book Visit atau isi form inquiry pada section final CTA.`
      : `For booking a visit, use the Book Visit CTA or submit the inquiry form in the final CTA section.`
  }

  return language === 'id'
    ? 'Saya masih chatbot dummy berbasis keyword. Coba tanyakan tentang unit, remote viewing, brosur, visit, atau layanan move-in.'
    : 'I am still a keyword-based dummy chatbot. Try asking about units, remote viewing, brochure, visits, or move-in services.'
}

function resolveTargetId(input: string) {
  const text = input.toLowerCase()

  if (text.includes('brochure') || text.includes('brosur')) return 'apartment-brochure'
  if (text.includes('remote') || text.includes('360') || text.includes('walk') || text.includes('viewer')) return 'apartment-demo'
  if (text.includes('unit') || text.includes('bedroom') || text.includes('studio') || text.includes('kamar')) return 'apartment-unit-types'
  if (text.includes('service') || text.includes('clean') || text.includes('furnish') || text.includes('cart')) return 'apartment-commerce'
  if (text.includes('visit') || text.includes('tour') || text.includes('booking') || text.includes('kunjung')) return 'apartment-contact'

  return undefined
}

export function ApartmentAiChatWidget({ language }: ApartmentAiChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const seedMessages = useMemo(() => apartmentChatSeeds[language], [language])
  const [messages, setMessages] = useState<ApartmentChatMessage[]>(seedMessages)
  const quickActions = useMemo<QuickAction[]>(
    () =>
      language === 'id'
        ? [
            { id: 'units', label: 'Tipe Unit', prompt: 'Saya ingin lihat tipe unit', targetId: 'apartment-unit-types' },
            { id: 'demo', label: 'Remote Viewing', prompt: 'Saya ingin remote viewing atau demo 360', targetId: 'apartment-demo' },
            { id: 'brochure', label: 'Brosur', prompt: 'Saya ingin minta brosur', targetId: 'apartment-brochure' },
            { id: 'visit', label: 'Book Visit', prompt: 'Saya ingin booking visit', targetId: 'apartment-contact' },
          ]
        : [
            { id: 'units', label: 'Unit Types', prompt: 'I want to see unit types', targetId: 'apartment-unit-types' },
            { id: 'demo', label: 'Remote Viewing', prompt: 'I want remote viewing or a 360 demo', targetId: 'apartment-demo' },
            { id: 'brochure', label: 'Brochure', prompt: 'I want the brochure', targetId: 'apartment-brochure' },
            { id: 'visit', label: 'Book Visit', prompt: 'I want to book a visit', targetId: 'apartment-contact' },
          ],
    [language],
  )

  useEffect(() => {
    setMessages(seedMessages)
  }, [seedMessages])

  const runPrompt = (input: string) => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMessage: ApartmentChatMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      text: trimmed,
    }

    const assistantMessage: ApartmentChatMessage = {
      id: `${Date.now()}-assistant`,
      role: 'assistant',
      text: buildAssistantReply(trimmed, language),
    }

    setMessages((current) => [...current, userMessage, assistantMessage])
    setDraft('')

    const targetId = resolveTargetId(trimmed)
    if (targetId) {
      window.setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    runPrompt(draft)
  }

  return (
    <div className="fixed bottom-6 right-4 z-40 md:bottom-8 md:right-6">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="w-[min(92vw,24rem)] overflow-hidden rounded-[1.75rem] border border-[#7d6b52]/20 bg-[#f8f2e9] shadow-[0_28px_60px_-35px_rgba(20,15,10,0.55)]"
        >
          <div className="flex items-center justify-between border-b border-[#e6d9c6] bg-[#1f1a14] px-4 py-3 text-[#f7f0e5]">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              <div>
                <p className="text-sm font-semibold">{language === 'id' ? 'Demo AI Assistant' : 'AI Assistant Demo'}</p>
                <p className="text-[11px] text-[#d6c7b2]">{language === 'id' ? 'After-hours support mockup' : 'After-hours support mockup'}</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-1 text-[#f7f0e5]">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[22rem] space-y-3 overflow-y-auto px-4 py-4">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <motion.button
                  key={action.id}
                  type="button"
                  {...buttonHover}
                  onClick={() => {
                    runPrompt(action.prompt)
                    if (action.targetId) {
                      window.setTimeout(() => {
                        document.getElementById(action.targetId!)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 120)
                    }
                  }}
                  className="rounded-full border border-[#d8cab7] bg-[#fbf7f1] px-3 py-2 text-xs font-medium text-[#2f271e]"
                >
                  {action.label}
                </motion.button>
              ))}
            </div>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                {...cardHover}
                className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === 'assistant'
                    ? 'mr-8 bg-white text-[#3f3529]'
                    : 'ml-8 bg-[#efe3d1] text-[#221f1a]'
                }`}
              >
                {message.text}
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-[#e6d9c6] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder={language === 'id' ? 'Tanya soal unit, brosur, 360, atau visit...' : 'Ask about units, brochure, 360, or visits...'}
                className="flex-1 rounded-full border border-[#d8cab7] bg-[#fbf7f1] px-4 py-3 text-sm text-[#221f1a] outline-none"
              />
              <motion.button
                type="submit"
                {...buttonHover}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1f1a14] text-[#f7f0e5]"
              >
                <SendHorizontal className="h-4 w-4" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      ) : null}

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        {...buttonHover}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#1f1a14] px-5 py-3 text-sm font-semibold text-[#f7f0e5] shadow-[0_18px_40px_-25px_rgba(20,15,10,0.65)]"
      >
        <MessageCircle className="h-4 w-4" />
        {language === 'id' ? 'Demo Chat AI' : 'AI Chat Demo'}
      </motion.button>
    </div>
  )
}
