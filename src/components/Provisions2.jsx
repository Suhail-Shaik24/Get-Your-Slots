import React from 'react'
import { TechnicalSupport, Calender } from "../assets";

const ProvisionItem = ({ icon, alt, text }) => (
  <li className='flex flex-col gap-[2px] lg:gap-2'>
    <div className="text flex gap-[6px] lg:gap-2 items-center">
      <img className='w-4 lg:w-5' src={icon} alt={alt} />
      <p className='text-xs lg:text-sm text-black'>{text}</p>
    </div>
    <hr className='bg-[#a3663c]' />
  </li>
);

const Provisions2 = () => {
  const provisions = [
    { id: 1, icon: Calender, alt: "Calender", text: "VISA Slot booking" },
    { id: 2, icon: TechnicalSupport, alt: "TechnicalSupport", text: "Technical Support" }
  ]
  return (
    <div className="provisions flex flex-col gap-1 lg:gap-2">
      <ul className='flex flex-col gap-1 lg:gap-2'>

        {provisions.map((item, index) => (
          <ProvisionItem key={index} icon={item.icon} alt={item.alt} text={item.text} />
        ))}

      </ul>
    </div>
  )
}

export default Provisions2