import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        { href: '#home', label: "Home" },
        { href: '#about', label: "About" },
        { href: '#services', label: "Our Services" },
        { href: '#testimonials', label: "Testimonials" },
    ]

    return (
        <nav
        className="fixed top-0 left-0 right-0 bg-slate-950/70 backdrop-blur-xl z-50 border-b border-slate-800/80 shadow-2xl transition-all duration-300">
            {/* Header Container */}
            <div className="max-w-7xl mx-auto h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">

                {/***** LOGO *****/}
                <a href="#home" className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-indigo-500/50"></div>
                        <div className="w-6 h-6 rounded-full -ml-3 bg-gradient-to-tr from-pink-500 to-rose-500 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-pink-500/50"></div>
                    </div>
                    <span className="text-xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                        SaaS<span className="text-indigo-500">ify</span>
                    </span>
                </a>

                {/***** Desktop Nav Items *****/}
                <div className='hidden md:flex items-center gap-8'>
                    {navLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href} 
                            onClick={() => setActiveLink(link.href)}
                            className={`text-sm font-semibold relative py-1 transition-all duration-300
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full
                            after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 ${
                                activeLink === link.href 
                                ? "text-indigo-400 after:w-full" 
                                : "text-slate-400 hover:text-slate-100"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/***** Desktop GET in Touch Button *****/}
                <button className='hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white 
                font-bold text-sm transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:scale-[1.03] active:scale-[0.97] cursor-pointer'>
                    <a href="#news">Get in touch</a>
                </button>

                {/***** Mobile Menu Button *****/}
                <button 
                    className='md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors' 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {isMenuOpen ? <HiX className='w-7 h-7 text-indigo-400'/> : <HiMenu className='w-7 h-7'/>}
                </button>
            </div>

            {/***** Mobile Menu Dropdown *****/}
            {isMenuOpen && (
                <div className='md:hidden bg-slate-900/95 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2 duration-200'>
                    {navLinks.map((link, index) => (
                        <a 
                            key={index}
                            href={link.href}
                            onClick={() => {
                                setActiveLink(link.href)
                                setIsMenuOpen(false)
                            }}
                            className={`block text-base font-semibold py-2 px-3 rounded-lg transition-all ${
                                activeLink === link.href 
                                ? "text-indigo-400 bg-indigo-950/40 border border-indigo-800/40" 
                                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button className='w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-indigo-600/30 active:scale-[0.98] cursor-pointer'>
                        Get in touch
                    </button>
                </div>
            )}
        </nav>
    )
}