import React from 'react';
// import Earth from '@/Components/Earth/Earth';
import SmoothScroller from '@/Components/SmoothScroller/SmoothScroller';
import dynamic from 'next/dynamic';
import Projects from '@/Components/Projects/Projects';
import { LuArrowDownRightFromCircle } from 'react-icons/lu';

export default function Productspage() {
  const Earth = dynamic(() => import('@/Components/Earth/Earth'), {
    ssr: false,
    loading: () => (
      <img
        src="https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fcolor.jpg&w=2048&q=75"
        alt="Loading..."
        className="w-full max-w-xs md:max-w-md mx-auto my-12"
      />
    ),
  });

  return (
    <>
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center text-center mx-4 sm:mx-8 md:mx-12 lg:mx-24 my-8 lg:my-12 overflow-hidden">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin">
          We engineer one-of-a-kind websites with a focus on these core principles
        </h1>
        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-8 lg:mt-0 lg:ml-8">
          <LuArrowDownRightFromCircle />
        </span>
      </div>

      {/* Main Content Section */}
      <div>
        <SmoothScroller>
          <main className="main">
            <Earth />
            <Projects />
          </main>
        </SmoothScroller>
      </div>
    </>
  );
}
