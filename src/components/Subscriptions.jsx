import React from 'react'
import { RealTimeAlerts, VisaSlots } from "../components";

const Subscriptions = () => {
    return (
        <div className='p-3 md:p-5 lg:px-12 lg:py-6 flex flex-col gap-3 '>
            <div className="heading font-['Times_New_Roman'] ">
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#3A4740] font-bold'>Subscription Plans</h1>
                <hr className='bg-[#3A4740] h-1 rounded-full w-[70%]' />
            </div>
            <div className="plans flex flex-col gap-3">
                <RealTimeAlerts />
                <VisaSlots />
            </div>
        </div>
    )
}

export default Subscriptions