import React, { useState } from 'react'
import { Logo, Hamburger } from '../assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='navbar flex justify-between items-center md:mb-7'>
            <NavLink to={"/"}><img className='w-48 md:w-60 lg:w-72' src={Logo} alt="Logo" /></NavLink>
            {/* Hamburger Icon */}
            <div className='block lg:hidden'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-gray-800 focus:outline-none'>
                    <img src={Hamburger} alt="Hamburger" />
                </button>
            </div>
            <ul className={`navbar-menu flex gap-10 space-x-6 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
                <li> <NavLink to={"/"} > Home </NavLink> </li>
                <li> <NavLink to={"/contact-us"}> Contact Us </NavLink> </li>
                <li> <NavLink to={"/about-us"}> About Us </NavLink> </li>
            </ul>
        </nav>
    )
}

export default Navbar