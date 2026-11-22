
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react'
import { ArrowDown } from 'lucide-react'
function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Name moves away as the visitor scrolls
  const nameOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.4],
    [1, 1, 0]
  )

  const nameY = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, -120]
  )

  const nameScale = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 0.75]
  )

  // About text gradually appears

const aboutOpacity = useTransform(
  scrollYProgress,
  [0.3, 0.55, 0.82, 1],
  [0, 1, 1, 0]
)



const aboutY = useTransform(
  scrollYProgress,
  [0.3, 0.65, 0.88, 1],
  [90, 0, 0, -120]
)

const aboutScale = useTransform(
  scrollYProgress,
  [0.65, 0.88, 1],
  [1, 1, 0.88]
)




  return (
    <motion.section
      id="home"
      ref={sectionRef}

      className="relative h-[230vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">


        

        {/* Name screen */}
        <motion.div
          style={
            reduceMotion
              ? {}
              : {
                  opacity: nameOpacity,
                  y: nameY,
                  scale: nameScale,
                }
          }
          className="pointer-events-none absolute z-10 flex w-full flex-col items-center px-6 text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#728578] md:text-sm">
            Welcome to my world
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-[#243B32] sm:text-6xl md:text-7xl">
            Shatha Alamoudi
          </h1>

          <p className="mt-6 text-lg text-[#728578] md:text-xl">
            Creative Developer & UI Enthusiast
          </p>

          <motion.div
            animate={reduceMotion ? {} : { y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mt-12 flex flex-col items-center gap-2 text-[#B17D78]"
          >
            <span className="text-xs uppercase tracking-[0.25em]">
              Scroll to discover
            </span>
            <ArrowDown size={22} />
          </motion.div>
        </motion.div>

        {/* About screen */}
        <motion.div
          id="about"
style={
  reduceMotion
    ? {}
    : {
        opacity: aboutOpacity,
        y: aboutY,
        scale: aboutScale,
      }
}
          className="absolute z-20 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#B17D78]">
            01 / GET TO KNOW ME
          </p>

          <h2 className="mb-10 text-4xl font-bold tracking-tight text-[#243B32] md:text-6xl">
            A Little About Me.
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[#243B32] md:text-2xl">
              Hi! I'm{' '}
              <span className="font-semibold text-[#B17D78]">
                Shatha
              </span>
              , a Software Engineering student at the University of
              Jeddah with a passion for web development and UI design.
            </p>

            <p className="text-base leading-relaxed text-[#607468] md:text-lg">
              I enjoy turning creative ideas into interactive digital
              experiences, combining design and code to build websites
              that are both visually appealing and functional.
            </p>

            <p className="text-base leading-relaxed text-[#607468] md:text-lg">
              I'm always excited to explore new technologies, challenge
              myself, and keep learning through new projects and experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ScrollStory
