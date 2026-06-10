'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/context'
import { GraduationCap, Construction, Users, ShoppingBag } from 'lucide-react'

export default function CSR() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const cards = [
    { icon: GraduationCap, title: t.csr.card1Title, desc: t.csr.card1Desc, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { icon: Construction, title: t.csr.card2Title, desc: t.csr.card2Desc, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { icon: Users, title: t.csr.card3Title, desc: t.csr.card3Desc, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { icon: ShoppingBag, title: t.csr.card4Title, desc: t.csr.card4Desc, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  ]

  const metrics = [
    { label: t.csr.moLabel, value: t.csr.moValue },
    { label: t.csr.spentLabel, value: t.csr.spentValue },
    { label: t.csr.plannedLabel, value: t.csr.plannedValue },
  ]

  return (
    <section id="csr" ref={ref} className="relative py-24 lg:py-32 bg-dark-300 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -right-32 top-1/4 w-64 h-64 rounded-full bg-gold-500/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-gold-500 font-semibold tracking-widest uppercase text-sm"
            >
              {t.csr.label}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              {t.csr.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-4 text-white/50 text-lg leading-relaxed"
            >
              {t.csr.subtitle}
            </motion.p>
          </div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="flex items-center justify-between p-4 rounded-xl border border-white/6 bg-dark-200/60"
              >
                <span className="text-white/50 text-sm">{m.label}</span>
                <span className="text-gold-400 font-bold text-sm">{m.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4 pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border ${card.border} bg-dark-200 p-6 transition-all duration-300 hover:shadow-xl`}
              >
                <div className={`w-11 h-11 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={card.color} />
                </div>
                <h3 className="text-white font-bold mb-2">{card.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Photo + Quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-gold-500/15 bg-gradient-to-br from-gold-500/8 via-dark-200 to-dark-200 overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Left: visual */}
            <div className="lg:col-span-2 relative min-h-[220px] bg-dark-400 overflow-hidden">
              <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="csrBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0A0800" />
                    <stop offset="100%" stopColor="#1A1200" />
                  </linearGradient>
                </defs>
                <rect width="400" height="260" fill="url(#csrBg)" />

                {/* School building illustration */}
                {/* Main building */}
                <rect x="60" y="130" width="280" height="100" rx="3" fill="#1A1600" stroke="#F5A623" strokeWidth="0.8" strokeOpacity="0.4" />
                {/* Roof */}
                <path d="M 50 130 L 200 70 L 350 130 Z" fill="#141000" stroke="#F5A623" strokeWidth="0.8" strokeOpacity="0.5" />
                {/* Windows */}
                {[100, 145, 190, 240, 285].map((x) => (
                  <rect key={x} x={x} y="150" width="25" height="30" rx="2" fill="#0A0800" stroke="#F5A623" strokeWidth="0.5" strokeOpacity="0.4" />
                ))}
                {/* Door */}
                <rect x="180" y="185" width="40" height="45" rx="2" fill="#0A0800" stroke="#F5A623" strokeWidth="0.7" strokeOpacity="0.5" />
                {/* Flag */}
                <line x1="200" y1="40" x2="200" y2="70" stroke="#F5A623" strokeWidth="1" strokeOpacity="0.6" />
                <path d="M 200 40 L 225 50 L 200 60 Z" fill="#F5A623" fillOpacity="0.6" />
                {/* Trees */}
                {[30, 360].map((x) => (
                  <g key={x}>
                    <rect x={x - 4} y="190" width="8" height="40" fill="#1A1600" />
                    <circle cx={x} cy="175" r="20" fill="#1A2000" stroke="#2A3000" strokeWidth="0.5" />
                  </g>
                ))}
                {/* People silhouettes */}
                {[120, 160, 200, 240, 280].map((x) => (
                  <g key={x}>
                    <circle cx={x} cy="225" r="6" fill="#2A2000" />
                    <rect x={x - 4} y="231" width="8" height="14" rx="2" fill="#2A2000" />
                  </g>
                ))}
                {/* "Donated by Polygold" banner */}
                <rect x="90" y="110" width="220" height="18" rx="3" fill="#F5A623" fillOpacity="0.15" />
                <text x="200" y="122" textAnchor="middle" fill="#F5A623" fontSize="8" fontWeight="bold" fillOpacity="0.8">DONATED BY POLYGOLD</text>

                {/* Stars/sparkles */}
                {[[50, 50], [350, 40], [30, 120], [370, 110]].map(([x, y], idx) => (
                  <circle key={idx} cx={x} cy={y} r="1.5" fill="#F5A623" fillOpacity="0.4" />
                ))}
              </svg>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-200/80 hidden lg:block" />
            </div>

            {/* Right: text */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-gold-500/60 text-5xl font-serif leading-none">"</span>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-6 italic">
                Polygold and Edwin Mchihyo have successfully contributed to the construction of Ekungu Primary School — improving the early education environment for the community.
              </p>
              <p className="text-gold-500 text-xs font-semibold tracking-wider uppercase">
                — Musoma District Council · December 2025
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {['MoU Signed', 'Ekungu Village', 'Seka Village', 'TZS 300M+ CSR 2026'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
