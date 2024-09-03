import React from 'react'
import { Clock, Telegram, WhatsApp, TechnicalSupport } from '../assets'

const Provisions1 = () => {
  return (
    <div className="provisions flex flex-col gap-1 lg:gap-2">

      <ul className='flex flex-col gap-1 lg:gap-2'>

        <li className='flex flex-col gap-[2px] lg:gap-2'>
          <div className="text flex gap-[6px] lg:gap-2 items-center">
            <img className='clock w-4 lg:w-5' src={Clock} alt="clock" />
            <p className='text-[10px] lg:text-sm text-black'>Real Time Slot Information</p>
          </div>
          <hr className='bg-[#a3663c]' />
        </li>

        <li className='flex flex-col gap-[2px] lg:gap-2'>
          <div className="text flex gap-[6px] lg:gap-2 items-center">
            <img className='telegram w-4 lg:w-5' src={Telegram} alt="clock" />
            <p className='text-[10px] lg:text-sm text-black'> Receive Telegram Alerts </p>
          </div>
          <hr className='bg-[#a3663c]' />
        </li>

        <li className='flex flex-col gap-[2px] lg:gap-2'>
          <div className="text flex gap-[6px] lg:gap-2 items-center">
            <img className='whatsapp w-4 lg:w-5' src={WhatsApp} alt="clock" />
            <p className='text-[10px] lg:text-sm text-black'> Receive WhatsApp Alerts </p>
          </div>
          <hr className='bg-[#a3663c]' />
        </li>

        <li className='flex flex-col gap-[2px] lg:gap-2'>
          <div className="text flex gap-[6px] lg:gap-2 items-center">
            <img className='technicalSupport w-4 lg:w-5' src={TechnicalSupport} alt="clock" />
            <p className='text-[10px] lg:text-sm text-black'> Technical Support </p>
          </div>
          <hr className='bg-[#a3663c]' />
        </li>

      </ul>
    </div>
  )
}

export default Provisions1