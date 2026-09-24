import React from 'react'
const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    iconBg: "bg-indigo-500/10 border-indigo-500/30 shadow-indigo-500/20",
    title: "Find out what you need",
    description: "We present you a clear proposal and discuss all the details to tailor the ideal growth solution."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: "bg-purple-500/10 border-purple-500/30 shadow-purple-500/20",
    title: "Work out the details",
    description: "Establishing seamless communication protocols, flexible engagement models, and clear milestones."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "bg-amber-500/10 border-amber-500/30 shadow-amber-500/20",
    title: "We get to work fast",
    description: "Rapid execution with transparent pricing and real-time tracking from day one."
  }
]

export default function Features() {
  return (
    <section 
    className='relative min-h-[80vh] py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 font-sans overflow-hidden flex items-center justify-center selection:bg-indigo-500 selection:text-white'>
      
      {/* Ambient Background Glows */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-600/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-20 left-10 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '7s' }} />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>

        {/******** Heading Text ********/}
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest'>
            <span className='w-2 h-2 rounded-full bg-indigo-400 animate-ping' />
            OUR PROCESS
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-200 leading-tight tracking-tight'>
            How Can We Help Your Business
          </h2>

          <p className='text-slate-400 text-base md:text-lg leading-relaxed'>
            When you partner with us, you build trust, scale efficiency, and accelerate revenue growth.
          </p>
        </div>

        {/******** Features Box Grid ********/}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10'>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className='group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-indigo-500/10 flex flex-col items-center text-center justify-between'
            >
              {/* Subtle background glow on card hover */}
              <div className='absolute -inset-px bg-gradient-to-b from-indigo-500/20 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />

              <div>
                {/* Icon Circle */}
                <div className={`w-20 h-20 rounded-2xl border backdrop-blur-md mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg ${feature.iconBg}`}>
                  {feature.icon}
                </div>

                <h3 className='text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors'>
                  {feature.title}
                </h3>

                <p className='text-slate-400 text-sm md:text-base leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/******** Partner Button ********/}
        <div className='text-center mt-16'>
          <button className='inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 cursor-pointer'>
            Become a Partner
          </button>
        </div>

      </div>
    </section>
  )
}