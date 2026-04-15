import { navItems, personalInfo } from '../data/portfolioData'
import { Moon } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b-4 border-black bg-zinc-200/95 px-4 py-3 backdrop-blur md:px-8">
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
          className="flex h-12 w-12 items-center justify-center border-[3px] border-black bg-zinc-100 shadow-[3px_3px_0_0_#000]"
        >
          <Moon className="h-6 w-6" />
        </button>
      </div>
    </nav>
  )
}
