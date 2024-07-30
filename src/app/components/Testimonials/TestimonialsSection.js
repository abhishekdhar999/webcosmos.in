import React from 'react';
import Testimonials from './testimonials';

const data = [
  {
    name: "Michael Gough",
    position: "Web developer at Google",
    image: "/testimonials/author-03.jpg",
    short: "Great Product",
    testimonial: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite.",
  },
  {
    name: "Bonnie Green",
    position: "CEO at Facebook",
    image: "/testimonials/author-03.jpg",
    short: "Great Product",
    testimonial: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite.",
  },
  {
    name: "Lana Byrd",
    position: "CTO at Microsoft",
    image: "/testimonials/author-03.jpg",
    short: "Great Product",
    testimonial: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
];
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-8 lg:px-24">
      {/* Responsive container for the heading */}
      <div className="services-heading flex flex-col md:flex-row justify-between items-center md:items-start mx-auto lg:mx-36 lg:my-24 my-16">
        {/* Left side with the heading */}
        <div className="left text-center md:text-left">
          <h1 className="head-1 text-white my-0 text-5xl md:text-[clamp(3.125rem,15vw,10rem)] leading-tight">
            Users
          </h1>
          <h1 className="head-1 text-white md:ml-36 text-5xl md:text-[clamp(3.125rem,15vw,10rem)] leading-tight">
            Voice
          </h1>
        </div>
        <Testimonials testimonials={data} showViewMore="true"/>
        </div>

        {/* Right side with the icon */}
        <div className="right mt-6 md:mt-36 flex justify-center md:justify-start">
          <span className="text-7xl sm:text-8xl lg:text-9xl text-blue-500">
            <FaMicrophoneAlt />
          </span>
        </div>
      </div>
      
      {/* Testimonials component */}
      <Testimonials />
    </div>
  );
};

export default TestimonialSection;
