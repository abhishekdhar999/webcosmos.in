"use client";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Blob from "../Blob/Blob";
import Marquee from "../Marquee/Marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Styled component for a wrapper


export default function BlobMarquee() {
  const text = "WEB COSMIC 2023* WEB COSMIC 2023*";
  const slideRef = useRef(null); // Reference to the Marquee element
const trigRef =  useRef(null)
  // useEffect(() => {
  //   const element = slideRef.current; // Accessing the DOM node

  //   gsap.to(element, {
  //     y: -300, // Moves the element 200 pixels down
  //     duration: 4, // Animation duration
  //     ease: "none", // Easing function for a linear motion
  //     scrollTrigger: {
  //       trigger: slideRef.current, // Element to trigger the animation
  //       start: "top bottom+=1000", // Animation starts when the trigger reaches the middle of the viewport
  //       end: "bottom top+=100", // Animation ends when the bottom of the trigger reaches the top of the viewport
  //       scrub: 2.5, // Smoothly scrubs the animation in sync with scroll
  //        markers: true, // Uncomment to see the start and end markers for debugging
  //     },
  //   });

  //   return () => {
  //     // Cleanup the animation on component unmount
  //     // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <>
      <div ref={trigRef} className=" overflow-y-hidden"></div>
        <div className="relative">
          <Blob />
          <span ref={slideRef} className=" absolute top-[25%] overflow-hidden">
            
            <Marquee className="overflow-hidden" text={text} />
            <p></p>
          </span>
        </div>
      

    </>
  );
}
