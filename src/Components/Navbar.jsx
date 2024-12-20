import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/"); 

    const handleLinkClick = (link) => {
        setActiveLink(link); 
        setIsMenuOpen(false); 
    };

    return (
        <nav className="bg-[#FAF3E0] px-5 lg:px-24 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-3xl font-bold text-[#205D3A] tracking-wide">
                    A M R U T A M
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#205D3A] focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>

                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } lg:flex items-center space-x-9 absolute lg:static top-16 left-0 w-full bg-[#FAF3E0] lg:bg-transparent lg:w-auto`}
                >
                    <NavLink
                        to="/"
                        onClick={() => handleLinkClick("/")}
                        className={`block lg:inline-block py-2 lg:py-0  px-9 lg:px-0 ${
                            activeLink === "/"
                                ? "text-[#205D3A] font-medium"
                                : "text-gray-700 hover:text-[#205D3A]"
                        }`}
                    >
                        <p>Home</p>
                    </NavLink>
                    <NavLink
                        to="/find-doctors"
                        onClick={() => handleLinkClick("/find-doctors")}
                        className={`block lg:inline-block py-2 lg:py-0 px- lg:px-0 ${
                            activeLink === "/find-doctors"
                                ? "text-[#205D3A] font-medium"
                                : "text-gray-700 hover:text-[#205D3A]"
                        }`}
                    >
                        Find Doctors
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        onClick={() => handleLinkClick("/about-us")}
                        className={`block lg:inline-block py-2 lg:py-0 px- lg:px-0 ${
                            activeLink === "/about-us"
                                ? "text-[#205D3A] font-medium"
                                : "text-gray-700 hover:text-[#205D3A]"
                        }`}
                    >
                        About Us
                    </NavLink>
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                    <button className="block lg:inline-block border border-[#205D3A] text-[#205D3A] px-6 py-2 rounded-lg hover:bg-[#E8F5E9] mx-4 lg:mx-0">
                        Login
                    </button>
                    <button className="block lg:inline-block bg-[#205D3A] text-white px-8 py-2 rounded-lg hover:bg-[#1B4B31] mx-4 lg:mx-0">
                        Sign-up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
