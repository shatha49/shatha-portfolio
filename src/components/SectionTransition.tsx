
import { type ReactNode, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react'

type SectionTransitionProps = {
  children: ReactNode
}

export default function SectionTransition({
  children,
}: SectionTransitionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.78, 0.95, 1],
    [0, 1, 1, 0.15, 0]
  )

  return (
    <motion.div
      ref={sectionRef}
      style={{
        opacity: reduceMotion ? 1 : opacity,
        width: '100%',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {children}
    </motion.div>
  )
}
