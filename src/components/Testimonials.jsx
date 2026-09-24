import React from 'react'
// استيراد مكونات ودوال Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay, Pagination } from 'swiper/modules'

// استيراد ملفات الـ CSS الخاصة بـ Swiper
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

// بيانات التقييمات وآراء العملاء
const testimonials = [
  {
    name: "Rowhan Smith",
    role: "CEO at TechCorp",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    text: "When she reached the first hills of the Mountains, she had a last view back on the hometown. The platform streamlined all our operations effortlessly!"
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them."
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business."
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    text: "Game changer for our scaling workflow. The automated features saved our team countless hours every week!"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className='relative min-h-[85vh] py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 font-sans overflow-hidden flex items-center justify-center selection:bg-indigo-500 selection:text-white'>
      
      {/* Background Ambient Glows */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-indigo-600/15 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse' style={{ animationDuration: '8s' }} />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center'>

        {/******** Section Header ********/}
        <div className='text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest'>
            <span className='w-2 h-2 rounded-full bg-indigo-400 animate-ping' />
            TESTIMONIALS
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-amber-200 leading-tight tracking-tight'>
            What our happy clients say
          </h2>

          <p className='text-slate-400 text-base md:text-lg leading-relaxed'>
            Things that make it the best place to start trading and growing your business.
          </p>
        </div>

        {/******** Swiper Cards Section ********/}
        <div className='w-full max-w-sm sm:max-w-md py-4'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="mySwiper !pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="rounded-3xl overflow-hidden shadow-2xl">
                <div className='bg-slate-900/90 backdrop-blur-2xl border border-slate-800 p-8 sm:p-10 rounded-3xl flex flex-col items-center text-center shadow-2xl transition-all duration-300'>
                  
                  {/* Client Avatar with Glow */}
                  <div className='relative mb-5 group'>
                    <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300' />
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className='relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-slate-700 shadow-xl'
                    />
                  </div>

                  {/* Rating Stars */}
                  <div className='flex items-center justify-center gap-1 mb-4 text-amber-400 text-lg'>
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Client Name & Role */}
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-1'>
                    {item.name}
                  </h3>
                  <p className='text-xs sm:text-sm font-medium text-indigo-400 mb-6'>
                    {item.role}
                  </p>

                  {/* Review Quote Text */}
                  <p className='text-slate-300 text-sm sm:text-base leading-relaxed italic relative z-10'>
                    "{item.text}"
                  </p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Custom Swiper Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background: #6366f1 !important;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 8px !important;
          background: linear-gradient(to right, #6366f1, #a855f7) !important;
        }
      `}</style>
    </section>
  )
}