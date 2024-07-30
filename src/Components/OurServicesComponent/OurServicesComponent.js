"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import MagicButton from "../MagicButton/MagicButton";

function OurServicesComponent({ loading }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const name = "View All Services";
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
          // markers:true,
        },
      }
    );
    return () => {
      // A return function for killing the animation on component unmount
      pin.kill();
    };
  }, [loading]);

  return (
    <>
      <div className="h-full sm:mb-0 ">
        <div className="services-heading flex flex-col md:flex-row justify-between p-4 lg:mx-36 lg:my-24 my-24">
          <div className="left text-center md:text-left">
            <h1 className="head-1 my-0 text-5xl md:text-[clamp(3.125rem,15vw,10rem)]">
              OUR
            </h1>
            <h1 className="head-1 md:ml-36 text-5xl md:text-[clamp(3.125rem,15vw,10rem)]">
              SERVICES
            </h1>
          </div>

          <div className="right mt-4 md:mt-36 flex justify-center md:justify-start">
            <span className="text-8xl lg:text-9xl">
              <BsBoxArrowInUpRight />
            </span>
          </div>
        </div>
        {!loading && (
          <section className="scroll-section-outer h-full">
            {/* The section up act just as a wrapper. If the trigger (below) is the first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and the animation should alway be two separated refs */}
            <div ref={triggerRef}>
              <div ref={sectionRef} className="scroll-section-inner ">
                {/* First Service Section */}
                <div className="scroll-section">
                  <div className="w-full shadow-lg shadow-purple-400 bg-black flex flex-col md:flex-row rounded-2xl mx-4 md:mx-12 lg:mx-36 my-8">
                    {/* <!-- Left Section --> */}
                    <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-left justify-center mb-4 md:mb-6">
                        Web Design & Development
                      </h1>
                      <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7 sm:block hidden">
                        Building Digital Excellence. Our team of expert
                        developers and designers is dedicated to crafting
                        personalized web solutions that elevate your brand's
                        online presence. We specialize in creating high-quality
                        websites and mobile applications tailored to your
                        unique business needs. By focusing on innovation,
                        reliability, and user experience, we deliver digital
                        platforms that are not only visually appealing but also
                        technically robust, ensuring your brand stands out in
                        the digital landscape.
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
                          <div className="flex sm:flex-wrap flex-col sm:flex-row gap-3 mt-3 md:mt-0">
  <span className="inline-block rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out w-[200px] sm:w-auto">
    E-commerce Website
  </span>
  <span className="inline-block rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out w-[120px] sm:w-auto">
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

                {/* Second Service Section */}
                <div className="scroll-section">
                  <div className="w-full shadow-lg shadow-purple-400 bg-black flex flex-col md:flex-row rounded-2xl mx-1 md:mx-12 lg:mx-36 my-8">
                    {/* <!-- Left Section --> */}
                    <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-left justify-center mb-4 md:mb-6">
                        Digital Marketing
                      </h1>
                      <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7 sm:block hidden">
                        Driving Success Through Strategy. Our dynamic digital
                        marketing team crafts data-driven campaigns that
                        elevate your brand's online presence. We specialize in
                        SEO, social media management, and targeted advertising
                        to boost engagement and conversions. With a focus on
                        creativity and analytics, we deliver impactful
                        strategies tailored to your business needs, ensuring
                        measurable growth and lasting success.
                      </p>

                      {/* <!-- Buttons Section --> */}
                      <div className="btns mt-4">
                        <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
                          {/* <!-- First Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              Motion Graphics
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              Creative Campaigns
                            </span>
                          </div>
                          {/* <!-- Second Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              Marketing Support
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              Search Engine Optimization
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
                      <img
                        className="h-72 md:h-96 md:w-96 object-cover rounded-2xl"
                        src="social-media-5187243_1920-removebg-preview.png"
                        alt="Digital Marketing"
                      />
                    </div>
                  </div>
                </div>

                {/* Third Service Section */}
                <div className="scroll-section">
                  <div className="w-full shadow-lg shadow-purple-400 bg-black flex flex-col md:flex-row rounded-2xl mx-6 md:mx-12 lg:mx-36 my-8">
                    {/* <!-- Left Section --> */}
                    <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-left justify-center mb-4 md:mb-6">
                        Branding
                      </h1>
                      <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7 sm:block hidden ">
                      At the heart of every successful business is a captivating brand. Our branding solutions are tailored to capture your essence and vision, translating them into compelling visuals and messaging. We specialize in crafting logos, taglines, and brand guidelines that not only look great but also communicate your unique story. Whether you're a startup or an established company, our goal is to enhance your brand's presence and connect with your audience on a deeper level.
                      </p>

                      {/* <!-- Buttons Section --> */}
                      <div className="btns mt-4">
                        <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
                          {/* <!-- First Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out sm:w-auto w-[200px]">
                              Brand strategy
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              Tone of voice
                            </span>
                          </div>
                          {/* <!-- Second Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              Visual identity
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              Press/News Release
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
                      <img
                        className="h-72 md:h-96 md:w-96 object-cover rounded-2xl"
                        src="business-3639451-removebg-preview.png"
                        alt="Graphic Design"
                      />
                    </div>
                  </div>
                </div>

                {/* Fourth Service Section */}
                <div className="scroll-section ">
                  <div className="w-full shadow-lg shadow-purple-400 bg-black flex flex-col md:flex-row rounded-2xl mx-1 md:mx-12 lg:mx-36 my-8">
                    {/* <!-- Left Section --> */}
                    <div className="left md:w-1/2 w-full my-8 md:my-24 mx-4 md:mx-6">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-left justify-center mb-4 md:mb-6">
                        App Design & Development
                      </h1>
                      <p className="text-left font-thin text-sm md:text-base leading-6 md:leading-7 sm:block hidden">
                      Transform your ideas into intuitive, user-friendly apps with our app design and development services. Our talented team excels in creating seamless digital experiences across platforms, from iOS to Android, ensuring that your app meets the highest standards of performance and aesthetics. We focus on user-centric designs that enhance engagement and functionality, bringing your vision to life with cutting-edge technology and creativity. Whether it's a startup app or a complex enterprise solution, we deliver apps that not only meet but exceed your expectations.
                      </p>

                      {/* <!-- Buttons Section --> */}
                      <div className="btns mt-4">
                        <div className="flex flex-col md:flex-row md:flex-wrap my-4 md:my-8 gap-3">
                          {/* <!-- First Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              App Development
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              Android Application
                            </span>
                          </div>
                          {/* <!-- Second Row of Buttons --> */}
                          <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              iOS Application
                            </span>
                            <span className="rounded-full border-2 border-gray-300 text-white px-3 py-1 hover:bg-white hover:text-black font-semibold transition-all duration-300 ease-in-out">
                              App Management
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right w-full md:w-1/2 flex justify-center md:justify-end items-center">
                      <img
                        className="h-72 md:h-96 md:w-96 object-cover rounded-2xl"
                        src="https://cdn.pixabay.com/photo/2023/02/26/07/37/android-mobile-app-development-7815022_1280.png"
                        alt="Technology Solutions"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Magic Button Section */}
      <div className="flex justify-center items-center my-6 md:my-8">
        <MagicButton name={name} />
      </div>
    </>
  );
}

export default OurServicesComponent;
