import React from 'react'
import { TestimonialsArray } from "../components"
import '../css/scroll-bar.css';

const TestimonialsSection = () => {
  return (
    <div className='flex flex-col gap-3 p-4 md:p-5 lg:p-12 lg:py-6 '>
      <div className="heading font-['Times_New_Roman'] ">
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#3A4740] font-bold'>Testimonials</h1>
        <hr className='bg-[#3A4740] h-1 rounded-full w-3/4' />
      </div>
      <div className="flex gap-3 overflow-visible rounded testimonial-super-container scrollbar-hide">
        <div
          className="testimonials-container font-bold h-64 lg:h-72 w-[93%] bg-[#a3663c] text-white text-xl flex p-3 lg:p-4 gap-3 rounded-lg absolute left-1/2 transform -translate-x-1/2 ">
          What People Say</div>
        <TestimonialsArray />
      </div>
    </div>
  )
}

export default TestimonialsSection