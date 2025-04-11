import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
