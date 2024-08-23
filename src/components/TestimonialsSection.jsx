import React from 'react'
import { Testimonial } from "../components"
import '../css/scroll-bar.css';

const TestimonialsSection = () => {
  return (
    <div className='px-12 py-6 flex flex-col gap-3 '>
      <div className="heading font-['Times_New_Roman'] ">
        <h1 className='text-4xl text-[#3A4740] font-semibold'>Testimonials</h1>
        <hr className='bg-[#3A4740] h-1 rounded-full w-[70%]' />
      </div>
      <div className="testimonial-super-container overflow-x-auto flex gap-3 rounded-lg scrollbar-hide">
        <div className="testimonials-container h-60 w-[85%] bg-[#a3663c] flex p-4 gap-3 rounded-lg absolute left-1/2 transform -translate-x-1/2 "> What People Say</div>
        <div className="containers flex gap-4 py-[0.6rem] z-10 animate-scroll rounded-lg">
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