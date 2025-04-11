import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main className="relative">
        <Home />
      </main>
    </div>
  )
}

export default App
