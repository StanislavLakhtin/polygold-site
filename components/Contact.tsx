'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/context'
import { MapPin, Mail, Building2, Phone, ArrowRight } from 'lucide-react'

export default function Contact() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 bg-dark-400 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(245,166,35,0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-500 font-semibold tracking-widest uppercase text-sm"
          >
            {t.contact.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-white"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 max-w-md mx-auto text-lg"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: info cards */}
          <div className="space-y-4">
            {[
              {
                icon: Building2,
                title: t.contact.office1,
                lines: ['Dar es Salaam, Tanzania'],
                color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20',
                href: null,
              },
              {
                icon: Building2,
                title: t.contact.office2,
                lines: ['Musoma, Mara Region, Tanzania'],
                color: 'text-gold-400', bg: 'bg-gold-500/10', border: 'border-gold-500/20',
                href: null,
              },
              {
                icon: MapPin,
                title: t.contact.operations,
                lines: [t.contact.operationsVal],
                color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20',
                href: null,
              },
              {
                icon: Phone,
                title: 'Phone',
                lines: [t.contact.phone],
                color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20',
                href: `tel:${t.contact.phone.replace(/\s/g, '')}`,
              },
              {
                icon: Mail,
                title: 'Email',
                lines: [t.contact.email],
                color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20',
                href: `mailto:${t.contact.email}`,
              },
            ].map((item, i) => {
              const Icon = item.icon
              const inner = (
                <>
                  <div className={`w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={item.color} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-0.5">{item.title}</p>
                    {item.lines.map(line => (
                      <p key={line} className="text-white text-sm font-medium">{line}</p>
                    ))}
                  </div>
                </>
              )
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-5 rounded-xl border border-white/6 bg-dark-300/40 hover:border-white/15 hover:bg-dark-300/60 transition-all"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5 rounded-xl border border-white/6 bg-dark-300/40">
                      {inner}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-gold-500/20 bg-gradient-to-br from-gold-500/8 via-dark-300 to-dark-300 p-8 lg:p-10"
          >
            {/* Tanzania map outline SVG */}
            <div className="mb-8 flex justify-center">
              <svg viewBox="0 0 280 200" className="w-full max-w-xs" fill="none">
                <defs>
                  <linearGradient id="mapBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0A0A00" />
                    <stop offset="100%" stopColor="#141000" />
                  </linearGradient>
                </defs>
                <rect width="280" height="200" rx="12" fill="url(#mapBg)" />
                <path
                  d="M 60 20 L 220 20 L 240 40 L 250 80 L 240 120 L 220 150 L 200 170 L 160 180 L 130 175 L 100 160 L 70 140 L 50 110 L 40 70 L 50 40 Z"
                  fill="rgba(245,166,35,0.06)"
                  stroke="rgba(245,166,35,0.3)"
                  strokeWidth="1.5"
                />
                <ellipse cx="95" cy="65" rx="35" ry="28" fill="#0A1A28" stroke="#1A3050" strokeWidth="1" />
                <text x="95" y="68" textAnchor="middle" fill="#1A4060" fontSize="6">Lake Victoria</text>
                <circle cx="215" cy="110" r="5" fill="#3B82F6" />
                <circle cx="215" cy="110" r="9" fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" />
                <text x="215" y="127" textAnchor="middle" fill="#3B82F6" fontSize="6.5">Dar es Salaam</text>
                <circle cx="105" cy="55" r="7" fill="#F5A623" />
                <motion.circle
                  cx="105" cy="55" r="12"
                  fill="none" stroke="#F5A623" strokeWidth="1"
                  animate={{ r: [12, 20], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <text x="105" y="42" textAnchor="middle" fill="#F5A623" fontSize="6.5" fontWeight="bold">Musoma</text>
                <text x="105" y="35" textAnchor="middle" fill="#F5A623" fontSize="5.5" fillOpacity="0.6">Mara Region</text>
                <line x1="112" y1="58" x2="208" y2="107" stroke="#F5A623" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="4 3" />
                <text x="140" y="192" textAnchor="middle" fill="#F5A623" fontSize="7" fillOpacity="0.4">UNITED REPUBLIC OF TANZANIA</text>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Partner with Tanzania's Rising Gold Producer
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Whether you're exploring investment opportunities, supply partnerships, or strategic cooperation — we'd like to hear from you.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                className="group inline-flex items-center gap-3 w-full justify-center px-6 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-all duration-200 shadow-lg shadow-gold-500/20 text-sm"
              >
                <Phone size={18} />
                {t.contact.phone}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`mailto:${t.contact.email}`}
                className="group inline-flex items-center gap-3 w-full justify-center px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-gold-500/30 transition-all duration-200 text-sm"
              >
                <Mail size={18} />
                {t.contact.email}
              </a>
            </div>

            <p className="mt-4 text-center text-white/30 text-xs">{t.contact.established}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
