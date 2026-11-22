
import { motion } from 'motion/react'
import { experiences } from './data/experiences'

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 w-full px-5 md:px-8"
      style={{
        paddingTop: '130px',
        paddingBottom: '180px',
        boxSizing: 'border-box',
      }}
    >
<div
  className="mx-auto w-full"
  style={{
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
>
        {/* Sticky heading */}
        <div
          className="sticky z-20 flex w-full flex-col items-center text-center"
          style={{
            top: '85px',
            padding: '25px 12px 30px',
            marginBottom: '45px',
            background:
              'linear-gradient(to bottom, #FAF7F2 75%, rgba(250,247,242,0.92) 90%, rgba(250,247,242,0))',
            boxSizing: 'border-box',
          }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#728578]">
            04 / MY JOURNEY
          </p>

          <h2 className="text-center text-4xl font-semibold tracking-tight text-[#243B32] md:text-6xl">
            Beyond the Classroom
            <span className="text-[#A98FC5]">.</span>
          </h2>

          <p
            className="mt-6 text-center text-base leading-relaxed text-[#728578] md:text-lg"
            style={{
              maxWidth: '550px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Experiences that shaped my journey
            beyond academics.
          </p>
        </div>

        {/* Experience list */}
        <div className="flex w-full flex-col">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full border-b border-[#243B32]/15"
              style={{
                padding: '38px 0',
                boxSizing: 'border-box',
              }}
            >
              {/* Mobile layout */}

<div
  className="mx-auto flex w-full flex-col items-center justify-center text-center md:hidden"
  style={{
    width: '100%',
    maxWidth: '340px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '20px',
    paddingRight: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
  }}
>

                    <span
                  className="mb-4 text-sm font-medium"
                  style={{ color: '#A98FC5' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="text-center text-xl font-semibold leading-snug text-[#243B32]">
                  {experience.title}
                </h3>

                <p className="mt-3 text-center text-sm font-medium text-[#A98FC5]">
                  {experience.role}
                </p>

<p
  className="mt-5 w-full text-center text-sm leading-7 text-[#63786C]"
  style={{
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowWrap: 'break-word',
    textAlign: 'center',
  }}
>
  {experience.description}
</p>

                <p className="mt-5 text-center text-xs text-[#728578]">
                  {experience.period}
                </p>
              </div>

              {/* Desktop layout - unchanged */}
<div
  className="hidden w-full md:grid"
  style={{
    gridTemplateColumns: '50px minmax(0, 1fr) 120px',
    columnGap: '24px',
    alignItems: 'start',
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
>
                <span
                  style={{
                    lineHeight: '32px',
                    color: '#A98FC5',
                    fontSize: '14px',
                    textAlign: 'left',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div style={{ minWidth: 0 }}>
                  <h3
                    className="text-2xl font-semibold text-[#243B32]"
                    style={{
                      margin: 0,
                      lineHeight: '32px',
                      textAlign: 'left',
                    }}
                  >
                    {experience.title}
                  </h3>

                  <p
                    className="text-sm font-medium text-[#A98FC5]"
                    style={{
                      marginTop: '12px',
                      textAlign: 'left',
                    }}
                  >
                    {experience.role}
                  </p>

                  <p
                    className="text-base leading-8 text-[#63786C]"
                    style={{
                      marginTop: '18px',
                      maxWidth: '580px',
                      textAlign: 'left',
                    }}
                  >
                    {experience.description}
                  </p>
                </div>

                <span
                  style={{
                    lineHeight: '32px',
                    textAlign: 'right',
                    fontSize: '14px',
                    color: '#728578',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {experience.period}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
