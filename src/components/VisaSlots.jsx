import { React } from 'react'
import { Provisions2 } from "../components";
import { ArrowWhite } from "../assets"
import { useNavigate } from 'react-router-dom';
import "../css/RealTime.css"
const VisaSlotPlansItems = ({ planName, price, alignRight, onButtonClick }) => (
    <button
        type='button'
        onClick={onButtonClick}
        className={`grid justify-center items-center w-full md:w-9/12 sml:w-9/12 lg:w-9/12 h-fit md:h-80 sml:h-80 lg:h-80 bg-white md:grid-cols-2 sml:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-6 p-4 lg:p-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03] ${alignRight ? 'ml-auto' : 'mr-auto'}`}
    >
        <div id='left-side' className="flex flex-col items-center gap-2 text-center lg:gap-8">
            <div id='heading' className="flex flex-col font-['Open_Sans']">
                <h4 className='text-sm lg:text-base'>Book a Visa Slot for </h4>
                <h2 className='text-xl font-bold lg:text-3xl'>{planName}</h2>
            </div>
            <div id='pricing' className="flex flex-col items-start">
                <p className="font-['Open_Sans'] text-sm lg:text-base">At Just</p>
                <h1 className="font-['Times_New_Roman'] text-[#A3663C] text-3xl lg:text-5xl font-bold">₹{price}</h1>
            </div>
            <div id='getRealTimeAlerts' className="p-6 py-3 text-white rounded-full flex gap-2 font-['Open_Sans'] font-bold w-fit bg-button-gradient">
                Book a Visa Slot
                <img className='w-5' src={ArrowWhite} alt="ArrowWhite" />
            </div>
        </div>
        <div id='right-side'>
            <Provisions2 />
        </div>
    </button>
)


const VisaSlots = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/visa-slot-booking-form');
        console.log("Success");
    };
    const plans = [
        { id: 1, planName: 'Fresher Visa', price: "9,999" },
        { id: 2, planName: 'Refused Visa', price: "14,999" }
    ]

    return (
        <div id='Visa-Slots' className="flex flex-col gap-2 p-3 rounded-xl bg-radial-gradient lg:gap-6 lg:px-8 lg:py-6 lg:rounded-3xl">
            <div id='heading' className="flex flex-col items-center gap-1">
                <h1 className='text-lg font-bold text-center text-white font-["Poppins"] lg:text-4xl'> Visa Slot Booking</h1>
                <p className="text-center text-white text-sm lg:text-base font-medium font-['Poppins'] capitalize lg:tracking-wider">Make Booking Your Visa simple with our easy-to-use platform! </p>
            </div>

            <div id='realTimePlans' className="grid grid-cols-1 gap-3">
                {plans.map((plan) => (
                    <VisaSlotPlansItems
                        key={plan.id}
                        planName={plan.planName}
                        price={plan.price}
                        alignRight={plan.id % 2 === 0}  // Alternate card alignment
                        onButtonClick={handleButtonClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default VisaSlots