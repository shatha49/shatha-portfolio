
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed inset-x-0 top-0 z-40 w-full"
      style={{
        padding: '14px 16px',
        boxSizing: 'border-box',
      }}
    >
      <nav
        className="relative flex w-full items-center justify-between rounded-2xl border border-white/70 bg-white/80 shadow-lg backdrop-blur-xl"
        style={{
          width: '100%',
          maxWidth: '1500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '10px 14px',
          boxSizing: 'border-box',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#243B32] text-lg font-bold"
          style={{ color: '#FFFFFF' }}
          aria-label="Shatha Alamoudi - Home"
        >
          SA.
        </a>

        {/* Desktop navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5">
          {navLinks
            .filter((link) => link.name !== 'Contact')
            .map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="whitespace-nowrap text-[12px] font-medium text-[#40574B] transition-colors hover:text-[#B17D78] xl:text-[13px]"
              >
                {link.name}
              </motion.a>
            ))}
        </div>

        {/* Desktop contact button */}
        <a
          href="#contact"
          className="hidden h-[44px] w-[125px] shrink-0 items-center justify-center rounded-full bg-[#243B32] text-sm font-semibold transition-all hover:scale-105 hover:bg-[#526F60] lg:flex"
          style={{ color: '#FFFFFF' }}
        >
          Let's Talk
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9DDF9] text-[#243B32] lg:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 w-full rounded-2xl border border-white/70 bg-[#FAF7F2]/95 shadow-xl backdrop-blur-xl lg:hidden"
            style={{
              width: '100%',
              maxWidth: '1500px',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '14px',
              maxHeight: 'calc(100dvh - 110px)',
              overflowY: 'auto',
              boxSizing: 'border-box',
            }}
          >
            <div className="flex flex-col items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-xl px-4 py-3 text-center text-sm font-medium text-[#243B32] transition-colors hover:bg-[#E9DDF9]"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
