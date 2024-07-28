import React from 'react';
import FeatureSection from '../components/Feature/FeatureSection';
import TestimonialSection from '../components/Testimonials/TestimonialsSection';
import { Subscribe } from '../components/Footer/subscribe';
import { Footer } from '../components/Footer/footer';
import { BlogSection } from '../components/Blogs/BlogSection';
import { ServicesSection } from '../components/Services/Services';
import ContactForm from '../components/ContactForm/ContactForm';

const About = () => {
  return (
    <div>
      <ContactForm/>
      <ServicesSection/>
         {/* <FeatureSection /> */}
         <TestimonialSection/>
         <BlogSection />
         <Subscribe/>
         <Footer/>
    </div>
  );
};



export default About;