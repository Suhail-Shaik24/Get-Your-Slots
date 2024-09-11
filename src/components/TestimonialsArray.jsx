import React, { useState } from 'react'
import { Testimonial } from '../components';

const TestimonialsArray = () => {

  // const [testimonialsArray, setTestimonialsArray] = useState([]);
  const [testimonialsArray] = useState([
    { id: 1, author: "Shanmukh", content: "It is very beneficial to all the students to book the slots by self instead going for fraud agents. Thank's a lot." },
    { id: 2, author: "Armaan", content: "This is very useful for all of us who wait for hours to book their slots. Thank you." },
    { id: 3, author: "Atharva", content: "One of the genuine service provider for all the visa information." },
    { id: 4, author: "Nagaraju", content: "It is a great place for finding visa slots. It helped me a lot." },
    { id: 5, author: "Vivek", content: "So useful and since it was not delayed alerts. It was very much helpful and informative." },
    { id: 6, author: "Shanmukh", content: "It is very beneficial to all the students to book the slots by self instead going for fraud agents. Thank's a lot." },
    { id: 7, author: "Armaan", content: "This is very useful for all of us who wait for hours to book their slots. Thank you." },
    { id: 8, author: "Atharva", content: "One of the genuine service provider for all the visa information." },
    { id: 9, author: "Nagaraju", content: "It is a great place for finding visa slots. It helped me a lot." },
    { id: 10, author: "Vivek", content: "So useful and since it was not delayed alerts. It was very much helpful and informative." },
    { id: 11, author: "Atharva", content: "One of the genuine service provider for all the visa information." },
  ])
  return (
    <>
      <div className="containers flex gap-4 py-[0.6rem] mt-11 z-10 overscroll-none animate-scroll rounded-lg">
        {testimonialsArray.map((testimonial, index) => (
          <Testimonial key={index} author={testimonial.author} content={testimonial.content} />
        ))}
      </div>
    </>
  )
}

export default TestimonialsArray