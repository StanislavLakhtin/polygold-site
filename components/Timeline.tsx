'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/context'

export default function Timeline() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="timeline" ref={ref} className="relative py-24 lg:py-32 bg-dark-300 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/10 to-transparent ml-8 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-500 font-semibold tracking-widest uppercase text-sm"
          >
            {t.timeline.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-white"
          >
            {t.timeline.title}
          </motion.h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Line */}
          <div className="relative mb-8">
            <div className="h-px bg-white/5 absolute top-[28px] left-0 right-0" />
            <motion.div
              className="h-px bg-gradient-to-r from-gold-500/60 via-gold-400/40 to-transparent absolute top-[28px] left-0"
              initial={{ width: '0%' }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
            />

            {/* Events */}
            <div className="grid grid-cols-6 gap-4">
              {t.timeline.events.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  {/* Dot */}
                  <div className={`relative z-10 w-14 h-14 rounded-full border-2 flex items-center justify-center mb-4 transition-colors ${
                    i <= 4
                      ? 'border-gold-500 bg-dark-300'
                      : 'border-gold-500/30 bg-dark-300'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${i <= 4 ? 'bg-gold-500' : 'bg-gold-500/30'}`} />
                    {/* Pulse for latest */}
                    {i === 4 && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-gold-500"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Year */}
                  <span className={`text-sm font-bold mb-2 ${i <= 4 ? 'text-gold-500' : 'text-gold-500/40'}`}>
                    {event.year}
                  </span>

                  {/* Card */}
                  <div className={`rounded-xl border p-3 text-center ${
                    i === 4
                      ? 'border-gold-500/30 bg-gold-500/5'
                      : 'border-white/5 bg-dark-200/50'
                  }`}>
                    <p className="text-white font-semibold text-sm mb-1">{event.title}</p>
                    <p className="text-white/40 text-xs leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {t.timeline.events.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex gap-4"
            >
              {/* Left: dot + line */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  i <= 4 ? 'border-gold-500 bg-dark-300' : 'border-gold-500/20 bg-dark-300'
                }`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${i <= 4 ? 'bg-gold-500' : 'bg-gold-500/20'}`} />
                </div>
                {i < t.timeline.events.length - 1 && (
                  <div className="flex-1 w-px bg-white/5 my-1" style={{ minHeight: '40px' }} />
                )}
              </div>

              {/* Right: content */}
              <div className={`pb-8 ${i === t.timeline.events.length - 1 ? 'pb-0' : ''}`}>
                <span className={`text-sm font-bold ${i <= 4 ? 'text-gold-500' : 'text-gold-500/30'}`}>
                  {event.year}
                </span>
                <h3 className="text-white font-semibold mt-1">{event.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mt-1">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
