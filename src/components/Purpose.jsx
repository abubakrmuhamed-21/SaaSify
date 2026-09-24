import React from 'react'

export default function Purpose() {

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconBg: "bg-purple-500/10 border-purple-500/30 shadow-purple-500/20",
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers, and marketers to build solutions that scale."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      iconBg: "bg-pink-500/10 border-pink-500/30 shadow-pink-500/20",
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm, aiming to blend in for a seamless partnership."
    }
  ];

  return (
    <section className='relative min-h-[60vh] py-20 px-4 sm:px-6 lg:px-8 bg-slate-950
     text-slate-100 font-sans overflow-hidden flex items-center justify-center
      selection:bg-indigo-500 selection:text-white' id='about'>
      
      {/* Background Ambient Glows */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-20 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '6s' }} />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center'>

          {/***** Heading Text Column *****/}
          <div className='space-y-4 text-center lg:text-left'>
            <div className='inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/10 animate-bounce'>
              <span className='text-xs md:text-sm font-bold text-amber-400 tracking-wide'>
                Achieve More! 🔥
              </span>
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-200 leading-tight tracking-tight'>
              The purpose of a convoy is to keep your team in sync.
            </h2>
          </div>

          {/***** Bullet Points / Features Cards Grid *****/}
          <div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className='group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between'
              >
                {/* Accent glow on hover */}
                <div className='absolute -inset-px bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />

                <div>
                  {/* Icon Box */}
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl border backdrop-blur-md mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 ${feature.iconBg}`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors'>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className='text-slate-400 text-sm md:text-base leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}