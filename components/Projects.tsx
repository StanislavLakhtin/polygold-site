'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/context'
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react'

type Project = {
  id: string
  title: string
  status: string
  statusColor: string
  desc: string
  details: string[]
  accent: string
  icon: string
  gradient: string
}

export default function Projects() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<string>('seka')

  const projects: Project[] = [
    {
      id: 'seka',
      title: t.projects.sekaTitle,
      status: t.projects.sekaStatus,
      statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      desc: t.projects.sekaDesc,
      details: [t.projects.sekaDetail1, t.projects.sekaDetail2, t.projects.sekaDetail3, t.projects.sekaDetail4],
      accent: '#10B981',
      icon: '⛏',
      gradient: 'from-emerald-500/10 via-dark-200 to-dark-200',
    },
    {
      id: 'ikungu',
      title: t.projects.ikunguTitle,
      status: t.projects.ikunguStatus,
      statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      desc: t.projects.ikunguDesc,
      details: [t.projects.ikunguDetail1, t.projects.ikunguDetail2, t.projects.ikunguDetail3, t.projects.ikunguDetail4],
      accent: '#3B82F6',
      icon: '🪨',
      gradient: 'from-blue-500/10 via-dark-200 to-dark-200',
    },
    {
      id: 'kiabakari',
      title: t.projects.kiabakariTitle,
      status: t.projects.kiabakariStatus,
      statusColor: 'text-gold-400 bg-gold-400/10 border-gold-400/20',
      desc: t.projects.kiabakariDesc,
      details: [t.projects.kiabakariDetail1, t.projects.kiabakariDetail2, t.projects.kiabakariDetail3, t.projects.kiabakariDetail4],
      accent: '#F5A623',
      icon: '🔍',
      gradient: 'from-gold-500/10 via-dark-200 to-dark-200',
    },
  ]

  const activeProject = projects.find(p => p.id === active)!

  return (
    <section id="projects" ref={ref} className="relative py-24 lg:py-32 bg-dark-400 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-500 font-semibold tracking-widest uppercase text-sm"
          >
            {t.projects.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-white"
          >
            {t.projects.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 max-w-xl mx-auto"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Cluster badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold-500/20 bg-gold-500/5">
            <Layers size={18} className="text-gold-500" />
            <span className="text-white/80 text-sm font-medium">{t.projects.clusterTitle}:</span>
            <span className="text-gold-400 text-sm font-bold">{t.projects.clusterDesc}</span>
          </div>
        </motion.div>

        {/* Tab + Detail layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="grid lg:grid-cols-5 gap-6"
        >
          {/* Tab list */}
          <div className="lg:col-span-2 space-y-3">
            {projects.map((project, i) => (
              <motion.button
                key={project.id}
                onClick={() => setActive(project.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`w-full text-left rounded-xl border p-5 transition-all duration-300 ${
                  active === project.id
                    ? 'bg-dark-200 border-gold-500/30 shadow-lg shadow-gold-500/5'
                    : 'bg-dark-300/50 border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className={`font-bold ${active === project.id ? 'text-white' : 'text-white/70'}`}>
                      {project.title}
                    </h3>
                  </div>
                  {active === project.id && (
                    <ChevronRight size={16} className="text-gold-500" />
                  )}
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${project.statusColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: 'currentColor' }} />
                  {project.status}
                </span>
              </motion.button>
            ))}

            {/* Map of assets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="rounded-xl border border-white/8 bg-dark-300/50 p-5 mt-2"
            >
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Cluster Map</p>
              <svg viewBox="0 0 260 180" className="w-full" fill="none">
                <rect width="260" height="180" rx="8" fill="#0A0A00" />
                {/* Lake Victoria outline */}
                <path d="M 20 40 Q 60 20 90 35 Q 110 45 100 70 Q 90 90 70 100 Q 40 115 20 100 Z" fill="#0A1420" stroke="#1A2840" strokeWidth="1" />
                <text x="50" y="70" fill="#1A3050" fontSize="7" textAnchor="middle">Lake Victoria</text>

                {/* Grid lines */}
                {[0,1,2,3,4].map(i => (
                  <line key={i} x1={50 + i*50} y1="10" x2={50 + i*50} y2="170" stroke="#1A1A00" strokeWidth="0.5" />
                ))}

                {/* Project locations */}
                <g>
                  {/* Ikungu */}
                  <circle cx="130" cy="55" r="8" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="1.5" />
                  <circle cx="130" cy="55" r="3" fill="#3B82F6" />
                  <text x="145" y="52" fill="#3B82F6" fontSize="7" fontWeight="bold">Ikungu</text>
                  <text x="145" y="61" fill="#3B82F6" fontSize="6" fillOpacity="0.6">28 km</text>

                  {/* Seka */}
                  <circle cx="90" cy="120" r="8" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="90" cy="120" r="3" fill="#10B981" />
                  <text x="102" y="117" fill="#10B981" fontSize="7" fontWeight="bold">Seka</text>
                  <text x="102" y="126" fill="#10B981" fontSize="6" fillOpacity="0.6">26 km</text>

                  {/* Kiabakari */}
                  <circle cx="185" cy="100" r="7" fill="rgba(245,166,35,0.2)" stroke="#F5A623" strokeWidth="1.5" />
                  <circle cx="185" cy="100" r="2.5" fill="#F5A623" />
                  <text x="197" y="97" fill="#F5A623" fontSize="7" fontWeight="bold">Kiabakari</text>
                  <text x="197" y="106" fill="#F5A623" fontSize="6" fillOpacity="0.6">32 km</text>

                  {/* Connection lines */}
                  <line x1="130" y1="55" x2="90" y2="120" stroke="#F5A623" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 2" />
                  <line x1="130" y1="55" x2="185" y2="100" stroke="#F5A623" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 2" />
                  <line x1="90" y1="120" x2="185" y2="100" stroke="#F5A623" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 2" />
                </g>

                <text x="130" y="172" textAnchor="middle" fill="#F5A623" fontSize="6.5" fillOpacity="0.5">Mara Region, Tanzania</text>
              </svg>
            </motion.div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`h-full rounded-2xl border border-white/8 bg-gradient-to-b ${activeProject.gradient} overflow-hidden`}
              >
                {/* Visual header */}
                <div className="relative h-48 bg-dark-400 overflow-hidden">
                  {/* Mine illustration for each project */}
                  <svg viewBox="0 0 600 200" className="w-full h-full" fill="none">
                    <defs>
                      <linearGradient id={`proj-${activeProject.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0A0A00" />
                        <stop offset="100%" stopColor="#1A1200" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="200" fill={`url(#proj-${activeProject.id})`} />

                    {activeProject.id === 'seka' && (
                      <>
                        {/* Open pit */}
                        <ellipse cx="200" cy="130" rx="140" ry="50" fill="#0A0800" />
                        {[0,1,2,3].map(i => (
                          <ellipse key={i} cx="200" cy={130 - i*12} rx={140-i*22} ry={50-i*10} fill="none" stroke="#10B981" strokeWidth="0.5" strokeOpacity={0.25-i*0.04} />
                        ))}
                        {/* Processing plant */}
                        <rect x="400" y="60" width="150" height="100" rx="4" fill="#1A1600" stroke="#10B981" strokeWidth="0.8" strokeOpacity="0.5" />
                        <rect x="415" y="45" width="18" height="28" fill="#252000" />
                        <rect x="445" y="40" width="18" height="33" fill="#252000" />
                        <circle cx="424" cy="42" r="4" fill="#10B981" fillOpacity="0.5" />
                        <circle cx="454" cy="37" r="4" fill="#10B981" fillOpacity="0.5" />
                        {/* Equipment */}
                        {[[120, 110], [155, 125], [195, 108], [235, 118]].map(([x, y], i) => (
                          <rect key={i} x={x-7} y={y-4} width="14" height="8" rx="2" fill="#10B981" fillOpacity="0.5" />
                        ))}
                        <text x="300" y="185" textAnchor="middle" fill="#10B981" fontSize="9" fillOpacity="0.4">SEKA OPEN-PIT MINE · CIP PROCESSING PLANT</text>
                      </>
                    )}

                    {activeProject.id === 'ikungu' && (
                      <>
                        {/* Underground cross-section */}
                        <rect x="50" y="40" width="400" height="120" rx="4" fill="#0D0D00" stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.3" />
                        {/* Tunnels */}
                        <path d="M 250 40 L 250 160" stroke="#3B82F6" strokeWidth="6" strokeOpacity="0.2" strokeLinecap="round" />
                        <path d="M 150 100 L 350 100" stroke="#3B82F6" strokeWidth="6" strokeOpacity="0.2" strokeLinecap="round" />
                        <path d="M 200 60 L 200 140 M 300 60 L 300 140" stroke="#3B82F6" strokeWidth="4" strokeOpacity="0.15" />
                        {/* Spiral ramp */}
                        <path d="M 470 40 Q 530 70 480 100 Q 430 130 490 160" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" fill="none" />
                        <text x="490" y="30" fill="#3B82F6" fontSize="7" fillOpacity="0.6">Spiral</text>
                        <text x="490" y="38" fill="#3B82F6" fontSize="7" fillOpacity="0.6">Ramp</text>
                        {/* Loader */}
                        <rect x="220" y="92" width="22" height="14" rx="2" fill="#3B82F6" fillOpacity="0.5" />
                        {/* Ore body */}
                        <ellipse cx="250" cy="95" rx="60" ry="25" fill="rgba(59,130,246,0.08)" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 2" />
                        <text x="250" y="99" textAnchor="middle" fill="#3B82F6" fontSize="7" fillOpacity="0.6">Ore Body</text>
                        <text x="300" y="185" textAnchor="middle" fill="#3B82F6" fontSize="9" fillOpacity="0.4">IKUNGU UNDERGROUND · 2.93t Au · 94.48 Koz</text>
                      </>
                    )}

                    {activeProject.id === 'kiabakari' && (
                      <>
                        {/* Geological map style */}
                        <path d="M 0 80 Q 150 40 300 90 Q 450 140 600 80" stroke="#F5A623" strokeWidth="1" strokeOpacity="0.2" fill="none" />
                        <path d="M 0 120 Q 150 80 300 130 Q 450 180 600 120" stroke="#F5A623" strokeWidth="1" strokeOpacity="0.15" fill="none" />
                        {/* Deposit markers */}
                        {[
                          [120, 90, 'Mrangi', '7t'],
                          [260, 115, 'Kiabakari', '?'],
                          [400, 85, 'Rupa-Suguti', 'PML'],
                        ].map(([x, y, name, val]) => (
                          <g key={String(name)}>
                            <circle cx={Number(x)} cy={Number(y)} r="18" fill="rgba(245,166,35,0.08)" stroke="#F5A623" strokeWidth="0.8" strokeOpacity="0.5" />
                            <circle cx={Number(x)} cy={Number(y)} r="4" fill="#F5A623" fillOpacity="0.7" />
                            <text x={Number(x)} y={Number(y) - 22} textAnchor="middle" fill="#F5A623" fontSize="7.5" fillOpacity="0.8" fontWeight="bold">{name}</text>
                            <text x={Number(x)} y={Number(y) + 28} textAnchor="middle" fill="#F5A623" fontSize="7" fillOpacity="0.5">{val} Au</text>
                          </g>
                        ))}
                        {/* Connection to Seka cluster */}
                        <text x="300" y="185" textAnchor="middle" fill="#F5A623" fontSize="9" fillOpacity="0.4">EXPLORATION TARGETS · MARA REGION CLUSTER</text>
                      </>
                    )}
                  </svg>

                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${activeProject.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: 'currentColor' }} />
                      {activeProject.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{activeProject.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{activeProject.desc}</p>

                  <div className="space-y-3">
                    {activeProject.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: activeProject.accent }} />
                        <span className="text-sm text-white/60">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
