import React from 'react'
import heroImage from "../assets/hero-image.png"


export default function Hero() {
    return (
        <section className='relative min-h-screen pt-36 md:pt-44 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 font-sans overflow-hidden flex items-center 
        justify-center selection:bg-indigo-500 selection:text-white' id='home'>
            
            {/* Animated Ambient Background Glows */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-indigo-600/25 rounded-full blur-3xl animate-pulse duration-1000' />
                <div className='absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-3xl animate-ping duration-1000' style={{ animationDuration: '8s' }} />
                <div className='absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '5s' }} />
            </div>

            <div className='max-w-7xl mx-auto w-full relative z-10'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16'>
                    
                    {/* Left Column: Headline & CTA */}
                    <div className='w-full md:w-1/2 space-y-8 text-center md:text-left'>

                        {/* Star Badge */}
                        <div 
                        
                        className='inline-flex items-center gap-2.5 bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group animate-bounce'>
                            <span className='group-hover:scale-125 transition-transform duration-300 text-base'>⭐</span>
                            <span className='text-xs md:text-sm font-semibold tracking-wide text-slate-300 group-hover:text-indigo-300 transition-colors'>
                                RISE AND NEVER SETTLE
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white'>
                            <span className='block text-slate-200'>Boost the growth for</span>
                            
                            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 py-1 border-b border-indigo-500/30 w-fit mx-auto md:mx-0'>
                                Startup to Fortune 500
                            </span>

                            <span className='flex items-center justify-center md:justify-start gap-3 mt-2'>
                                Companies 
                                <span className='inline-block animate-pulse text-4xl md:text-5xl'>🔥</span>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className='text-slate-400 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mx-auto md:mx-0'>
                            Get the most accurate leads, sales team training, automated conversations, and all essential growth tools within a single billing.
                        </p>

                        {/* Email Subscription Bar */}
                        <div
                         className='max-w-lg mx-auto md:mx-0'>
                            <form 
                                onSubmit={(e) => e.preventDefault()}
                                className='flex items-center bg-slate-900/80 backdrop-blur-xl p-2 rounded-2xl border border-slate-800 hover:border-indigo-500/50 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 shadow-2xl transition-all duration-300'
                            >
                                <input 
                                    type='email' 
                                    placeholder='Enter your work email...' 
                                    className='w-full px-4 py-3 bg-transparent text-white placeholder-slate-500 text-sm md:text-base focus:outline-none'
                                    required
                                />
                                <button 
                                    type='submit'
                                    className='shrink-0 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white p-3.5 md:px-6 rounded-xl font-bold transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group'
                                >
                                    <span className='hidden sm:inline text-sm'>Get Started</span>
                                    <svg 
                                        className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' 
                                        fill='none' 
                                        stroke='currentColor' 
                                        viewBox='0 0 24 24'
                                    >
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M14 5l7 7m0 0l-7 7m7-7H3' />
                                    </svg>
                                </button>
                            </form>
                            <p className='text-xs text-slate-500 mt-3 text-left pl-2'>
                                🔒 14-day free trial. No credit card required.
                            </p>
                        </div>

                    </div>

                    {/* Right Column: Interactive Image & Floating Glass Badges */}
                    <div className='w-full md:w-1/2 relative'>
                        
                        {/* Glow Behind Main Image */}
                        <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse' />

                        <div className='relative group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-md p-2 shadow-2xl'>
                            <img 
                                src={heroImage} 
                                alt='Hero Presentation' 
                                className='w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out' 
                            />
                        </div>

                        {/* Floating Glass Badge 1: Stats */}
                        <div className='absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl shadow-2xl hover:-translate-y-1 transition-transform duration-300'>
                            <div className='w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg'>
                                📈
                            </div>
                            <div>
                                <p className='text-xs text-slate-400 font-medium'>Growth Rate</p>
                                <p className='text-lg font-bold text-white'>+248% Revenue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}