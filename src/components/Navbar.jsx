import React from 'react';
import logo from "../assets/logo.svg"
import profile from "../assets/pro.jpeg"
import notification from "../assets/notification.png"

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-2 sm:px-10 lg:px-20 xl:px-30">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 md:gap-0">
                {/* Logo */}
                <div className=" w-36 lg:w-56 cursor-pointer">
                    <img src={logo} alt="" />
                </div>

                {/* Menu Links */}
                <ul className="flex font-poppins text-sm lg:text-xl lg:space-x-8 space-x-4 text-[#000] ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Auctions</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">How to works</a></li>
                </ul>

                {/* Icons (profile/login) */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        {/* Notification Icon */}
                        <div className="bg-[#EBF0F5] p-[10px] rounded-full">
                            <img
                                className="w-5 h-5 cursor-pointer"
                                src={notification}
                                alt="notification"
                            />
                        </div>
                        <span className="absolute top-0 right-1 bg-[#0E2954] text-white text-xs font-poppins rounded-full w-4 h-4 flex items-center justify-center">
                            9
                        </span>
                    </div>

                    <img
                        className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                        src={profile}
                        alt="profile"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
