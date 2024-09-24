import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Provisions1 } from ".";

const FresherRealTimeAlerts = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/real-time-alerts-FreshersVisaForm');
        console.log("Success");
    };

    const plans = [
        { id: 1, title: 'F1', subTitle: 'Fresher Visa', price: 899, duration: '30days' },
        { id: 2, title: 'F1', subTitle: 'Fresher Visa', price: 1099, duration: '40days' },
        { id: 3, title: 'B1/B2', subTitle: 'Fresher Visa', price: 1999, duration: '30days' },
        { id: 4, title: 'B1/B2', subTitle: 'Fresher Visa', price: 2399, duration: '40days' }
    ];

    return (
        <div className='flex flex-col gap-2'>

            <h2 className='text-sm lg:text-xl w-fit bg-white rounded-r-full p-2 pr-5 lg:p-3'>
                <strong>Fresher Visa</strong> 
                <span className='text-xs lg:text-base'> - Get Real Time Alerts For Fresher Visa</span>
            </h2>

            <div className="fresherVisa-plans-container grid grid-cols-2 gap-2 sml:grid-cols-2 md:grid-cols-4 lg:grid-cols-custom lg:gap-custom justify-start">
                {plans.map((plan) => (
                    <button
                        key={plan.id}
                        type='button'
                        onClick={handleButtonClick}
                        className="plan bg-white p-4 h-fit lg:p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col gap-4 justify-center items-center text-center border border-gray-200"   
                    >
                        <h1 className="font-['Open_Sans'] text-sm lg:text-2xl font-bold text-center">
                            {plan.title} <br /> {plan.subTitle}
                        </h1>
                        <h1 className="Price font-['Times_New_Roman'] text-[#a3663c] text-2xl lg:text-4xl font-bold text-center">
                            ₹ {plan.price} <span className='text-black text-xs lg:text-lg'>/{plan.duration}</span>
                        </h1>
                        <div className='w-full'>
                            <Provisions1 />
                        </div>
                        <button
                            className='bg-[#A3663C] w-fit border text-white text-[12px] p-1 font-semibold font-["Open_Sans"] rounded flex gap-2 justify-center items-center sml:text-[10px] sml:p-2 md:text-xs md:p-2 md:w-4/5 md:rounded-md lg:text-sm lg:p-2 lg:px-5 lg:rounded-md'
                            type="button"
                        >
                            <p>Get Started</p>
                        </button>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FresherRealTimeAlerts;
