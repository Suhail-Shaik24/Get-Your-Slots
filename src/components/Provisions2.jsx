import React from 'react'
import { TechnicalSupport, Calender } from "../assets";

const Provisions2 = () => {
  return (
    <div className="provisions flex flex-col gap-1 lg:gap-2">
      <ul className='flex flex-col gap-1 lg:gap-2'>

        <li className='flex flex-col gap-[2px] lg:gap-2'>
          <div className="text flex gap-[6px] lg:gap-2 items-center">
            <img className='calender w-4 lg:w-5' src={Calender} alt="clock" />
            <p className='text-[10px] lg:text-sm text-black'>VISA Slot booking</p>
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

export default Provisions2