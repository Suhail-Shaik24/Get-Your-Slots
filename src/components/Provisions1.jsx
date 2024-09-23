import React from 'react'
import { Clock, Telegram, WhatsApp, TechnicalSupport } from '../assets'

const ProvisionItem = ({ icon, alt, text }) => (
  <li className='flex flex-col gap-[2px] lg:gap-2'>
    <div className="text flex gap-[6px] lg:gap-2 items-center">
      <img className='w-4 lg:w-5' src={icon} alt={alt} />
      <p className='text-[8px] lg:text-sm text-black'>{text}</p>
    </div>
    <hr className='bg-[#a3663c]' />
  </li>
);

const Provisions1 = () => {
  const provisions = [
    { id: 1, icon: Clock, alt: "Clock", text: "Real Time Slot Information" },
    { id: 2, icon: Telegram, altText: "Telegram", text: "Receive Telegram Alerts" },
    { id: 3, icon: WhatsApp, alt: "WhatsApp", text: "Receive WhatsApp Alerts" },
    { id: 4, icon: TechnicalSupport, alt: "TechnicalSupport", text: "Technical Support" }
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

export default Provisions1

