import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Provisions1 } from ".";


const FresherRealTimeAlerts = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/real-time-alerts-FreshersVisaForm');
        console.log("Success");
    };
    return (
        <div className='flex flex-col gap-2'>

            <h2 className='text-sm lg:text-xl w-fit bg-white rounded-r-full p-2 lg:p-3'> <strong>Fresher Visa</strong> <span className='text-xs lg:text-base'>- Get Real Time Alerts For Fresher Visa </span> </h2>

            <div className="fresherVisa-plans-container grid grid-cols-2 gap-2 sml:grid-cols-4 md:grid-cols-4 lg:grid-cols-custom lg:gap-custom justify-start ">
                <div className="plan1 bg-white p-3 h-fit lg:p-6 rounded-md flex flex-col gap-2 lg:gap-8 justify-center items-center">
                    <h1 className="font-['Open_Sans'] text-sm lg:text-2xl font-bold text-center"> F1 <br /> Fresher Visa</h1>
                    <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-2xl lg:text-4xl font-bold text-center">₹899 <span className='text-black text-xs lg:text-lg'>/30days</span></h1>
                    <div className='w-full'>
                        <Provisions1 />
                    </div>
                    <button
                        className='bg-[#A3663C] w-3/5 border text-white text-[12px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-[10px] sml:p-2 md:text-xs md:p-2 md:w-4/5 md:rounded-md lg:text-sm lg:p-2 lg:px-5 lg:rounded-md'
                        type="button"
                        onClick={handleButtonClick}>
                        <p>Get Started</p>
                    </button>
                </div>

                <div className="plan2 bg-white p-3 h-fit lg:p-6 rounded-md flex flex-col gap-2 lg:gap-8 justify-center items-center">
                    <h1 className="font-['Open_Sans'] text-sm lg:text-2xl font-bold text-center"> F1 <br /> Fresher Visa</h1>
                    <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-2xl lg:text-4xl font-bold text-center">₹1099 <span className='text-black text-xs lg:text-lg'>/40days</span></h1>
                    <div className='w-full'>
                        <Provisions1 />
                    </div>
                    <button
                        className='bg-[#A3663C] w-3/5 border text-white text-[12px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-[10px] sml:p-2 md:text-xs md:p-2 md:w-4/5 md:rounded-md lg:text-sm lg:p-2 lg:px-5 lg:rounded-md'
                        type="button"
                        onClick={handleButtonClick}>
                        <p>Get Started</p>
                    </button>
                </div>

                <div className="plan3 bg-white p-3 h-fit lg:p-6 rounded-md flex flex-col gap-2 lg:gap-8 justify-center items-center">
                    <h1 className="font-['Open_Sans'] text-sm lg:text-2xl font-bold text-center">B1/B2 <br /> Fresher Visa</h1>
                    <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-2xl lg:text-4xl font-bold text-center">₹1999 <span className='text-black text-xs lg:text-lg'>/30days</span></h1>
                    <div className='w-full'>
                        <Provisions1 />
                    </div>
                    <button
                        className='bg-[#A3663C] w-3/5 border text-white text-[12px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-[10px] sml:p-2 md:text-xs md:p-2 md:w-4/5 md:rounded-md lg:text-sm lg:p-2 lg:px-5 lg:rounded-md'
                        type="button"
                        onClick={handleButtonClick}>
                        <p>Get Started</p>
                    </button>
                </div>

                <div className="plan4 bg-white p-3 h-fit lg:p-6 rounded-md flex flex-col gap-2 lg:gap-8 justify-center items-center">
                    <h1 className="font-['Open_Sans'] text-sm lg:text-2xl font-bold text-center">B1/B2 <br /> Fresher Visa</h1>
                    <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-2xl lg:text-4xl font-bold text-center">₹2399 <span className='text-black text-xs lg:text-lg'>/40days</span></h1>
                    <div className='w-full'>
                        <Provisions1 />
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

export default FresherRealTimeAlerts