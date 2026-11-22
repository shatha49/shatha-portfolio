
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight, Code2, Palette, Sparkles } from 'lucide-react'

function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#FAF7F2] px-6 py-28 md:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex items-end justify-between gap-4"
        >
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#B17D78]">
              01 / GET TO KNOW ME
            </p>

            <h2 className="text-5xl font-bold tracking-tight text-[#243B32] md:text-7xl">
              A Little
              <span className="block text-[#B17D78]">
                About Me.
              </span>
            </h2>
          </div>

          <ArrowDownRight
            className="hidden text-[#B17D78] md:block"
            size={48}
          />
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* About text */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <p className="text-xl leading-relaxed text-[#243B32] md:text-2xl">
              Hi! I'm <span className="font-semibold text-[#B17D78]">Shatha</span>,
              a Software Engineering student at the University of Jeddah
              with a passion for web development and UI design.
            </p>

            <p className="text-lg leading-relaxed text-[#607468]">
              I enjoy turning creative ideas into interactive digital
              experiences, combining design and code to build websites
              that are both visually appealing and functional.
            </p>

            <p className="text-lg leading-relaxed text-[#607468]">
              I'm always excited to explore new technologies, challenge
              myself, and keep learning through new projects and experiences.
            </p>
          </motion.div>

          {/* Creative cards */}
          <div className="relative grid grid-cols-2 gap-4">

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 70, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              whileHover={reduceMotion ? undefined : { y: -10, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex min-h-48 flex-col justify-between rounded-3xl bg-[#E9DDF9] p-6 shadow-sm"
            >
              <Code2 size={34} className="text-[#765D91]" />
              <div>
                <h3 className="text-lg font-semibold text-[#243B32]">
                  Development
                </h3>
                <p className="mt-1 text-sm text-[#607468]">
                  Bringing ideas to life
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 90, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              whileHover={reduceMotion ? undefined : { y: -10, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-10 flex min-h-48 flex-col justify-between rounded-3xl bg-[#F6C7B6] p-6 shadow-sm"
            >
              <Palette size={34} className="text-[#A56F60]" />
              <div>
                <h3 className="text-lg font-semibold text-[#243B32]">
                  UI Design
                </h3>
                <p className="mt-1 text-sm text-[#607468]">
                  Designing with purpose
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -10, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="col-span-2 flex items-center gap-5 rounded-3xl bg-[#CDE9D9] p-6 shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/60">
                <Sparkles size={28} className="text-[#243B32]" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#243B32]">
                  Always Learning
                </h3>
                <p className="mt-1 text-sm text-[#607468]">
                  Exploring new ideas, skills, and technologies.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
