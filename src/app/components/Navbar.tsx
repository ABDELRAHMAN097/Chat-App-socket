"use client"
import Image from "next/image";
import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // دالة لإغلاق القائمة عند النقر على رابط
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md w-full bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">
        <Image src="/assets/img/logo.png" alt="" height={70} width={70}/>
      </div>

      {/* Menu Button (for small screens) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <RiCloseLargeFill /> : <HiMiniBars3CenterLeft />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex justify-center items-center gap-6 absolute md:static left-0 top-16 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 z-50 shadow-md md:shadow-none ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a 
            href="#Hero" 
            className="hover:text-[#6f55f2] font-semibold mt-4 md:mt-0 block md:inline" 
            onClick={handleNavLinkClick}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#About" 
            className="hover:text-[#6f55f2] font-semibold mt-4 md:mt-0 block md:inline" 
            onClick={handleNavLinkClick}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#Services" 
            className="hover:text-[#6f55f2] font-semibold mt-4 md:mt-0 block md:inline" 
            onClick={handleNavLinkClick}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            href="#Contact" 
            className="hover:text-[#6f55f2] font-semibold mt-4 md:mt-0 block md:inline" 
            onClick={handleNavLinkClick}
          >
            Contact
          </a>
        </li>
        <li className="mt-4 md:mt-0">
          <button 
            className="bg-[#6f55f2] hover:bg-[#9785f2] text-white px-4 py-2 rounded-md w-full md:w-auto"
            onClick={handleNavLinkClick}
          >
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;