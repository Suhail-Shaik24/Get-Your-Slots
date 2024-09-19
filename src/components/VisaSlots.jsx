import { React } from 'react'
import { Provisions2 } from "../components";
import { useNavigate } from 'react-router-dom';
import "../css/RealTime.css"


const VisaSlots = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/visa-slot-booking-form');
        console.log("Success");
    };

    return (
        <div className="Visa-Slots bg-[#a3663c] flex flex-col gap-2 p-3 lg:gap-6 lg:px-8 lg:py-6 rounded lg:rounded-lg">
            <div className="heading flex flex-col gap-1">
                <h1 className='text-xl lg:text-3xl text-white font-bold'> Visa Slot Booking </h1>
                <hr className='bg-white h-[0.125rem] rounded-full w-3/4' />
                </div>
            <div className="plans-container2 grid grid-cols-2 gap-2 lg:gap-4 sml:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 justify-center items-center">

                <div className="plan1 bg-white p-3 h-fit lg:p-6 rounded-md flex flex-col gap-2 lg:gap-8 justify-center items-center">
                    <h1 className="font-['Open_Sans'] text-sm lg:text-2xl font-bold text-center">Visa Booking-<br /> Fresher Visa</h1>
                    <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-2xl lg:text-4xl font-bold text-center"> ₹9999 </h1>
                    <div className='w-full'>
                        <Provisions2 />
                    </div>
                    <button
                        className='bg-[#A3663C] w-3/5 border text-white text-[12px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-[10px] sml:p-2 md:text-xs md:p-2 md:w-4/5 md:rounded-md lg:text-sm lg:p-2 lg:px-5 lg:rounded-md'
                        type="button"
                        onClick={handleButtonClick}>
                        <p>Get Started</p>
                    </button>
                </div>

                <div className="plan2 bg-white p-3 h-fit lg:p-6 rounded-md flex flex-col gap-2 lg:gap-8 justify-center items-center">
                    <h1 className="font-['Open_Sans'] text-sm lg:text-2xl font-bold text-center">Visa Booking- <br /> Refused Visa</h1>
                    <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-2xl lg:text-4xl font-bold text-center"> ₹14999 </h1>
                    <div className='w-full'>
                        <Provisions2 />
                    </div>
                    <button
                        className='bg-[#A3663C] w-3/5 border text-white text-[12px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-[10px] sml:p-2 md:text-xs md:p-2 md:w-4/5 md:rounded-md lg:text-sm lg:p-2 lg:px-5 lg:rounded-md'
                        type="button"
                        onClick={handleButtonClick}>
                        <p>Get Started</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default VisaSlots