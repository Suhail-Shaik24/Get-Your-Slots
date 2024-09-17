import React from 'react'
import { Navbar, ContactUs} from '../components'
import { ThankYouIcon } from '../assets'

const SuccessVisaSlotBooking = () => {
    return (
        <div className="p-4 md:p-5 lg:p-12 flex flex-col gap-3">
          <Navbar />
          <div className='flex flex-col items-center justify-center h-full font-[Open_Sans]'>
    
            <div className="form-container w-full bg-[#A3663C] h-72 p-3 lg:p-5 rounded-md flex flex-col gap-4">
              <h1 className='text-xl lg:text-2xl text-white font-bold font-["Open_Sans"]'> Real Time Alerts </h1>
            </div>
    
            <div className="Thank-You-Page -mt-60 lg:-mt-56 w-[96%] p-6 lg:p-12 lg:px-20 bg-white rounded-lg lg:rounded-xl border-2 border-[#a3663c] flex flex-col gap-6 lg:gap-8">
              <img className="aspect-square h-24 lg:h-40" src={ThankYouIcon} alt="Thank You" />
              <div className="thank-you-text flex flex-col gap-1 lg:gap-3">
                <h1 className="text-xl lg:text-5xl text-center">Thank You</h1>
                <h3 className="text-base lg:text-xl text-center"> Your Form has been Submitted</h3>
              </div>
    
              {/* Contact Us */}
              <hr className='bg-[#a3663c] rounded-full h-[0.125rem]' />
              <ContactUs />
            </div>
          </div>
        </div>
      )
    }
    

export default SuccessVisaSlotBooking