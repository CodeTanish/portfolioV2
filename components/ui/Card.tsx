"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Card: React.FC = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="flex justify-center items-center h-36">
            <motion.div
                className="relative w-28 h-28 bg-gray-800 rounded-2xl p-4 overflow-hidden cursor-pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => setIsClicked(true)}
            >
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered || isClicked ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-lg font-semibold"
                >
                    {props.}
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: isHovered || isClicked ? "0%" : "-100%", opacity: isHovered || isClicked ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="relative top-100 left-800 w-28 h-28 bg-gray-700 p-4 text-white flex flex-col items-center justify-center rounded-2xl ml-4"
            >
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsClicked(false);
                    }}
                >
                    Close
                </button>
                <p className="text-center">This is the revealed content!</p>
            </motion.div>
        </div>
    );
};

export default Card;