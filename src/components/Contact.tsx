
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'

// Add your real contact information here
const contact = {
  email: 'shathaalamoudi5@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shatha-alamoudi-67578334a?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  github: 'https://github.com/shatha49',
  x: 'https://x.com/losem0',
  whatsapp: '966505788791',
}

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: contact.linkedin,
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: contact.github,
  },
  {
    name: 'Email',
    icon: HiOutlineMail,
    href: `mailto:${contact.email}`,
  },
  {
    name: 'X',
    icon: FaXTwitter,
    href: contact.x,
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    href: `https://wa.me/${contact.whatsapp}`,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 w-full px-5 md:px-8"
      style={{
        minHeight: '100vh',
        paddingTop: '170px',
        paddingBottom: '45px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Heading and introduction */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center"
        style={{
          maxWidth: '950px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p className="mb-6 text-xs font-semibold tracking-[0.35em] text-[#728578]">
          07 / CONTACT
        </p>

        <h2
          className="font-semibold tracking-tight text-[#243B32]"
          style={{
            fontSize: 'clamp(44px, 7vw, 95px)',
            lineHeight: 1.1,
          }}
        >
          Have an Idea?
          <br />
          <span className="text-[#A98FC5]">
            Let's Talk.
          </span>
        </h2>

        <p
          className="mt-8 text-base leading-8 text-[#728578] md:text-lg"
          style={{
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          I'm always excited to explore new ideas,
          collaborate on meaningful projects, and connect
          with people who share a passion for creativity
          and technology.
        </p>

 
{/* Main email button */}
<motion.a
  href={`mailto:${contact.email}`}
  whileHover={{
    scale: 1.06,
    y: -4,
    boxShadow: '0 18px 40px rgba(36,59,50,0.22)',
  }}
  whileTap={{ scale: 0.97 }}
className="inline-flex items-center justify-center gap-5 rounded-full"
style={{
  backgroundColor: '#243B32',
  color: '#FFFFFF',
  fontSize: '15px',
  fontWeight: 600,
  padding: '15px 30px',
  minHeight: '54px',
  textDecoration: 'none',
  boxShadow: '0 12px 30px rgba(36,59,50,0.15)',
  marginTop: '63px',
}}
>
  <span style={{ color: '#FFFFFF' }}>
    Send Me an Email
  </span>

<ArrowUpRight
  size={20}
  strokeWidth={2}
  color="#FFFFFF"
/>
</motion.a>

        {/* Social media icons */}
<div
  className="flex w-full flex-wrap items-start justify-center gap-5 md:gap-8"
  style={{ marginTop: '95px' }}
>       
   {socialLinks.map((social, index) => {
            const Icon = social.icon

            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={
                  social.name === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  social.name === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                aria-label={social.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover="hover"
                whileTap={{ scale: 0.94 }}
                className="group flex w-[76px] flex-col items-center gap-3"
              >
                <motion.div
                  variants={{
                    hover: {
                      y: -7,
                      scale: 1.1,
                      backgroundColor: '#DCE9DF',
                      borderColor: '#A9C4B0',
                      boxShadow:
                        '0 12px 25px rgba(36,59,50,0.12)',
                    },
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex h-[66px] w-[66px] items-center justify-center rounded-full border border-[#E9DDF9] bg-[#FAF7F2] text-[#243B32]"
                >
                  <Icon size={27} />
                </motion.div>

                {/* Name appears on hover */}
                <motion.span
                  variants={{
                    hover: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  className="text-xs font-medium text-[#243B32] group-focus-visible:opacity-100"
                >
                  {social.name}
                </motion.span>
              </motion.a>
            )
          })}
        </div>
      </motion.div>

      {/* Footer */}
      <div
        className="mt-auto w-full"
        style={{
          maxWidth: '1200px',
          paddingTop: '120px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#D9DDD7] pt-7 md:flex-row">
          <p className="text-xs text-[#728578]">
            © 2026 Shatha Alamoudi. All rights reserved.
          </p>

          <p className="text-xs text-[#728578]">
            Designed & Developed with passion.
          </p>
        </div>
      </div>
    </section>
  )
}
