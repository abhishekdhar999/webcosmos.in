"use client";
import React, { useEffect, useState } from 'react';

const About = () => {
  const [isUsVisible, setIsUsVisible] = useState(false);

  useEffect(() => {
    const aboutElement = document.getElementById('about');
    const handleAnimationEnd = () => {
      setIsUsVisible(true);
      aboutElement.removeEventListener('animationend', handleAnimationEnd);
    };

    aboutElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      aboutElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white font-sans flex flex-col items-center p-12 pt-1">
      <div className="absolute inset-0 bg-[#000000] opacity-90"></div>
      <div className="relative z-10 max-w-8xl m-4 space-y-4">
        <div className="h-80">
          <h1 id='about' className="animated-about">
            ABOUT
          </h1>
          <h1 id='us' className={`animated-us ${isUsVisible ? 'visible' : ''}`}>
            US
          </h1>
        </div>
        <div></div>
        <section className="flex flex-col md:flex-row px-20 mx-32 items-center justify-center">
          <div className="text-center md:text-left">
            <p className="text-2xl font-thin leading-relaxed mb-2 md:mb-0 text-center">
              Welcome to <span className="font-bold">WebCosmic</span>, where we don&apos;t just build websites—we craft digital experiences that are out of this world. As a forward-thinking web development agency, we&apos;re here to launch your business into the future with our innovative solutions.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse p-10 mb-4">
          <div className="md:w-1/2 md:pl-4">
            <h2 className="text-4xl font-syne mb-4 p-2 capsule-background">
              &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Our Vision
            </h2>
            <p className="text-[20px] font-thin leading-relaxed">
              At WebCosmic, we see a future where your brand stands out in the digital universe. We&apos;re dedicated to creating transformative digital experiences that propel your business forward.
            </p>
          </div>
          <div className="md:w-1/2 md:pr-4">
            <img src="/ourvisionnew.png" alt="Our Vision" className="w-full h-auto max-w-xs mx-auto" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row p-10 mb-4">
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-4xl font-syne mb-4 p-2 capsule-background">
             &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Our Approach
            </h2>
            <p className="text-[20px] font-thin leading-relaxed">
              Innovation is our compass. We stay ahead of the curve with the latest technologies and trends, ensuring your brand is always future-ready. Our commitment to excellence means your business doesn&apos;t just survive—it thrives.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <img src="/approach.png" alt="Our Approach" className="w-full h-auto max-w-xs mx-auto " />
          </div>
        </section>

        <p className="text-center text-5xl font-syne pt-12 pb-2 highlight-text gradient-glow-text animated-gradient-text">
          WebCosmic – Crafting the Future, One Pixel at a Time.
        </p>
      </div>
      <style jsx global>{`
        @font-face {
          font-family: 'Montreal';
          font-style: normal;
          font-weight: 400;
          src: local('Montreal'), local('Montreal-Regular'),
               url(https://path-to-montreal-font.woff2) format('woff2');
        }

        @font-face {
          font-family: '__syne_ab8453';
          src: url('path-to-syne-ab8453.woff2') format('woff2');
        }

        @font-face {
          font-family: '__syne_Fallback_ab8453';
          src: url('path-to-syne-fallback-ab8453.woff2') format('woff2');
        }

        .font-syne {
          font-family: '__syne_ab8453', '__syne_Fallback_ab8453', sans-serif;
        }

        .highlight-text {
          position: relative;
          background-color: rgba(105, 102, 255, 0.1);
          border: 2px solid #6966ff;
          padding: 0.75rem;
          border-radius: 8px;
          text-shadow: 0 0 2px rgba(105, 102, 255, 0.15), 0 0 3px rgba(105, 102, 255, 0.15);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        @keyframes glow {
          0% {
            text-shadow: 0 0 2px rgba(105, 102, 255, 0.15), 0 0 3px rgba(105, 102, 255, 0.15);
          }
          50% {
            text-shadow: 0 0 4px rgba(105, 102, 255, 0.3), 0 0 6px rgba(105, 102, 255, 0.3);
          }
          100% {
            text-shadow: 0 0 2px rgba(105, 102, 255, 0.15), 0 0 3px rgba(105, 102, 255, 0.15);
          }
        }

        @keyframes Footer_rainbow__y_VUe {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-50px);
            visibility: hidden;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
        }

        @keyframes slideInFromAbove {
          0% {
            opacity: 0;
            transform: translateY(-150px);
            visibility: hidden;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
        }

        .gradient-glow-text {
          background: linear-gradient(90deg, pink, purple, cyan, limegreen);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 2s infinite;
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #633cc9, #3b8392, #cb24cc);
          background-size: 200% 200%;
          animation: Footer_rainbow__y_VUe 3s ease-in-out infinite;
          background-clip: text;
          -webkit-background-clip: text;
        }

        .animated-about {
          animation: slideInFromTop 1s ease-out forwards;
          font-family: 'Montreal', sans-serif;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          letter-spacing: calc(-.02em);
          opacity: 0;
          visibility: hidden;
        }
       
        .animated-us {
          animation: slideInFromAbove 1s ease-out forwards;
          animation-delay: 1s; /* Delay to ensure 'US' appears after 'ABOUT' */
          opacity: 0;
          visibility: hidden;
          font-family: 'Montreal', sans-serif;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          letter-spacing: calc(-.02em);
        }
        
        .animated-us.visible {
          opacity: 1;
          visibility: visible;
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .capsule-background {
          background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        #about, #us {
          font-family: 'Montreal', sans-serif;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          letter-spacing: calc(-.02em);
        }

        #about {
          margin-top: 0;
          margin-bottom: 0;
          font-size: clamp(3.125rem, 15vw, 10rem);
          height: 120px;
        }

        #us {
          margin-top: 0;
          margin-bottom: 0;
          margin-left: 19rem;
          font-size: clamp(3.125rem, 10.6vw, 10rem);
        }
      `}</style>
    </div>
  );
};

export default About;
