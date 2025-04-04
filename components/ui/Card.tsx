"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex justify-center items-center text-center h-36 relative text-black dark:text-white">
      <motion.div
        className="flex flex-col items-center justify-center relative w-[12rem] h-[12rem] border border-transparent hover:border-[#ff0025] hover:duration-300 hover:transition-all hover:ease-in rounded-2xl p-4 overflow-hidden cursor-pointer text-center text-black dark:text-white"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)} 
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered || isClicked ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
          className="text-lg font-semibold text-center"
        >
          {title}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: isHovered || isClicked ? "110%" : "100%", 
          opacity: isHovered || isClicked ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="absolute top-0 left-0 w-[16rem] h-auto border border-black dark:border-white flex flex-col items-center justify-center rounded-2xl backdrop-blur-md z-10"
      >
        <button
          className="absolute top-1 right-1 p-2 rounded"
          onClick={(e) => {
            e.stopPropagation(); 
            setIsClicked(false); 
          }}
        >
          X
        </button>
        <p className="text-center p-4 rounded-2xl">{content}</p>
      </motion.div>
    </div>
  );
};

export default Card;
