import { React, useState } from 'react'
import { Provisions2, FormVisaSlot } from "../components";
import { useNavigate } from 'react-router-dom';


const VisaSlots = () => {
    // const [showVisaSlotForm, setShowVisaSlotForm] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/visa-slot-booking-form');
        console.log("Success");
    };

    return (
        <div className="Visa-Slots bg-[#a3663c] flex flex-col gap-6 px-8 py-6 rounded-lg">
            <div className="heading">
                <h1 className='text-3xl text-white font-semibold'> VISA Slot Booking </h1>
                <hr className='bg-white h-[0.125rem] rounded-full w-[50%]' />
            </div>
            <div className="Visa-Slots flex gap-8">

                <div className="plan1 bg-white p-6 w-80 rounded-md flex flex-col gap-8 items-center">
                    <h1 className="font-['Open_Sans'] text-2xl font-bold text-center">VISA Booking- <br /> Fresher VISA</h1>
                    <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-4xl font-bold text-center"> ₹9999 </h1>
                    <div className='w-full'>
                        <Provisions2 />
                    </div>
                    <button
                        className='bg-[#A3663C] text-white text-center text-sm font-semibold font-["Open_Sans"] px-5 py-3 rounded-md flex gap-2 items-center'
                        type="button"
                        onClick={handleButtonClick}>
                        <p>Get Started</p>
                    </button>
                </div>

                <div className="plan2 bg-white p-6 w-80 rounded-md flex flex-col gap-8 items-center">
                    <h1 className="font-['Open_Sans'] text-2xl font-bold text-center">VISA Booking- <br /> Refused VISA </h1>
                    <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-4xl font-bold text-center">₹14999</h1>
                    <div className='w-full '>
                        <Provisions2 />
                    </div>
                    <button className='bg-[#A3663C] text-white text-center text-sm font-semibold font-["Open_Sans"] px-5 py-3 rounded-md flex gap-2 items-center' type="button">
                        <p>Get Started</p>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default VisaSlots