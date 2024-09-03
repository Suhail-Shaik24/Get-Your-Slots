import React, { useState } from 'react'
import Testimonial from './Testimonial';

const TestimonialsArray = () => {

    const [testimonialsArray, setTestimonialsArray] = useState([]);
  return (
    <div>
        {testimonialsArray.map((testimonials, index) =>(
            <Testimonial/>
        ))}
    </div>
  )
}

export default TestimonialsArray