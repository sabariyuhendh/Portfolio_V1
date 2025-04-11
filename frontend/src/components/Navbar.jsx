import React from 'react'

function Navbar() {
  return (
        <>
    <div className='flex justify-between items-center py-2 px-32 text-2xl bg-gray-900 text-white'>
        <h3 className='font-bold'>Sabari Yuhendhran</h3>
        <div className='flex gap-4'>
            <a href="#" className='font-medium hover:text-gray-300'>Home</a>
            <a href="#" className='font-medium hover:text-gray-300'>Projects</a>
            <a href="#" className='font-medium hover:text-gray-300'>About</a>
            <a href="#" className='font-medium hover:text-gray-300'>Contact</a>
        </div>
    </div>
    </>  
    )
}

export default Navbar