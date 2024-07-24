import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function SideNavbar({ active,setActive }) {
  
  return (
    <>
      <div className={`fixed  z-50 top-0 left-[-310px] h-full w-2 md:w-[50%]  bg-gray-800 text-white transition-transform transform lg:hidden ${
          active ? 'translate-x-72' : '-translate-x-full'
        }`}>
        <div className='left my-24'>
        <div>
      <ul>
        <li className="slink  md:mx-12 mx-6  ">
        <span className="link-hover ">
          <Link  href="/">
          Home
            {/* <a className="link-hover">Home</a> */}
          </Link>
          </span> 
        </li>
        <li className="slink  md:mx-12 mx-6">
        <span className="link-hover">
          <Link  href="/">
          About 
            {/* <a className="link-hover">Home</a> */}
          </Link>
          </span> 
        </li>
        <li className="slink md:mx-12 mx-6">
        <span className="link-hover">
          <Link  href="/">
          Services
            {/* <a className="link-hover">Home</a> */}
          </Link>
          </span> 
        </li>
        <li className="slink md:mx-12 mx-6">
        <span className="link-hover">
          <Link  href="/">
          Showcase
            {/* <a className="link-hover">Home</a> */}
          </Link>
          </span> 
        </li>
      </ul>
    </div>
        </div>
        
        <div className='mx-10'>
          <ul className='flex '>
            <Link href={"/"}>
            <li className='text-3xl mx-4 font-extrabold'><FaFacebook /></li>
            </Link>
            <Link href={"/"}>
            <li className='text-3xl mx-4 font-extrabold'><FaLinkedin /></li>
            </Link>
            <Link href={"/"}>
            <li className='text-3xl mx-4 font-extrabold'><FaXTwitter /></li>
            </Link>
            <Link href={"/"}>
            <li className='text-3xl mx-4 font-extrabold'><FaGithub /></li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}
