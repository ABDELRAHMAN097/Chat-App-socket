"use client"
import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md w-full ">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">LOGO</div>

      {/* Menu Button (for small screens) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseLargeFill /> : <HiMiniBars3CenterLeft />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex justify-center items-center gap-6 absolute md:static left-0 top-16 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li><a href="#Hero" className="hover:text-[#6f55f2] font-semibold">Home</a></li>
        <li><a href="#About" className="hover:text-[#6f55f2] font-semibold">About</a></li>
        <li><a href="#Services" className="hover:text-[#6f55f2] font-semibold">Services</a></li>

        <li><a href="#Contact" className="hover:text-[#6f55f2] font-semibold">Contact</a></li>
        <button className="md:block bg-[#6f55f2] hover:bg-[#9785f2] text-white px-4 py-2 rounded-md">
        Register
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
