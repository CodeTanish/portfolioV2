'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 md:px-12 xl:px-36 py-8 gap-8">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-300 mb-4">
          Tanish Rastogi
        </h1>
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-700 dark:text-gray-300">
          Full Stack Web Developer
          <br className="hidden sm:block" />
          React | Next.js | Node.js | Express.js | MongoDB
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex items-center justify-center"
      >
        <Image
          src="/images/Profile.jpg"
          alt="Tanish Rastogi"
          width={400}
          height={400}
          className="rounded-full border border-none w-60 sm:w-72 md:w-80 lg:w-96 xl:w-[450px] h-auto"
        />
      </motion.div>
    </div>
  );
}
