"use client";
import React, { useState, useRef } from 'react';

const ContactForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    budget: '',
    message: '',
    agreement1: false,
    agreement2: false,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const toggleOption = (option) => {
    setSelectedOptions(prevSelectedOptions =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(item => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.budget || !formData.message || !formData.agreement2) {
      alert('Please fill out all fields and select at least one option.');
      return;
    }
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_POST_URL || CONTACT_POST_URL;

    const response = await fetch(`${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        selectedOptions: selectedOptions.filter(Boolean),
      }),
    });
    const result = await response.json();
    console.log(result);

    // Display success message and reset form
    if (response.ok) {
      setSuccessMessage('Your details have been received successfully. We will contact you shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        budget: '',
        message: '',
        agreement1: false,
        agreement2: false,
      });
      setSelectedOptions([]);
    } else {
      setSuccessMessage('There was an error sending your details. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-black text-white">
      {successMessage && (
        <div className="mb-4 p-4 bg-green-500 text-black rounded">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {['A new website', 'Branding', 'Motion graphics', 'E-Commerce', 'Development', 'On-going support', 'App from scratch'].map((text) => (
            <button
              type="button"
              key={text}
              onClick={() => toggleOption(text)}
              className={`border border-white rounded-full px-6 py-2 hover:bg-heading-white hover:text-black ${selectedOptions.includes(text) ? 'bg-white text-black' : ''}`}
            >
              {text}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <input
            type="text"
            name="firstName"
            placeholder="First name*"
            value={formData.firstName}
            onChange={handleChange}
            className="border-b-2 border-white bg-black w-full py-2 focus:outline-none placeholder-gray-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name*"
            value={formData.lastName}
            onChange={handleChange}
            className="border-b-2 border-white bg-black w-full py-2 focus:outline-none placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 border-white bg-black w-full py-2 focus:outline-none placeholder-gray-400 md:col-span-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <input
            type="text"
            name="budget"
            placeholder="Budget (£)"
            value={formData.budget}
            onChange={handleChange}
            className="border-b-2 border-white bg-black w-full py-2 focus:outline-none placeholder-gray-400"
          />
        </div>

        <p className="mb-4">
          More info on minimum/typical budget sizes can be found <a href="#" className="text-blue-400 underline">here</a>.
        </p>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border-b-2 border-white bg-black w-full py-2 mb-8 focus:outline-none placeholder-gray-400"
        ></textarea>

        <div className="mb-8">
          <label className="flex items-center mb-4">
            <input type="radio" name="agreement1" checked={formData.agreement1} onChange={handleChange} className="mr-2" />
            <span className="text-gray-400">I&apos;m happy to receive a monthly newsletter from KOTA</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="agreement2" checked={formData.agreement2} onChange={handleChange} className="mr-2" />
            <span className="text-gray-400">I understand that KOTA will securely hold my data in accordance with their privacy policy.</span>
          </label>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
