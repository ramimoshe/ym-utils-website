import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Tools from './pages/Tools'
import Resources from './pages/Resources'
import StorageCalculator from './pages/StorageCalculator'
import Calendar from './pages/Calendar'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/storage-calculator" element={<StorageCalculator />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
