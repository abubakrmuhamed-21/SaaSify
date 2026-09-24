import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Contact Us', href: '#contact' },
  ],
  getHelp: [
    { name: 'Support Career', href: '#' },
    { name: '24h Service', href: '#' },
    { name: 'Quick Chat', href: '#' },
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Policy', href: '#' },
    { name: 'Business', href: '#' },
  ],
  contact: [
    { name: 'WhatsApp', href: '#' },
    { name: 'Support 24/7', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className='bg-slate-950 border-t border-slate-800/80 text-slate-300 pt-16 pb-12 relative overflow-hidden'>
      
      {/* Background Ambient Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[30rem] h-[15rem] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80'>
          
          {/**** Brand Column ****/}
          <div className='lg:col-span-4 space-y-4'>
            <a href="#home" className="flex items-center gap-3 group cursor-pointer w-fit">
              <div className="relative flex items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-indigo-500/50"></div>
                <div className="w-6 h-6 rounded-full -ml-3 bg-gradient-to-tr from-pink-500 to-rose-500 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-pink-500/50"></div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                SaaS<span className="text-indigo-500">ify</span>
              </span>
            </a>

            <p className='text-slate-400 text-sm leading-relaxed max-w-sm'>
              Empowering modern teams with next-gen tools and seamless workflows. Build, scale, and deliver effortlessly.
            </p>

            {/* Social Links */}
            <div className='flex items-center gap-3 pt-2'>
              <a 
                href="#" 
                aria-label="Facebook"
                className='w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-400 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25'
              >
                <FaFacebookF className='w-4 h-4'/>
              </a>

              <a 
                href="#" 
                aria-label="Twitter"
                className='w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-500 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25'
              >
                <FaTwitter className='w-4 h-4'/>
              </a>

              <a 
                href="#" 
                aria-label="LinkedIn"
                className='w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-800 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25'
              >
                <FaLinkedinIn className='w-4 h-4'/>
              </a>
            </div>
          </div>

          {/**** Navigation Links ****/}
          <div className='lg:col-span-8'>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  {/* Category Header */}
                  <h3 className='text-slate-100 font-bold text-base capitalize tracking-wider mb-4'>
                    {category.replace(/([A-Z])/g, ' $1')}
                  </h3>

                  {/* Links List */}
                  <ul className='space-y-2.5'>
                    {links.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href} 
                          className='text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200 block'
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className='pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500'>
          <p>© {new Date().getFullYear()} SaaSify Inc. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href="#" className='hover:text-slate-300 transition-colors'>Terms</a>
            <a href="#" className='hover:text-slate-300 transition-colors'>Privacy</a>
            <a href="#" className='hover:text-slate-300 transition-colors'>Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}