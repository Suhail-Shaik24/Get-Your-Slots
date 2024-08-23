import React from 'react'
import { TechnicalSupport, Calender } from "../assets";

const Provisions2 = () => {
  return (
    <div className="provisions flex flex-col gap-2">
      <ul className='flex flex-col gap-2'>

        <li className='flex flex-col gap-2'>
          <div className="text flex gap-2 items-center">
            <img className='clock w-5' src={Calender} alt="clock" />
            <p className='text-sm text-black'>VISA Slot booking</p>
          </div>
          <hr className='bg-[#a3663c]' />
        </li>

        <li className='flex flex-col gap-2'>
          <div className="text flex gap-2 items-center">
            <img className='clock w-5' src={TechnicalSupport} alt="clock" />
            <p className='text-sm text-black'> Receive Telegram Alerts </p>
          </div>
          <hr className='bg-[#a3663c]' />
        </li>

      </ul>
    </div>
  )
}

export default Provisions2