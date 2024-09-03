import React from 'react'
import { HeroImage, ArrowBlack, ArrowWhite } from '../assets'
import { Navbar } from '../components'

const TopPart = () => {
    return (
        <div className="p-4 bg-[url('assets/Small-Rectangle.png')] md:p-8 lg:p-12 lg:bg-[url('assets/heroBg.png')] md:bg-[url('assets/heroBg.png')] bg-right-top bg-no-repeat bg-cover">
            <Navbar />

            <div className="heroSec h-60 lg:h-96 flex justify-between items-center">

                <div className="left font-['Times_New_Roman'] flex flex-col gap-4 lg:gap-8 lg:w-[50%]lg:mt-20">
                    <div className="content flex flex-col gap-1 lg:gap-3">

                        <p className="text-[#a3663c] text-[10px] sml:text-base md:text-base lg:text-lg font-normal">Expert in Handling F1 and B1/B2 VISA</p>

                        <h1 className='text-[#3a4740] text-2xl font-bold sml:text-3xl md:text-5xl md:w-full lg:text-6xl lg:w-full '>Start Your <br /> <span className='text-[#a3663c]'> American </span>Dream</h1>

                        <h4 className='text-[10px] max-w-96 sml:text-sm md:text-base lg:text-lg lg:leading-6'>Start your VISA journey with <strong className="text-[#a3663c]">GET YOUR SLOTS </strong> with seamless appointment manage and Real Time Alerts.</h4>

                    </div>
                    <div className="buttons flex gap-1 md:gap-2 lg:gap-3">
                        <button className='bg-[#A3663C] w-3/5 border text-white text-[10px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-sm sml:p-2 sml:px-3 md:text-sm md:p-2 md:px-3 md:rounded-md lg:text-sm lg:p-2 lg:px-5 lg:rounded-md' type="button">
                            <p>Get Started</p>
                            <img className='w-2 md:w-4 lg:w-5' src={ArrowWhite} alt="Arrow" />
                        </button>
                        <button className='bg-white w-3/5 border border-[#A3663C] text-black text-[10px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-sm sml:p-2 sml:px-3 md:text-sm md:p-2 md:px-3 md:rounded-md lg:text-sm lg:p-2 lg:px-5 lg:rounded-md' type="button">
                            <p>Learn More</p>
                            <img className='w-2 md:w-4 lg:w-5' src={ArrowBlack} alt="Arrow" />
                        </button>
                    </div>
                </div>
                <img className="right w-36 h-36 aspect-square  md:w-80 md:h-80 lg:mr-32 lg:w-[400px] lg:h-[400px] sml:h-52 sml:w-52 " src={HeroImage} alt='USA Map' />
            </div>

        </div>
    )
}

export default TopPart
