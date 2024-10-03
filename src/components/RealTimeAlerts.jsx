import React from 'react'
import { RealTimePlans } from "../components";


const RealTimeAlerts = () => {

  return (
    <div id='Real-Time-Alerts' className="flex flex-col gap-2 p-3 rounded-xl bg-radial-gradient lg:gap-6 lg:px-8 lg:py-6 lg:rounded-3xl">
      <div id='heading' className="flex flex-col items-center gap-[2px] lg:gap-1">
        <h1 className='text-lg font-bold text-center text-white font-["Poppins"] lg:text-4xl'> Real Time Alerts</h1>
        <p className="text-center text-white text-sm lg:text-base font-medium font-['Poppins'] capitalize lg:tracking-wider">Never miss out on a visa slot again! </p>
      </div>
      <RealTimePlans />
    </div>
  )
}

export default RealTimeAlerts