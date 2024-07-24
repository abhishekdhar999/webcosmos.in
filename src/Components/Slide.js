"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin)
export default function Slide() {
  const headingRef = useRef(null);

  useEffect(() => {
    // const h1 = headingRef.current;
    // const text = h1.innerText.split('');

    // const formattedText = text.map((char, idx) => {
    //   if (idx < 4) {
    //     return `<span class="charleft">${char}</span>`;
    //   } else {
    //     return `<span class="charright">${char}</span>`;
    //   }
    // }).join('');

    // h1.innerHTML = formattedText;

    // gsap.fromTo(".charleft", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: "power2.out" });
    // gsap.fromTo(".charright", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: "power2.out", delay: 0.5 });
    const h1 = headingRef.current;
    //  const yourElement = h1.innerText.split('');

    gsap.to(h1, {
        duration: 4,
        text: {
          value: "We engineer one-of-a-kind websites with a focus on three core principles",
          newClass: "class2",
          delimiter: " ",
        },
      });
  }, []);

  return (
    <div className="flex justify-center items-center text-center mx-52 lg:mx-72 my-12 mb-40">
      <h1 ref={headingRef} className="text text-6xl font-thin">
       web cosmos
      </h1>
    </div>
  );
}
