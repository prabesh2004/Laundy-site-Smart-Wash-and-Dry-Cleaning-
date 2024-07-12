import React from 'react'

function Clients() {
  return (
    <section className='w-screen mx-auto pb-[3rem]' id='Client'>
      <div className='h-full w-[95vw] md:w-[90vw] mt-[1rem] mx-auto'>
        <div className='w-[90%] mx-auto flex flex-col items-center py-[3rem]' data-aos="fade-in">
          <h1 className='text-vl font-semibold text-yellow-300'>CLIENTS</h1>
          <h2 className='leading-tight text-center text-[1rem] font-medium text-gray-500'>
          Some of our happy and regular commercial clients have been trusting us for years. 
          </h2>

        
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1rem] px-2   items-center justify-center ">

        <div className='rounded-full w-[5rem]  h-[5rem] bg-black  shadow-lg bg-cover  mx-auto  overflow-hidden' data-aos="fade-zoom-in" data-aos-delay="0"> 
                 <img src="/Clients/madani.jpg" className='w-full h-full' alt="" />
                 </div>
                 
                 <div className='rounded-full    w-[5rem] h-[5rem] bg-black shadow-lg mx-auto  bg-cover overflow-hidden' data-aos="fade-zoom-in" data-aos-delay="200">
                 <img src="/Clients/sr.jpg" className='w-full h-full' alt="" />
                  </div>

                  <div className='rounded-full    w-[5rem] h-[5rem] bg-black shadow-lg mx-auto  bg-cover overflow-hidden' data-aos="fade-zoom-in" data-aos-delay="400">
                  <img src="/Clients/diamond.jpg" className='w-full h-full' alt="" />
                  </div>
               
                  <div className='rounded-full   w-[5rem] h-[5rem] bg-black shadow-lg mx-auto  bg-cover overflow-hidden' data-aos="fade-zoom-in" data-aos-delay="600">
                  <img src="/Clients/radison.jpg" className='w-full h-full' alt="" />
                  </div>
               
               

        </div>
        </div></section>
  )
}

export default Clients