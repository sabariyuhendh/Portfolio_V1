import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
