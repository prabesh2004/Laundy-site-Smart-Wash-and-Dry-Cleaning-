import React from 'react';
import { Link } from 'react-router-dom';

function Services() {

  return (
    <section className='w-screen  mx-auto bg-blue-300'>
      <div className='h-full mx-auto  '>
        <div className='w-[90%] mx-auto flex flex-col items-center py-[3rem]' data-aos="fade-in">
          <h1 className='text-vl font-semibold text-yellow-300'>SERVICES</h1>
          <h2 className='leading-tight text-center text-[1rem] font-medium text-gray-500'>
            We offer a full complement of wash & fold, dry cleaning, and commercial laundry services.
          </h2>
        </div>

        <div className='flex flex-col md:flex-row gap-[2rem] md:w-[90vw] mx-auto'>
          <div className='px-[2vw] shadow-lg md:py-3 py-3 flex flex-col gap-3 mx-auto items-center bg-white' data-aos="fade-out" data-aos-delay="0">
            <h1 className='text-center text-vl3 font-semibold text-blue-950'>Wash & Fold</h1>
            <h2 className='text-center leading-5 text-gray-600'>
              Our wash & fold service provides a convenient and affordable way to have your laundry done. Drop off your clothes, and we'll handle the rest. Your laundry will be washed, dried, and neatly folded, ready for you to pick up.
            </h2>
          </div>

          <div className='px-[2vw] shadow-lg md:gap-3 py-3 flex flex-col mx-auto items-center bg-white' data-aos="fade-out" data-aos-delay="200">
            <h1 className='text-center text-vl3 font-semibold text-blue-950'>Dry Cleaning</h1>
            <h2 className='text-center leading-5 text-gray-600'>
              Our dry cleaning service ensures that your delicate and special-care garments are cleaned with the utmost attention. We use environmentally friendly solvents to clean your clothes without water, preserving the fabric and extending the life of your garments.
            </h2>
          </div>

          <div className='px-[2vw] shadow-lg md:gap-3 py-3 flex flex-col mx-auto items-center bg-white' data-aos="fade-out" data-aos-delay="400">
            <h1 className='text-center text-vl3 font-semibold text-blue-950'>Commercial Wash</h1>
            <h2 className='text-center leading-5 text-gray-600' >
              Our commercial laundry service is tailored for businesses that require regular and bulk laundry services. We handle linens, uniforms, towels, and more with efficiency and care, ensuring that your business operations run smoothly without any laundry worries.
            </h2>
          </div>
        </div>

        <div className='w-full py-[1.5rem] shadow-md md:py-[3rem] pb-8 flex items-center justify-center p-2' data-aos="fade-in" >
        <Link to="/location" className=' mx-auto bg-yellow-300 border-[3px] border-transparent p-2 rounded-md hover:bg-transparent hover:border-yellow-400'>Our Service Locations</Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
