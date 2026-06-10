import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Strategy from '@/components/Strategy'
import Projects from '@/components/Projects'
import Timeline from '@/components/Timeline'
import Operations from '@/components/Operations'
import CSR from '@/components/CSR'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-400 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Strategy />
      <Projects />
      <Timeline />
      <Operations />
      <CSR />
      <Contact />
      <Footer />
    </main>
  )
}
