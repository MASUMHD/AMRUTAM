import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-[#FAF3E0] px-5 lg:px-24 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
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

                {/* Navigation Links */}
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } lg:flex items-center space-x-9  absolute lg:static top-16 left-0 w-full bg-[#FAF3E0] lg:bg-transparent lg:w-auto`}
                >
                    <a
                        href="/"
                        className="block lg:inline-block text-gray-700 hover:text-[#205D3A] font-medium py-2 lg:py-0 px-4 lg:px-0"
                    >
                        Home
                    </a>
                    <a
                        href="/find-doctors"
                        className="block lg:inline-block text-[#205D3A] font-medium py-2 lg:py-0 px-4 lg:px-0"
                    >
                        Find Doctors
                    </a>
                    <a
                        href="/about-us"
                        className="block lg:inline-block text-gray-700 hover:text-[#205D3A] font-medium py-2 lg:py-0 px-4 lg:px-0"
                    >
                        About Us
                    </a>
                </div>

                {/* Buttons */}
                <div
                    className="hidden lg:flex items-center space-x-4"
                >
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
