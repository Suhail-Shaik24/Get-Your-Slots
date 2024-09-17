import React from 'react'
// import { Link } from 'react-router-dom'
import { Logo2, Instagram, X, LinkedIn, YouTube } from '../assets'

const Footer = () => {
  return (
    <>
      <footer className='p-4 md:p-5 lg:p-12 grid grid-cols-3 items-center justify-between bg-[#3A4740]'>

        <div className="Logo-and-Name lg:flex items-center hidden  gap-4">
          <a href="/"> <img className="w-12" src={Logo2} alt="Get Your Slots Logo" /></a>
          <div>
            <h2 className="text-sm lg:text-lg text-white font-bold">Get Your Slots</h2>
            <p className='text-white text-xs'>&copy; 2024 Get Your Slots | All rights reserved.</p>
          </div>
        </div>

        <div className="Logo-and-Name flex flex-col text-center items-center justify-center lg:hidden gap-1">
          <a href="/"> <img className="w-12" src={Logo2} alt="Get Your Slots Logo" /></a>
          <h2 className="text-sm lg:text-lg text-white font-bold">Get Your Slots</h2>
          <p className='text-white text-[10px]'>&copy; 2024 Get Your Slots <br /> All rights reserved.</p>
        </div>

        <div className="quick-links items-center justify-center flex flex-col gap-2 text-center text-white text-base">
          <div className="heading flex flex-col gap-1">
            <h3 className='text-sm lg:text-lg font-bold'> Quick Links </h3>
            <hr />
          </div>
          <div className="links flex flex-col gap-2">
            <a href="#/real-time-alerts-form" target='_blank'><h5 className='text-xs lg:text-base hover:underline hover:font-bold'>Get Real Time Alerts </h5></a>
            <a href="#/visa-slot-booking-form" target='_blank'><h5 className='text-xs lg:text-base hover:underline hover:font-bold'>Book a Visa Slot </h5></a>
          </div>
        </div>

        <div className="socials flex text-white flex-col gap-3 items-center justify-center ">
          <div className="heading flex flex-col gap-1">
            <h3 className='text-sm lg:text-lg font-bold' >Let's Connect</h3>
            <hr />
          </div>
          <div className="grid grid-cols-2 gap-3 lg:flex items-center justify-center">
            <a href="https://www.instagram.com/getyourslots/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
              <img src={Instagram} alt="Instagram" className="w-6 lg:w-8 hover:animate-bounce" />
            </a>
            {/* <div className='border border-[#a3663c] h-6 rounded-full' /> */}
            <a href="https://x.com/getyourslots" target="_blank" rel="noopener noreferrer" className=" hover:underline">
              <img src={X} alt="LinkedIn" className=" w-5 lg:w-7 aspect-square hover:animate-bounce invert" />
            </a>
            {/* <div className='border border-[#a3663c] h-6 rounded-full' /> */}
            <a href="https://www.linkedin.com/in/get-your-slots-217957329" target="_blank" rel="noopener noreferrer" className=" hover:underline">
              <img src={LinkedIn} alt="LinkedIn" className=" w-6 lg:w-8 aspect-square hover:animate-bounce" />
            </a>
            {/* <div className='border border-[#a3663c] h-6 rounded-full' /> */}
            <a href="https://youtube.com/@getyourslots" target="_blank" rel="noopener noreferrer" className=" hover:underline">
              <img src={YouTube} alt="LinkedIn" className=" w-8 lg:w-10 aspect-square hover:animate-bounce" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer