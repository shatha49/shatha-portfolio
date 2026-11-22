import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { achievements } from './data/achievements'

const SLIDE_DURATION = 15000

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const total = achievements.length

  const goTo = (index: number) => {
    if (total === 0) return
    setActiveIndex((index + total) % total)
  }

  useEffect(() => {
    if (isPaused || total <= 1) return

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % total)
    }, SLIDE_DURATION)

    return () => window.clearTimeout(timer)
  }, [activeIndex, isPaused, total])

  if (total === 0) return null

  const current = achievements[activeIndex]
  const previous = achievements[(activeIndex - 1 + total) % total]
  const next = achievements[(activeIndex + 1) % total]

  return (
    <motion.section
      id="achievements"
      className="relative z-10 w-full overflow-hidden px-4 py-28 md:py-36"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <div
        className="flex w-full flex-col items-center"
        style={{
          maxWidth: '900px',
          margin: '0 auto 0',
          textAlign: 'center',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-xs font-semibold tracking-[0.35em] text-[#728578]"
        >
          05 / ACHIEVEMENTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight text-[#243B32] md:text-6xl"
          style={{ lineHeight: 1.15 }}
        >
          Milestones That{' '}
          <span className="text-[#A98FC5]">Matter.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-[650px] text-base leading-8 text-[#728578] md:text-lg"
        >
          Every achievement has a story behind it.
        </motion.p>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full"
        style={{
          maxWidth: '1100px',
          width: '100%',
          margin: '55px auto 0',
          textAlign: 'center',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false)
          }
        }}
      >
        {/* Images */}
        <div
          className="relative flex h-[330px] w-full items-center justify-center md:h-[460px]"
          style={{
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {/* Previous image */}
          {total > 1 && (
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous achievement"
              className="absolute left-[-35%] z-0 h-[75%] w-[65%] overflow-hidden rounded-[26px] opacity-35 blur-[1px] transition-opacity hover:opacity-60 md:left-[-28%]"
            >
              <img
                src={previous.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          )}

          {/* Next image */}
          {total > 1 && (
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next achievement"
              className="absolute right-[-35%] z-0 h-[75%] w-[65%] overflow-hidden rounded-[26px] opacity-35 blur-[1px] transition-opacity hover:opacity-60 md:right-[-28%]"
            >
              <img
                src={next.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          )}

          {/* Main image */}
          <div className="relative z-10 h-full w-[78%] max-w-[620px] overflow-hidden rounded-[30px] border-[5px] border-[#F6C7B6] bg-[#FAF7F2] shadow-[0_20px_60px_rgba(36,59,50,0.13)] md:w-[60%]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={`${current.title} winning moment`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-contain"
              />
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous achievement"
                className="absolute left-1 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#243B32] text-white shadow-lg transition-transform hover:scale-110 md:left-[13%]"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next achievement"
                className="absolute right-1 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#243B32] text-white shadow-lg transition-transform hover:scale-110 md:right-[13%]"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Achievement details */}
        <div
          className="w-full"
          style={{
            maxWidth: '760px',
            minHeight: '310px',
            margin: '35px auto 0',
            textAlign: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="flex w-full flex-col items-center text-center"
            >
              {/* Year and edition */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#728578]">
                {current.year}
                {current.edition && ` / ${current.edition}`}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#243B32] md:text-4xl">
                {current.title}
              </h3>

              {/* Award */}
              <p className="mt-3 text-lg font-medium text-[#A98FC5]">
                {current.award}
              </p>

              {/* Category */}
              <p className="mt-2 text-sm text-[#728578]">
                {current.category}
              </p>

              {/* Description */}
              <p className="mt-6 max-w-[680px] text-sm leading-8 text-[#52645A] md:text-base">
                {current.description}
              </p>

              {/* Contribution */}
              <p className="mt-4 max-w-[680px] text-sm leading-8 text-[#52645A] md:text-base">
                <span className="font-semibold text-[#243B32]">
                  My Contribution:{' '}
                </span>
                {current.contribution}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {current.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#E9DDF9] px-4 py-2 text-xs font-medium text-[#243B32]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        {total > 1 && (
          <div className="mt-8 flex w-full items-center justify-center gap-3">
            {achievements.map((achievement, index) => (
              <button
                key={achievement.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to achievement ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className="h-[9px] rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === index ? '32px' : '9px',
                  backgroundColor:
                    activeIndex === index ? '#243B32' : '#CDBDDC',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}
