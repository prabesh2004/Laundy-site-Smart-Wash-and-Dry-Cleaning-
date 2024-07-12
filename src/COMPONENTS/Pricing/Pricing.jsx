import React from 'react';
import Personal from "./Personal.json"
import Commercial from "./Commercial.json"
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
function Pricing() {
  return (
    <section className='w-screen mx-auto '>
      <div className='h-full w-[95%] mt-[1rem] md:w-[90%] mx-auto '>
        <div className='mx-auto flex flex-col items-center py-[3rem]' data-aos="fade-in">
          <h1 className='text-vl font-semibold text-yellow-300'>PRICING</h1>
          <h2 className='leading-tight text-center text-[1rem] font-medium text-gray-500'>
            Prices of Clothes that we regularly wash.
          </h2>
          <h2 className='leading-tight text-center font-semibold text-[0.8rem] md:text-[1rem] mt-5 text-blue-950'>
          All prices listed below are price per piece and are in Nepalese Rupees (NPR). Prices are subject to change.
          </h2>
        </div>

        <div id="content" className='flex flex-col gap-[3rem] px-1 mb-[3rem] w-full '>


          <div className=' flex flex-col gap-[2rem] ' id='commercial'>
            <div className='flex flex-col gap-[0.1rem]'>
              <h1 className='font-medium md:text-vl3 text-blue-950 text-vl4' id='commercial'>COMMERCIAL/HOUSHOLD WASH</h1>
              <h2 className='text-[0.8rem] md:text-[1rem]'>For Hotels, Party Halls, Lodges, Motels, Restaurants, and other businesses plus Household Lines .</h2>
            </div>
            <div className='  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[1rem] w-full justify-between items-start '>
              {Commercial.map((ele, index) => (
                <div key={index} className='flex shadow-md md:shadow-xl  py-2 flex-col  shadow-gray-400 justify-center items-center' data-aos="fade-out" data-aos-delay="300">
                  <div className='rounded-full w-[4rem] h-[4rem] shadow-lg bg-cover overflow-hidden'>
                  <LazyLoad> <img src={ele.Image} alt={ele.Name} className='h-full w-full bg-cover ' loading="lazy" /></LazyLoad>
                  </div>
                  <h2 className='text-center text-[1rem] text-gray-600'>{ele.Name}</h2>
                  <div className='pt-0.25 md:pt-[0.2rem]'>
                    <h2 className='font-medium'>{ele.Price}</h2>
                  </div>
                </div>
              ))}
            </div>
            <h2><span className='text-red-500'>Note: </span> If you have clothes that are not listed here and want to know whether we wash them, please give us a <span className='text-blue-800 underline'><Link to="/#Contact">CALL</Link></span> for more info.</h2>

          </div>
       
          

          <div className='flex flex-col pt-[2rem] gap-[2rem]' id='personal'>
            <div className='flex flex-col gap-[0.1rem]'>
              <h1 className='font-medium md:text-vl3 text-blue-950  text-vl4'id='personal'>PERSONAL WASH</h1>
              <h2 className='text-[0.8rem] md:text-[1rem]'>For Individuals, Family and Groups.</h2>
            </div>
            <div className='  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[1rem] w-full justify-between items-start '>
              {Personal.map((ele, index) => (
                <div key={index} className='flex shadow-md md:shadow-xl  shadow-gray-400 py-2 flex-col justify-center items-center'  data-aos="fade-out" data-aos-delay="300">
                  <div className='rounded-full w-[4rem] h-[4rem] shadow-lg bg-cover overflow-hidden'>
                   <LazyLoad> <img src={ele.Image} alt={ele.Name} className='h-full w-full bg-cover' loading="lazy" /></LazyLoad>
                  </div>
                  <h2 className='text-center text-[1rem] text-gray-600'>{ele.Name}</h2>
                  <div className='pt-0.25 md:pt-[0.2rem]'>
                    <h2 className='font-medium'>{ele.Price}</h2>
                  </div>
                  
                </div>
              ))}
            </div>
            <h2><span className='text-red-500'>Note: </span> If you have clothes that are not listed here and want to know whether we wash them, please give us a <span className='text-blue-800 underline'><Link to="/#Contact">CALL</Link></span> for more info.</h2>

          </div>
       




        </div>
       
      </div>
    </section>
  );
}

export default Pricing;
