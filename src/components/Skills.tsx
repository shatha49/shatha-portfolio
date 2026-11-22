import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Code2,
  Palette,
  ClipboardCheck,
  Database,
  Lightbulb,
  Users,
} from 'lucide-react'

import { skills } from './data/skills'

const iconMap = {
  code: Code2,
  palette: Palette,
  clipboard: ClipboardCheck,
  database: Database,
  lightbulb: Lightbulb,
  users: Users,
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)

 

  return (
    <motion.section
      id="skills"
      className="relative z-10 w-full px-5 py-28 md:px-8 md:py-36"

style={{
  width: '100%',
  marginTop: '110px',
  paddingTop: '110px',
  paddingBottom: '220px',
  minHeight: '100vh',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}}

    >
      {/* Section heading */}
      <div
        className="flex w-full flex-col items-center"
        style={{
          maxWidth: '900px',
margin: '0 auto 35px',
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
          06 / SKILLS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight text-[#243B32] md:text-6xl"
          style={{ lineHeight: 1.15 }}
        >
          What I Bring to the{' '}
          <span className="text-[#A98FC5]">Table.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-[650px] text-base leading-8 text-[#728578] md:text-lg"
        >
          A mix of technical skills, creativity, and practical
          experience to turn ideas into meaningful solutions.
        </motion.p>
      </div>

      {/* Skills grid */}
      <div
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {skills.map((skill, index) => {
          const Icon =
            iconMap[skill.icon as keyof typeof iconMap] ?? Code2

          const isActive = activeSkill === skill.id

          return (
            <motion.article
              key={skill.id}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
              onClick={() =>
                setActiveSkill(isActive ? null : skill.id)
              }
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveSkill(isActive ? null : skill.id)
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}

className="group relative flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-[24px] border outline-none focus-visible:ring-2 focus-visible:ring-[#A98FC5]"
animate={{
                backgroundColor: isActive ? '#DCE9DF' : '#FAF7F2',
                borderColor: isActive ? '#A9C4B0' : '#E9DDF9',
                boxShadow: isActive
                  ? '0 22px 45px rgba(36,59,50,0.13)'
                  : '0 8px 25px rgba(36,59,50,0.04)',
                scale: isActive ? 1.025 : 1,
              }}

style={{
  transformOrigin: 'center',
  textAlign: 'left',
  padding: '26px 28px',
  boxSizing: 'border-box',
  minWidth: 0,
}}

            >
              {/* Decorative background */}
              <motion.div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full"
                animate={{
                  backgroundColor: isActive
                    ? 'rgba(169,143,197,0.18)'
                    : 'rgba(233,221,249,0.35)',
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Icon */}
              <div className="relative mb-5 flex items-start">
                <motion.div
                  className="flex h-[54px] w-[54px] items-center justify-center rounded-[17px]"
                  animate={{
                    backgroundColor: isActive ? '#C4D8C9' : '#E9DDF9',
                    rotate: isActive ? -5 : 0,
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.6}
                    color="#243B32"
                  />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="relative mb-3 w-full break-words text-[22px] font-semibold leading-tight text-[#243B32]">
                {skill.title}
              </h3>

              {/* Description */}
<p className="relative mb-5 w-full break-words text-[13px] leading-[1.8] text-[#52645A]">
                    {skill.description}
              </p>

              {/* Tools */}
<div className="relative mt-auto flex w-full flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full px-3 py-1.5 text-[11px] font-medium text-[#243B32]"
                    style={{
                      backgroundColor: isActive
                        ? 'rgba(255,255,255,0.65)'
                        : '#E9DDF9',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}
