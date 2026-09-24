import React from 'react'
import stats from '../assets/stats.webp'
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Schedule() {
  return (
    <section className='relative min-h-[80vh] py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 font-sans overflow-hidden flex items-center justify-center selection:bg-indigo-500 selection:text-white'>
      
      {/* Ambient Background Glow Orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/3 -left-20 w-[28rem] h-[28rem] bg-indigo-600/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-ping' style={{ animationDuration: '8s' }} />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20'>
          
          {/************** Left Column (Image) **************/}
          <div className='w-full md:w-1/2 relative group order-2 md:order-1'>
            
            {/* Glow Effect Behind Image */}
            <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-amber-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-500 -z-10' />

            {/* Image Container with Glassmorphism */}
            <div className='relative rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-3 shadow-2xl transition-all duration-300 group-hover:border-indigo-500/40'>
              <img 
                src={stats} 
                alt="Scheduling Stats & Analytics" 
                className='w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out' 
              />
            </div>

          </div>

          {/************** Right Column (Content) **************/}
          <div className='w-full md:w-1/2 space-y-6 text-center md:text-left order-1 md:order-2'>
            
            {/* Category Tag */}
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest'>
              <span className='w-2 h-2 rounded-full bg-amber-400 animate-ping' />
              SCHEDULE
            </div>

            {/* Title */}
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-amber-200 leading-tight tracking-tight'>
              Streamline your business <br className='hidden lg:inline' /> 
              with Smart Scheduling Solutions
            </h2>

            {/* Description */}
            <p className='text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0'>
              Take control of your time and boost productivity with our intelligent scheduling system.
              Automate appointments, manage team availability, and deliver exceptional customer
              experiences through seamless calendar management.
            </p>

            {/* Action Link */}
            <div className='pt-2'>
              <a 
                href="#" 
                className='inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-base transition-all duration-300 group/link'
              >
                <span>Explore Scheduling features</span>
                <IoArrowForwardOutline className='w-5 h-5 transform group-hover/link:translate-x-2 transition-transform duration-300 text-indigo-400' />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}