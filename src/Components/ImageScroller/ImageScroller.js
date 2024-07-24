"use client";
import React, { useRef, useEffect, useState } from 'react';

const posts = [
  {
    id: 1,
    title: "DESIGN",
    description: "Everything on the web from a simple Website to enterprise Web Apps",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    href: "#"
  },
  {
    id: 2,
    title: "E-COMMERCE",
    description: "Everything on the web from a simple Website to enterprise Web Apps",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    href: "#"
  },
  {
    id: 3,
    title: "DEVELOPMENT",
    description: "Everything on the web from a simple Website to enterprise Web Apps",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    href: "#"
  },
  {
    id: 4,
    title: "",
    description: "Description of the new feature",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    href: "#"
  },
  {
    id: 5,
    title: "this is no. 5 Improve your customer experience",
    description: "Everything on the web from a simple Website to enterprise Web Apps",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    href: "#"
  },
  {
    id: 6,
    title: "this is no. 6 Improve your customer experience",
    description: "Description of the new feature",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    href: "#"
  }
];

const ImageScroller = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      setScrollPosition(scrollLeft);
    };

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainer.offsetLeft);
      setScrollLeft(scrollContainer.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scroll speed multiplier
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeaveOrUp);
    scrollContainer.addEventListener('mouseup', handleMouseLeaveOrUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeaveOrUp);
      scrollContainer.removeEventListener('mouseup', handleMouseLeaveOrUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  const calculateScale = (index, scrollLeft, clientWidth) => {
    const cardWidth = clientWidth / 3; // Assuming 3 cards are visible at a time
    const centerPosition = scrollLeft + clientWidth / 2;
    const cardCenter = index * cardWidth + cardWidth / 2;

    const distance = Math.abs(centerPosition - cardCenter);
    const scale = 1 - Math.min(distance / clientWidth * 1.5, 0.8); // Adjust scaling factor as needed
    return scale;
  };

  return (
    <div className="container mt-[-200px] mx-auto px-4">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll hide-scrollbar -mx-4 px-4 space-x-4 horizontal-scroll cursor-grab"
      >
        {posts.concat(posts).concat(posts).map((post, index) => (
          <div
            key={index}
            className="inline-block flex-none w-1/3 mb-8"
            style={{
              transform: `scale(${calculateScale(
                index,
                scrollPosition,
                scrollContainerRef.current?.clientWidth || 1
              )})`,
              transition: 'transform 0.2s ease'
            }}
          >
            <a href={post.href}>
              <div className="bg-transparent rounded-lg shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-auto  h-44 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl text-white text-center font-bold mt-2">{post.title}</h2>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
