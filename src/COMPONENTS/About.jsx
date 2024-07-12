import React from 'react'
import { PiWashingMachine } from "react-icons/pi";
import { GoSmiley } from "react-icons/go";
import { LiaHandsSolid } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className='w-[100vw] mx-auto'>
      <div className='w-[95vw] md:w-[90vw] mb-[3rem] mt-[1rem] mx-auto'>
        <div className='flex w-full flex-col items-center py-[3rem]' data-aos="fade-in">
          <h1 className='text-vl font-semibold text-yellow-300'>ABOUT US</h1>
          <h2 className='leading-tight text-center mx-0 text-[1rem] font-medium text-gray-500'>
            Know more about the best laundry in the town.
          </h2>
        </div>
  
        <div className='text-[1.1rem] leading-normal md:leading-loose' data-aos="fade-in" data-aos-delay="400">
          <h2>
            Welcome to Smart Wash and Dry Cleaning, your trusted commercial laundry service provider located at Tilottama-9, Rupandehi. We specialize in providing high quality washing and drying services for hotels, lodges, party venues, as well as individual households. Our commitment to quality and customer satisfaction has made us the preferred choice for many <a href="/#Client" className='underline text-blue-950'>clients</a>.
            <br/><br/>
            At Smart Wash, we understand the importance of clean and fresh laundry. That’s why we offer a range of services, including free pickup and delivery,emergency wash and quick wash and dry - especially during winters and monsoons. Our team is dedicated to ensuring that every item we handle is treated with the utmost care and attention. We wash a variety of <Link to='/pricing' className="underline text-blue-950">items </Link> such as bed covers, blankets, pillow covers, curtains, hotel towels, coats, shirts, t-shirts, saris, pants, shorts, and wedding attire.
            <br/><br/>
            We pride ourselves on our professional and reliable service with years of experience. Our facility is equipped with commercial washing machines,dryer and staffed by experienced professionals who are passionate about what they do. Whether you need regular laundry services or special care for delicate items, you can trust us to deliver spotless results every time. <a href="/#Contact" className='underline text-blue-950'>Contact Us</a> for any inquries.
            <br/><br/>
          
          </h2>
        </div>
        
        <div className='grid grid-cols-2 lg:grid-cols-4 justify-start items-start gap-3 my-[3rem] w-full' data-aos="fade-out">
          <span className='flex flex-col gap-2 md:gap-0 justify-center items-center'>
            <PiWashingMachine className=' text-blue-950 size-8 md:size-10'/> 
            <h2 className='md:font-semibold font-medium md:text-[1.2rem] text-[0.8rem] text-center text-blue-950'>6 Machines</h2>
          </span>
    
          <span className='flex flex-col gap-2 md:gap-0 justify-center items-center'>
            <GoSmiley  className='text-blue-950 size-8 md:size-10'/> 
            <h2 className='md:font-semibold font-medium md:text-[1.2rem] text-[0.8rem] text-center text-blue-950'>1000+ Happy customers</h2>
          </span>
    
          <span className='flex flex-col gap-2 md:gap-0 justify-center items-center'>
            <LiaHandsSolid className='text-blue-950 size-8 md:size-10'/> 
            <h2 className='md:font-semibold font-medium md:text-[1.2rem] text-[0.8rem] text-center text-blue-950'>6+ years of experience</h2>
          </span>

          <span className='flex flex-col gap-2 md:gap-0 justify-center items-center'>
            <FaPeopleGroup  className='text-blue-950 size-8 md:size-10'/> 
            <h2 className='md:font-semibold font-medium md:text-[1.2rem] text-[0.8rem] text-center text-blue-950'>50+ Regular clients</h2>
          </span>
        </div>
        
        <div className='grid mt-[4rem] grid-cols-1 md:grid-cols-2 gap-2' data-aos="fade-in">
          <div className='bg-blue-300 h-[20rem] shadow-lg bg-cover'>
            <img src="/About/building.jpg" alt="" className='w-full h-full'/>
          </div>
          <div className='bg-blue-300 h-[20rem] shadow-lg bg-cover' data-aos="fade-in">
            <img src="About/kapdas.jpg" alt="" className='w-full h-full'/>
          </div>
          <div className='bg-blue-300 h-[20rem] shadow-lg bg-cover' data-aos="fade-in">
            <img src="About/machines.jpg" alt="" className='w-full h-full'/>
          </div>
          <div className='bg-blue-300 h-[20rem] shadow-lg bg-cover' data-aos="fade-in">
            <img src="About/folded.jpg" alt="" className='w-full h-full'/>
          </div>
          <div className='bg-blue-300 h-[20rem] shadow-lg bg-cover' data-aos="fade-in">
            <img src="About/packages.jpg" alt="" className='w-full h-full'/>
          </div>
          <div className='bg-blue-300 h-[20rem] shadow-lg bg-fill' data-aos="fade-in">
            <img src="About/folded2.jpg" alt="" className='w-full h-full'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
