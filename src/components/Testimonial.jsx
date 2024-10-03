import React from 'react'

const Testimonial = ({ author, content }) => {
    return (
        <div className="flex flex-col gap-1 px-4 py-2 bg-white rounded-lg testimonial-1 w-44 lg:aspect-square lg:w-52">
            <div className="name">
                <h1 className='text-base font-bold lg:text-lg'>{author}</h1>
                <hr className='bg-black h-[0.2rem] lg:h-1 rounded-full' />
            </div>
            <div className="review">
                <p className='text-base lg:text-lg'>{content}</p>
            </div>
        </div>
    )
}

export default Testimonial