import React, { useState, useRef, useEffect } from 'react'
import { Logo, Hamburger } from '../assets'
import { NavLink } from 'react-router-dom'
import "../css/Navbar.css"

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
        <nav className='flex items-center justify-between px-4 py-3 transition duration-300 rounded-full shadow-lg navbar md:mb-7 bg-white/30 md:px-8'>
            {/* Logo */}
            <NavLink to={"/"}>
                <img className='w-40 md:w-52 lg:w-60' src={Logo} alt="Logo" />
            </NavLink>

            {/* Hamburger Icon - only visible on small screens */}
            <div className='block lg:hidden'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-gray-800 focus:outline-none'
                >
                    <img className='w-6' src={Hamburger} alt="Hamburger" />
                </button>
            </div>

            {/* Sidebar for small screens */}
            <div className={`fixed z-20 inset-0 bg-gray-800 bg-opacity-75 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div ref={sidebarRef} className='flex flex-col w-64 h-full p-5 bg-white shadow-lg'>
                    <button
                        onClick={() => setIsOpen(false)}
                        className='self-end text-gray-800 focus:outline-none'
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
                    <NavLink
                        className="text-lg font-semibold text-gray-800 transition-colors duration-300 link hover:text-blue-600"
                        to={"/"}> Home </NavLink>
                </li>
                <li>
                    <NavLink
                        className="text-lg font-semibold text-gray-800 transition-colors duration-300 link hover:text-blue-600"
                        to={"/contact-us"}> Contact Us </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

// import React, { useState, useRef, useEffect } from 'react';
// import { Logo, Hamburger } from '../assets';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const sidebarRef = useRef(null);

//     const handleClickOutside = (event) => {
//         if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//             setIsOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <nav className='flex items-center justify-between px-4 py-3 transition duration-300 rounded-full shadow-lg navbar md:mb-7 bg-white/30 backdrop-blur-md md:px-8'>
//             {/* Logo */}
//             <NavLink to={"/"}>
//                 <img className='w-40 transition-transform duration-300 md:w-52 lg:w-60 hover:scale-105' src={Logo} alt="Logo" />
//             </NavLink>

//             {/* Hamburger Icon - visible only on small screens */}
//             <div className='block lg:hidden'>
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className='text-gray-800 focus:outline-none'
//                     aria-label="Toggle Menu"
//                 >
//                     <img src={Hamburger} alt="Hamburger Icon" />
//                 </button>
//             </div>

//             {/* Sidebar for small screens */}
//             <div className={`fixed z-40 inset-0 bg-black bg-opacity-50 transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-300 ease-in-out lg:hidden`}>
//                 <div ref={sidebarRef} className='fixed top-0 left-0 w-64 h-full p-5 transition-transform duration-500 ease-in-out transform bg-white shadow-lg'>
//                     <button
//                         onClick={() => setIsOpen(false)}
//                         className='absolute self-end text-2xl font-bold text-gray-800 transition duration-200 focus:outline-none hover:text-red-500 top-4 right-4'
//                         aria-label="Close Menu"
//                     >
//                         &times;
//                     </button>
//                     <ul className='flex flex-col items-center justify-center h-full space-y-8'>
//                         <li>
//                             <NavLink
//                                 to={"/"}
//                                 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600"
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to={"/contact-us"}
//                                 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600"
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 Contact Us
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Normal Menu for larger screens */}
//             <ul className='items-center hidden space-x-8 lg:flex'>
//                 <li>
//                     <NavLink
//                         to={"/"}
//                         className="text-lg font-semibold text-gray-800 transition-colors duration-300 link hover:text-blue-600"
//                     >
//                         Home
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink
//                         to={"/contact-us"}
//                         className="text-lg font-semibold text-gray-800 transition-colors duration-300 link hover:text-blue-600"
//                     >
//                         Contact Us
//                     </NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;
