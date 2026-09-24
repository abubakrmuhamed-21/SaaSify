import React, { useState } from 'react';

export default function Pricing() {
    const [productCount, setProductCount] = useState(50);

    // Dynamic Price Calculations
    const starterPrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));

    // Features Lists
    const starterFeatures = [
        `Up to ${productCount} active products`,
        'Email support with 24h response',
        'Basic sales analytics',
        '1 payment gateway integration',
        'Regular free updates'
    ];

    const businessFeatures = [
        `Up to ${productCount} active products`,
        '24/7 Priority technical support',
        'Advanced analytics & custom reports',
        'Unlimited payment gateways',
        'Dedicated account manager',
        'Automated daily backups'
    ];

    return (
        <section className='relative py-20 px-4 min-h-screen text-slate-100 flex items-center justify-center font-sans selection:bg-indigo-500 selection:text-white overflow-hidden bg-slate-950'>
            
            {/* Animated Gradient Background Orbs */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-900/50 rounded-full blur-3xl animate-pulse duration-1000' />
                <div className='absolute top-1/2 -right-40 w-[32rem] h-[32rem] bg-emerald-300/20 rounded-full blur-3xl animate-pulse duration-1000' style={{ animationDuration: '6s' }} />
                <div className='absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '4s' }} />
            </div>

            <div className='max-w-6xl mx-auto w-full relative z-10'>
                
                {/* Header */}
                <div className='text-center mb-16 space-y-4'>
                    <span className='px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/80 border border-indigo-700/50 inline-block animate-bounce'>
                        Flexible Plans
                    </span>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-50 to-indigo-500 tracking-tight'>
                        Simple, transparent pricing
                    </h2>
                    <p className='text-slate-400 text-base md:text-lg max-w-xl mx-auto'>
                        Adjust the slider below to scale your plan according to your product catalog size.
                    </p>
                </div>

                {/* Interactive Slider Box */}
                <div className='max-w-xl mx-auto mb-16 bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-800/80 shadow-2xl hover:border-indigo-500/50 transition-all duration-300'>
                    <div className='flex justify-between items-center mb-6'>
                        <span className='text-slate-300 font-medium text-sm md:text-base'>Number of Products:</span>
                        <span className='bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-bold px-4 py-1.5 rounded-full text-base md:text-lg shadow-inner'>
                            {productCount} <span className='text-xs font-normal text-indigo-300'>items</span>
                        </span>
                    </div>

                    {/* Custom Styled Range Slider */}
                    <input 
                        type='range' 
                        min='10' 
                        max='500' 
                        step='10'
                        value={productCount} 
                        onChange={(e) => setProductCount(Number(e.target.value))}
                        className='w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all duration-200'
                    />
                    
                    <div className='flex justify-between text-xs text-slate-500 font-medium mt-3 px-1'>
                        <span>10 products</span>
                        <span>250 products</span>
                        <span>500+ products</span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto'>
                    
                    {/* Starter Card */}
                    <div className='group bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-300 ease-out'>
                        <div>
                            <div className='flex justify-between items-center mb-4'>
                                <h3 className='text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200'>
                                    Starter
                                </h3>
                                <span className='text-xs font-semibold text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full'>
                                    Essential
                                </span>
                            </div>
                            
                            <div className='my-6 flex items-baseline gap-1'>
                                <span className='text-5xl font-black text-white tracking-tight transition-all duration-300'>
                                    ${starterPrice}
                                </span>
                                <span className='text-slate-400 font-medium text-sm'>/ month</span>
                            </div>

                            <div className='h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-6' />

                            {/* Features */}
                            <ul className='space-y-4 mb-8 text-slate-300 text-sm'>
                                {starterFeatures.map((feature, index) => (
                                    <li key={index} className='flex items-center gap-3'>
                                        <div className='rounded-full p-1 bg-emerald-500/10 text-emerald-400 shrink-0'>
                                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M5 13l4 4L19 7' />
                                            </svg>
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className='w-full py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all duration-200 active:scale-[0.98] cursor-pointer'>
                            Get Started
                        </button>
                    </div>

                    {/* Business Card (Popular) */}
                    <div className='group relative bg-slate-900/90 backdrop-blur-md p-8 rounded-3xl border-2 border-indigo-500/80 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 ease-out'>
                        
                        {/* Glow effect on hover */}
                        <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500 -z-10' />

                        {/* Badge */}
                        <div className='absolute -top-3.5 right-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-bold py-1 px-4 rounded-full shadow-lg tracking-wide uppercase animate-pulse'>
                            Most Popular
                        </div>

                        <div>
                            <div className='flex justify-between items-center mb-4'>
                                <h3 className='text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200'>
                                    Business
                                </h3>
                                <span className='text-xs font-semibold text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/60'>
                                    Pro Choice
                                </span>
                            </div>

                            <div className='my-6 flex items-baseline gap-1'>
                                <span className='text-5xl font-black text-white tracking-tight transition-all duration-300'>
                                    ${businessPrice}
                                </span>
                                <span className='text-slate-400 font-medium text-sm'>/ month</span>
                            </div>

                            <div className='h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-6' />

                            {/* Features */}
                            <ul className='space-y-4 mb-8 text-slate-200 text-sm'>
                                {businessFeatures.map((feature, index) => (
                                    <li key={index} className='flex items-center gap-3'>
                                        <div className='rounded-full p-1 bg-indigo-500/20 text-indigo-400 shrink-0'>
                                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M5 13l4 4L19 7' />
                                            </svg>
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className='w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-200 to-purple-600 hover:from-indigo-500 hover:to-cyan-200 text-white font-bold shadow-lg shadow-indigo-600/30 active:scale-[0.98] cursor-pointer transition-all duration-400'>
                            Upgrade to Business
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}