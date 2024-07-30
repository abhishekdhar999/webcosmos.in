// Marquee.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the marquee animation
const marquee = keyframes`
  0% {
    transform: translateX(0); // Start position
  }
  100% {
    transform: translateX(-50%); // End position (halfway through the repeated text)
  }
`;

// Style for the Marquee Container
const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden; // Ensures overflow content is hidden
  white-space: nowrap; // Prevents text wrapping
  box-sizing: border-box;
  position: relative; // Relative positioning for absolute children
  display: flex; // Use flexbox for alignment
  align-items: center;
`;

// Style for the Marquee Text
const MarqueeText = styled.div`
  display: inline-block; // Allow inline block properties
  animation: ${marquee} 15s linear infinite; // Adjust speed for continuous motion
  /* Double the width to enable continuous loop without gap */
  width: 200%; 
  /* Align the text to center */
  display: flex;
  align-items: center;
`;

// Marquee Component
const Marquee = ({ text }) => {
  return (
    <MarqueeContainer>
      <MarqueeText>
        {/* Repeat the text to create seamless scrolling */}
        <span className='head-1 text-8xl mt-24 '>
          {text} &nbsp; {text} &nbsp; {/* Repeat twice for seamless transition */}
        </span>
      </MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee;

// Usage
// <Marquee text="WEB COSMIC 2023* WEB COSMIC 2023* WEB COSMIC 2023*" />


