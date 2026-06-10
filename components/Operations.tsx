'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/context'
import { Truck, Factory, Shield, CheckCircle2 } from 'lucide-react'

export default function Operations() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const cards = [
    { icon: Truck, title: t.operations.fleet, items: t.operations.fleetItems, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    { icon: Factory, title: t.operations.processing, items: t.operations.processingItems, color: 'text-gold-400', bg: 'bg-gold-400/10', border: 'border-gold-400/20' },
    { icon: Shield, title: t.operations.strength, items: t.operations.strengthItems, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  ]

  return (
    <section id="operations" ref={ref} className="relative py-24 lg:py-32 bg-dark-400 overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-500 font-semibold tracking-widest uppercase text-sm"
          >
            {t.operations.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-white"
          >
            {t.operations.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 max-w-xl mx-auto text-lg"
          >
            {t.operations.subtitle}
          </motion.p>
        </div>

        {/* Process flow: Mine → Process → Sell */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
            {[
              { label: 'Extract', sub: 'Open-pit & Underground', icon: '⛏' },
              { label: 'Process', sub: 'CIP Plant · 170K t/yr', icon: '⚙️' },
              { label: 'Produce', sub: 'Doré Bars', icon: '🟡' },
              { label: 'Sell', sub: 'Bank of Tanzania', icon: '🏦' },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center px-6 py-4 rounded-xl border border-white/8 bg-dark-300/50 min-w-[130px] text-center">
                  <span className="text-3xl mb-2">{step.icon}</span>
                  <p className="text-white font-bold text-sm">{step.label}</p>
                  <p className="text-white/40 text-xs mt-0.5">{step.sub}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex items-center px-2">
                    <div className="w-8 h-px bg-gold-500/30" />
                    <div className="w-0 h-0 border-l-4 border-l-gold-500/30 border-y-4 border-y-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.6 }}
                className="rounded-2xl border border-white/8 bg-dark-200 p-6 hover:border-white/15 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={card.color} />
                </div>
                <h3 className="text-white font-bold text-lg mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${card.color}`} />
                      <span className="text-white/50 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
