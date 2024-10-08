import React, { forwardRef } from 'react'
import { RealTimeAlerts, VisaSlots } from "../components";

const Subscriptions = forwardRef(({ realTimeAlertsRef, VisaSlotBookingRef }, ref) => {
    return (
        <div
            className='flex flex-col gap-3 p-4 md:p-5 lg:p-12 lg:py-6'
            ref={ref}
        >
            {/* <div className="heading font-['Times_New_Roman'] ">
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#3A4740] font-bold'>Subscription Plans</h1>
                <hr className='bg-[#3A4740] h-1 rounded-full w-[70%]' />
            </div> */}
            <div className="flex flex-col gap-3 plans">
                <div className="realTimeAlerts" ref={realTimeAlertsRef}>
                    <RealTimeAlerts />
                </div>
                <div className="VisaSlotBooking" ref={VisaSlotBookingRef}>
                    <VisaSlots />
                </div>
            </div>
        </div>
    )
})

export default Subscriptions