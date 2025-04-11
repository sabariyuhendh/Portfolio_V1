import React, { useState } from 'react'

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
          
          <div className='hidden md:flex md:gap-4'>
            <button onClick={() => scrollToSection('home')} 
              className='font-medium text-lg hover:text-gray-300'>Home</button>
            <button onClick={() => scrollToSection('projects')} 
              className='font-medium text-lg hover:text-gray-300'>Projects</button>
            <button onClick={() => scrollToSection('about')} 
              className='font-medium text-lg hover:text-gray-300'>About</button>
            <button onClick={() => scrollToSection('contact')} 
              className='font-medium text-lg hover:text-gray-300'>Contact</button>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile menu */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='flex flex-col gap-2 pb-3'>
              <button onClick={() => scrollToSection('home')} 
                className='font-medium text-lg hover:text-gray-300'>Home</button>
              <button onClick={() => scrollToSection('projects')} 
                className='font-medium text-lg hover:text-gray-300'>Projects</button>
              <button onClick={() => scrollToSection('about')} 
                className='font-medium text-lg hover:text-gray-300'>About</button>
              <button onClick={() => scrollToSection('contact')} 
                className='font-medium text-lg hover:text-gray-300'>Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar