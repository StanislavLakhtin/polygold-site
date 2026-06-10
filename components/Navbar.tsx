'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/lib/context'
import PolyGoldLogo from './PolyGoldLogo'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#strategy', label: t.nav.strategy },
    { href: '#projects', label: t.nav.projects },
    { href: '#operations', label: t.nav.operations },
    { href: '#csr', label: t.nav.csr },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-400/95 backdrop-blur-md border-b border-gold-500/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button onClick={() => handleNav('#hero')} className="flex-shrink-0">
              <PolyGoldLogo size={36} />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-gold-500 transition-colors duration-200 rounded-lg hover:bg-gold-500/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right: Lang + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    lang === 'en'
                      ? 'bg-gold-500 text-black shadow-lg'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('sw')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    lang === 'sw'
                      ? 'bg-gold-500 text-black shadow-lg'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  SW
                </button>
              </div>
              <button
                onClick={() => handleNav('#contact')}
                className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-black text-sm font-bold rounded-lg transition-all duration-200 shadow-lg shadow-gold-500/20"
              >
                {t.nav.contact}
              </button>
            </div>

            {/* Mobile: lang + menu */}
            <div className="lg:hidden flex items-center gap-2">
              <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10">
                <button
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    lang === 'en' ? 'bg-gold-500 text-black' : 'text-white/60'
                  }`}
                >EN</button>
                <button
                  onClick={() => setLang('sw')}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    lang === 'sw' ? 'bg-gold-500 text-black' : 'text-white/60'
                  }`}
                >SW</button>
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-white/70 hover:text-gold-500 transition-colors"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark-400/98 backdrop-blur-xl border-b border-gold-500/10 lg:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="block w-full text-left px-4 py-3 text-white/80 hover:text-gold-500 hover:bg-gold-500/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
