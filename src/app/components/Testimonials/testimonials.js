"use client";
import React, { useState } from 'react';

const Testimonials = ({ testimonials, showViewMore }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
          {showViewMore && (<a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/testimonial`} className="p-8 text-left text-blue-500 mt-2 hover:underline">View other 20 testimonials →</a>)}
        </div>
        <div className="w-2/3">
          <blockquote className="p-6">
            <h3 className="font-bold text-2xl mb-3">{testimonials[activeIndex].short}</h3>
            <p className="text-xl italic mb-4 font-light">&quot;{testimonials[activeIndex].testimonial}&quot;</p>
          </blockquote>
        </div>
      </div>
    // </div>
  );
};

export default Testimonials;
