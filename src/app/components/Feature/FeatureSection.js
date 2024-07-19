import React from 'react';
import MyFeature from './feature';

const FeatureSection = () => {
  return (
    <div>
           {/* ====== Features Section Start  */}
    <section className="pb-8 pt-20 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Features
              </span>
              <h2
                className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
              >
                Main Features 
              </h2>
              <p className="text-base text-dark-6">
              we specialize in supporting businesses in different industries on their digital journey. We offer expert guidance and solutions to meet your needs and goals
              </p>
            </div>
          </div>
        </div>
        <MyFeature />
      </div>
    </section>
     {/* ====== Features Section End  */}
    </div>
  );
};



export default FeatureSection;