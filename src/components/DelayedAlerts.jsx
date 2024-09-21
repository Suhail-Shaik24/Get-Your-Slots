import React from 'react'
import { Telegram2 } from '../assets'

const DelayedAlerts = () => {
    return (
        <div className="p-4 lg:px-12">
            <div className="telegram-group flex flex-col gap-3 bg-slate-100 border border-[#a3663c] sml:p-4 md:p-4 lg:p-4 rounded lg:rounded-lg p-3 bg-[slate-100]">
                <div className="heading font-['Times_New_Roman'] flex flex-col gap-1">
                    <h3 className='text-xl lg:text-2xl text-[#3A4740] font-bold'>Delayed Alerts </h3>
                    <hr className='bg-[#3A4740] h-1 rounded-full w-[70%]' />
                </div>

                <p className=" text-sm lg:text-base"> Join our Telegram group to receive Visa Slot Updates — stay informed by becoming a part of our community! </p>
                <a
                    href="https://t.me/getyourslots_USAVISAupdates"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button
                        className=' w-fit border bg-blue-600 text-white text-[12px] p-2 font-semibold font-["Open_Sans"] rounded-lg flex gap-2 justify-center items-center sml:text-sm sml:p-2 sml:px-3 md:text-sm md:p-2 md:px-3 md:rounded-md lg:text-base lg:p-3 lg:px-5 lg:rounded-md'
                        type="button"
                    >
                        <img className='w-7 lg:w-10 bg-white rounded-full' src={Telegram2} />
                        <p>Join Telegram</p>
                    </button>

                </a>
            </div>
        </div >
    )
}

export default DelayedAlerts