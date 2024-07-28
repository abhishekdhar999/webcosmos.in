'use client';

import React, { useState } from 'react';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-container">
      <style jsx>{`
        .footer-container {
          background-color: #000000;
          color: #ffffff;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          margin-bottom: 2rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
        }

        .footer-logo img {
          height: 80px;
          margin-right: 1rem;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: right;
          position: relative;
        }

        .footer-email {
          position: relative;
          display: flex;
          align-items: center;
          font-size: 3rem;
          cursor: pointer;
          color: white;
          transition: color 0.3s;
        }

        .footer-email:hover {
          animation: rainbow 5s linear infinite;
          color: transparent;
          background: linear-gradient(90deg, pink, purple, cyan, limegreen);
          -webkit-background-clip: text;
        }

        .footer-email:hover .copy-tooltip {
          display: block;
        }

        .copy-tooltip {
          display: none;
          position: absolute;
          top: 110%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #ffffff;
          color: #000000;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          white-space: nowrap;
          margin-top: 0.5rem;
          font-size: 1rem;
          text-align: center;
        }

        .footer-socials {
          display: flex;
          flex-direction: row; /* Align icons horizontally */
          gap: 1rem;
          font-size: 2.5rem; /* Increase icon size */
          align-items: center;
        }

        .footer-socials a {
          color: #ffffff; /* Default color */
          transition: color 0.3s;
        }

        .footer-socials a:hover {
          color: #0A66C2; /* Original color on hover */
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          font-size: 1.5rem;
          margin-top: 2rem;
        }

        .footer-links a {
          padding: 0.5rem 1.5rem;
          border: 2px solid transparent;
          border-radius: 50px;
          background: transparent;
          color: white;
          text-decoration: none;
          transition: border-color 0.3s, color 0.3s;
        }

        .footer-links a:hover {
          border-color: transparent;
          background: linear-gradient(90deg, pink, purple, cyan, limegreen);
          background-clip: padding-box;
          color: transparent;
          -webkit-background-clip: text;
        }

        .footer-sectors {
          display: flex;
          flex-direction: row; /* Align sectors horizontally */
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .sector-item {
          border: 1px solid #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }

        .footer-newsletter {
          display: flex;
          flex-direction: row; /* Align input and button horizontally */
          align-items: center; /* Vertically align items */
          gap: 1rem; /* Add space between input and button */
        }

        .footer-newsletter input {
          flex: 1; /* Allow the input to take up available space */
          padding: 0.5rem 1rem;
          border: 1px solid #ffffff;
          border-radius: 20px;
          margin-bottom: 0; /* Remove bottom margin */
          background-color: transparent;
          color: #ffffff;
        }

        .footer-newsletter button {
          padding: 0.5rem 2rem;
          border: 1px solid #ffffff;
          border-radius: 20px;
          background-color: transparent;
          color: #ffffff;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .footer-newsletter button:hover {
          background-color: #ffffff;
          color: #000000;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          width: 100%;
          font-size: 1rem;
        }

        @keyframes rainbow {
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
      `}</style>
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/webcosmic.png" alt="Logo" />
        </div>
        <div className="footer-contact">
          <CopyToClipboard text="hello@webcosmic.com" onCopy={handleCopy}>
            <span className="footer-email">hello@webcosmic.com
              <div className="copy-tooltip">
                {copied ? 'Email copied!' : ' Click to Copy email address'}
              </div>
            </span>
          </CopyToClipboard>
          <div className="footer-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
          </div>
        </div>
      </div>
      
      <div id='our-sector' className="text-4xl font-bold text-white text-left mb-4">
        Our Sectors
      </div>
      <div className="footer-sectors">
        <div className="sector-item">Agencies</div>
        <div className="sector-item">SaaS and Tech</div>
        <div className="sector-item">B2B Transformation</div>
        <div className="sector-item">Healthcare</div>
        <div className="sector-item">Media & Entertainment</div>
        <div className="sector-item">Retail</div>
      </div>
      <div className="footer-newsletter">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={handleEmailChange} 
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      <div className="footer-links">
        <a href="/contact">Contact</a>
        <a href="/faqs">FAQs</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
      <div className="footer-bottom">
        <span>© WebCosmic 2024</span>
      </div>
    </footer>
  );
}
