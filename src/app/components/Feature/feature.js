"use client";
import React, { useRef, useEffect, useState } from 'react';
import './styles.css'; 

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    description: "Everything on the web from a simple Website to enterprise Web Apps",
    image: "/test.png",
    href: "#"
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    description: "Everything on the web from a simple Website to enterprise Web Apps",
    image: "/test.png",
    href: "#"
  },
  {
    id: 3,
    title: "Improve your customer experience",
    description: "Everything on the web from a simple Website to enterprise Web Apps",
    image: "/test.png",
    href: "#"
  },
  {
    id: 4,
    title: "New Feature",
    description: "Description of the new feature",
    image: "/test.png",
    href: "#"
  },
  {
    id: 5,
    title: "this is no. 5 Improve your customer experience",
    description: "Everything on the web from a simple Website to enterprise Web Apps",
    image: "/test.png",
    href: "#"
  },
  {
    id: 6,
    title: "this is no. 6 Improve your customer experience",
    description: "Description of the new feature",
    image: "/test.png",
    href: "#"
  }
];

const MyFeature = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth / 2;
      const clientWidth = scrollContainer.clientWidth;
      scrollContainer.scrollLeft = scrollWidth + (posts.length * clientWidth) / 2.4 - clientWidth / 2.4;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth / 2; 
    const clientWidth = scrollContainer.clientWidth;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      setScrollPosition(scrollLeft);

      // Reset scroll position to create an infinite loop
      if (scrollLeft >= scrollWidth + clientWidth / 2) {
        scrollContainer.scrollLeft = scrollLeft - scrollWidth;
      } else if (scrollLeft <= clientWidth / 2) {
        scrollContainer.scrollLeft = scrollWidth + scrollLeft - clientWidth / 2;
      }
    };

    const handleResize = () => {
      updateScrollPosition();
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    updateScrollPosition();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateScale = (index, scrollLeft, clientWidth) => {
    const cardWidth = clientWidth / 3; // Assuming 3 cards are visible at a time
    const centerPosition = scrollLeft + clientWidth / 2.4;
    const cardCenter = index * cardWidth + cardWidth / 3.3;

    const distance = Math.abs(centerPosition - cardCenter);
    const scale = 1 - Math.min(distance / clientWidth * 2, 1); // Adjust scaling factor as needed
    return scale;
  };

  return (
    <div className="container mx-auto px-4">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll hide-scrollbar -mx-4 px-4 space-x-4 horizontal-scroll"
      >
        {posts.concat(posts).concat(posts).map((post, index) => (
          <div
            key={index}
            className="inline-block flex-none w-1/3 px-2 mb-8"
            style={{
              transform: `scale(${calculateScale(
                index,
                scrollContainerRef.current?.scrollLeft || 0,
                scrollContainerRef.current?.clientWidth || 1
              )})`,
              transition: 'transform 0.2s ease'
            }}
          >
            <a href={post.href}>
              <div
                className="bg-cover bg-center h-64 rounded-lg shadow-md"
                style={{ backgroundImage: `url(${basePath}${post.image})` }}
              >
                <div className="bg-black bg-opacity-50 h-full rounded-lg p-4 flex flex-col justify-end">
                  <h2 className="text-xl font-bold text-white mt-2">{post.title}</h2>
                  <p className="text-sm text-gray-300">{post.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeature;
