import React from 'react'
import { Provisions1 } from "../components";


const RealTimeAlerts = () => {
  return (
    <div className="Real-Time-Alerts bg-[#a3663c] flex flex-col gap-6 px-8 py-6 rounded-lg">
      <div className="heading">
        <h1 className='text-3xl text-white font-semibold'>Real Time Alerts</h1>
        <hr className='bg-white h-[0.125rem] rounded-full w-[50%]' />
      </div>
      <div className="Real-time-Plans flex gap-8 justify-center">

        <div className="plan1 bg-white p-6 rounded-md flex flex-col gap-8 items-center">
          <h1 className="font-['Open_Sans'] text-2xl font-bold text-center">Real Time Alerts- <br /> F1 Visa</h1>
          <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-4xl font-bold text-center">₹899 <span className='text-black text-lg'>/30days</span></h1>
          <div className='w-full'>
            <Provisions1 />
          </div>
          <button className='bg-[#A3663C] text-white text-center text-sm font-semibold font-["Open_Sans"] px-5 py-3 rounded-md flex gap-2 items-center' type="button">
            <p>Get Started</p>
          </button>
        </div>

        <div className="plan2 bg-white p-6 rounded-md flex flex-col gap-8 items-center">
          <h1 className="font-['Open_Sans'] text-2xl font-bold text-center">Real Time Alerts- <br /> F1 Visa</h1>
          <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-4xl font-bold text-center">₹1099 <span className='text-black text-lg'>/40 days</span></h1>
          <div className='w-full '>
            <Provisions1 />
          </div>
          <button className='bg-[#A3663C] text-white text-center text-sm font-semibold font-["Open_Sans"] px-5 py-3 rounded-md flex gap-2 items-center' type="button">
            <p>Get Started</p>
          </button>
        </div>

        <div className="plan3 bg-white p-6 rounded-md flex flex-col gap-8 items-center">
          <h1 className="font-['Open_Sans'] text-2xl font-bold text-center">Real Time Alerts- <br /> B1/B2 Visa</h1>
          <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-4xl font-bold text-center">₹1999 <span className='text-black text-lg'>/30 days</span></h1>
          <div className='w-full'>
            <Provisions1 />
          </div>
          <button className='bg-[#A3663C] text-white text-center text-sm font-semibold font-["Open_Sans"] px-5 py-3 rounded-md flex gap-2 items-center' type="button">
            <p>Get Started</p>
          </button>
        </div>

        <div className="plan4 bg-white p-6 rounded-md flex flex-col gap-8 items-center">
          <h1 className="font-['Open_Sans'] text-2xl font-bold text-center">Real Time Alerts- <br /> B1/B2 Visa</h1>
          <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-4xl font-bold text-center">₹2399 <span className='text-black text-lg'>/40days</span></h1>
          <div className='w-full'>
            <Provisions1 />
          </div>
          <button className='bg-[#A3663C] text-white text-center text-sm font-semibold font-["Open_Sans"] px-5 py-3 rounded-md flex gap-2 items-center' type="button">
            <p>Get Started</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RealTimeAlerts