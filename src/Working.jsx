import React from 'react'
import { FaHome } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";

function Working() {
  return (
    <section className='mb-[2rem] w-screen pt-[6rem] mx-auto'>
      <div className='pb-[5rem] lg:pb-[3rem] w-full flex flex-col  gap-[3rem] items-center' >
        <div id="header" className='  text-center w-full' data-aos="fade-in">
          <h1 className='text-vl leading-none text-yellow-300 font-semibold'>How it Works</h1>
          <h2 className='ml-5 text-gray-500'>Easy procedure to save your time.</h2>
        </div>
        <div id="content" className='flex flex-col  items-start md:gap-4 gap-2 justify-center md:flex-row w-[95vw] lg:w-[90vw]' >
          <div className='md:w-[32vw]  w-full min-h-[33vh] flex flex-col items-center  px-[1rem]' data-aos="fade-out" data-aos-delay="0">
            <div>
              <FaHome size={45} className='mx-auto text-blue-300'/>
              <h2 className='text-vl4 md:pr-10 my-2 md:text-[1.2rem] lg:text-vl4 md:ml-9 md:mt-3 font-medium text-blue-950'>Pick Up</h2>
            </div>
            <div className='md:mt-[2rem] md:leading-loose'>
              <h3>Our team will pick up your laundry directly from your home. We will arrive within a maximum of 6 hours after the order , if the order time falls under our working time. We offer free delivery and pickup service for your convenience.</h3>
            </div>
          </div>

          <div className='md:w-[32vw]  w-full min-h-[33vh] flex flex-col items-center  px-[1rem]' data-aos="fade-out" data-aos-delay="200">
            <div>
              <GiWashingMachine size={45} className='mx-auto text-blue-300'/>
              <h2 className='text-vl4 md:pr-10 my-2 md:text-[1.2rem] lg:text-vl4 md:ml-9 md:mt-3 font-medium text-blue-950'>Wash and Dry</h2>
            </div>
            <div className='md:mt-[2rem] md:leading-loose'>
              <h3>We specialize in washing and drying services for hotels, lodges, party venues, and individual households. Our professional team ensures that your items are cleaned with the utmost care. Chemical wash is available for stained clothes . In case of emergency , we also offer emergency wash. </h3>
            </div>
          </div>

          <div className='md:w-[32vw]  w-full min-h-[33vh] flex flex-col items-center  px-[1rem]' data-aos="fade-out" data-aos-delay="400">
            <div >
              <FaTruckArrowRight size={45} className='mx-auto text-blue-300'/>
              <h2 className='text-vl4 my-3 md:text-[1.2rem] lg:text-vl4 md:pr-10 md:ml-9 md:mt-3 font-medium text-blue-950'>Deliver</h2>
            </div>
            <div className='md:mt-[2rem] md:leading-loose'>
              <h3>Once your laundry is clean and dry, we deliver it back to you quickly and efficiently. Our service is designed to ensure your complete satisfaction and convenience.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Working;
