"use client"
import {useState,useEffect} from 'react';
import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";
import SideNavbar from "../Components/SideNavbar/SideNavbar";
import Homepage from "./Home/page";
import Productspage from "../Components/products/page";
import Servicespage from "./OurServices/page";
import BlobMarquee from "@/Components/BlobMarquee/BlobMarquee";
import TestimonialSection from "./components/Testimonials/TestimonialsSection";
import { BlogSection } from "./components/Blogs/BlogSection";
import Preloader from "@/Components/PreLoader/PreLoader";
import OurServicesComponent from '@/Components/OurServicesComponent/OurServicesComponent';
import Router from 'next/router';
export default function Home() {

  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // if (!loading) {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
    // Simulate loading delay (e.g., for fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for demonstration

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);
  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   Router.events.on('routeChangeStart', handleStart);
  //   Router.events.on('routeChangeComplete', handleComplete);
  //   Router.events.on('routeChangeError', handleComplete);

  //   window.addEventListener('load', handleComplete);

  //   // Clean up event listeners
  //   return () => {
  //     Router.events.off('routeChangeStart', handleStart);
  //     Router.events.off('routeChangeComplete', handleComplete);
  //     Router.events.off('routeChangeError', handleComplete);
  //     window.removeEventListener('load', handleComplete);
  //   };
  // }, []);

  return (
    <>
{loading && <Preloader />}
    <Navbar></Navbar>
    <Homepage></Homepage>
    <OurServicesComponent loading={loading}></OurServicesComponent>
    <Productspage></Productspage>
    
    {/* <BlobMarquee></BlobMarquee> */}
   <TestimonialSection></TestimonialSection>
   <BlogSection></BlogSection>
    {/* <SideNavbar></SideNavbar> */}

    </>
  );
}
