import { Suspense, lazy, useEffect, useState } from 'react'
import { navItems, personalInfo } from '../data/portfolioData'
import { Check, Copy, Menu, Moon, Share2, Sun, X } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaTelegram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

type NavbarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

const QRCodeSVG = lazy(() => import('qrcode.react').then((mod) => ({ default: mod.QRCodeSVG })))

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [showBorder, setShowBorder] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const portfolioUrl = 'https://bit.ly/ARICV'
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
    const handleHashChange = () => {
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
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
        className={`fixed inset-x-0 top-0 z-40 bg-zinc-200/95 px-4 py-3 backdrop-blur md:px-6 xl:px-8 ${
          showBorder ? 'border-b-4 border-black' : ''
        }`}
      >
        <div className="flex w-full min-w-0 items-center justify-between gap-2 md:gap-4">
          <a className="max-w-[38vw] truncate text-sm font-extrabold text-sky-500 sm:max-w-[50vw] sm:text-lg md:max-w-[48vw] md:text-2xl xl:max-w-none xl:text-[2rem]" href="#home">
            {personalInfo.name.toUpperCase()}
          </a>
          <div className="hidden flex-wrap justify-center gap-2 xl:flex">
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
          <div className="flex items-center gap-2 md:gap-3">
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
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-12 w-12 items-center justify-center border-[3px] border-black bg-zinc-100 shadow-[3px_3px_0_0_#000] transition hover:-translate-y-0.5 xl:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mt-3 grid gap-2 border-t-[3px] border-black pt-3 xl:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="border-[3px] border-black bg-zinc-100 px-4 py-2 text-base font-bold shadow-[3px_3px_0_0_#000]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        ) : null}
      </nav>

      {isShareOpen ? (
        <div
          className="fixed inset-0 z-50 flex justify-center overflow-y-auto bg-black/80 p-2 md:items-center md:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Share portfolio"
          onClick={() => setIsShareOpen(false)}
        >
          <div
            className="my-2 w-[min(100%,42rem)] overflow-y-auto border-[4px] border-black bg-zinc-100 p-4 text-zinc-900 shadow-[7px_7px_0_0_#000] md:my-4 md:max-h-[92vh] md:w-full md:max-w-5xl md:border-[5px] md:p-8 md:shadow-[10px_10px_0_0_#000]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="inline-block border-[3px] border-black bg-emerald-400 px-3 py-1 text-xs font-black shadow-[2px_2px_0_0_#000] md:px-4 md:py-2 md:text-base md:shadow-[3px_3px_0_0_#000]">
                  SHARE PORTFOLIO
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight md:mt-5 md:text-6xl">Share Syahri&apos;s Portfolio</h2>
                <p className="mt-2 text-base leading-relaxed text-slate-600 md:mt-3 md:text-2xl">
                  Share this portfolio link or scan the QR code.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsShareOpen(false)}
                className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-black bg-zinc-900 text-white shadow-[3px_3px_0_0_#000] md:h-14 md:w-14 md:shadow-[4px_4px_0_0_#000]"
                aria-label="Close share modal"
              >
                <X className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            </div>

            <div className="mt-5 grid min-w-0 gap-5 md:mt-8 md:gap-8 lg:grid-cols-[360px_1fr]">
              <div className="mx-auto flex w-full max-w-[280px] items-center justify-center border-[4px] border-black bg-white p-3 shadow-[4px_4px_0_0_#000] md:max-w-none md:border-[5px] md:p-6 md:shadow-[6px_6px_0_0_#000]">
                <Suspense fallback={<div className="h-[200px] w-[200px] bg-zinc-100 md:h-[300px] md:w-[300px]" />}>
                  <div className="md:hidden">
                    <QRCodeSVG value={portfolioUrl} size={200} level="H" includeMargin />
                  </div>
                  <div className="hidden md:block">
                    <QRCodeSVG value={portfolioUrl} size={300} level="H" includeMargin />
                  </div>
                </Suspense>
              </div>

              <div className="min-w-0 space-y-4 md:space-y-5">
                <div className="break-all border-[3px] border-black bg-white p-3 text-sm font-bold shadow-[3px_3px_0_0_#000] md:p-5 md:text-xl md:shadow-[4px_4px_0_0_#000]">
                  {portfolioUrl}
                </div>

                <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:grid-cols-3 md:gap-4">
                  {shareLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex min-w-0 items-center justify-center gap-2 border-[3px] border-black px-3 py-3 text-sm font-black shadow-[3px_3px_0_0_#000] transition hover:-translate-y-0.5 md:gap-3 md:px-4 md:py-4 md:text-xl md:shadow-[4px_4px_0_0_#000] ${item.className}`}
                    >
                      <item.icon className="h-4 w-4 md:h-6 md:w-6" />
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center justify-center gap-2 border-[3px] border-black bg-sky-500 px-4 py-3 text-lg font-black text-white shadow-[4px_4px_0_0_#000] transition hover:-translate-y-0.5 md:gap-3 md:px-5 md:py-4 md:text-2xl md:shadow-[5px_5px_0_0_#000]"
                  >
                    {isCopied ? <Check className="h-5 w-5 md:h-6 md:w-6" /> : <Copy className="h-5 w-5 md:h-6 md:w-6" />}
                    {isCopied ? 'Copied' : 'Copy Link'}
                  </button>
                  <button
                    type="button"
                    onClick={handleNativeShare}
                    className="inline-flex items-center justify-center gap-2 border-[3px] border-black bg-fuchsia-500 px-4 py-3 text-lg font-black text-white shadow-[4px_4px_0_0_#000] transition hover:-translate-y-0.5 md:gap-3 md:px-5 md:py-4 md:text-2xl md:shadow-[5px_5px_0_0_#000]"
                  >
                    <Share2 className="h-5 w-5 md:h-6 md:w-6" />
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
