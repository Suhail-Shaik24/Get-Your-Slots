import React from 'react'
import { RealTimeAlertsSVG, VisaBooking, ArrowBlack } from '../assets';

const Features = () => {
  return (
    <div className='p-4 md:p-5 lg:p-12 flex flex-col gap-3 '>
      <div className="heading font-['Times_New_Roman'] ">
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#3A4740] font-bold'>Features</h1>
        <hr className='bg-[#3A4740] h-1 rounded-full w-[70%]' />
      </div>
      <div className="features flex flex-col gap-4">

        <div className="feature1 h-auto p-2 bg-[#a3663c] lg:bg-[url('assets/featuresBg.png')] bg-no-repeat bg-right text-white sml:p-4 md:p-4 lg:p-4 rounded lg:rounded-lg flex">

          <div className="left flex flex-col gap-3 lg:w-2/4 lg:justify-around">
            <div className="featureHeading">
              <h1 className='text-xl sml:text-2xl md:text-2xl lg:text-4xl font-bold'>Real Time Alerts</h1>
              <h3 className='text-xs sml:text-lg md:text-lg lg:text-xl font-semibold'>Your Gateway to Secure Slots</h3>
            </div>
            <div className="feature1Content text-[8px] w-11/12 sml:w-9/12 sml:text-sm md:w-9/12 md:text-sm lg:w-full lg:text-base">
              <p>Never miss out on a visa slot again! With our Real-Time Alerts, you'll get quick notifications as soon as new slots are available. It's like having a personal assistant to keep you informed and help you book your slot quickly and easily.</p>
            </div>
            <button className='bg-white w-3/5 border border-[#A3663C] text-black text-[10px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-sm sml:p-2 sml:px-3 sml:rounded-md md:text-sm md:p-2 md:px-3 md:rounded-md lg:text-sm lg:p-3 lg:px-5 lg:rounded-md' type="button">
              <p>Get Started</p>
              <img className='w-2 sml:w-4 md:w-4 lg:w-5' src={ArrowBlack} alt="Arrow" />
            </button>
          </div>

          <div className="right flex items-center justify-center lg:w-2/4">
            <img className='w-[40rem] lg:w-80 object-contain' src={RealTimeAlertsSVG} alt="Real Time Alerts" />
          </div>
        </div>

        <div className="feature2 h-auto p-2 bg-[#a3663c] lg:bg-[url('assets/featuresBg2.png')] bg-no-repeat bg-left text-white sml:p-4 md:p-4 lg:p-4 rounded lg:rounded-lg flex">

          <div className="left flex items-center justify-center lg:w-2/4 ">
            <img className='sml:w-[40rem] md:w-[40rem] lg:h-52 lg:w-80 object-contain' src={VisaBooking} alt="VisaBooking" />
          </div>

          <div className="right text-right flex flex-col gap-2 sml:gap-4 md:gap-4 lg:gap-8 items-end lg:w-2/4">
            <div className="featureHeading">
              <h1 className='text-xl sml:text-2xl md:text-2xl lg:text-4xl font-bold'> VISA Booking </h1>
              <h3 className='text-xs sml:text-lg md:text-lg lg:text-xl font-semibold'> Start Your Visa Process Today </h3>
            </div>
            <div className="feature2Content text-[8px] w-11/12 sml:w-9/12 sml:text-sm md:w-9/12 md:text-sm lg:w-full lg:text-base">
              <p> Make booking your visa simple with our easy-to-use platform. Whether you're applying for work, study, or travel, our service helps you every step of the way. Enjoy a smooth booking experience with clear instructions and reliable support, so you can focus on your journey </p>
            </div>
            <button className='bg-white w-3/5 border border-[#A3663C] text-black text-[10px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-sm sml:p-2 sml:px-3 sml:rounded-md md:text-sm md:p-2 md:px-3 md:rounded-md lg:text-sm lg:p-3 lg:px-5 lg:rounded-md' type="button">
              <p>Get Started</p>
              <img className='w-2 sml:w-4 md:w-4 lg:w-5' src={ArrowBlack} alt="Arrow" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features