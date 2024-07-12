import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

function Schedule() {
  const chatID = 5555819299;
  const BotID = "7347737924:AAGksqHpCid2mFIPfcX6sfdeVgCVXL-gP4M";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    organization: ''
  });
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneNumberPattern = /^[0-9]{10}$/;
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      alert('Please enter a 10-digit phone number.');
      return;
    }

    const filteredData = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      address: formData.address || null,
      email: formData.email || null,
      organization: formData.organization || null
    };

    if (!filteredData.name || !filteredData.phoneNumber) {
      alert('Please fill out the mandatory fields: Name and Phone Number');
      return;
    }

    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    try {
      setIsSubmitting(true);

      const formattedPhoneNumber = filteredData.phoneNumber;
      let messageText = `New order received:\nName: ${filteredData.name}\nPhone Number: ${formattedPhoneNumber}`;

      if (filteredData.address) {
        messageText += `\nAddress: ${filteredData.address}`;
      }
      if (filteredData.email) {
        messageText += `\nEmail: ${filteredData.email}`;
      }
      if (filteredData.organization) {
        messageText += `\nOrganization: ${filteredData.organization}`;
      }

      const response = await fetch(`https://api.telegram.org/bot${BotID}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatID,
          text: messageText
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormData({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        organization: ''
      });

      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit order. Please try again later.');
    } finally {
      setIsSubmitting(false);
      window.location.reload()
    }
  };


  return (
    <section className='w-screen mx-auto'>
      <div className='h-full w-[95vw] mt-[1rem] md:w-[90vw] mx-auto'>
        <div className='mx-auto flex flex-col items-center py-[3rem]'>
          <h1 className='text-vl font-semibold text-yellow-300' data-aos="fade-in">SCHEDULE</h1>
          <h2 className='leading-tight text-center text-[1rem] font-medium text-gray-500' data-aos="fade-in">Schedule a Pick up</h2>
          <h2 className='leading-tight text-center text-[1rem] md:mt-[4rem] mt-[2.5rem] font-medium text-black'>
            By filling the details below, our drivers will call you to get some information about the exact location as well as the amount and types of clothes. For faster processing, please give us a call and order for pick up. Remember Pick up and Delivery are free.
          </h2>
        </div>
        <div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4' data-aos="fade-right" data-aos-delay="300">
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-gray-700'>Name <span className='text-red-900'>*</span></label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='p-2 border border-gray-500 rounded'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='phoneNumber' className='text-gray-700'>Phone Number <span className='text-red-900'>*</span></label>
              <input
                type='tel'
                id='phoneNumber'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className='p-2 border border-gray-500 rounded'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='address' className='text-gray-700'>Address</label>
              <input
                type='text'
                id='address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                className='p-2 border border-gray-500 rounded'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-gray-700'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='p-2 border border-gray-500 rounded'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='organization' className='text-gray-700'>Name of your company (only for commercial wash)</label>
              <input
                type='text'
                id='organization'
                name='organization'
                value={formData.organization}
                onChange={handleChange}
                className='p-2 border border-gray-500 rounded'
              />
            </div>
            <ReCAPTCHA
              sitekey='6LePjgQqAAAAAMsj1mRsc2QZYNEQdik8cYgWyZ8k'
              onChange={handleRecaptchaChange}
            />
            <button type='submit' disabled={!recaptchaValue || isSubmitting} className={`bg-yellow-300 text-black border-2 p-2 rounded ${(!recaptchaValue || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'hover:border-yellow-400 hover:bg-transparent'}`}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
        <div className='w-full my-[2rem] flex justify-start'>
          <h2>
            <span className='text-red-800'>Note :</span> Currently, we primarily provide service to Tilottama Municipality and Butwal Municipality in Rupandehi. For more detailed information about our service locations,
            <span className='text-blue-800 underline'><Link to="/location">CLICK HERE</Link></span>
          </h2>
        </div>
        <div className='w-full flex gap-6 justify-start mb-[2rem] items-center'>
          <FaPhoneAlt className='md:size-7 size-6 text-blue-950' />
          <h2 className='text-[0.8rem] md:text-[1.1rem]'>
            <a href='tel:+9779000000000' className='text-blue-950'>9867890807</a> /
            <a href='tel:+9779000000000' className='text-blue-950'>9867288651</a> /
            <a href='tel:+9779000000000' className='text-blue-950'>9867462556</a>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
