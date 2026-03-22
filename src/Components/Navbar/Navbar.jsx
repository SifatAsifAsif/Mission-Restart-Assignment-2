import React from 'react';
import plusImg from '../../assets/plus.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4">

            {/* LEFT SIDE (LOGO) */}
            <div className="flex-1">
                <a className="text-xl font-bold">CS — Ticket System</a>
            </div>

            {/* RIGHT SIDE (DESKTOP MENU) */}
            <div className="hidden lg:flex items-center gap-3">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>

                {/* FIXED BUTTON */}
                <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none">
                    <img src={plusImg} alt="plus" className="w-4 h-4" />
                    New Ticket
                </button>
            </div>

            {/* MOBILE MENU */}
            <div className="lg:hidden">
                <div className="dropdown dropdown-end">

                    {/* Hamburger Button */}
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>

                    {/* Dropdown Menu */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li>
                            <button className="btn btn-sm mt-2 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none w-full">
                                New Ticket
                            </button>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Navbar;