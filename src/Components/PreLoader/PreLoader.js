// src/Components/PreLoader.js

"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PreLoader = ({ isLoading }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      // Fade out the loader when loading is complete
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // Optionally, remove the loader from the DOM
          loaderRef.current.style.display = 'none';
        }
      });
    } else {
      // Reset loader visibility if needed
      loaderRef.current.style.display = 'flex';
      gsap.to(loaderRef.current, {
        opacity: 1,
        duration: 0
      });
    }
  }, [isLoading]);

  return (
    <div
      ref={loaderRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      {/* Your loading animation here */}
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 8px solid #fff;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PreLoader;
