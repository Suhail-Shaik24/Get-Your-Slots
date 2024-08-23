import React from 'react';
import { ArrowWhite, WhatsApp2, Telegram2, Gmail } from '../assets';
import '../css/Form.css';

const FormComponent = () => {
    return (
        <div className='flex flex-col items-center justify-center font-[Open_Sans]'>
            <div className="form-container w-full bg-[#A3663C] h-72 p-5 rounded-md flex flex-col gap-4">
                <h1 className='text-2xl text-white font-bold font-["Open_Sans"]'> VISA Slot Booking</h1>
            </div>
            <div className="form -mt-56 w-[96%] p-10 px-20 bg-white rounded-xl border-2 border-[#a3663c] flex flex-col gap-8">
                <form action="/" method="POST">
                    {/* Personal details Input Fields */}
                    <div className="personal-details flex flex-col gap-8">
                        <div className="names flex justify-between w-full">
                            <div className="firstName flex flex-col gap-3">
                                <label className='text-lg font-semibold'> First Name: </label>
                                <input className='border-2 border-[#a3663c] rounded-lg w-96 p-3 h-10' type="text" name='First Name' placeholder='First Name' required />
                            </div>
                            <div className="lastName flex flex-col gap-3">
                                <label className='text-lg font-semibold'> Last Name: </label>
                                <input className='border-2 border-[#a3663c] rounded-lg w-96 p-3 h-10' type="text" name='Last Name' placeholder='Last Name' required />
                            </div>
                        </div>
                        <div className="contact flex justify-between w-full">
                            <div className="phone-number flex flex-col gap-3">
                                <label className='text-lg font-semibold' > Phone Number (WhatsApp): </label>
                                <input className='border-2 border-[#a3663c] rounded-lg w-96 p-3 h-10' type="tel" name='Phone Number' placeholder="Phone Number" pattern="[0-9]{10}" required />
                            </div>
                            <div className="email flex flex-col gap-3">
                                <label className='text-lg font-semibold' > Email: </label>
                                <input className='border-2 border-[#a3663c] rounded-lg w-96 p-3 h-10' type="email" name='Email' placeholder='Email' />
                            </div>
                        </div>
                        {/* Visa Type and Appointment Selection */}
                        <div className="visa-type-details flex flex-col gap-8">
                            {/* VISA Type Selection */}
                            <div className="visa-type flex flex-col gap-2">
                                <div className="heading flex flex-col gap-1">
                                    <h1 className='text-lg font-semibold'>VISA Type <span className='text-sm'>(Select One)</span>:</h1>
                                    <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-1/4' />
                                </div>
                                <div className="option1 flex ">
                                    <input className='radio-button' type="radio" id="F1-Visa" name="Visa-Type" value="F1-Visa" required />
                                    <label className='label-name text-lg font-semibold w-1/4' for="F1-Visa">F1 Visa</label>
                                </div>
                                <div className="option2 flex">
                                    <input className='radio-button' type="radio" id="B1/B2-Visa" name="Visa-Type" value="B1/B2-Visa" required />
                                    <label className='label-name text-lg font-semibold w-1/4' for="B1/B2-Visa">B1/B2 Visa</label>
                                </div>
                            </div>
                            {/* VISA Appointment Selection */}
                            <div className="visa-appointment flex flex-col gap-2">
                                <div className="heading flex flex-col gap-1">
                                    <h1 className='text-lg font-semibold'>VISA Appointment Type <span className='text-sm'>(Select One)</span>:</h1>
                                    <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-80' />
                                </div>
                                <div className="option1 flex ">
                                    <input className='radio-button' type="radio" id="Regular" name="visa-appointment" value="Regular" required />
                                    <label className='label-name text-lg font-semibold w-1/4' for="Regular"> Regular </label>
                                </div>
                                <div className="option2 flex">
                                    <input className='radio-button' type="radio" id="Dropbox" name="visa-appointment" value="Dropbox" required />
                                    <label className='label-name text-lg font-semibold w-1/4' for="Dropbox">Dropbox</label>
                                </div>
                            </div>

                        </div>
                        {/* Subscription Plans Selection */}
                        <div className="subscription-pricing">
                            <div className="visa-slot-booking-price flex flex-col gap-2">
                                <div className="heading flex flex-col gap-1">
                                    <h1 className='text-lg font-semibold'> Subscription Plans <span className='text-sm'>(Select One)</span>:</h1>
                                    <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-72' />
                                </div>
                                <div className="option1 flex ">
                                    <input className='radio-button' type="radio" id="plan-1" name="visa-slot-booking-price" value="plan-1" required />
                                    <label className='label-name text-lg font-semibold w-1/4' for="plan-1"> ₹9999 </label>
                                </div>
                                <div className="option2 flex">
                                    <input className='radio-button' type="radio" id="plan-2" name="visa-slot-booking-price" value="plan-2" required />
                                    <label className='label-name text-lg font-semibold w-1/4' for="plan-2">₹14999</label>
                                </div>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <button type="submit" value="Proceed" className="submit-button flex bg-[#A3663C] text-xl text-white w-fit font-semibold p-3 px-10 rounded-full gap-2 items-center hover:cursor-pointer">
                            <p>Proceed</p>
                            <img className='w-5 hover:cursor-pointer ' src={ArrowWhite} alt="Arrow" />
                        </button>
                    </div>
                </form>
                {/* Contact Us */}
                <hr className='bg-[#a3663c] rounded-full h-[0.125rem]' />
                <div className="contact-us flex flex-col gap-4">
                    <h1 className='text-xl font-bold'> Contact Us</h1>
                    <p>For any queries, please Contact our Supporting Team:</p>
                    <div className="socials flex w-2/4 gap-4 items-baseline justify-between">
                        <a href='#' className="whatsApp flex flex-col  items-center">
                            <img className='w-8' src={WhatsApp2} alt="WhatsApp" />
                            <p className='font-semibold'>WhatsApp </p>
                            <p className='text-sm'> +91 93988 64908 </p>
                        </a>
                        <a href='#' className="Telegram flex flex-col  items-center">
                            <img className='w-8' src={Telegram2} alt="Telegram" />
                            <p className='font-semibold'>Telegram </p>
                            <p className='text-sm'> @support</p>
                        </a>
                        <a href='#' className="Gmail flex flex-col items-center">
                            <img className='w-9' src={Gmail} alt="Gmail" />
                            <p className='font-semibold'> Gmail </p>
                            <p className='text-sm'> support@getyourslots.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormComponent
