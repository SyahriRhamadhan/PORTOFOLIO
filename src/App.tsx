import { Suspense, lazy, useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { BackToTopButton } from './components/BackToTopButton'
import { CertificatesSection } from './components/CertificatesSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { NagoyaShowcasePage } from './components/NagoyaShowcasePage'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

const AtsCvPage = lazy(() => import('./components/AtsCvPage').then((mod) => ({ default: mod.AtsCvPage })))

function App() {
  const [isDark, setIsDark] = useState(false)
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)
  const isNagoyaHash = currentHash.startsWith('#nagoya-')
  const nagoyaNavLinks = [
    { label: 'Overview', href: '#nagoya-hill' },
    { label: 'ERP Scope', href: '#nagoya-erp-scope' },
    { label: 'AI Scope', href: '#nagoya-ai-scope' },
    { label: 'Project Evidence', href: '#nagoya-project-evidence' },
    { label: 'Back Home', href: '#home' },
  ]

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (window.location.hash.startsWith('#nagoya-')) {
      setIsDark(false)
      return
    }
    if (savedTheme === 'dark') {
      setIsDark(true)
      return
    }
    setIsDark(false)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    if (isNagoyaHash) {
      setIsDark(false)
    }
  }, [isNagoyaHash])

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (currentHash === '#cv') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-zinc-200" />}>
        <AtsCvPage />
      </Suspense>
    )
  }

  if (isNagoyaHash) {
    return (
      <div className={`antialiased overflow-x-hidden ${isDark ? 'theme-dark bg-slate-950 text-slate-100' : 'bg-zinc-200 text-zinc-900'}`}>
        <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} links={nagoyaNavLinks} />
        <main className="w-full px-0 pb-10 pt-24 md:pb-14 md:pt-28">
          <NagoyaShowcasePage />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    )
  }

  return (
    <div className={`antialiased overflow-x-hidden ${isDark ? 'theme-dark bg-slate-950 text-slate-100' : 'bg-zinc-200 text-zinc-900'}`}>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
      <main id="home" className="w-full space-y-20 px-6 pb-10 pt-24 md:px-10 md:pb-14 md:pt-28">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App
