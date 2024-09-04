import React from 'react'
import { Navbar } from '../components'
import { ArrowWhite } from '../assets';
import { ContactUs } from '../components'
import '../css/Form.css';


const FormVisaSlot = () => {
  return (
    <div className="p-4 md:p-5 lg:p-12 flex flex-col gap-3">
      <Navbar />

      <div className='flex flex-col items-center justify-center h-full font-[Open_Sans]'>

        <div className="form-container w-full bg-[#A3663C] h-72 p-3 lg:p-5 rounded-md flex flex-col gap-4">
          <h1 className='text-xl lg:text-2xl text-white font-bold font-["Open_Sans"]'>VISA Slot Booking</h1>
        </div>

        <div className="form-super-container -mt-60 lg:-mt-56 w-[96%] p-6 lg:p-12 lg:px-20 bg-white rounded-lg lg:rounded-xl border-2 border-[#a3663c] flex flex-col gap-6 lg:gap-8">

          <form className='form flex flex-col gap-4 md:gap-6 lg:gap-8' action="/" method="POST">

            <div className="names grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2 justify-between w-full">
              <div className="firstName flex flex-col gap-3">
                <label className='text-base lg:text-lg font-semibold'> First Name: </label>
                <input className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10' type="text" name='First Name' placeholder='First Name' required />
              </div>
              <div className="lastName flex flex-col gap-3">
                <label className='text-base lg:text-lg font-semibold'> Last Name: </label>
                <input className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10' type="text" name='Last Name' placeholder='Last Name' required />
              </div>
            </div>

            <div className="contact grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2 justify-between w-full">
              <div className="phone-number flex flex-col gap-3">
                <label className='text-base lg:text-lg font-semibold' > Phone Number (WhatsApp): </label>
                <input className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10' type="tel" name='Phone Number' placeholder="Phone Number" pattern="[0-9]{10}" required />
              </div>
              <div className="email flex flex-col gap-3">
                <label className='text-base lg:text-lg font-semibold' > Email: </label>
                <input className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10' type="email" name='Email' placeholder='Email' />
              </div>
            </div>

            {/* Visa Type and Appointment Selection */}
            <div className="visa-type-details grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2 justify-between w-full">
              {/* VISA Type Selection */}
              <div className="visa-type flex flex-col gap-2">
                <div className="heading flex flex-col gap-1">
                  <h1 className='text-base lg:text-lg font-semibold'>VISA Type <span className='text-sm'>(Select One)</span>:</h1>
                  <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-3/4' />
                </div>
                <div className="option1 flex ">
                  <input className='radio-button' type="radio" id="F1-Visa" name="Visa-Type" value="F1-Visa" required />
                  <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="F1-Visa">F1 Visa</label>
                </div>
                <div className="option2 flex">
                  <input className='radio-button' type="radio" id="B1/B2-Visa" name="Visa-Type" value="B1/B2-Visa" required />
                  <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="B1/B2-Visa">B1/B2 Visa</label>
                </div>
              </div>
              {/* VISA Appointment Selection */}
              <div className="visa-appointment flex flex-col gap-2">
                <div className="heading flex flex-col gap-1">
                  <h1 className='text-base lg:text-lg font-semibold'>Appointment Type <span className='text-sm'>(Select One)</span>:</h1>
                  <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-11/12' />
                </div>
                <div className="option1 flex ">
                  <input className='radio-button' type="radio" id="Regular" name="visa-appointment" value="Regular" required />
                  <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="Regular"> Regular </label>
                </div>
                <div className="option2 flex">
                  <input className='radio-button' type="radio" id="Dropbox" name="visa-appointment" value="Dropbox" required />
                  <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="Dropbox">Dropbox</label>
                </div>
              </div>

            </div>

            {/* Subscription Plans Selection */}
            <div className="subscription-pricing grid grid-col-1 lg:grid-cols-2">
              <div className="visa-slot-booking-price flex flex-col gap-2">
                <div className="heading flex flex-col gap-1">
                  <h1 className='text-base lg:text-lg font-semibold'> Subscription Plans <span className='text-sm'>(Select One)</span>:</h1>
                  <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-11/12' />
                </div>
                <div className="option1 flex ">
                  <input className='radio-button' type="radio" id="plan-1" name="visa-slot-booking-price" value="plan-1" required />
                  <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="plan-1"> ₹9999 </label>
                </div>
                <div className="option2 flex">
                  <input className='radio-button' type="radio" id="plan-2" name="visa-slot-booking-price" value="plan-2" required />
                  <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="plan-2">₹14999</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" value="Proceed" className="submit-button flex bg-[#A3663C] text-lg lg:text-xl text-white w-fit font-semibold p-2 lg:p-3 px-5 lg:px-10 rounded-full gap-2 items-center hover:cursor-pointer">
              <p>Proceed</p>
              <img className='w-5 hover:cursor-pointer ' src={ArrowWhite} alt="Arrow" />
            </button>

          </form>
          {/* Contact Us */}
          <hr className='bg-[#a3663c] rounded-full h-[0.125rem]' />
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default FormVisaSlot