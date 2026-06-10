'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/context'
import { TrendingUp, Users, Zap, FileText } from 'lucide-react'

const icons = [TrendingUp, Users, Zap, FileText, TrendingUp, Users]

export default function Stats() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { label: t.stats.investment, value: t.stats.investmentVal },
    { label: t.stats.employees, value: t.stats.employeesVal },
    { label: t.stats.capacity, value: t.stats.capacityVal },
    { label: t.stats.licenses, value: t.stats.licensesVal },
    { label: t.stats.reserves, value: t.stats.reservesVal },
    { label: t.stats.locals, value: t.stats.localsVal },
  ]

  return (
    <section ref={ref} className="relative py-16 bg-dark-300 border-y border-white/5 overflow-hidden">
      {/* Gold shimmer line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative flex flex-col items-center justify-center p-6 bg-dark-300 hover:bg-dark-200 transition-colors group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4, type: 'spring' }}
                  className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center mb-3 group-hover:bg-gold-500/20 transition-colors"
                >
                  <Icon size={16} className="text-gold-500" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
                  className="text-2xl lg:text-3xl font-bold text-white mb-1 bg-gradient-to-b from-white to-white/80 bg-clip-text"
                >
                  {stat.value}
                </motion.span>
                <span className="text-xs text-white/40 text-center leading-tight font-medium">{stat.label}</span>
                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: '40%' } : {}}
                  transition={{ delay: i * 0.08 + 0.4, duration: 0.4 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
