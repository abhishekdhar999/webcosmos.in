'use client';

import React from 'react';
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Reviews() {
  const clients = [
    '/bioquench.png', // Replace with the actual paths to your client logos
    '/oddpartikles.png',
    '/mg.png',
    '/BETR.png',
    '/Elitefitness.png',
    '/tsw.png',
    // Add more client logos as needed
  ];

  return (
    <div className="reviews-container">
      <style jsx>{`
        .reviews-container {
          text-align: left;
          padding: 20px;
          background-color: #000000; /* Set background color to black */
        }

        :root {
          --montreal: "__montreal_a78db3", "__montreal_Fallback_a78db3";
        }

        h2 {
          font-family: var(--montreal);
          margin-bottom: 0px;
          font-weight: 400;
          text-align: left;
          color: #ffffff; /* Change the text color */
          opacity: 0; /* Initially hidden */
          visibility: hidden; /* Initially hidden */
        }

        .logo-slider {
          overflow: hidden;
          width: 100%;
          position: relative;
          margin: 0px;
          padding-top: 8rem;
        }

        .logo-track {
          display: flex;
          width: calc(250px * ${clients.length * 2}); /* Adjust based on the number of logos */
          animation: scroll 20s linear infinite;
        }

        .logo {
          width: 250px; /* Adjust based on the logo size */
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px;
        }

        .logo img {
          max-width: 100%;
          height: auto;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
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

        .heading-container {
          display: flex;
          align-items: center;
        }

        #clients {
          padding-top: 0px; /* Adjust the padding top */
          margin-top: 0px; /* Adjust the margin top */
          letter-spacing: calc(-.02em); /* Reduce space between letters */
          animation: slideInFromAbove 1s ease-out forwards;
          animation-delay: 1s; /* Ensure 'CLIENTS' appears after 'OUR' */
          font-size: clamp(3.125rem, 10.6vw, 10rem); /* Match size of ABOUT US */
          height: 120px; /* Match height of ABOUT US */
          margin-left: 7rem;
        }

        #our {
          padding-bottom: 10px; /* Adjust the padding top */
          margin-bottom: 15px;
          padding-top: 0px; /* Adjust the margin top */
          letter-spacing: -4px; /* Reduce space between letters */
          animation: slideInFromTop 1s ease-out forwards;
          font-size: clamp(3.125rem, 15vw, 10rem); /* Match size of ABOUT US */
          height: 120px; /* Match height of ABOUT US */
        }

        .icon {
          font-size: 7rem; /* Adjust icon size as needed */
          color: #ffffff; /* Change icon color */
          margin-left: 10px; /* Adjust spacing between text and icon */
       
        }
      `}</style>
      <div>
        <div className=' flex justify-between mx-24'>
          <span className='left'>
          <h2 id='our'>OUR</h2>
        <div className="heading-container">
          <h2 id='clients'>CLIENTS</h2>
          </div>
          </span>
          <span className="icon right  mt-36"> <BsBoxArrowUpRight /></span>
         
        </div>
      </div>   
      <div className="logo-slider">
        <div className="logo-track">
          {clients.map((client, index) => (
            <div className="logo" key={index}>
              <img src={client} alt={`Client ${index + 1}`} />
            </div>
          ))}
          {clients.map((client, index) => (
            <div className="logo" key={`duplicate-${index}`}>
              <img src={client} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
