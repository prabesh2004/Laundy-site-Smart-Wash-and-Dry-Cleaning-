import React from 'react'
import Clothes from "../Images/Clothes.jpeg"
import Commercial from "../Images/cover.png"
import Blanket from "../Images/Blanket.jpg"
import { Link } from 'react-router-dom'
function Customers() {
  return (
    <section className='w-screen mx-auto pb-[3rem]'>
    <div className='h-full w-[95vw] md:w-[90vw] mx-auto '>
      <div className='w-[90%] mx-auto flex flex-col items-center py-[3rem]' data-aos="fade-in">
        <h1 className='text-vl font-semibold text-yellow-300'>PRICING</h1>
        <h2 className='leading-tight text-center text-[1rem] font-medium text-gray-500'>
          We make your laundry affordable.
        </h2>
      </div>

<div id="content" className='flex px-2 flex-col md:flex-row gap-[5rem] md:gap-0 justify-between   mx-auto  '>

<div id="items " className='flex flex-col justify-center items-center'  data-aos="fade-zoom-in">

    <div className='rounded-full w-[8rem] shadow-lg h-[8rem] bg-black bg-cover overflow-hidden '><img src={Clothes} alt="" className='h-full w-full' /></div>
    <h2 className='text-center pt-2 pb-4 text-vl4 text-gray-600'>Clothes</h2>
    <div className='pt-1 md:pt-3'> <Link to="/pricing#personal" className=' mx-auto bg-yellow-300 p-2 relative  rounded-md border-2 border-transparent hover:border-yellow-400 hover:bg-transparent'>View Pricing</Link></div>
  
</div>


<div id="items " className='flex flex-col justify-center items-center' data-aos="fade-zoom-in">

    <div className='rounded-full w-[8rem] h-[8rem] shadow-lg bg-black bg-cover overflow-hidden'><img src={Commercial} alt="" className='h-full w-full' /></div>
    <h2 className='text-center pt-2 pb-4 text-vl4 text-gray-600'>Commercial Wash</h2>
    <div className='pt-1 md:pt-3'> <Link to="/pricing#commercial" className=' mx-auto bg-yellow-300 p-2 relative  rounded-md border-2 border-transparent hover:border-yellow-400 hover:bg-transparent'>View Pricing</Link></div>
    
</div>


<div id="items " className='flex flex-col justify-center items-center'  data-aos="fade-zoom-in">

<div className='rounded-full w-[8rem] h-[8rem] shadow-lg bg-black bg-cover overflow-hidden'><img src={Blanket} alt="" className='h-full w-full' /></div>
    <h2 className='text-center pt-2 pb-4 text-vl4 text-gray-600'>Blankets</h2>
    <div className='pt-1 md:pt-3 '> <Link to="/pricing#commercial" className=' mx-auto bg-yellow-300 p-2 relative  rounded-md border-2 border-transparent hover:border-yellow-400 hover:bg-transparent'>View Pricing</Link></div>
   
</div>

</div>

     </div>
  </section>
  )
}

export default Customers