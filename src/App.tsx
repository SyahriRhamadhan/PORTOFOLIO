import { Suspense, lazy, useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ApartmentLandingFooter } from './components/ApartmentLandingFooter'
import { ApartmentLandingNavbar } from './components/ApartmentLandingNavbar'
import { BackToTopButton } from './components/BackToTopButton'
import { CertificatesSection } from './components/CertificatesSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { ApartmentLandingPage } from './components/ApartmentLandingPage'
import { NagoyaShowcasePage } from './components/NagoyaShowcasePage'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { apartmentTextCopy, type ApartmentLanguage } from './data/apartmentLandingData'

const AtsCvPage = lazy(() => import('./components/AtsCvPage').then((mod) => ({ default: mod.AtsCvPage })))

function App() {
  const [isDark, setIsDark] = useState(false)
  const [apartmentLanguage, setApartmentLanguage] = useState<ApartmentLanguage>('en')
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)
  const isNagoyaHash = currentHash.startsWith('#nagoya-')
  const isApartmentHash = currentHash.startsWith('#apartment-')
  const nagoyaNavLinks = [
    { label: 'Overview', href: '#nagoya-hill' },
    { label: 'ERP Scope', href: '#nagoya-erp-scope' },
    { label: 'AI Scope', href: '#nagoya-ai-scope' },
    { label: 'Project Evidence', href: '#nagoya-project-evidence' },
    { label: 'Back Home', href: '#home' },
  ]
  const apartmentCopy = apartmentTextCopy[apartmentLanguage]
  const apartmentNavLinks = [
    { label: apartmentCopy.nav.overview, href: '#apartment-living' },
    { label: apartmentCopy.nav.unitTypes, href: '#apartment-unit-types' },
    { label: apartmentCopy.nav.demo, href: '#apartment-demo' },
    { label: apartmentCopy.nav.commerce, href: '#apartment-commerce' },
    { label: apartmentCopy.nav.contact, href: '#apartment-contact' },
    { label: apartmentCopy.nav.backHome, href: '#home' },
  ]

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (window.location.hash.startsWith('#nagoya-') || window.location.hash.startsWith('#apartment-')) {
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
    if (isNagoyaHash || isApartmentHash) {
      setIsDark(false)
    }
  }, [isApartmentHash, isNagoyaHash])

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

  if (isApartmentHash) {
    return (
      <div className="antialiased overflow-x-hidden bg-[#f4efe7] text-[#221f1a]">
        <ApartmentLandingNavbar
          links={apartmentNavLinks}
          language={apartmentLanguage}
          onChangeLanguage={setApartmentLanguage}
        />
        <main className="w-full px-0 pb-0 pt-0">
          <ApartmentLandingPage language={apartmentLanguage} />
        </main>
        <ApartmentLandingFooter language={apartmentLanguage} />
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
