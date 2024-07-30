"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedList from '@/Components/AnimatedList/AnimatedList';
import MagicButton from '@/Components/MagicButton/MagicButton';
import dynamic from 'next/dynamic';
const Model = dynamic(() => import('@/Components/Model/Model'), { ssr: false });
gsap.registerPlugin(TextPlugin);
const name = "Start Your Project"

export default function Homepage() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* PreLoader Component */}
      {/* <PreLoader /> */}

      {/* Main Container */}
      <div className='relative flex flex-col items-center justify-center h-screen p-4 sm:mt-[-45px] mt-[105px] '>

        {/* Rotating Text in Circle */}
        <div className="hidden lg:block rotating-text-container absolute top-4 right-4 md:right-16 lg:right-24">
          <div className="rotating-text">
            <span>I</span>
            <span>g</span>
            <span>n</span>
            <span>i</span>
            <span>t</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>t</span>
            <span>h</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>E</span>
            <span>x</span>
            <span>t</span>
            <span>r</span>
            <span>a</span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>a</span>
            <span>r</span>
            <span>y</span>
            <span>&nbsp;</span>
            <span>W</span>
            <span>e</span>
            <span>b</span>
            <span>&nbsp;</span>
            <span>C</span>
            <span>o</span>
            <span>s</span>
            <span>m</span>
            <span>i</span>
            <span>c</span>
            <span className='hidden'>c</span>
          </div>
        </div>

        {/* Overlay text for large screens */}
        <h1 ref={headingRef} className='text-4xl md:text-7xl font-extrabold font-serif text-gray-300 absolute top-[150px] md:top-[200px] mx-4 md:mx-12 left-4 md:left-[50px] z-10 hidden sm:block'>
          <span className='flex'>
            WEB C <span className='mr-[-60px] md:mr-[-110px] ml-[-60px] md:ml-[-110px] mt-[-25px] md:mt-[-55px]'><img className='h-[90px] md:h-[180px]' src="Untitled_design__4_-removebg-preview (1).png" alt="Logo" /></span> SMIC
          </span>
        </h1>
        
        <h1 className='text-base md:text-lg font-extrabold font-serif text-gray-300 absolute top-[220px] md:top-[300px] left-4 md:left-[50px] mx-8 md:mx-16 z-10 hidden md:block'>
          <AnimatedList words={['Word1', 'Word2', 'Word3', 'Word4', 'Word5']} />
        </h1>
{/* for mobile */}
        <div className='text-container flex  items-center mt-[-80px] sm:hidden '>
          <h1 className='emerging-text text-3xl md:text-6xl font-extrabold font-serif text-blue-300 bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text mt-4'>
            WEB COSMIC
          </h1>
        </div>
        {/* 3D Model */}
        <div className='flex-1 w-full sm:mt-0  md:h-[600px] md:w-[600px] relative'>
          {/* <Blob /> */}
          <Model />
        </div>

        {/* Responsive text for mobile view */}
        

        <div className='absolute left-8 md:left-24 bottom-20 md:bottom-32'>
          <div className='gradient-border flex bg-transparent border-2 border-gray-300 p-3 pl-6 pr-6 rounded-full'>
            <MagicButton name={name} />
          </div>
        </div>

        {/* Right Bottom Text */}
        <div className='absolute right-8 md:right-20 bottom-24 md:bottom-36 w-3/4 md:w-1/3 text-left text-gray-300 bg-black hidden md:block font-thin rounded-xl bg-opacity-50 p-4 shadow-lg shadow-[#c367ca]'>
          Lets face it, first impressions matter. Your websites an opportunity to wow your audience, so why choose bad design? Brands win over fans when theyre brave enough to go beyond their creative comfort zone.
        </div>
      </div>
    </>
  );
}
