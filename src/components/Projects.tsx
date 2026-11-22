
import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react'
import type { MotionValue } from 'motion/react'

import { projects } from './data/projects'
import type { Project } from './data/projects'

const colors = [
  'from-[#E9DDF9] via-[#F3E8F8] to-[#CDE9D9]',
  'from-[#F6C7B6] via-[#FBE1D7] to-[#E9DDF9]',
  'from-[#CDE9D9] via-[#E5F2E9] to-[#E9DDF9]',
]

function ProjectContent({
  project,
  index,
  mobile = false,
}: {
  project: Project
  index: number
  mobile?: boolean
}) {
  const [imageFailed, setImageFailed] = useState(false)

  const hasImage = Boolean(project.image) && !imageFailed
  const hasLink = Boolean(project.link?.trim())

  const content = (
    <div
      className={`group grid w-full min-w-0 grid-cols-1 items-center ${
        mobile
          ? 'gap-6'
          : 'gap-7 md:grid-cols-2 md:gap-14'
      }`}
    >
      {/* Project information */}
      <div
        className="min-w-0"
        style={{
          textAlign: mobile ? 'center' : 'left',
          padding: mobile ? '0 8px' : '0',
          boxSizing: 'border-box',
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B17D78]"
          style={{
            marginBottom: '16px',
            textAlign: mobile ? 'center' : 'left',
          }}
        >
          {String(index + 1).padStart(2, '0')} / {project.category}
        </p>

        <h3
          className="font-bold tracking-tight text-[#243B32]"
          style={{
            fontSize: mobile ? '28px' : 'clamp(30px, 3vw, 48px)',
            lineHeight: 1.2,
            textAlign: mobile ? 'center' : 'left',
            overflowWrap: 'anywhere',
          }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-7 text-[#728578] md:text-base"
          style={{
            margin: mobile ? '16px auto 0' : '20px 0 0',
            maxWidth: '440px',
            textAlign: mobile ? 'center' : 'left',
            overflowWrap: 'break-word',
          }}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div
          className="mt-6 flex flex-wrap gap-2"
          style={{
            justifyContent: mobile ? 'center' : 'flex-start',
          }}
        >
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#243B32]/15 bg-white/40 px-3 py-1.5 text-xs font-medium text-[#536C60]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project link label */}
        <div
          className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#243B32]"
          style={{
            justifyContent: mobile ? 'center' : 'flex-start',
          }}
        >
          <span>
            {hasLink ? 'Explore Project' : 'Project Preview'}
          </span>

          {hasLink && (
            <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#243B32]/25 transition-all group-hover:-translate-y-1 group-hover:bg-[#243B32] group-hover:text-white">
              ↗
            </span>
          )}
        </div>
      </div>

      {/* Project image */}
      <div
        className={`relative w-full overflow-hidden rounded-[24px] bg-gradient-to-br ${
          colors[index % colors.length]
        }`}
        style={{
          maxWidth: mobile ? '310px' : undefined,
          marginLeft: mobile ? 'auto' : undefined,
          marginRight: mobile ? 'auto' : undefined,
        }}
      >
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="block h-auto w-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
            style={{
              maxHeight: mobile ? 'none' : '380px',
            }}
          />
        ) : (
          <div
            className="flex w-full items-center justify-center p-6"
            style={{
              minHeight: mobile ? '200px' : '280px',
            }}
          >
            <span className="text-center text-2xl font-bold text-[#243B32]/50">
              {project.title}
            </span>
          </div>
        )}

        <span className="absolute bottom-3 right-3 rounded-full bg-[#FAF7F2]/85 px-3 py-1.5 text-xs font-semibold text-[#243B32]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  )

  if (!hasLink) return content

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} project`}
      className="block w-full rounded-[24px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#243B32]"
    >
      {content}
    </a>
  )
}

function DesktopProjectSlide({
  project,
  index,
  progress,
  total,
}: {
  project: Project
  index: number
  progress: MotionValue<number>
  total: number
}) {
  const reduceMotion = Boolean(useReducedMotion())

  const segment = 1 / total
  const start = index * segment
  const end = (index + 1) * segment

  const fadeInEnd = start + segment * 0.25
  const fadeOutStart = end - segment * 0.25

  const opacity = useTransform(
    progress,
    [start, fadeInEnd, fadeOutStart, end],
    [0, 1, 1, index === total - 1 ? 1 : 0]
  )

  const y = useTransform(
    progress,
    [start, fadeInEnd, fadeOutStart, end],
    [45, 0, 0, index === total - 1 ? 0 : -45]
  )

  const pointerEvents = useTransform(
    opacity,
    (value) => (value > 0.5 ? 'auto' : 'none')
  )

  return (
    <motion.article
      className="absolute inset-0 flex w-full items-center justify-center"
      style={
        reduceMotion
          ? {
              opacity: index === 0 ? 1 : 0,
              pointerEvents: index === 0 ? 'auto' : 'none',
            }
          : {
              opacity,
              y,
              pointerEvents,
            }
      }
    >
      <div className="w-full">
        <div
          className={
            index % 2 === 1
              ? 'md:[&>*:first-child]:[&>*:first-child]:order-2'
              : ''
          }
        >
          <ProjectContent project={project} index={index} />
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const total = Math.max(projects.length, 1)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-10 w-full"
      style={{
        marginTop: '140px',
      }}
    >
      {/* Mobile layout */}
      <div
        className="w-full px-5 py-20 md:hidden"
        style={{
          boxSizing: 'border-box',
        }}
      >
        <div
          className="mx-auto w-full"
          style={{
            maxWidth: '500px',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '55px' }}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B17D78]">
              03 / SELECTED WORK
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#243B32]">
              Things I've Created.
            </h2>

            <p
              className="text-base leading-7 text-[#728578]"
              style={{
                maxWidth: '340px',
                margin: '20px auto 0',
                textAlign: 'center',
              }}
            >
              A collection of ideas I've explored,
              designed, and brought to life.
            </p>
          </div>

          {/* Mobile project cards */}
          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="w-full rounded-[26px] border border-[#E9DDF9] bg-[#FAF7F2]/80"
                style={{
                  padding: '28px 20px',
                  boxSizing: 'border-box',
                }}
              >
                <ProjectContent
                  project={project}
                  index={index}
                  mobile
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop sticky layout */}
      <div
        className="relative hidden w-full md:block"
        style={{
          height: `${Math.max(total + 1, 2) * 100}vh`,
        }}
      >
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-8">
          <div
            className="mx-auto flex w-full flex-col items-center"
            style={{ maxWidth: '1100px' }}
          >
            <div className="mb-12 w-full text-center md:mb-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B17D78]">
                03 / SELECTED WORK
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-[#243B32] md:text-6xl">
                Things I've Created.
              </h2>

              <p
                className="w-full text-center text-base leading-relaxed text-[#728578] md:text-lg"
                style={{
                  maxWidth: '550px',
                  margin: '20px auto 0',
                }}
              >
                A collection of ideas I've explored,
                designed, and brought to life.
              </p>
            </div>

            <div
              className="relative w-full"
              style={{ height: '420px' }}
            >
              {projects.map((project, index) => (
                <DesktopProjectSlide
                  key={project.id}
                  project={project}
                  index={index}
                  progress={scrollYProgress}
                  total={total}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
