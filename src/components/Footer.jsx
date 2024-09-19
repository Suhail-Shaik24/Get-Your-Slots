import React from 'react'
// import { Link } from 'react-router-dom'
import { Logo2, Instagram, X, LinkedIn, YouTube } from '../assets'

const Footer = () => {
  return (
    <>
      <footer className='p-4 md:p-5 lg:p-12 bg-[#3A4740] grid grid-cols-1 gap-4 lg:grid-cols-2'>

        <div className='Logo-and-Links h-fit grid grid-rows-2 lg:grid-rows-3 gap-5 text-white'>
          <a href="/" className='Logo-and-Name w-fit'>
            <div className=" flex items-center gap-3 lg:gap-4">
              <img className="w-10" src={Logo2} alt="Get Your Slots Logo" />
              <h2 className="text-2xl lg:text-2xl text-white font-bold">Get Your Slots</h2>
            </div>
          </a>

          <div className="socials flex text-white flex-col gap-3 ">
            <div className="flex gap-10 lg:flex items-center">
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
          <p className='hidden lg:block'>Copyright © 2024 Get Your Slots</p>
        </div>
        <div className='links lg:flex grid grid-cols-2 justify-between'>
          <div className="services w-fit flex flex-col gap-2 text-white text-base">
            <div className="heading w-fit flex flex-col gap-1">
              <h3 className='text-base lg:text-xl font-bold'> Services </h3>
            </div>
            <div className="links flex flex-col gap-2">
              <a href="#/real-time-alerts-FreshersVisaForm" target='_blank'><h5 className='text-base hover:underline hover:font-bold'>Fresher Visa Alerts  </h5></a>
              <a href="#/real-time-alerts-RefusedVisaForm" target='_blank'><h5 className='text-base hover:underline hover:font-bold'>Refused Visa Alerts </h5></a>
              <a href="#/visa-slot-booking-form" target='_blank'><h5 className='text-base hover:underline hover:font-bold'>Book a Visa Slot </h5></a>
            </div>
          </div>
          <div className="quick-links w-fit flex flex-col gap-2 text-white text-base">
            <div className="heading w-fit flex flex-col gap-1">
              <h3 className='text-base lg:text-xl font-bold'> Quick Links </h3>
            </div>
            <div className="links flex flex-col gap-2">
              <a href="/" target='_blank'><h5 className='text-base hover:underline hover:font-bold'>Home </h5></a>
              <a href="#/contact" target='_blank'><h5 className='text-base hover:underline hover:font-bold'>Contact Us </h5></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer