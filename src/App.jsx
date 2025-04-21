import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AbstrackPage from './pages/AbstrackPage'
import ThreeDPage from './pages/ThreeDPage'
import NaqshlikPage from './pages/NaqshlikPage'
import AccessoriesPage from './pages/AccessoriesPage'
import ScrollToHero from './components/ScrollToHero'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToHero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abstrack" element={<AbstrackPage />} />
        <Route path="/3d" element={<ThreeDPage />} />
        <Route path="/naqshlik" element={<NaqshlikPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
      </Routes>
    </div>
  )
}

export default App
