'use client'

interface LogoProps {
  className?: string
  textClass?: string
  size?: number
}

export default function PolyGoldLogo({ className = '', size = 40 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Logo Mark */}
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer gold hexagonal ring */}
        <path
          d="M50 5 L88 27 L88 73 L50 95 L12 73 L12 27 Z"
          fill="none"
          stroke="#F5A623"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        {/* Inner black hexagonal ring (rotated) */}
        <path
          d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Gold inner detail */}
        <path
          d="M50 32 L65 41 L65 59 L50 68 L35 59 L35 41 Z"
          fill="none"
          stroke="#F5A623"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        {/* Center connector lines - gold */}
        <line x1="50" y1="5" x2="50" y2="20" stroke="#F5A623" strokeWidth="7" />
        <line x1="88" y1="27" x2="75" y2="35" stroke="#F5A623" strokeWidth="7" />
        <line x1="88" y1="73" x2="75" y2="65" stroke="#F5A623" strokeWidth="7" />
        <line x1="50" y1="95" x2="50" y2="80" stroke="#F5A623" strokeWidth="7" />
        <line x1="12" y1="73" x2="25" y2="65" stroke="#F5A623" strokeWidth="7" />
        <line x1="12" y1="27" x2="25" y2="35" stroke="#F5A623" strokeWidth="7" />
      </svg>

      {/* Text */}
      <div className="flex items-baseline leading-none">
        <span className="font-bold tracking-wide text-white" style={{ fontSize: size * 0.45 }}>POLY</span>
        <span className="font-bold tracking-wide text-gold-500" style={{ fontSize: size * 0.45 }}>GOLD</span>
      </div>
    </div>
  )
}
