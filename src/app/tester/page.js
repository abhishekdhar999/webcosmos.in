import React from 'react';
import FeatureSection from '../components/Feature/FeatureSection';
import TestimonialSection from '../components/Testimonials/TestimonialsSection';
import { Subscribe } from '../components/Footer/subscribe';
import { Footer } from '../components/Footer/footer';

const About = () => {
  return (
    <div>
         <FeatureSection />
         <TestimonialSection/>
         <Subscribe/>
         <Footer/>
    </div>
  );
};



export default About;