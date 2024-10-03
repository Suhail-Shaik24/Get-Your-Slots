import React from 'react'
import {ClockWhite, TelegramWhite, WhatsAppWhite, TechnicalSupportWhite } from '../assets'


const ProvisionItem = ({ icon, alt, text1, text2 }) => (
  <div className='grid grid-col-2 gap-2 font-["Open_Sans"] lg:gap-2'>
    <div className="flex flex-col items-center gap-2 text-center">
      <img className='w-4 lg:w-5' src={icon} alt={alt} />
      <p className='text-xs text-white lg:text-sm'>{text1} <br /> {text2}</p>
    </div>
  </div>
);

const Provisions1 = () => {
  const provisions = [
    { id: 1, icon: ClockWhite, alt: "Clock", text1: "Get Real Time", text2:"Slot Information" },
    { id: 2, icon: TechnicalSupportWhite, alt: "TechnicalSupport", text1: "Technical Support", text2:"" },
    { id: 3, icon: TelegramWhite, altText: "Telegram", text1: "Receive", text2:"Telegram Alerts" },
    { id: 4, icon: WhatsAppWhite, alt: "WhatsApp", text1: "Receive", text2:"WhatsApp Alerts" },
  ]
  return (
    <div id="Provisions1" className='flex flex-col items-center gap-6 p-4 bg-radial-gradient rounded-xl w-fit'>
      <p className='text-lg lg:text-xl font-bold text-white font-["Open_Sans"]'>Benefits</p>
      <div className="grid grid-cols-2 provisions lg:gap-6">
        {provisions.map((item, index) => (
          <ProvisionItem key={index} icon={item.icon} alt={item.alt} text1={item.text1} text2={item.text2} />
        ))}
      </div>
    </div>
  )
}

export default Provisions1

