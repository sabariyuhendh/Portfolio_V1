import React from 'react'

function Contact() {
  return (
    <>
    <div className='min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-4'>Hire Me</h2>
          <p className='text-gray-400 text-xl mb-8'>
            I am available for freelance work. If you have a project in mind, please feel free to reach out to me.
          </p>
          <div className='flex justify-center'>
            <a 
              href='mailto:yuhendhran@gmail.com' 
              className='bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-l text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300'
            >
              Email Me
            </a>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a 
              href="https://www.linkedin.com/in/sabariyuhendhran" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-gradient-to-l text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/sabariyuhendh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:bg-gradient-to-l text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-l text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact