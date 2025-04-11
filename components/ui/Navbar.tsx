"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 mt-4 min-h-14 w-full h-14 backdrop-blur-md text-black dark:text-white">
      <div className="flex items-center justify-between px-4 md:px-14 h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Image
            src="/images/Profile.jpg"
            alt="Profile Picture"
            width={30}
            height={30}
            className="border border-none rounded-full"
          />
          <span className="text-sm sm:text-base md:text-xl">CodeTanish</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 text-sm sm:text-base md:text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-pink-500 transition-all">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-emerald-500 transition-all">
            <Link href="/skill">Skills</Link>
          </li>
          <li className="hover:text-blue-500 transition-all">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-4 py-4 bg-white dark:bg-black text-sm sm:text-base transition-all duration-300 ease-in-out">
          <li>
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link href="/skill" onClick={toggleMenu}>Skills</Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
