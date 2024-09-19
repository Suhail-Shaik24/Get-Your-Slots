import React from 'react'
import { FresherRealTimeAlerts, RejectedVISARealTimeAlerts } from "../components";
// import "../css/RealTime.css"


const RealTimeAlerts = () => {

  return (
    <div className="Real-Time-Alerts bg-[#a3663c] flex flex-col gap-2 p-3 lg:gap-6 lg:px-8 lg:py-6 rounded lg:rounded-lg">
      <div className="heading flex flex-col gap-1">
        <h1 className='text-xl lg:text-3xl text-white font-bold'> Real Time Alerts</h1>
        <hr className='bg-white h-[0.125rem] rounded-full w-3/4' />
      </div>
      <FresherRealTimeAlerts />
      <RejectedVISARealTimeAlerts />
    </div>
  )
}

export default RealTimeAlerts