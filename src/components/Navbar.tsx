import { useEffect, useState } from 'react'
import { navItems, personalInfo } from '../data/portfolioData'
import { Check, Copy, Moon, Share2, Sun, X } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { FaFacebookF, FaLinkedinIn, FaTelegram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

type NavbarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [showBorder, setShowBorder] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const portfolioUrl = 'https://syahrirhamadhan.vercel.app/'
  const encodedUrl = encodeURIComponent(portfolioUrl)
  const encodedText = encodeURIComponent(`Portfolio Syahri Rhamadhan - ${portfolioUrl}`)
  const shareLinks = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodedText}`,
      icon: FaWhatsapp,
      className: 'bg-emerald-400',
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent('Portfolio Syahri Rhamadhan')}`,
      icon: FaXTwitter,
      className: 'bg-zinc-900 text-white',
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: FaLinkedinIn,
      className: 'bg-sky-500 text-white',
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FaFacebookF,
      className: 'bg-blue-500 text-white',
    },
    {
      label: 'Telegram',
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent('Portfolio Syahri Rhamadhan')}`,
      icon: FaTelegram,
      className: 'bg-cyan-400',
    },
  ]

  useEffect(() => {
    const onScroll = () => setShowBorder(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isShareOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsShareOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isShareOpen])

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(portfolioUrl)
    setIsCopied(true)
    window.setTimeout(() => setIsCopied(false), 1600)
  }

  const handleNativeShare = async () => {
    if (!navigator.share) {
      await handleCopyLink()
      return
    }

    await navigator.share({
      title: 'Portfolio Syahri Rhamadhan',
      text: 'Portfolio Syahri Rhamadhan',
      url: portfolioUrl,
    })
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-30 bg-zinc-200/95 px-4 py-3 backdrop-blur md:px-8 ${
          showBorder ? 'border-b-4 border-black' : ''
        }`}
      >
        <div className="flex w-full items-center justify-between gap-4">
          <a className="text-lg font-extrabold text-sky-500 md:text-[2rem]" href="#home">
            {personalInfo.name.toUpperCase()}
          </a>
          <div className="hidden flex-wrap justify-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="border-[3px] border-black bg-zinc-100 px-5 py-2 text-xl font-bold shadow-[3px_3px_0_0_#000] transition hover:-translate-y-0.5"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open share modal"
              onClick={() => setIsShareOpen(true)}
              className="flex h-12 w-12 items-center justify-center border-[3px] border-black bg-zinc-100 shadow-[3px_3px_0_0_#000] transition hover:-translate-y-0.5"
            >
              <Share2 className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="flex h-12 w-12 items-center justify-center border-[3px] border-black bg-zinc-100 shadow-[3px_3px_0_0_#000] transition hover:-translate-y-0.5"
            >
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isShareOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Share portfolio"
          onClick={() => setIsShareOpen(false)}
        >
          <div
            className="w-full max-w-5xl border-[5px] border-black bg-zinc-100 p-8 text-zinc-900 shadow-[10px_10px_0_0_#000]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="inline-block border-[3px] border-black bg-emerald-400 px-4 py-2 text-base font-black shadow-[3px_3px_0_0_#000]">
                  SHARE PORTFOLIO
                </p>
                <h2 className="mt-5 text-5xl font-black md:text-6xl">Share Syahri&apos;s Portfolio</h2>
                <p className="mt-3 text-2xl leading-relaxed text-slate-600">
                  Bagikan link portfolio atau scan QR code ini.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsShareOpen(false)}
                className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-black bg-zinc-900 text-white shadow-[4px_4px_0_0_#000]"
                aria-label="Close share modal"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[360px_1fr]">
              <div className="flex items-center justify-center border-[5px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
                <QRCodeSVG value={portfolioUrl} size={300} level="H" includeMargin />
              </div>

              <div className="space-y-5">
                <div className="break-all border-[3px] border-black bg-white p-5 text-xl font-bold shadow-[4px_4px_0_0_#000]">
                  {portfolioUrl}
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {shareLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center gap-3 border-[3px] border-black px-4 py-4 text-xl font-black shadow-[4px_4px_0_0_#000] transition hover:-translate-y-0.5 ${item.className}`}
                    >
                      <item.icon className="h-6 w-6" />
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center justify-center gap-3 border-[3px] border-black bg-sky-500 px-5 py-4 text-2xl font-black text-white shadow-[5px_5px_0_0_#000] transition hover:-translate-y-0.5"
                  >
                    {isCopied ? <Check className="h-6 w-6" /> : <Copy className="h-6 w-6" />}
                    {isCopied ? 'Copied' : 'Copy Link'}
                  </button>
                  <button
                    type="button"
                    onClick={handleNativeShare}
                    className="inline-flex items-center justify-center gap-3 border-[3px] border-black bg-fuchsia-500 px-5 py-4 text-2xl font-black text-white shadow-[5px_5px_0_0_#000] transition hover:-translate-y-0.5"
                  >
                    <Share2 className="h-6 w-6" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
