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
            <ul className={`navbar-menu flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
                <li> <NavLink to={"/"} > Home </NavLink> </li>
                <li> <NavLink to={"/contact-us"}> Contact Us </NavLink> </li>
                <li> <NavLink to={"/about-us"}> About Us </NavLink> </li>
            </ul>
        </nav>
    )
}

export default Navbar

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import {Logo} from '../assets'; // Update the path to your logo

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className='navbar flex justify-between items-center p-5'>
//       <NavLink to={"/"}>
//         <img className='w-72' src={Logo} alt="Logo" />
//       </NavLink>
//       <div className='lg:hidden'>
//         {/* Hamburger Icon */}
//         <button onClick={() => setIsOpen(!isOpen)} className='text-gray-800 focus:outline-none'>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//       </div>
//       <ul className={`navbar-menu flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
//         <li>
//           <NavLink to={"/"}> Home </NavLink>
//         </li>
//         <li>
//           <NavLink to={"/contact-us"}> Contact Us </NavLink>
//         </li>
//         <li>
//           <NavLink to={"/about-us"}> About Us </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
