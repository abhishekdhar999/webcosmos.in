"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { div } from "three/examples/jsm/nodes/Nodes";
import { BsBoxArrowInUpRight } from "react-icons/bs";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          markers:true,
        },
        markers:true,
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
<>

<div className="services-heading flex flex-col md:flex-row justify-between mx-auto  lg:mx-36 lg:my-24 my-24">
      <div className="left text-center md:text-left">
        <h1 className="head-1 my-0 text-5xl md:text-[clamp(3.125rem,15vw,10rem)]">
          OUR
        </h1>
        <h1 className="head-1  md:ml-36  text-5xl md:text-[clamp(3.125rem,15vw,10rem)]">
          SERVICES
        </h1>
      </div>

      <div className="right mt-4 md:mt-36 flex justify-center md:justify-start">
        <span className="text-8xl lg:text-9xl">
          <BsBoxArrowInUpRight />
        </span>
      </div>
    </div>

    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section ">
          <div className="w-full bg-gray-600 flex flex-col md:flex-row rounded-2xl mx-6 md:mx-12 my-8">
  {/* <!-- Left Section --> */}
  <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
    <h1 className="text-2xl md:text-3xl font-bold text-left justify-center mb-4 md:mb-6">
      Web Design & Development
    </h1>
    <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7">
      Building Digital Excellence. Our expert developers offer personalized
      solutions, delivering high-quality web and mobile applications designed to
      enhance your brand’s digital presence. We focus on innovation, reliability,
      and delivering exceptional results that exceed expectations.
    </p>

    {/* <!-- Buttons Section --> */}
    <div className="btns mt-4">
      <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
        {/* <!-- First Row of Buttons --> */}
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            Creative Web Design
          </span>
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            Web Development
          </span>
        </div>
        {/* <!-- Second Row of Buttons --> */}
        <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            E-commerce
          </span>
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            WordPress
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Section --> */}
  <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
    <img
      className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-2xl"
      src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
      alt="Web Development"
    />
  </div>
</div>


          </div>
          <div className="scroll-section ">
          <div className="w-full bg-gray-600 flex flex-col md:flex-row rounded-2xl mx-6 md:mx-12 my-8">
  {/* <!-- Left Section --> */}
  <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
    <h1 className="text-2xl md:text-3xl font-bold text-left justify-center mb-4 md:mb-6">
     Digital Marketing
    </h1>
    <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7">
      Building Digital Excellence. Our expert developers offer personalized
      solutions, delivering high-quality web and mobile applications designed to
      enhance your brand’s digital presence. We focus on innovation, reliability,
      and delivering exceptional results that exceed expectations.
    </p>

    {/* <!-- Buttons Section --> */}
    <div className="btns mt-4">
      <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
        {/* <!-- First Row of Buttons --> */}
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            Creative Web Design
          </span>
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            Web Development
          </span>
        </div>
        {/* <!-- Second Row of Buttons --> */}
        <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            E-commerce
          </span>
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            WordPress
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Section --> */}
  <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
    <img
      className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-2xl"
      src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
      alt="Web Development"
    />
  </div>
</div>

          </div>


          <div className="scroll-section ">
          <div className="w-full bg-gray-600 flex flex-col md:flex-row rounded-2xl mx-6 md:mx-12 my-8">
  {/* <!-- Left Section --> */}
  <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
    <h1 className="text-2xl md:text-3xl font-bold text-left justify-center mb-4 md:mb-6">
      App Design & Development
    </h1>
    <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7">
      Building Digital Excellence. Our expert developers offer personalized
      solutions, delivering high-quality web and mobile applications designed to
      enhance your brand’s digital presence. We focus on innovation, reliability,
      and delivering exceptional results that exceed expectations.
    </p>

    {/* <!-- Buttons Section --> */}
    <div className="btns mt-4">
      <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
        {/* <!-- First Row of Buttons --> */}
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            Creative Web Design
          </span>
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            Web Development
          </span>
        </div>
        {/* <!-- Second Row of Buttons --> */}
        <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            E-commerce
          </span>
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            WordPress
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Section --> */}
  <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
    <img
      className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-2xl"
      src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
      alt="Web Development"
    />
  </div>
</div>

          </div>

          
          <div className="scroll-section ">
          <div className="w-full bg-gray-600 flex flex-col md:flex-row rounded-2xl mx-6 md:mx-12 my-8">
  {/* <!-- Left Section --> */}
  <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
    <h1 className="text-2xl md:text-3xl font-bold text-left justify-center mb-4 md:mb-6">
      Branding
    </h1>
    <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7">
      Building Digital Excellence. Our expert developers offer personalized
      solutions, delivering high-quality web and mobile applications designed to
      enhance your brand’s digital presence. We focus on innovation, reliability,
      and delivering exceptional results that exceed expectations.
    </p>

    {/* <!-- Buttons Section --> */}
    <div className="btns mt-4">
      <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
        {/* <!-- First Row of Buttons --> */}
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            Creative Web Design
          </span>
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            Web Development
          </span>
        </div>
        {/* <!-- Second Row of Buttons --> */}
        <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            E-commerce
          </span>
          <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
            WordPress
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Right Section --> */}
  <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
    <img
      className="h-64 w-64 md:h-96 md:w-96 object-cover rounded-2xl"
      src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
      alt="Web Development"
    />
  </div>
</div>

          </div>
        </div>
      </div>
    </section>

<div className="btn flex justify-center  my-36">
<button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
<path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
</svg>
visit all services
</button>
</div>
    </>
  );
}

export default ScrollSection;