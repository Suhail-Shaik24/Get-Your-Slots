import React from 'react'
import { Testimonial } from "../components"
import '../css/scroll-bar.css';

const TestimonialsSection = () => {
  return (
    <div className='p-3 md:p-5 lg:px-12 lg:py-6 flex flex-col gap-3 '>
      <div className="heading font-['Times_New_Roman'] ">
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#3A4740] font-bold'>Testimonials</h1>
        <hr className='bg-[#3A4740] h-1 rounded-full w-3/4' />
      </div>
      <div className="testimonial-super-container overflow-x-auto flex gap-3 rounded-lg scrollbar-hide">
        <div className="testimonials-container h-64 lg:h-72 w-11/12 bg-[#a3663c] text-white font-semibold text-xl flex p-3 lg:p-4 gap-3 rounded-lg absolute left-1/2 transform -translate-x-1/2 "> What People Say</div>
        <div className="containers flex gap-4 py-[0.6rem] mt-10 z-10 animate-scroll rounded-lg">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection