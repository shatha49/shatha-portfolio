
import { motion, useReducedMotion } from 'motion/react'

function BackgroundWaves() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Top-left blended waves */}
      <motion.svg
        viewBox="0 0 700 500"
        className="absolute -left-20 -top-16 w-[85%] max-w-[800px]"
        preserveAspectRatio="xMinYMin meet"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 25, -15, 0],
                y: [0, 18, -10, 0],
                rotate: [0, 2, -1, 0],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <defs>
          <linearGradient id="topWave1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E9DDF9" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#F6C7B6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="topWave2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#CDE9D9" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#E9DDF9" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M0 0 H620 C480 70 560 160 350 180 C170 195 210 350 0 340 Z"
          fill="url(#topWave1)"
        />

        <path
          d="M0 0 H450 C330 95 430 160 230 230 C100 275 140 390 0 420 Z"
          fill="url(#topWave2)"
          opacity="0.55"
        />
      </motion.svg>

      {/* Bottom-right blended waves */}
      <motion.svg
        viewBox="0 0 700 500"
        className="absolute -bottom-20 -right-20 w-[90%] max-w-[850px]"
        preserveAspectRatio="xMaxYMax meet"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -30, 15, 0],
                y: [0, -20, 12, 0],
                rotate: [0, -2, 1, 0],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <defs>
          <linearGradient id="bottomWave1" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#CDE9D9" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#E9DDF9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="bottomWave2" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#F6C7B6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#CDE9D9" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M700 500 H60 C210 420 110 310 340 290 C530 270 480 130 700 120 Z"
          fill="url(#bottomWave1)"
        />

        <path
          d="M700 500 H220 C350 410 270 350 460 300 C600 260 560 200 700 180 Z"
          fill="url(#bottomWave2)"
          opacity="0.65"
        />
      </motion.svg>

    </div>
  )
}

export default BackgroundWaves
