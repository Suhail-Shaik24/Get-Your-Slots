import React from 'react';
import { Navbar } from '../components'
import { YouTube, Instagram, X, LinkedIn, WhatsApp3, Telegram2, Gmail } from '../assets';

const ContactUs = () => {
    return (
        <div className="p-4 md:p-5 lg:p-12 flex flex-col gap-3">
            <Navbar />
            <div className="w-full bg-white shadow-md rounded-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Contact Us</h2>

                <div className="contacts flex flex-col gap-3">
                    {/* Telegram Group */}
                    <div className="telegram-group flex flex-col items-center gap-4 bg-slate-100 rounded p-4">
                        <h3 className='text-xl font-semibold'>Join Our Telegram Group</h3>
                        <p className=" text-sm lg:text-base font-semibold text-gray-700"> Join our Telegram group to receive Visa Slot Updates — stay informed by becoming a part of our community! </p>
                        <a
                            href="https://t.me/getyourslots_USAVISAupdates"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 py-3 px-6 flex gap-2 bg-blue-600 text-white items-center font-bold rounded-md shadow hover:bg-blue-700 transition duration-300"
                        >
                            <img className='bg-white rounded-full' src={Telegram2} />
                            Join Telegram
                        </a>
                    </div>

                    {/* Support */}
                    <div className="support bg-slate-100 rounded p-3 flex flex-col gap-6 items-center justify-center"  >
                        <h3 className='text-lg font-semibold text-black text-center'> For Any Queries, Please contact our Support Team:</h3>
                        <div className="support-icons w-fit grid grid-rows-3 gap-3 lg:flex sml:flex md:flex">
                            <a href='https://wa.me/8247347222' target='_blank' className="whatsApp h-fit flex flex-col gap-1 items-center">
                                <img className='w-8' src={WhatsApp3} alt="WhatsApp" />
                                <p className='text-xs lg:text-base font-semibold'>WhatsApp </p>
                                <p className='text-xs lg:text-sm'> +91 82473 47222 </p>
                            </a>

                            <a href='http://t.me/getyourslots_support' target='_blank' className="Telegram h-fit flex flex-col gap-1 items-center">
                                <img className='w-8' src={Telegram2} alt="Telegram" />
                                <p className='text-xs lg:text-base font-semibold'>Telegram </p>
                                <p className='text-xs lg:text-sm'> getyourslots_support </p>
                            </a>

                            <a href='mailto:support@getyourslots.com' className="Gmail h-fit flex flex-col gap-1 items-center">
                                <img className='w-8' src={Gmail} alt="Gmail" />
                                <p className='text-xs lg:text-base font-semibold'> Gmail </p>
                                <p className='text-sm text-center'> support@getyourslots.com</p>
                            </a>
                        </div>
                    </div>

                    <div className="socials flex flex-col  bg-slate-100 rounded p-10">
                        <p className="text-lg font-bold text-center text-black mb-6">
                            Stay connected with us on social media.
                        </p>

                        {/* Social Links */}
                        <div className="social-links flex justify-center gap-3 items-center space-x-6 mb-6">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-gray-900 text-4xl"
                                aria-label="Instagram"
                            >
                                <img className='w-12' src={Instagram} />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-gray-900 text-4xl"
                                aria-label="YouTube"
                            >
                                <img className='w-12' src={YouTube} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-gray-900 text-4xl"
                                aria-label="LinkedIn"
                            >
                                <img className='w-12' src={LinkedIn} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-gray-900 text-4xl"
                                aria-label="Twitter"
                            >
                                <img className='w-10' src={X} />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactUs;
