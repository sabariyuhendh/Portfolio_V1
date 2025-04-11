import React from 'react'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-6xl font-bold text-white">
        Hello World, I'm 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 ml-2">
          Sabari
        </span>
      </h1>
      <h3 className='text-gray-400 text-2xl mt-4'>Aspiring Software Developer & DSA Enthusiast</h3>
    </div>
  )
}

export default Home;