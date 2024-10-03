import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Provisions1 } from ".";
import { ArrowWhite } from "../assets"

const RealTimeAlertsPlansItems = ({ planName, price, alignRight, onButtonClick }) => (

    <button
        type='button'
        onClick={onButtonClick}
        className={`grid justify-center items-center w-full md:w-9/12 sml:w-9/12 lg:w-9/12 h-fit md:h-80 sml:h-80 lg:h-80 bg-white md:grid-cols-2 sml:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-6 p-4 lg:p-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03] ${alignRight ? 'mr-auto' : 'ml-auto'}`}>
            
        <div id='left-side' className="flex flex-col items-center gap-2 text-center lg:gap-8">
            <div id='heading' className="flex flex-col font-['Open_Sans']">
                <h4 className='text-sm lg:text-base'>Get Real Time Alerts for </h4>
                <h2 className='text-xl font-bold lg:text-3xl'>{planName}</h2>
            </div>
            <div id='pricing' className="flex flex-col items-start">
                <p className="font-['Open_Sans'] text-sm lg:text-base">Starting at Just</p>
                <h1 className="font-['Times_New_Roman'] text-[#A3663C] text-3xl lg:text-5xl font-bold">₹{price} <span className='text-lg font-bold text-black'> /30 days </span></h1>
            </div>
            <div
                id='getRealTimeAlerts'
                className="text-sm lg:text-base p-6 py-3 text-white rounded-full flex gap-2 font-['Open_Sans'] font-bold w-fit bg-button-gradient">
                Get Real Time Alerts
                <img className='w-5' src={ArrowWhite} alt="ArrowWhite" />
            </div>
        </div>
        <div id='right-side' className='flex items-center justify-center'>
            <Provisions1 />
        </div>
    </button>
)


const RealTimePlans = () => {

    const navigate = useNavigate();

    const handleButtonClick = (id) => {
        if (id === 1 || id === 2) {
            navigate('/real-time-alerts-FreshersVisaForm');
        } else if (id === 3) {
            navigate('/real-time-alerts-RefusedVisaForm');
        } else {
            console.log('No matching form found');
        }
    };

    const plans = [
        { id: 1, planName: "F1 Fresher Visa", price: "899" },
        { id: 2, planName: "F1 Refused Visa", price: "1,299" },
        { id: 3, planName: "B1/B2 Fresher Visa", price: "1,999" },
    ]
    return (
        <div id='realTimePlans' className="grid grid-cols-1 gap-3">
            {plans.map((item, index) => (
                <RealTimeAlertsPlansItems
                    key={index}
                    planName={item.planName}
                    price={item.price}
                    alignRight={index % 2 === 0}  // Alternate card alignment
                    onButtonClick={() => handleButtonClick(item.id)}
                />
            ))}
        </div>
    )
}

export default RealTimePlans;


// const RealTimeAlertsPlansItems = ({ planName, price, alignRight, onButtonClick }) => (
//     <div
//         className={`grid justify-center items-center w-full h-auto bg-white grid-cols-1 gap-1 p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03]
//         ${alignRight ? 'mr-auto' : 'ml-auto'}
//         md:w-9/12 md:h-80 md:grid-cols-2
//         lg:w-9/12 lg:h-80 lg:grid-cols-2`}
//     >
//         {/* Left Side */}
//         <div id="left-side" className="flex flex-col items-center gap-6 text-center sm:gap-8">
//             <div id="heading" className="flex flex-col font-['Open_Sans']">
//                 <h4 className="text-sm">Get Real Time Alerts for </h4>
//                 <h2 className="text-2xl font-bold sm:text-3xl">{planName}</h2>
//             </div>
//             <div id="pricing" className="flex flex-col items-center sm:items-start">
//                 <p className="font-['Open_Sans'] text-sm">Starting at Just</p>
//                 <h1 className="font-['Times_New_Roman'] text-[#A3663C] text-4xl font-bold sm:text-5xl">
//                     ₹{price}{' '}
//                     <span className="text-base font-bold text-black sm:text-lg"> /30 days </span>
//                 </h1>
//             </div>
//             <button
//                 id="getRealTimeAlerts"
//                 className="px-4 py-2 text-xs text-[#A3663C] border border-[#A3663C] rounded-full flex items-center gap-2 transition-colors duration-300 hover:bg-[#A3663C] hover:text-white
//                 sm:px-6 sm:py-3 sm:text-sm"
//                 onClick={onButtonClick}
//             >
//                 Get Real Time Alerts
//                 <img className="w-4 sm:w-5" src={ArrowWhite} alt="ArrowWhite" />
//             </button>
//         </div>

//         {/* Right Side */}
//         <div id="right-side" className="flex justify-center mt-4 lg:mt-0">
//             <Provisions1 />
//         </div>
//     </div>
// );

// const RealTimePlans = () => {
//     const navigate = useNavigate();

//     const handleButtonClick = (id) => {
//         if (id === 1 || id === 2) {
//             navigate('/real-time-alerts-FreshersVisaForm');
//         } else if (id === 3) {
//             navigate('/real-time-alerts-RefusedVisaForm');
//         } else {
//             console.log('No matching form found');
//         }
//     };

//     const plans = [
//         { id: 1, planName: 'F1 Fresher Visa', price: '899' },
//         { id: 2, planName: 'F1 Refused Visa', price: '1,299' },
//         { id: 3, planName: 'B1/B2 Fresher Visa', price: '1,999' },
//     ];

//     return (
//         <div id="realTimePlans" className="grid grid-cols-1 gap-4">
//             {plans.map((item, index) => (
//                 <button
//                     type="button"
//                     onClick={() => handleButtonClick(item.id)}
//                     key={index}
//                 >
//                     <RealTimeAlertsPlansItems
//                         planName={item.planName}
//                         price={item.price}
//                         alignRight={index % 2 === 0} // Alternate card alignment
//                     />
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default RealTimePlans;
