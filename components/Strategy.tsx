'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/context'
import { Target, Link2, BarChart3, AlertTriangle, Lightbulb } from 'lucide-react'

const stepIcons = [Target, Link2, BarChart3]
const stepColors = ['from-gold-500/20 to-gold-700/5', 'from-gold-600/20 to-gold-800/5', 'from-gold-500/20 to-gold-700/5']

export default function Strategy() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const steps = [
    { icon: stepIcons[0], title: t.strategy.card1Title, desc: t.strategy.card1Desc },
    { icon: stepIcons[1], title: t.strategy.card2Title, desc: t.strategy.card2Desc },
    { icon: stepIcons[2], title: t.strategy.card3Title, desc: t.strategy.card3Desc },
  ]

  const whyItems = [t.strategy.why1, t.strategy.why2, t.strategy.why3]

  return (
    <section id="strategy" ref={ref} className="relative py-24 lg:py-32 bg-dark-300 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-500 font-semibold tracking-widest uppercase text-sm"
          >
            {t.strategy.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-white"
          >
            {t.strategy.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-white/50 text-lg leading-relaxed"
          >
            {t.strategy.subtitle}
          </motion.p>
        </div>

        {/* 3-step cards with connector */}
        <div className="relative grid md:grid-cols-3 gap-6 mb-16">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-gold-500/20 via-gold-500/40 to-gold-500/20" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
                className={`relative rounded-2xl border border-white/8 bg-gradient-to-b ${stepColors[i]} p-6 hover:border-gold-500/20 transition-all duration-300 group`}
              >
                {/* Step number */}
                <div className="relative flex items-center gap-4 mb-5">
                  <div className="relative z-10 w-14 h-14 rounded-xl bg-dark-400 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500/40 transition-all">
                    <Icon size={22} className="text-gold-500" />
                  </div>
                  <span className="text-5xl font-black text-gold-500/10 select-none leading-none">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>

                {/* Arrow connector (desktop) */}
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-4 top-[60px] z-10 w-8 h-8 rounded-full bg-dark-300 border border-gold-500/30 items-center justify-center">
                    <span className="text-gold-500 text-xs">→</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Why + Opportunity grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Why small deposits go undeveloped */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="rounded-2xl border border-white/8 bg-dark-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <AlertTriangle size={18} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white">{t.strategy.whyTitle}</h3>
            </div>
            <ul className="space-y-4">
              {whyItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Opportunity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="rounded-2xl border border-gold-500/20 bg-gradient-to-br from-gold-500/8 to-gold-700/3 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-500/30 flex items-center justify-center">
                <Lightbulb size={18} className="text-gold-400" />
              </div>
              <h3 className="text-lg font-bold text-white">{t.strategy.opportunityTitle}</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{t.strategy.opportunityDesc}</p>

            {/* Mini cluster visualization */}
            <div className="relative h-32 rounded-xl bg-dark-400/50 border border-white/5 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                {/* Center hub */}
                <circle cx="150" cy="60" r="22" fill="rgba(245,166,35,0.15)" stroke="#F5A623" strokeWidth="1.5" />
                <text x="150" y="64" textAnchor="middle" fill="#F5A623" fontSize="9" fontWeight="bold">HUB</text>
                {/* Satellites */}
                {[
                  [70, 25, 'Seka'],
                  [230, 25, 'Ikungu'],
                  [60, 90, 'Mrangi'],
                  [240, 90, 'Kiabakari'],
                ].map(([cx, cy, label]) => (
                  <g key={String(label)}>
                    <line x1="150" y1="60" x2={Number(cx)} y2={Number(cy)} stroke="#F5A623" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 2" />
                    <circle cx={Number(cx)} cy={Number(cy)} r="14" fill="rgba(245,166,35,0.08)" stroke="#F5A623" strokeWidth="1" strokeOpacity="0.5" />
                    <text x={Number(cx)} y={Number(cy) + 3} textAnchor="middle" fill="#F5A623" fontSize="7" fillOpacity="0.8">{label}</text>
                  </g>
                ))}
                {/* 50+ tons label */}
                <text x="150" y="110" textAnchor="middle" fill="#F5A623" fontSize="8" fillOpacity="0.5">Target: 50+ tons gold reserves</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
