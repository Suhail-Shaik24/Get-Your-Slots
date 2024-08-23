import React from 'react'
import { HeroImage, ArrowBlack, ArrowWhite } from '../assets'
import { Navbar } from '../components'

const TopPart = () => {
    return (
        <div className="px-12 p-6 bg-[url('assets/heroBg.png')] bg-no-repeat bg-right">
            <Navbar/>

            <div className="heroSec h-96 flex flex-row-reverse justify-between">

                <img className="right aspect-square mr-48" src={HeroImage} alt='USA Map' />
                <div className="left w-[50%] font-['Times_New_Roman'] mt-20 flex flex-col gap-8">
                    <div className="content flex flex-col gap-3">
                        <p className="text-[#a3663c] text-lg font-normal">Expert in Handling F1 and B1/B2 VISA</p>
                        <h1 className='text-[#3a4740] text-6xl font-bold'>Start Your <br /> <span className='text-[#a3663c]'> American </span> Dream</h1>
                        <h4 className='text-lg leading-6'>Start your VISA journey with <strong className="text-[#a3663c]">GET YOUR SLOTS </strong>with seamless appointment manage and Real Time Alerts.</h4>
                    </div>
                    <div className="buttons flex gap-4">
                        <button className='bg-[#A3663C] text-white text-sm font-semibold font-["Open_Sans"] p-2 px-5 rounded-md flex gap-2 items-center' type="button">
                            Get Started
                            <img className='w-5 ' src={ArrowWhite} alt="Arrow" />
                        </button>
                        <button className='bg-white border border-[#A3663C] text-black text-sm font-semibold font-["Open_Sans"] p-2 px-5 rounded-md flex gap-2 items-center' type="button">
                            Learn more
                            <img className='w-5 ' src={ArrowBlack} alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPart