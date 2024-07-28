import React from 'react';
import Testimonials from './testimonials';

const data = [
  {
    name: "Michael Gough",
    position: "Web developer at Google",
    image: "/testimonials/author-03.jpg",
    short: "Great Product",
    testimonial: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite.",
  },
  {
    name: "Bonnie Green",
    position: "CEO at Facebook",
    image: "/testimonials/author-03.jpg",
    short: "Great Product",
    testimonial: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite.",
  },
  {
    name: "Lana Byrd",
    position: "CTO at Microsoft",
    image: "/testimonials/author-03.jpg",
    short: "Great Product",
    testimonial: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
];

const TestimonialSection = () => {
  return (
    <div>
    <div class="-mx-4 flex flex-wrap justify-center">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[485px] text-center">
              <span class="mb-2 block text-lg font-semibold text-primary">
                Testimonials
              </span>
              <h2
                class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
              >
                What our Clients Say
              </h2>
              <p class="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <Testimonials testimonials={data} showViewMore="true"/>
        </div>
  );
};



export default TestimonialSection;