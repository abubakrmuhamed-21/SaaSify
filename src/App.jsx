import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CompanyLogo from './components/ComanyLogo'
import Purpose from './components/Purpose'
import Features from './components/Features'
import Schedule from './components/Schedule'
import Monitor from './components/Monitor'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import News from './components/News'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr
       from-indigo-500/30 to-fuchsia-300/30 rounded-full blur-[75px]'></div>
      <div className='absolute -top-28 -right-36 w-[500px] h-[500px] bg-gradient-to-tr
       from-yellow-400/30 to-cyan-300/30 rounded-full blur-[75px]'></div>
      <div className='overflow-hidden'>
          <Navbar/>
          <Hero/>
          <CompanyLogo/>
          <Purpose/>
          <Features/>
          <Schedule/>
          <Monitor/>
          <Pricing/>
          <Services/>
          <Testimonials/>
          <News/>
          <Footer/>
      </div>
    </main>
  )
}
