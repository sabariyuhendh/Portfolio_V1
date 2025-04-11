import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section id="home" className="snap-start h-screen flex items-center justify-center">
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
          <h1 className="text-6xl font-bold text-white">
            Hello World, I'm 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 ml-2">
              Sabari
            </span>
          </h1>
          <h3 className='text-gray-400 text-2xl mt-4'>Aspiring Software Developer & DSA Enthusiast</h3>
        </div>
      </section>

      <section id="projects" className="snap-start h-screen flex items-center justify-center">
        <Projects />
      </section>

      <section id="about" className="snap-start h-screen flex items-center justify-center">
        <About />
      </section>

      <section id="contact" className="snap-start h-screen flex items-center justify-center">
        <Contact />
      </section>
    </div>
  )
}

export default Home