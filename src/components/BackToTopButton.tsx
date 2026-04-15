import { useEffect, useState } from 'react'
import { Rocket } from 'lucide-react'

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center border-[3px] border-black bg-fuchsia-500 shadow-[4px_4px_0_0_#111] transition duration-200 hover:-translate-y-0.5 ${
        isVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <Rocket className="h-7 w-7 text-white" />
    </a>
  )
}
