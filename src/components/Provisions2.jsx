import React from 'react'
import { TechnicalSupportWhite, CalenderWhite } from "../assets";

const ProvisionItem = ({ icon, alt, text1, text2 }) => (
  <div className='grid grid-col-2 gap-[2px] font-["Open_Sans"] lg:gap-2'>
    <div className="text flex flex-col gap-[6px] lg:gap-2 text-center items-center">
      <img className='w-4 lg:w-10' src={icon} alt={alt} />
      <p className='text-xs text-white lg:text-sm'>{text1} <br /> {text2}</p>
    </div>
  </div>
);


const Provisions2 = () => {
  const provisions = [
    { id: 1, icon: CalenderWhite, alt: "Calender", text1: "Easy Visa", text2: "Slot booking" },
    { id: 2, icon: TechnicalSupportWhite, alt: "TechnicalSupport", text1: "Technical Support", text2: "" }
  ]
  return (
    <div id="Provisions1" className='flex flex-col items-center gap-6 p-4 bg-radial-gradient rounded-xl'>
      <p className='text-lg lg:text-xl font-bold text-white font-["Open_Sans"]'>Benefits</p>
      <div className="grid grid-cols-2 provisions lg:gap-6">
        {provisions.map((item, index) => (
          <ProvisionItem key={index} icon={item.icon} alt={item.alt} text1={item.text1} text2={item.text2} />
        ))}
      </div>
    </div>
  )
}

export default Provisions2