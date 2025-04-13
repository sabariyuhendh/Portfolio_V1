import React, { useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedButton({ children, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative group"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <span className="font-medium text-lg">{children}</span>
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white transition-all group-hover:w-full group-hover:left-0"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white transition-all group-hover:w-full group-hover:right-0"></span>
    </motion.button>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='fixed w-full z-50 bg-black text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <h3 className='font-bold text-xl sm:text-2xl'>Sabari Yuhendhran</h3>
          
          <div className='hidden md:flex md:gap-8'>
            <AnimatedButton onClick={() => scrollToSection('home')}>Home</AnimatedButton>
            <AnimatedButton onClick={() => scrollToSection('projects')}>Projects</AnimatedButton>
            <AnimatedButton onClick={() => scrollToSection('about')}>About</AnimatedButton>
            <AnimatedButton onClick={() => scrollToSection('contact')}>Contact</AnimatedButton>
          </div>

          {/* Mobile menu button remains the same */}
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu with animated buttons */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='flex flex-col gap-4 pb-3'>
              <AnimatedButton onClick={() => scrollToSection('home')}>Home</AnimatedButton>
              <AnimatedButton onClick={() => scrollToSection('projects')}>Projects</AnimatedButton>
              <AnimatedButton onClick={() => scrollToSection('about')}>About</AnimatedButton>
              <AnimatedButton onClick={() => scrollToSection('contact')}>Contact</AnimatedButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar