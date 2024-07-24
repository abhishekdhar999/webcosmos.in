"use client";

import React, { useEffect, useRef,useState } from 'react';
import Galaxy from '@/Components/Galaxy/Galaxy';
import Navbar from '../Navbar/Navbar';
import Blob from '@/Components/Blob/Blob';
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import PreLoader from '@/Components/PreLoader/PreLoader';
import { FaLightbulb } from "react-icons/fa";
import { Object1 } from '@/Components/Object1/Object1';
import { Canvas } from '@react-three/fiber';
import CurvedText from '@/Components/CurverText/CurvedText';
import ScrollerObj from '@/Components/ScrollerObj/ScrollerObj';
import AnimatedList from '@/Components/AnimatedList/AnimatedList';
import ImageScroller from '@/Components/ImageScroller/ImageScroller';
import { OrbitControls, Stars } from '@react-three/drei';
import CardThreeD from '@/Components/CardThreeD/CardThreeD';
import Marquee from '@/Components/Marquee/Marquee';
import MagicButton from '@/Components/MagicButton/MagicButton';
import dynamic from 'next/dynamic';
import { FaArrowRight } from "react-icons/fa";
import Slide from '@/Components/Slide';
import CircularText from '@/Components/CircularText/CircularText';
const Model = dynamic(() => import('@/Components/Model/Model'), { ssr: false });
gsap.registerPlugin(TextPlugin);

const words = ['web', 'cosmic', 'मैं', 'आपका', 'हार्दिक','स्वागत','है'];
const cards = [
    {
      id: 1,
      title: 'HEAD OF DESIGN',
      image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      position: [-5, 0, 0],
    },
    {
      id: 2,
      title: 'FRONT-END DEVELOPER',
      image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      position: [0, 0, 0],
    },
    {
      id: 3,
      title: 'CREATIVE DIRECTOR',
      image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      position: [5, 0, 0],
    },
  ];

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


  useEffect(() => {
    var clutter = "";
    var  h1 = headingRef
    console.log(h1);
    var splittedText = headingRef.current.innerText.split('');
    console.log(splittedText)
    splittedText
      .map((char, idx) => {
        if (idx < 4) {
         clutter += `<span class="charleft">${char}</span>`;
        } else {
          clutter += `<span class="charright">${char}</span>`;
        }
      })
      .join('');
h1.current.innerHTML = clutter;
console.log(h1.current.innerHTML)
  const tl =   gsap.timeline()
     tl.fromTo(headingRef.current.querySelectorAll('h1 .charleft'), 
      { y: 500, opacity: 1 },
      { y: 0, opacity: 1, duration: 0.6,delay:0.5,stagger:0.15, ease: 'power2.out' })
       tl.fromTo(headingRef.current.querySelectorAll('.charright'), 
        { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2,delay:0,stagger:-0.15 ,ease: 'power2.out' })
  }, []);
  

  return (
    <>
    
      <Navbar /> 
      <div className='relative flex flex-col items-center justify-center h-screen p-4 mt-[-65px]'>
    {/* Rotating Text in Circle */}
    {/* <div className="rotating-circle absolute top-4 right-4">
    <div className="circle-text">
      <span>M</span>
      <span>a</span>
      <span>k</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
      <span>&nbsp;</span>
      <span>B</span>
      <span>r</span>
      <span>a</span>
      <span>n</span>
      <span>d</span>
      <span>s</span>
      <span>&nbsp;</span>
      <span>B</span>
      <span>e</span>
      <span>t</span>
      <span>t</span>
      <span>e</span>
      <span>r</span>
    </div>
  </div> */}

    {/* Overlay text for large screens */}
    <h1 ref={headingRef} className='text-7xl font-extrabold font-serif text-gray-300 absolute top-[200px] mx-12 left-[50px] z-10 hidden md:block'>
      WEB COSMIC
    </h1>
    <h1 className='text-lg font-extrabold font-serif text-gray-300 absolute top-[300px] left-[50px] mx-16 z-10 hidden md:block'>
      <AnimatedList words={['Word1', 'Word2', 'Word3', 'Word4', 'Word5']} />
    </h1>

    {/* 3D Model */}
    <div className='flex-1 h-[300px] w-[300px] md:h-[600px] md:w-[600px] relative'>
      {/* <Blob /> */}
      <Model />
    </div>

    {/* Responsive text for mobile view */}
    <div className='text-container flex flex-col items-center mt-4 md:hidden'>
      <h1 className='emerging-text text-4xl font-extrabold font-serif text-blue-300'>
        WEB COSMIC
      </h1>
    </div>

    <div className='absolute left-24 bottom-32'>
      <div className='gradient-border flex bg-black border-2 border-gray-300 p-3 pl-6 pr-6 rounded-full'>
        <MagicButton />
      </div>
    </div>

    {/* Right Bottom Text */}
    <div className='absolute right-20 bottom-36 w-1/3 text-left text-gray-300 bg-black md:block hidden font-thin rounded-xl bg-opacity-50 p-4 shadow-lg' style={{ boxShadow: '0 4px 8px rgba(255, 0, 0, 0.5)' }}>
      Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why choose bad design? Brands win over fans when they’re brave enough to go beyond their creative comfort zone.
    </div>
</div>


 
    </>
  );
}
