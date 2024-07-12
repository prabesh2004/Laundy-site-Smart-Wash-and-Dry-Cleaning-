import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const locations = [
  "Mangalapur, Rupandehi.",
  "Manigram, Rupandehi.",
  "Butwal main area, Rupandehi.",
  "Gorkatta, Tilottama-6, Rupandehi.",
  "Divertole, Rupandehi.",
  "Nayamill, Rupandehi.",
  "Shankanagar, Rupandehi.",
  "Semara bajar, Rupandehi.",
  "Bhalwari, Rupandehi.",
  "Yogikuti, Rupandehi.",
  "Kalika Nagar, Butwal, Rupandehi.",
  "Kotihawa, Rupandehi."
];

function Location() {
  return (
    <section className='w-screen mx-auto pb-[3rem]'>
      <div className='h-full w-[95vw] md:w-[90vw] mt-[1rem] mx-auto'>
        <div className='w-[90%] mx-auto flex flex-col items-center py-[3rem]' data-aos="fade-in">
          <h1 className='text-vl font-semibold text-yellow-300'>LOCATIONS</h1>
          <h2 className='leading-tight text-center text-[1rem] font-medium text-gray-500'>
          Locations where we regularly provide our services
          </h2>

        
        </div>
        <h2 className='leading-tight text-center text-[1rem] font-medium mt-[1rem] '>
        <span className='text-red-500'>Note:</span> If your location is not displayed below, we might still provide the service there as long as it is in Rupandehi. So, give us a <span className='text-blue-950 underline'><Link to="/#Contact">CALL</Link></span> to know more in detail.
</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-[2rem]' >
          {locations.map((location, index) => (
            <div key={index} className='shadow-lg p-[2rem]' data-aos="fade-in" ata-aos-delay="300">
              <div className='flex items-center gap-[2rem]'>
                <IoLocationOutline className='size-8 text-blue-950' />
                <h2 className='font-medium text-[1rem] md:text-[1.25rem]'>{location}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Location;
