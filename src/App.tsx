
import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react'

import Navbar from './components/Navbar'
import ScrollStory from './components/ScrollStory'
import Education from './components/Education'
import BackgroundWaves from './components/BackgroundWaves'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SectionTransition from './components/SectionTransition'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const reduceMotion = useReducedMotion()

  // Hide the intro after 3 seconds
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false)
    }, reduceMotion ? 500 : 3000)

    return () => window.clearTimeout(timer)
  }, [reduceMotion])

return (
  <div className="relative min-h-screen bg-[#FAF7F2]">
    {/* One shared background for all sections */}
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <BackgroundWaves />
    </div>
      {/* Navbar appears after intro */}
      {!showIntro && <Navbar />}

{/* Interactive Home & About */}
<SectionTransition>
  <ScrollStory />
</SectionTransition>

{/* Education Timeline */}


<SectionTransition>
  <Education />
</SectionTransition>

<SectionTransition>
  <Projects />
</SectionTransition>

<SectionTransition>
  <Experience />
</SectionTransition>

<SectionTransition>
  <Achievements />
</SectionTransition>

<SectionTransition>
  <Skills />
</SectionTransition>

<SectionTransition>
  <Contact />
</SectionTransition>


      {/* Dark Intro Screen */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    scale: 1.08,
                    filter: 'blur(12px)',
                  }
            }
            transition={{
              duration: reduceMotion ? 0.2 : 1,
              ease: 'easeInOut',
            }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#40384C]"
          >

            {/* Dark floating background - Purple */}
            
{/* Soft intro waves */}
<motion.div
  className="pointer-events-none absolute inset-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
>
  <motion.svg
    viewBox="0 0 700 500"
    preserveAspectRatio="xMinYMin meet"
    className="absolute -left-20 -top-20 w-[85%] max-w-[800px]"
    animate={
      reduceMotion
        ? {}
        : {
            x: [0, 20, -10, 0],
            y: [0, 15, -10, 0],
          }
    }
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <defs>
      <linearGradient id="introWaveTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C4AEDB" stopOpacity="0.5" />
        <stop offset="55%" stopColor="#F6C7B6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#40384C" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M0 0 H620 C480 70 560 160 350 180 C170 195 210 350 0 340 Z"
      fill="url(#introWaveTop)"
    />
  </motion.svg>

  <motion.svg
    viewBox="0 0 700 500"
    preserveAspectRatio="xMaxYMax meet"
    className="absolute -bottom-20 -right-20 w-[90%] max-w-[850px]"
    animate={
      reduceMotion
        ? {}
        : {
            x: [0, -25, 10, 0],
            y: [0, -15, 8, 0],
          }
    }
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <defs>
      <linearGradient id="introWaveBottom" x1="1" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#A7D7BF" stopOpacity="0.5" />
        <stop offset="55%" stopColor="#E9DDF9" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#40384C" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M700 500 H60 C210 420 110 310 340 290 C530 270 480 130 700 120 Z"
      fill="url(#introWaveBottom)"
    />
  </motion.svg>
</motion.div>


            {/* Intro Content */}
            <div className="relative z-10 px-6 text-center">

              {/* Small heading */}
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                className="mb-6 text-xs font-medium uppercase tracking-[0.5em] text-[#D5C2DC]"
              >
                Shatha Alamoudi Presents
              </motion.p>

              {/* Animated Portfolio Title */}
              <h2 className="flex flex-wrap justify-center overflow-hidden text-5xl font-black tracking-tight text-[#FFF5EE] sm:text-7xl md:text-8xl">

                {'PORTFOLIO'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 90,
                            rotate: 8,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.7,
                      ease: 'easeOut',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}

                {/* Animated dot */}
                <motion.span
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0,
                        }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.4,
                  }}
                  className="text-[#F6C7B6]"
                >
                  .
                </motion.span>
              </h2>

              {/* Subtitle */}
              <motion.p
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 0.7,
                }}
                className="mt-7 text-sm tracking-[0.3em] text-[#E6D5E9]"
              >
                A CREATIVE SPACE
              </motion.p>

              {/* Animated loading line */}
              <div className="mx-auto mt-12 h-[2px] w-40 overflow-hidden bg-white/20">
                <motion.div
                  className="h-full bg-[#F6C7B6]"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: reduceMotion ? 0.4 : 2.8,
                    ease: 'linear',
                  }}
                />
              </div>
            </div>

            {/* Bottom left detail */}
            <span className="absolute bottom-8 left-8 text-xs tracking-widest text-[#D5C2DC]">
              © 2026
            </span>

            {/* Bottom right detail */}
            <span className="absolute bottom-8 right-8 text-xs tracking-widest text-[#D5C2DC]">
              DESIGN × CODE
            </span>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default App
