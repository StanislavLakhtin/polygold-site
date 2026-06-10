'use client'

import { useLang } from '@/lib/context'
import PolyGoldLogo from './PolyGoldLogo'

export default function Footer() {
  const { t } = useLang()

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#strategy', label: t.nav.strategy },
    { href: '#projects', label: t.nav.projects },
    { href: '#operations', label: t.nav.operations },
    { href: '#csr', label: t.nav.csr },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="relative bg-dark-500 border-t border-white/5 overflow-hidden">
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer row */}
        <div className="py-12 grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <PolyGoldLogo size={38} />
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/20 text-xs font-semibold uppercase tracking-widest mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-white/40 hover:text-gold-400 text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Key info */}
          <div>
            <p className="text-white/20 text-xs font-semibold uppercase tracking-widest mb-4">Company</p>
            <div className="space-y-2 text-sm text-white/40">
              <p>Polygold Company Limited</p>
              <p>Dar es Salaam · Musoma</p>
              <p>Mara Region, Tanzania</p>
              <a href="mailto:info@polygoldtz.co.tz" className="hover:text-gold-400 transition-colors block">
                info@polygoldtz.co.tz
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">{t.footer.rights}</p>
          <p className="text-white/20 text-xs">{t.footer.registered}</p>
        </div>
      </div>
    </footer>
  )
}
