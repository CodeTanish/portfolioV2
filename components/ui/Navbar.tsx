"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="sticky top-0 mt-4 min-h-14 w-full h-14 flex items-center justify-between text-xl backdrop-blur-md text-black dark:text-white">
      <div className="ml-4 md:ml-14 flex flex-row items-center space-x-2 sm:space-x-4">
        <Image
          src="/images/Profile.jpg"
          alt="Profile Picture"
          width={30}
          height={30}
          className="border border-none rounded-full"
        />
        <span className="text-sm sm:text-base md:text-xl">CodeTanish</span>
      </div>
      <div>
        <ul className="mr-4 md:mr-14 flex flex-row space-x-2 sm:space-x-4">
          <li className="text-sm sm:text-base md:text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm sm:text-base md:text-xl hover:bg-gradient-to-r from-pink-400 from-33% via-pink-600 via-33% to-red-500 to-34% hover:bg-clip-text hover:text-transparent group-hovhover:bg-clip-text hover:text-transparenter:transition-all transition-all duration-500 ease-out bg-clip-text ">
            <Link href="/about">
              About 
            </Link>
          </li>
          <li className="text-sm sm:text-base md:text-xl hover:bg-gradient-to-r from-emerald-400 from-33% via-emerald-600 via-33% to-green-500 to-34% hover:bg-clip-text hover:text-transparent group-hovhover:bg-clip-text hover:text-transparenter:transition-all transition-all duration-500 ease-out bg-clip-text">
            <Link href="/skill">Skills</Link>
          </li>
          <li className="text-sm sm:text-base md:text-xl hover:bg-gradient-to-r from-violet-400 from-33% via-violet-600 via-33% to-blue-500 to-34% hover:bg-clip-text hover:text-transparent group-hovhover:bg-clip-text hover:text-transparenter:transition-all transition-all duration-500 ease-out bg-clip-text">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
