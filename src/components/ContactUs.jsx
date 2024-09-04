import React, { useState } from 'react'
import { WhatsApp2, Telegram2, Gmail } from '../assets'

const ContactUs = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="contact-us flex flex-col gap-2 lg:gap-4">

            <h1 className='text-base lg:text-lg font-semibold'> Contact Us</h1>            
            <p className='text-sm lg:text-base'>For any queries, please Contact our Supporting Team:</p>

            <div className="socials lg:hidden md:hidden sml:hidden flex lg:grid-cols-3 w-2/4 gap-4 items-baseline justify-between">

                <a href='#' className="whatsApp flex flex-col gap-1 items-center">
                    <img className='w-7' src={WhatsApp2} alt="WhatsApp" />
                </a>

                <a href='#' className="Telegram flex flex-col gap-1 items-center">
                    <img className='w-7' src={Telegram2} alt="Telegram" />
                </a>

                <a href='#' className="Gmail flex flex-col gap-1 items-center">
                    <img className='w-7' src={Gmail} alt="Gmail" />
                </a>

            </div>

            <div className="socials lg:grid lg:grid-cols-3 sml:grid sml:grid-cols-3 md:grid md:grid-cols-3 w-2/4 gap-4 items-baseline justify-between hidden">

                <a href='#' className="whatsApp flex flex-col gap-1 items-center">
                    <img className='w-8' src={WhatsApp2} alt="WhatsApp" />
                    <p className='text-xs lg:text-base font-semibold'>WhatsApp </p>
                    <p className='text-xs lg:text-sm'> +91 93988 64908 </p>
                </a>

                <a href='#' className="Telegram flex flex-col gap-1 items-center">
                    <img className='w-8' src={Telegram2} alt="Telegram" />
                    <p className='text-xs lg:text-base font-semibold'>Telegram </p>
                    {/* <p className='text-sm'> @support</p> */}
                </a>

                <a href='#' className="Gmail flex flex-col gap-1 items-center">
                    <img className='w-9' src={Gmail} alt="Gmail" />
                    <p className='text-xs lg:text-base font-semibold'> Gmail </p>
                    {/* <p className='text-sm text-center'> support<br/>@getyourslots.com</p> */}
                </a>

            </div>
        </div>
    )
}

export default ContactUs