import React from 'react'
import { Logo } from '../assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar flex gap-24 justify-between items-center'>
            <NavLink to={"/"}><img className='w-72' src={Logo} alt="Logo" /></NavLink>
            <ul className='navbar flex gap-16'>
                <li> <NavLink to={"/"} > Home </NavLink> </li>
                <li> <NavLink to={"/contact-us"}> Contact Us </NavLink> </li>
                <li> <NavLink to={"/about-us"}> About Us </NavLink> </li>
            </ul>
        </nav>
    )
}

export default Navbar