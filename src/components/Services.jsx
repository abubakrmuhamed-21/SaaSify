import React from 'react'
import { BiTime } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'

const services = [
  {
    icon: <BsStack className="w-7 h-7 text-indigo-400" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready to build modern web layouts.",
    link: "#learn-more"
  },
  {
    icon: <HiLightBulb className="w-7 h-7 text-amber-400" />,
    title: "Ad-Creatives", 
    description: "Alphabet Village and the subline of her own road, creating eye-catching ads.",
    link: "#learn-more"
  },
  {
    icon: <FiSettings className="w-7 h-7 text-rose-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return, streamlining your workflows.",
    link: "#learn-more"
  },
  {
    icon: <BiTime className="w-7 h-7 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her like a crystal clear data visualization.",
    link: "#learn-more"
  }
]

export default function Services() {
  return (
    <section className='relative py-24 px-4 min-h-screen text-slate-100 flex items-center justify-center font-sans selection:bg-indigo-500
     selection:text-white overflow-hidden bg-slate-950' id='services'>
      
      {/* Animated Gradient Background Orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/25 rounded-full blur-3xl animate-pulse duration-1000' />
        <div className='absolute -bottom-20 right-10 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-3xl animate-ping duration-1000' style={{ animationDuration: '7s' }} />
        <div className='absolute top-10 right-1/3 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '5s' }} />
      </div>

      <div className='max-w-6xl mx-auto w-full relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
          
          {/* Header Column */}
          <div className='w-full lg:w-5/12 space-y-6 text-center lg:text-left'>
            <span className='px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/80 border border-indigo-700/50 inline-block animate-bounce'>
              Next-Gen Services
            </span>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-300 leading-tight tracking-tight'>
              Future of Support with new shape.
            </h2>

            <p className='text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0'>
              Discuss your goals, determine success metrics and identify problems with our specialized team.
            </p>

            {/* Feature Bullet Points */}
            <div className='space-y-3.5 pt-2 max-w-md mx-auto lg:mx-0 text-left'>
              <div className='flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl backdrop-blur-sm'>
                <div className='w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0'>
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                </div>
                <span className='text-slate-300 text-sm font-medium'>UX design content strategy</span>
              </div>
              
              <div className='flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl backdrop-blur-sm'>
                <div className='w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0'>
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>
                <span className='text-slate-300 text-sm font-medium'>Development & workflow automation</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className='pt-4'>
              <button className='w-full sm:w-auto py-4 px-9 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'>
                Get Started Now
              </button>
            </div>
          </div>

          {/* Cards Grid Column */}
          <div className='w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {services.map((service, index) => (
              <div 
                key={index} 
                className='group relative bg-slate-900/70 backdrop-blur-xl p-7 rounded-3xl border border-slate-800/80 hover:border-indigo-500/50 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 ease-out'
              >
                {/* Glow effect on hover */}
                <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10' />

                <div>
                  {/* Icon Box */}
                  <div className='w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-300 shadow-inner'>
                    {service.icon}
                  </div>

                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-200'>
                    {service.title}
                  </h3>

                  <p className='text-slate-400 text-sm leading-relaxed mb-6'>
                    {service.description}
                  </p>
                </div>

                {/* Link with arrow animation */}
                <a 
                  href={service.link} 
                  className='inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm hover:text-indigo-300 transition-all duration-200 group/link'
                >
                  <span>Learn More</span>
                  <svg 
                    className='w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200' 
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M14 5l7 7m0 0l-7 7m7-7H3' />
                  </svg>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}