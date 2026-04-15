import { useEffect, useState } from 'react'
import { navItems, personalInfo } from '../data/portfolioData'
import { Moon, Sun } from 'lucide-react'

type NavbarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [showBorder, setShowBorder] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBorder(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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
        <button
          aria-label="Toggle theme"
          onClick={onToggleTheme}
          className="flex h-12 w-12 items-center justify-center border-[3px] border-black bg-zinc-100 shadow-[3px_3px_0_0_#000]"
        >
          {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
      </div>
    </nav>
  )
}
