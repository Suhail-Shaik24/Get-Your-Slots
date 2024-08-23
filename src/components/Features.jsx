import React from 'react'
import { RealTimeAlertsSVG, VisaBooking, ArrowBlack } from '../assets';

const Features = () => {
  return (
    <div className='px-12 flex flex-col gap-3 '>
      <div className="heading font-['Times_New_Roman'] ">
        <h1 className='text-4xl text-[#3A4740] font-bold'>Features</h1>
        <hr className='bg-[#3A4740] h-1 rounded-full w-[70%]' />
      </div>
      <div className="features flex flex-col gap-4">
        <div className="feature1 h-72 bg-[#a3663c] bg-[url('assets/featuresBg.png')] bg-no-repeat bg-right text-white rounded-lg p-4 flex justify-between ">
          <div className="left flex flex-col gap-3 w-[50%] justify-around">
            <div className="featureHeading">
              <h1 className='text-4xl font-bold'>Real Time Alerts</h1>
              <h3 className='text-xl font-semibold'>Your Gateway to Secure Slots</h3>
            </div>
            <div className="featureContent">
              <p>Never miss out on a visa slot again! With our Real-Time Alerts, you'll get quick notifications as soon as new slots are available. It's like having a personal assistant to keep you informed and help you book your slot quickly and easily.</p>
            </div>
            <button className='bg-white w-40 border border-white text-black text-sm font-semibold font-["Open_Sans"] py-2 px-5 rounded-md flex gap-2 items-center' type="button">
              Get Started
              <img className='w-5 ' src={ArrowBlack} alt="Arrow" />
            </button>
          </div>
          <div className="right items-center justify-center flex w-[50%]">
            <img className='w-[20rem] object-contain' src={RealTimeAlertsSVG} alt="Real Time Alerts" />
          </div>
        </div>

        <div className="feature2 h-72 bg-[#a3663c] bg-[url('assets/featuresBg2.png')] bg-no-repeat bg-left text-white rounded-lg p-4 flex justify-between ">
          <div className="left right items-center justify-center flex w-[50%] ">
            <img className='w-[20rem] object-contain' src={VisaBooking} alt="VisaBooking" />
          </div>
          <div className="right flex flex-col gap-3 w-[50%] justify-around text-right items-end">
            <div className="featureHeading">
              <h1 className='text-4xl font-bold'> VISA Booking </h1>
              <h3 className='text-xl font-semibold'> Start Your Visa Process Today </h3>
            </div>
            <div className="featureContent">
              <p> Make booking your visa simple with our easy-to-use platform. Whether you're applying for work, study, or travel, our service helps you every step of the way. Enjoy a smooth booking experience with clear instructions and reliable support, so you can focus on your journey </p>
            </div>
            <button className='bg-white w-40 border border-white text-black text-sm font-semibold font-["Open_Sans"] py-2 px-5 rounded-md flex gap-2 items-center' type="button">
              Get Started
              <img className='w-5' src={ArrowBlack} alt="Arrow" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features