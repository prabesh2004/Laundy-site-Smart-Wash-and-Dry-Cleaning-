import React, { useState } from 'react';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of laundry services including washing, drying, folding, and dry cleaning."
    },
    {
      question: "Are there types of clothes that you do not wash?",
      answer: "Yes, we do not wash underwear, innerwear, shoes, and socks."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open from 9 AM to 6 PM every day, except during festival seasons."
    },
    {
      question: "Do you provide home pickup and delivery?",
      answer: "Yes, we offer free home pickup and delivery services within Rupandehi."
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order through our website or by calling our customer service."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash and checks."
    },
    {
      question: "Do you offer discounts for commercial and daily customers?",
      answer: "Yes, we offer discounts for commercial and daily customers. Contact us to learn more."
    }
  ];
  

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='w-[100vw] mx-auto bg-blue-300'>
      <div className='w-[95vw] md:w-[90vw] mx-auto pb-[2rem]' >
        <div className='h-full' >
          <div className='flex w-full flex-col items-center py-[3rem]' data-aos="fade-in">
            <h1 className='text-vl font-semibold text-yellow-300'>FAQs</h1>
            <h2 className='leading-tight text-center mx-0 text-[1rem] font-medium text-gray-500'>
              Frequently Asked Questions
            </h2>
          </div>
          <div className='w-full pb-[2rem]' data-aos="fade-up">
            {faqs.map((faq, index) => (
              <div key={index} className='mb-[1rem] p-[1rem] shadow-xl bg-gray-100 rounded-md '>
                <div
                  className='flex items-center justify-start gap-[1rem] cursor-pointer'
                  onClick={() => handleToggle(index)}
                >
                   <div>  {activeIndex === index ? (
                    <IoIosRemove className='text-red-500 font-medium  size-[2rem]' />
                  ) : (
                    <IoIosAdd className='
                    text-green-500 font-medium size-[2rem]'  />
                  )}</div> 
                  <h3 className='md:text-lg  font-semibold text-blue-950'>
                    {faq.question}
                  </h3>
              
                </div>
                {activeIndex === index && (
                  <p className='text-md text-gray-700 mt-[0.5rem]'>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      <Link to="/about" className=' mx-auto bg-yellow-300 p-2 relative  rounded-md border-2 border-transparent hover:border-yellow-400 hover:bg-transparent' data-aos="fade-right">Know more About Us</Link>

      </div>

    </section>
  );
}

export default Faq;
