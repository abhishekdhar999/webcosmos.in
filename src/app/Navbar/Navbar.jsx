"use client"
import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import SideNavbar from "../SideNavbar/SideNavbar";
import CurvedText from '@/Components/CurverText/CurvedText';
import { Canvas} from '@react-three/fiber';
import gsap from 'gsap';

export default function Navbar() {
    const [active,setActive] = useState();
    const handleClick = ()=>{
setActive(!active);
    }
    const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      rotationX: 160,
      rotationY: 360,
      rotationZ:240,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);
  return (
    <>


{/* <Canvas>
    <ambientLight />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <CurvedText></CurvedText>
    <CurvedText />
  </Canvas> */}
    <div className="all  flex justify-between mx-12 my-6 ">

      <div className="left z-50 "> <div class="circular-text">
    
     {/* <CurvedText></CurvedText> */}
     <div className='curve'>
        <span className='text '>
          <img className='h-[80px] w-[200px]' src="Untitled_design__3_-removebg-preview.png" alt="" />
        </span>
      </div>
  
</div>
</div>

      



    <div className="middle bg-transparent hidden lg:block">
  <section style={{ background: '#f1c40f', color: 'rgba(0, 0, 0, 0.5)' }}>
    
    <nav className="shift">
      <ul className="flex">
        <li>
            <Link href={"/"}>Home</Link> </li>
        <li><Link href={"/"}>About</Link></li>
        <li><Link href={"/products"}>Services</Link></li>
        <li><Link href={"/"}>Showcase</Link></li>
       
      </ul>
    </nav>
  </section>
      
  </div>
      <div className="right hidden lg:block">
  <button
    type="button"
    className="btn text-white  border-2 border-white rounded-full from-cyan-500 to-blue-500  text-[15px] font-semibold px-5 py-2.5 text-center me-2 mb-2 transition-colors duration-500 hover:bg-white hover:text-black z-50 "
  >
    Get In Touch
  </button>
</div>


<span className="sideNavbar-btn lg:hidden">
    
    <button  onClick={handleClick}  className="btn flex border-2 border-white p-2 rounded-full lg:hidden font-semibold z-100">
        menu {!active ? <span className="mt-1 mx-2"><FaBars /></span> : <span className="mt-1 mx-2"><RxCross1 /></span> }
    </button>
  
</span>
</div>






      
      
      <SideNavbar active={active} setActive={setActive} ></SideNavbar>
    </>
  );
}
