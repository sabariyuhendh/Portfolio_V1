import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <>
    <div className='flex justify-between items-center py-3 px-32 bg-black text-white'>
        <h3 className='font-bold text-2xl'>Sabari Yuhendhran</h3>
        <div className='flex gap-4'>
            <Link to="/" className='font-medium text-xl hover:text-gray-300'>Home</Link>
            <Link to="/projects" className='font-medium text-xl hover:text-gray-300'>Projects</Link>
            <Link to="/about" className='font-medium text-xl hover:text-gray-300'>About</Link>
            <Link to="/contact" className='font-medium text-xl hover:text-gray-300'>Contact</Link>
        </div>
    </div>
    </>  
    )
}

export default Navbar