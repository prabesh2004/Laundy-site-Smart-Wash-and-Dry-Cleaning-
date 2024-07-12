import React from 'react';
import { Link } from 'react-router-dom';
import Cvr from './cover.png';

function Landing() {
  return (
    <section
      className="w-full h-screen sm:h-[40rem] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${Cvr})` }}
    >
      <div className="absolute z-10 w-full pb-[2rem] h-full bg-blue-500 bg-opacity-70 pt-[8rem] md:pt-[10rem]">
        <div className="flex-col w-[90vw] pb-[1rem] mx-auto" data-aos="fade-up">
          <div>
            <h1 className="text-white text-vl2 leading-[2.2rem] pb-[0.5rem] md:pb-[1rem] md:text-vl font-[800]">
              Let Us Take Care Of Your Dust!
            </h1>
            <h1 className="text-yellow-300 text-vl2 leading-[2.2rem] md:text-vl font-semibold">
              Free Delivery
            </h1>
          </div>
          <h2 className="text-gray-900 leading-[1.5rem] text-[1rem] py-3 lg:text-vl4">
            Commercial and Residential Wash
          </h2>
          <div className="text-gray-300 md:w-[60vw] w-[80vw] py-6">
            <p className="md:leading-loose leading-relaxed text-md lg:text-xl font-medium">
              Smart Wash and Dry Cleaning makes it easy for you to skip the laundry with FREE pickup and home delivery to your door. We offer commercial as well as residential services. Located at Tilottama-9, Rupandehi, Nepal, we are open 7 days a week from 9 A.M to 6 P.M local time.
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-[90vw] mx-auto" data-aos="fade-out" data-aos-delay="1100" data-aos-offset="-10">
          <Link
            to="/schedule"
            className="bg-yellow-300 md:p-2 p-2 text-[0.9rem] md:text-[1rem] md:font-medium font-normal border-[3px] border-transparent rounded-md hover:bg-transparent hover:border-yellow-300 hover:text-white"
          >
            Schedule a Pickup
          </Link>
          <Link
            to="/about"
            className="bg-green-300 md:p-2 p-2 text-[0.9rem] md:font-medium md:text-[1rem] font-normal border-[3px] border-transparent rounded-md hover:bg-transparent hover:border-green-300 hover:text-white"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Landing;
