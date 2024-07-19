"use client";
import { useState } from 'react';

const testimonials = [
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

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-white p-8 rounded-lg mx-auto">
      <div className="flex">
        <div className="w-1/3 pr-6 flex flex-col space-y-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`flex items-start p-4 rounded-lg text-left transition-all duration-300 ease-in-out ${
                index === activeIndex ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={testimonial.image} alt={testimonial.name} className="w-8 h-8 rounded-full" />
              <div className="ml-4">
                <div className="font-bold text-xl pb-2">{testimonial.name}</div>
                <div className="text-sm">{testimonial.position}</div>
              </div>
            </button>
          ))}
          <button className="p-8 text-left text-blue-500 mt-2 hover:underline">View other 20 testimonials →</button>
        </div>
        <div className="w-2/3">
          <blockquote className="p-6">
          <h3 class="font-bold text-2xl mb-3">{testimonials[activeIndex].short}</h3>
            <p className="text-xl italic mb-4 font-light">&quot;{testimonials[activeIndex].testimonial}&quot;</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
