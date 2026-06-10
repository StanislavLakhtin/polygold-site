'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ChevronDown } from 'lucide-react'
import { useLang } from '@/lib/context'

function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number; pulse: number }[] = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        alpha: Math.random() * 0.6 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02
        const alpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse))
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245, 166, 35, ${alpha})`
        ctx.fill()
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(245, 166, 35, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}

export default function Hero() {
  const { t } = useLang()

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-400"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-400 to-[#0D0A00]" />

      {/* Gold radial glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(245,166,35,0.12) 0%, transparent 70%)'
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-64" style={{
        background: 'radial-gradient(ellipse 60% 80% at 30% 100%, rgba(245,166,35,0.08) 0%, transparent 70%)'
      }} />

      {/* Animated particles */}
      <GoldParticles />

      {/* Gold wave lines (decorative SVG) */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 200"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 100 C360 60 720 140 1080 80 S1440 120 1440 100 L1440 200 L0 200Z"
          fill="rgba(245,166,35,0.04)"
          animate={{ d: [
            "M0 100 C360 60 720 140 1080 80 S1440 120 1440 100 L1440 200 L0 200Z",
            "M0 120 C360 80 720 160 1080 100 S1440 80 1440 120 L1440 200 L0 200Z",
            "M0 100 C360 60 720 140 1080 80 S1440 120 1440 100 L1440 200 L0 200Z",
          ]}}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0 130 C360 90 720 170 1080 110 S1440 150 1440 130 L1440 200 L0 200Z"
          fill="rgba(245,166,35,0.06)"
          animate={{ d: [
            "M0 130 C360 90 720 170 1080 110 S1440 150 1440 130 L1440 200 L0 200Z",
            "M0 150 C360 110 720 150 1080 130 S1440 110 1440 150 L1440 200 L0 200Z",
            "M0 130 C360 90 720 170 1080 110 S1440 150 1440 130 L1440 200 L0 200Z",
          ]}}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-medium mb-8"
        >
          <MapPin size={14} className="text-gold-500" />
          {t.hero.location}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gold-500 font-semibold tracking-[0.3em] uppercase text-sm mb-4"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6"
        >
          {t.hero.title}{' '}
          <br className="hidden sm:block" />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            {/* Underline glow */}
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => handleScroll('#projects')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl text-base shadow-2xl shadow-gold-500/30 transition-all duration-200"
          >
            {t.hero.cta}
          </motion.button>
          <motion.button
            onClick={() => handleScroll('#about')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-base border border-white/10 hover:border-gold-500/30 transition-all duration-200"
          >
            {t.hero.ctaSecondary}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => handleScroll('#about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-gold-500 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
