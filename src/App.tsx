import { AboutSection } from './components/AboutSection'
import { BackToTopButton } from './components/BackToTopButton'
import { CertificatesSection } from './components/CertificatesSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

function App() {
  return (
    <div className="bg-zinc-200 text-zinc-900 antialiased">
      <Navbar />
      <main id="home" className="w-full space-y-20 px-6 py-10 md:px-10 md:py-14">
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
