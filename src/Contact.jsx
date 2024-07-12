import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
return (
<section className='w-screen mx-auto pb-[3rem] bg-blue-950' id='Contact' >
<div className='h-full w-[95vw] md:w-[90vw] mx-auto flex flex-col items-center'>
<div className='w-[90%] mx-auto flex flex-col items-center py-[3rem]' data-aos="fade-in">
<h1 className='text-vl font-semibold text-yellow-300'>CONTACT</h1>
<h2 className='leading-tight text-center text-[1rem] font-medium text-gray-500'>
Get in touch with us.
</h2>
</div>
<div className=' flex flex-col md:gap-8 gap-6 mr-auto md:mr-0 items-start' data-aos="fade-in" data-aos-delay="300">
<div className='flex gap-6 justify-center items-center '><FaPhoneAlt className='md:size-7 size-6 text-blue-300' /> <h2 className='text-white text-[0.8rem] md:text-[1.1rem]'>+977 9867890807/9867288651/9867462556</h2></div>
<div className='flex gap-6 justify-center items-center'><IoIosMail className='md:size-7 size-6 text-blue-300' /><h2 className='text-white text-[0.8rem] md:text-[1.1rem]' >info@smartwashanddry.com</h2></div>
<div  className='flex gap-6 justify-center items-center'><FaLocationDot className='md:size-7 size-6 text-blue-300' /><h2 className='text-white text-[0.8rem] md:text-[1.1rem]' >Tilottama-9, Mangalapur, Rupandehi.</h2> </div>
</div>
</div>
</section>
)
}

export default Contact