import React from 'react'

const Testimonial = ({ author, content }) => {
    return (
        <div className="testimonial-1 bg-white px-4 py-2 flex flex-col gap-1 rounded-lg w-44 lg:aspect-square lg:w-52">
            <div className="name">
                <h1 className='text-base lg:text-lg font-bold'>{author}</h1>
                <hr className='bg-black h-[0.2rem] lg:h-1 rounded-full' />
            </div>
            <div className="review">
                <p className='text-base lg:text-lg'>{content}</p>
            </div>
        </div>
    )
}

export default Testimonial