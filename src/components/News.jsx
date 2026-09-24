import React from 'react'
import { HiArrowRight, HiMail } from 'react-icons/hi'

export default function News() {
  return (
    <section className='relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 overflow-hidden flex items-center justify-center selection:bg-indigo-500 selection:text-white' id='news'>
      
      {/* Ambient Background Glows */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-indigo-600/15 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-10 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl' />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        
        {/* Main Card Container with Glassmorphism */}
        <div className='relative overflow-hidden rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-slate-800/80 p-8 sm:p-12 md:p-16 shadow-2xl'
        >
          {/* Subtle Inner Accent Gradient */}
        <div className='absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-transparent rounded-full blur-2xl pointer-events-none' />

        <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16'>
            
            {/****** Left Content ******/}
            <div className='text-center lg:text-left max-w-xl space-y-4'>
              <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest'>
                <span className='w-2 h-2 rounded-full bg-indigo-400 animate-ping' />
                GET IN TOUCH
              </div>

              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-slate-200 to-white leading-tight tracking-tight'>
                Subscribe to Our Newsletter
              </h2>

              <p className='text-slate-400 text-base md:text-lg leading-relaxed'>
                Join our community to receive the latest updates, platform insights, and exclusive enterprise offers straight to your inbox.
              </p>
            </div>

            {/****** Right Content (Form Input) ******/}
            <div className='w-full max-w-md'>
              <form 
                onSubmit={(e) => e.preventDefault()} 
                className='flex flex-col sm:flex-row items-center gap-3 bg-slate-950/60 p-2 rounded-2xl border border-slate-800 focus-within:border-indigo-500/60 transition-all duration-300 shadow-inner'
              >
                {/* Input Field with Icon */}
                <div className='relative w-full flex items-center px-3'>
                  <HiMail className='w-6 h-6 text-slate-500 mr-2 flex-shrink-0' />
                  <input 
                    type="email" 
                    required
                    placeholder='Enter your email address...' 
                    className='w-full bg-transparent text-white placeholder-slate-500 text-sm md:text-base py-3 focus:outline-none'
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap'
                >
                  <span>Subscribe</span>
                  <HiArrowRight className='w-5 h-5' />
                </button>
              </form>
              
              <p className='text-slate-500 text-xs text-center sm:text-left mt-3 px-2'>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}