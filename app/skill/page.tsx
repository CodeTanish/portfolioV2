'use client'
import React, { useState } from 'react'
import skillsData from '@/data.json'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SkillItem {
  image: string;
  title: string;
  description: string;
  progress: number;
}

type SkillCategory = 'web development' | 'Cross Platform' | 'Coding';

interface CardProps {
  title: SkillCategory;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    whileTap={{ scale: 0.95 }}
    className="mt-6 flex items-center justify-center h-56 w-72 cursor-pointer border border-gray-700 hover:border-green-500 transition-all duration-300 rounded-2xl text-black dark:text-white text-xl font-semibold shadow-md dark:bg-gray-800"
    onClick={onClick}
  >
    {title}
  </motion.div>
)

interface DetailCardProps {
  title: SkillCategory;
  onBack: () => void;
  skills: SkillItem[];
}

const DetailCard: React.FC<DetailCardProps> = ({ title, onBack, skills }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -30 }} 
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center p-6 w-full max-w-6xl"
  >
    <h2 className="text-3xl font-bold mb-10 tracking-wide text-center text-black dark:text-white">{title}</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
      {skills.map((skill, index) => (
        <motion.div 
          key={index} 
          className="p-6 shadow-xl rounded-xl border border-gray-700 hover:border-green-500 dark:bg-gray-800 transition-all duration-300 flex flex-col items-center text-center"
          whileHover={{ scale: 1.03 }}
        >
          <div
            className="w-16 h-16 mb-4 rounded-full">
            <Image
              src={skill.image}
              alt={skill.title}
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-lg mb-1 text-black dark:text-white">{skill.title}</p>
          <p className="text-sm text-black dark:text-white mb-4">{skill.description}</p>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${skill.progress}%` }}
            />
          </div>
          <p className="text-xs text-black dark:text-white mt-2">{skill.progress}%</p>
        </motion.div>
      ))}
    </div>

    <motion.button 
      onClick={onBack}
      whileHover={{ scale: 1.05 }}
      className="mt-12 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 text-black dark:text-white font-medium shadow-lg transition-all duration-300"
    >
      Back
    </motion.button>
  </motion.div>
)

const Page = () => {
  const [selectedCard, setSelectedCard] = useState<SkillCategory | null>(null)

  const handleCardClick = (title: SkillCategory) => {
    setSelectedCard(title)
  }

  const handleBack = () => {
    setSelectedCard(null)
  }

  return (
    <div className="flex flex-col items-center justify-center text-black dark:text-white min-h-screen">
      <motion.h1 
        className='font-mono font-bold text-4xl mb-10 text-center'
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Professional Skills
      </motion.h1>

      <AnimatePresence mode="wait">
        {selectedCard === null ? (
          <motion.div 
            key="cards" 
            className='flex flex-row justify-center items-center gap-8 flex-wrap max-w-6xl md:flex-row' 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            {Object.keys(skillsData).map((key) => (
              <Card key={key} title={key as SkillCategory} onClick={() => handleCardClick(key as SkillCategory)} />
            ))}
          </motion.div>
        ) : (
          <DetailCard 
            key="detail"
            title={selectedCard} 
            onBack={handleBack} 
            skills={skillsData[selectedCard]} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Page
