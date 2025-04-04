"use client"

import React, { useState } from 'react';
import HoverCard from '@/components/ui/Card';
import { div } from 'framer-motion/client';

const AboutPage: React.FC = () => {
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:text-white text-black">
      <div className="h-[80vh] w-full rounded-3xl p-6 max-w-4xl animate-fadeIn">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg mb-4 text-center">
          Hello! I'm Tanish Rastogi, and this is a brief overview of my life achievements.
        </p>
        <div className="space-y-4 flex flex-col flex-wrap items-center justify-center mt-20">
          <HoverCard
            title="Education"
            content={
                <div className='flex flex-col justify-around text-start'>
                    <h3 className='text-xl text-center font-mono my-2'>School</h3>
                    <p>K.C.M public School, Moradabad</p>
                    <p>Class of 2020</p>
                    <h3 className='text-xl text-center font-mono my-2'>Diploma College</h3>
                    <p>Govt. PolyTechnic, Rampur</p>
                    <p>class of 2023</p>
                    <h3 className='text-xl text-center font-mono my-2'>B-Tech College</h3>
                    <p>Jss Academy of Technical Education, Noida</p>
                    <p>Class of 2026</p>

                </div>
            }
          />
          <HoverCard
            title="Certification"
            content={
              <div className='flex flex-col justify-around text-start'>
              <h3 className='text-xl text-center font-mono my-2'>Industrial Training</h3>
              <p>Basic knowledge of Trubo Generator</p>
              <p>B.H.E.L, Haridwar</p>
              <h3 className='text-xl text-center font-mono my-2'>Coding Certificate</h3>
              <p>Java basic to advance</p>
              <p>Solo Learn</p>
              <p>Object Orientation Programming in java</p>
              <p>Solo Learn</p>


              </div>
            }
          />
          <HoverCard
            title="Hobbies"
            content="Coding, Playing Video Games, Travelling."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
