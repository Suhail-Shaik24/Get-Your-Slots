import React, { useState, useRef, useEffect } from 'react'
import { Logo, Hamburger } from '../assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null); // Reference for the sidebar

    const handleClickOutside = (event) => {
        // Close sidebar if the click is outside of it
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='navbar flex justify-between items-center md:mb-7'>
            {/* Logo */}
            <NavLink to={"/"}>
                <img className='w-48 md:w-60 lg:w-72' src={Logo} alt="Logo" />
            </NavLink>

            {/* Hamburger Icon - only visible on small screens */}
            <div className='block lg:hidden'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-gray-800 focus:outline-none'
                >
                    <img src={Hamburger} alt="Hamburger" />
                </button>
            </div>

            {/* Sidebar for small screens */}
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div ref={sidebarRef} className='flex flex-col h-full w-64 p-5 bg-white shadow-lg'>
                    <button
                        onClick={() => setIsOpen(false)}
                        className='text-gray-800 focus:outline-none self-end'
                    >
                        X {/* Close button */}
                    </button>
                    <ul className='mt-10 space-y-4'>
                        <li>
                            <NavLink
                                to={"/"}
                                className="text-lg font-bold text-gray-800 hover:text-blue-600"
                                onClick={() => setIsOpen(false)} // Close sidebar on link click
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/contact-us"}
                                className="text-lg font-bold text-gray-800 hover:text-blue-600"
                                onClick={() => setIsOpen(false)} // Close sidebar on link click
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Normal Menu for larger screens */}
            <ul className={`hidden lg:flex gap-10 space-x-6`}>
                <li>
                    <NavLink to={"/"}> Home </NavLink>
                </li>
                <li>
                    <NavLink to={"/contact-us"}> Contact Us </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar