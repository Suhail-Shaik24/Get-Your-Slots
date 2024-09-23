import React from 'react'
import { HeroImage, ArrowBlack, ArrowWhite } from '../assets'
import { Navbar } from '../components'


const TopPart = ({scrollToFeatures, scrollToSubscriptions}) => {
    

    return (
        <div className="top-part p-4 bg-[url('assets/heroBg.png')] bg-right-top bg-no-repeat bg-cover md:p-5 lg:p-12 lg:bg-[url('assets/heroBg.png')] md:bg-[url('assets/heroBg.png')] ">
            <Navbar />

            <div className="heroSec h-96 bg-[url('assets/filteredHeroImage.png')] lg:bg-none md:bg-none bg-center bg-no-repeat flex justify-center lg:justify-between items-center">

                <div className="left font-['Times_New_Roman'] flex flex-col gap-6 lg:gap-8 lg:w-[50%] lg:mt-20">
                    <div className="content flex flex-col gap-1 lg:gap-3">

                        <p className="text-[#a3663c] text-[12px] text-center md:text-left lg:text-left sml:text-base md:text-base lg:text-lg font-normal">Expert in Handling F1 and B1/B2 VISA</p>

                        <h1 className='text-[#3a4740] text-3xl text-center md:text-left lg:text-left font-bold sml:text-3xl md:text-5xl md:w-full lg:text-6xl lg:w-full '>Start Your <br /> <span className='text-[#a3663c]'> American </span>Dream</h1>

                        <h4 className='text-[12px] text-center md:text-left lg:text-left sml:text-sm md:text-base lg:text-base lg:leading-6'>Start your VISA journey with <strong className="text-[#a3663c]">GET YOUR SLOTS </strong> with Seamless Appointment management and Real Time Alerts.</h4>

                    </div>
                    <div className="buttons flex gap-1 md:gap-2 lg:gap-3">
                        <button 
                            className='bg-[#A3663C] w-3/5 text-white text-[12px] p-2 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-sm sml:p-2 sml:px-3 md:text-sm md:p-2 md:px-3 md:rounded-md lg:text-base lg:p-3 lg:px-5 lg:rounded-md' 
                            type="button"
                            onClick={scrollToSubscriptions}>
                            <p>Get Started</p>
                            <img className='w-3 md:w-4 lg:w-5' src={ArrowWhite} alt="Arrow" />
                        </button>
                        <button 
                            className='bg-white w-3/5 border border-[#A3663C] text-black text-[12px] p-2 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-sm sml:p-2 sml:px-3 md:text-sm md:p-2 md:px-3 md:rounded-md lg:text-base lg:p-3 lg:px-5 lg:rounded-md' 
                            type="button"
                            onClick={scrollToFeatures}>
                            <p>Explore</p>
                            <img className='w-3 md:w-4 lg:w-5' src={ArrowBlack} alt="Arrow" />
                        </button>
                    </div>
                </div>
                <img className="right w-36 h-36 aspect-square hidden md:w-80 md:h-80 md:inline lg:mr-32 lg:w-[400px] lg:inline lg:h-[400px] sml:h-52 sml:w-52 " src={HeroImage} alt='USA Map' />
            </div>

        </div>
    )
}

export default TopPart
