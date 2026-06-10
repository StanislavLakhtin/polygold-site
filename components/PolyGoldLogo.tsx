'use client'

interface LogoProps {
  className?: string
  size?: number
}

export default function PolyGoldLogo({ className = '', size = 40 }: LogoProps) {
  // Original viewBox aspect ratio: 187.94 × 170.567 ≈ 1.1:1
  const height = Math.round(size * 170.567 / 187.94)

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={height}
        viewBox="0 0 187.94 170.567"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g transform="translate(0.5, -0.5)">
          {/* Dark (black) — bottom/back layer, with light outline */}
          <path
            d="M120.194,49.593 L145.776,93.902 L186.14,93.902 L141.877,170.567 L45.262,170.567 L1,93.902 L42.332,93.902 L65.928,134.772 L121.211,134.772 L138.153,105.429 L113.055,61.959 L92.621,61.959 L85.482,49.593 z M34.566,105.182 L20.789,105.182 L51.901,159.069 L135.239,159.069 L166.351,105.182 L152.574,105.182 L152.431,105.429 L152.507,105.561 L152.355,105.561 L128.35,147.138 L58.789,147.138 z"
            fill="#000000"
            stroke="#FF9A00"
            strokeWidth="2"
          />
          {/* Gold (orange) — top/front layer */}
          <path
            d="M68.246,121.473 L42.664,77.165 L2.301,77.165 L46.563,0.5 L143.178,0.5
               L187.44,77.165 L146.108,77.165 L122.512,36.294 L67.229,36.294 L50.287,65.638
               L75.385,109.108 L95.819,109.108 L102.958,121.473 Z
               M153.874,65.885 L167.652,65.885 L136.54,11.998 L53.201,11.998
               L22.089,65.885 L35.866,65.885 L36.009,65.638 L35.933,65.506
               L36.085,65.506 L60.09,23.929 L129.651,23.929 Z"
            fill="#FF9A00"
          />
        </g>
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
