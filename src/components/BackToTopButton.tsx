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
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-4 right-2 z-50 flex h-12 w-12 items-center justify-center border-[3px] border-black bg-fuchsia-500 shadow-[2px_2px_0_0_#111] transition duration-200 hover:-translate-y-0.5 md:bottom-6 md:right-6 md:h-14 md:w-14 md:shadow-[4px_4px_0_0_#111] ${
        isVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <Rocket className="h-6 w-6 text-white md:h-7 md:w-7" />
    </button>
  )
}
