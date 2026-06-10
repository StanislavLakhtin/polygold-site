'use client'

interface LogoProps {
  className?: string
  size?: number
}

/**
 * Two concentric hexagonal rings split at the equator:
 * gold (top arches) + dark (bottom arches).
 *
 * Pointy-top hexagon, center (105,105), viewBox 210×210.
 *   outer ring : R_outer=90 → R_inner=71
 *   gap        : 4.5 px (background shows through between rings)
 *   inner ring : R_outer=66 → R_inner=47
 *   split      : y=105
 */
export default function PolyGoldLogo({ className = '', size = 40 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 210 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* GOLD — outer ring, top arch */}
        <path
          d="M27,105 L27,60 L105,15 L183,60 L183,105
             L166.5,105 L166.5,69.5 L105,34 L43.5,69.5 L43.5,105 Z"
          fill="#F5A623"
        />
        {/* GOLD — inner ring, top arch */}
        <path
          d="M48,105 L48,72 L105,39 L162,72 L162,105
             L146,105 L146,81.5 L105,58 L64,81.5 L64,105 Z"
          fill="#F5A623"
        />
        {/* DARK — outer ring, bottom arch */}
        <path
          d="M183,105 L183,150 L105,195 L27,150 L27,105
             L43.5,105 L43.5,140.5 L105,176 L166.5,140.5 L166.5,105 Z"
          fill="#1C1600"
        />
        {/* DARK — inner ring, bottom arch */}
        <path
          d="M162,105 L162,138 L105,171 L48,138 L48,105
             L64,105 L64,128.5 L105,152 L146,128.5 L146,105 Z"
          fill="#1C1600"
        />
      </svg>

      <div className="flex items-baseline leading-none">
        <span
          className="font-bold tracking-wide text-white"
          style={{ fontSize: size * 0.45 }}
        >
          POLY
        </span>
        <span
          className="font-bold tracking-wide text-gold-500"
          style={{ fontSize: size * 0.45 }}
        >
          GOLD
        </span>
      </div>
    </div>
  )
}
