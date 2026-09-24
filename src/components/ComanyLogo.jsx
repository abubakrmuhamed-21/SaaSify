import React from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocommerce from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"
import noon from "../assets/noon.png"

export default function CompanyLogo() {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint, noon]

  return (
    <section className='relative w-full py-16 bg-slate-50 text-slate-900 overflow-hidden font-sans border-y border-slate-200/80 selection:bg-indigo-500 selection:text-white'>
      
      {/* Background Subtle Ambient Light Glow */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-indigo-200/30 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-32 bg-purple-200/30 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '4s' }} />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-12'>
          
          {/* Partner Badge / Title */}
          <div className='relative shrink-0 group'>
            {/* Soft Shadow & Border Glow on hover */}
            <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500 -z-10' />
            
            <div className='bg-white/90 backdrop-blur-xl border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-4 rounded-2xl shadow-lg shadow-slate-200/50 flex items-center gap-4'>
              <div className='w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping shrink-0' />
              <p className='text-slate-700 text-sm md:text-base font-semibold leading-snug tracking-wide'>
                Proud Partner at <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold'>
                  Hubspot & Segment
                </span>
              </p>
            </div>
          </div>

          {/* Marquee Wrapper with Smooth Fade Edges */}
          <div className='relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div className='flex animate-marquee whitespace-nowrap items-center py-2'>
              {/* Double array map for seamless infinite scrolling loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index} 
                  className='mx-8 shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer group/logo'
                >
                  <img 
                    src={logo} 
                    alt={`Company Logo ${index}`} 
                    className='h-8 md:h-10 w-auto object-contain filter drop-shadow-sm group-hover/logo:drop-shadow-md transition-all duration-300' 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}