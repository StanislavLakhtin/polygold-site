'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/context'
import { Building2, MapPin, Calendar } from 'lucide-react'

export default function About() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const badges = [
    { icon: Calendar, text: t.about.badge1 },
    { icon: MapPin, text: t.about.badge2 },
    { icon: Building2, text: t.about.badge3 },
  ]

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 bg-dark-400 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm">
                {t.about.label}
              </span>
              <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t.about.title}
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5">
              {[t.about.p1, t.about.p2, t.about.p3].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                  className="text-white/60 leading-relaxed text-base lg:text-lg"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {badges.map((badge) => {
                const Icon = badge.icon
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-sm font-medium"
                  >
                    <Icon size={14} />
                    {badge.text}
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-200">
              {/* Aerial mine site illustration */}
              <div className="aspect-video bg-gradient-to-br from-[#1A1200] via-[#2A1E00] to-[#1A1A0A] flex items-center justify-center relative overflow-hidden">
                {/* Stylized mine site graphic */}
                <svg viewBox="0 0 600 338" className="w-full h-full" fill="none">
                  {/* Sky */}
                  <rect width="600" height="338" fill="url(#skyGrad)" />
                  <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0A0A00" />
                      <stop offset="100%" stopColor="#1A1400" />
                    </linearGradient>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F5A623" />
                      <stop offset="100%" stopColor="#C17B00" />
                    </linearGradient>
                    <linearGradient id="earthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3D2E1A" />
                      <stop offset="100%" stopColor="#1A1200" />
                    </linearGradient>
                  </defs>
                  {/* Ground */}
                  <ellipse cx="300" cy="320" rx="320" ry="100" fill="url(#earthGrad)" />
                  {/* Open pit */}
                  <ellipse cx="300" cy="230" rx="180" ry="60" fill="#0A0800" />
                  <ellipse cx="300" cy="228" rx="160" ry="50" fill="#100E00" />
                  <ellipse cx="300" cy="226" rx="130" ry="38" fill="#1A1600" />
                  {/* Pit terraces */}
                  {[0, 1, 2, 3].map(i => (
                    <ellipse key={i} cx="300" cy={230 - i * 15} rx={180 - i * 22} ry={60 - i * 10} fill="none" stroke="#F5A623" strokeWidth="0.5" strokeOpacity={0.3 - i * 0.05} />
                  ))}
                  {/* Processing plant */}
                  <rect x="440" y="160" width="100" height="80" rx="4" fill="#1E1800" stroke="#F5A623" strokeWidth="0.8" strokeOpacity="0.4" />
                  <rect x="455" y="145" width="20" height="30" fill="#2A2000" />
                  <rect x="490" y="140" width="20" height="35" fill="#2A2000" />
                  <circle cx="465" cy="140" r="5" fill="#F5A623" fillOpacity="0.4" />
                  <circle cx="500" cy="135" r="5" fill="#F5A623" fillOpacity="0.4" />
                  {/* Equipment dots */}
                  {[[200, 200], [240, 215], [280, 195], [320, 210], [360, 198]].map(([x, y], i) => (
                    <g key={i}>
                      <rect x={x - 8} y={y - 5} width="16" height="10" rx="2" fill="#F5A623" fillOpacity="0.6" />
                    </g>
                  ))}
                  {/* Roads */}
                  <path d="M 100 280 Q 200 260 300 250 Q 400 240 520 230" stroke="#3D3020" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 440 230 L 440 160" stroke="#3D3020" strokeWidth="6" />
                  {/* Gold text overlay */}
                  <text x="300" y="310" textAnchor="middle" fill="#F5A623" fillOpacity="0.3" fontSize="11" fontFamily="monospace">MARA REGION · TANZANIA</text>
                  {/* Glowing particles */}
                  {[[150, 100], [420, 80], [80, 180], [510, 160], [200, 60]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="1.5" fill="#F5A623" fillOpacity="0.5" />
                  ))}
                </svg>

                {/* Overlay label */}
                <div className="absolute bottom-4 left-4 bg-dark-400/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gold-500/20">
                  <p className="text-gold-500 text-xs font-semibold">LAKE VICTORIA GOLD BELT</p>
                  <p className="text-white/60 text-xs">Musoma, Mara Region</p>
                </div>
              </div>

              {/* Bottom info strip */}
              <div className="p-5 border-t border-white/5">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gold-500 font-bold text-xl">$30M+</p>
                    <p className="text-white/40 text-xs mt-0.5">Invested</p>
                  </div>
                  <div className="border-x border-white/5">
                    <p className="text-gold-500 font-bold text-xl">2018</p>
                    <p className="text-white/40 text-xs mt-0.5">Founded</p>
                  </div>
                  <div>
                    <p className="text-gold-500 font-bold text-xl">6</p>
                    <p className="text-white/40 text-xs mt-0.5">Licenses</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-dark-200 rounded-xl border border-gold-500/20 p-4 shadow-2xl shadow-black/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <span className="text-gold-500 text-lg">⛏</span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Active Producer</p>
                  <p className="text-white/40 text-xs">Doré bars · BOT certified</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
