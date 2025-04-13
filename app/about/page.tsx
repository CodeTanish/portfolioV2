"use client";

import React from 'react';
import { motion } from 'framer-motion';
import rawAboutSections from '@/about.json';
import { Briefcase, GraduationCap, Star } from 'lucide-react';

const iconMap = {
  GraduationCap: <GraduationCap className="w-8 h-8 text-indigo-500" />,
  Briefcase: <Briefcase className="w-8 h-8 text-green-500" />,
  Star: <Star className="w-8 h-8 text-yellow-500" />,
};

type AboutItem = {
  label: string;
  value: string;
};

type AboutSection = {
  icon: keyof typeof iconMap;
  title: string;
  items: AboutItem[];
};

const aboutSections = rawAboutSections as AboutSection[];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black dark:text-white">
          About Me
        </h1>
        <p className="text-lg md:text-xl mb-12 text-center max-w-2xl mx-auto">
  Hi, I&#39;m Tanish Rastogi — here’s a concise look at my academic journey, certifications, and personal interests.
</p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                {iconMap[section.icon]}
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {item.label}: 
                    </span>
                    <span className="ml-1 text-gray-600 dark:text-gray-400">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
