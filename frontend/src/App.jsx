import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import useScrollDirection from './hooks/useScrollDirection' 

function App() {
  const scrollDirection = useScrollDirection()

  return (
    <div className="min-h-screen bg-black text-white">
      <header className={`sticky top-0 z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-28" : "translate-y-0"
      }`}>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
