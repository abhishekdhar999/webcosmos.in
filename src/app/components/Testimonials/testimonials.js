"use client";
import { useState } from "react";

// Testimonials Data
const testimonials = [
  {
    name: "Michael Gough",
    position: "Web developer at Google",
    image: "/testimonials/author-03.jpg",
    short: "Great Product",
    testimonial:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite.",
  },
  {
    name: "Bonnie Green",
    position: "CEO at Facebook",
    image: "/testimonials/author-03.jpg",
    short: "Innovative Solution",
    testimonial:
      "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite.",
  },
  {
    name: "Lana Byrd",
    position: "CTO at Microsoft",
    image: "/testimonials/author-03.jpg",
    short: "Highly Recommend",
    testimonial:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
  {
    name: "Mark J.",
    position: "Lead Designer at Apple",
    image: "/testimonials/author-03.jpg",
    short: "Fantastic Experience",
    testimonial:
      "The seamless integration of Flowbite components made our development process so much more efficient. Highly recommended for teams that value speed and quality.",
  },
];

const Testimonials = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // <div className="text-white bg-gray-900 p-8 lg:p-12 rounded-lg shadow-lg shadow-gray-50 mx-4 sm:mx-8 md:mx-12 my-8">
      <div className="flex flex-col lg:flex-row">
        {/* Testimonials Navigation */}
        <div className="w-full lg:w-1/3 lg:pr-6 flex flex-col space-y-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`flex items-start p-4 rounded-lg text-left transition-all duration-300 ease-in-out ${
                index === activeIndex ? "bg-gray-700" : "bg-gray-800"
              } hover:bg-gray-700`}
              onMouseOver={() => setActiveIndex(index)}
            >
              <img
                src={`${basePath}${testimonial.image}`}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <div className="font-bold text-lg md:text-xl pb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm">{testimonial.position}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Testimonial Display */}
        <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
          <blockquote className="p-4 lg:p-6 bg-gray-800 rounded-lg">
            <h3 className="font-bold text-xl md:text-2xl mb-3">
              {testimonials[activeIndex].short}
            </h3>
            <p className="text-base md:text-xl italic mb-4 font-light">
              &quot;{testimonials[activeIndex].testimonial}&quot;
            </p>
          </blockquote>
        </div>
      </div>
    // </div>
  );
};

export default Testimonials;
