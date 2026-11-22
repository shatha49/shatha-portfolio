
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'motion/react'
import type { MotionValue } from 'motion/react'

const educationSteps = [
  {
    period: 'THE BEGINNING',
    title: 'A New Chapter',
    description:
      'I started my academic journey at the University of Jeddah, exploring the world of computing and discovering new opportunities.',
    detail: 'University of Jeddah',
  },
  {
    period: 'FIRST YEAR',
    title: 'Discovering My Interests',
    description:
      'During my first year, I explored different fields in computing and began discovering the areas that interested me the most.',
    detail: 'Exploration & Discovery',
  },
  {
    period: 'CHOOSING MY PATH',
    title: 'Software Engineering',
    description:
      'I chose Software Engineering and started developing a stronger interest in web development, user interfaces, and creating digital experiences.',
    detail: 'Software Engineering Major',
  },
  {
    period: 'THE JOURNEY CONTINUES',
    title: 'Growing & Looking Ahead',
    description:
      'Now in my third year, I continue building my skills through academic projects, learning experiences, and new challenges.',
    detail: 'Expected Graduation · 2028',
  },
]

type EducationStep = (typeof educationSteps)[number]

function TimelineItem({
  step,
  index,
  progress,
  reduceMotion,
}: {
  step: EducationStep
  index: number
  progress: MotionValue<number>
  reduceMotion: boolean
}) {
  const revealStart = 0.08 + index * 0.22
  const revealEnd = revealStart + 0.12

  const opacity = useTransform(
    progress,
    [revealStart, revealEnd],
    [0, 1]
  )

  const y = useTransform(
    progress,
    [revealStart, revealEnd],
    [45, 0]
  )

  const dotScale = useTransform(
    progress,
    [revealStart, revealEnd],
    [0, 1]
  )

  const isRight = index % 2 === 0

  return (
<div className="relative grid min-h-[160px] w-full grid-cols-2 items-center gap-x-12 py-3 md:min-h-[180px] md:gap-x-24">

      {/* Center timeline dot */}
      <motion.div
        style={
          reduceMotion
            ? {}
            : { scale: dotScale }
        }
        className="absolute left-1/2 top-1/2 z-20 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#FAF7F2] bg-[#B9A0D2] shadow-[0_0_0_2px_#D7C5E5]"
      />

      {/* Left column */}
<div className="min-w-0 text-right">
                {!isRight && (
          <motion.div
            style={
              reduceMotion
                ? {}
                : { opacity, y }
            }
          >
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B17D78] sm:text-xs">
              {step.period}
            </p>

            <h3 className="mb-3 text-lg font-bold tracking-tight text-[#243B32] sm:text-2xl md:text-3xl">
              {step.title}
            </h3>

            <p className="text-xs leading-relaxed text-[#728578] sm:text-sm md:text-base">
              {step.description}
            </p>

            <p className="mt-4 text-xs font-medium text-[#846C86] sm:text-sm">
              {step.detail}
            </p>
          </motion.div>
        )}
      </div>

      {/* Right column */}
<div className="min-w-0 text-left">
                {isRight && (
          <motion.div
            style={
              reduceMotion
                ? {}
                : { opacity, y }
            }
          >
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B17D78] sm:text-xs">
              {step.period}
            </p>

            <h3 className="mb-3 text-lg font-bold tracking-tight text-[#243B32] sm:text-2xl md:text-3xl">
              {step.title}
            </h3>

            <p className="text-xs leading-relaxed text-[#728578] sm:text-sm md:text-base">
              {step.description}
            </p>

            <p className="mt-4 text-xs font-medium text-[#846C86] sm:text-sm">
              {step.detail}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const reduceMotion = Boolean(useReducedMotion())

  // Controls the entrance of the entire Education section
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start 20%'],
  })

  const headingOpacity = useTransform(
    sectionProgress,
    [0.15, 0.85],
    [0, 1]
  )

  const headingY = useTransform(
    sectionProgress,
    [0.15, 0.85],
    [80, 0]
  )

  // Controls the timeline as the visitor scrolls
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 75%'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  })

  return (
<section
  id="education"
  ref={sectionRef}
  className="relative z-10 w-full scroll-mt-20 px-5 pb-16 pt-12 md:px-8"
>
      {/* Full-width centered content */}
 <div
  className="relative w-full"
  style={{
    width: '100%',
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
>
        {/* Animated heading */}
        <motion.div
          style={
            reduceMotion
              ? {}
              : {
                  opacity: headingOpacity,
                  y: headingY,
                }
          }
className="mx-auto mb-3 flex w-full flex-col items-center text-center"   >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B17D78]">
            02 / EDUCATION
          </p>

          <h2 className="text-center text-4xl font-bold tracking-tight text-[#243B32] md:text-6xl">
            My Academic Journey.
          </h2>

          <p className="mx-auto mt-6 max-w-[540px] text-center text-base leading-relaxed text-[#728578] md:text-lg">
            A journey of exploration, learning, and discovering
            the path I want to follow.
          </p>
        </motion.div>

        {/* Timeline */}
<div
  ref={timelineRef}
  className="relative w-full"
  style={{
    width: 'min(900px, calc(100vw - 40px))',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
>
          {/* Background line */}
          <div className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2 bg-[#E3DCE5]" />

          {/* Scroll-controlled line */}
          <motion.div
            style={{
              scaleY: reduceMotion ? 1 : smoothProgress,
              transformOrigin: 'top',
            }}
className="absolute bottom-0 left-1/2 top-8 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#B9A0D2] via-[#E8B8A7] to-[#A5D2B8]"          />

          {educationSteps.map((step, index) => (
            <TimelineItem
              key={step.title}
              step={step}
              index={index}
              progress={smoothProgress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
