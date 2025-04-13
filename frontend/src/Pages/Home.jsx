import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <div className="h-full">
      <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-32">
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
          <h1 className="text-6xl font-bold text-white">
            Hello World, I'm 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500 ml-2">
              Sabari
            </span>
          </h1>
          <h3 className='text-gray-400 text-2xl mt-4'>Aspiring Software Developer & DSA Enthusiast</h3>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-32">
        <Projects />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-32">
        <About />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-32">
        <Contact />
      </section>
    </div>
  )
}

export default Home