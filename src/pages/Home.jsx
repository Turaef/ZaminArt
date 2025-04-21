import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ModelSelector from '../components/ModelSelector'
import Benefits from '../components/Benefits'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ModelSelector />
      <Benefits />
      <Pricing />
      <Contact />
      <FAQ />
    </div>
  )
} 