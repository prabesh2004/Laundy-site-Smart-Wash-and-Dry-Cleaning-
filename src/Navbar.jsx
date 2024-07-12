import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Img from '../Images/smart wash.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-gray-500 underline  decoration-2' : 'hover:text-gray-300 ';
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-20 ease-in duration-300 text-white bg-blue-950'>
      <nav className='w-[95vw] lg:w-[90vw] mx-auto min-h-8 flex items-center justify-between'>
        <div className='flex gap-2 lg:gap-5 items-center'>
          <img src={Img} alt="Smart Wash Logo" className="w-[3rem]" />
          <h1 className='font-bold text-[1.2rem]'><a href="/">Smart Wash</a></h1>
        </div>
        <div className='hidden md:flex  gap-5 items-center font-[500] lg:ml-auto lg:mr-12 lg:gap-10 justify-between lg:justify-end px-4'>
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/pricing" className={getLinkClass('/pricing')}>Pricing</Link>
          <Link to="/location" className={getLinkClass('/location')}>Locations</Link>
          <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
          <a href="/#Contact" className='hover:text-gray-300'>Contact Us</a>
        </div>
        <div className='hidden md:flex relative'>
          <Link to="/schedule" className='border-[3px] text-black border-transparent bg-yellow-300 h-[75%] px-3 lg:px-5 rounded-md hover:bg-transparent hover:border-yellow-300 hover:text-white'>
            Order
          </Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='md:hidden absolute top-0 right-0 h-screen flex flex-col items-center w-[50vw] pt-[10vw] gap-8 bg-white text-black'>
          <button onClick={toggleMenu} className='absolute top-1 right-3 text-[1.8rem]'>X</button>
          <Link to="/" className={`py-1 w-[90%] ${getLinkClass('/')}`} onClick={toggleMenu}>Home</Link>
          <Link to="/pricing" className={`py-1 w-[90%] ${getLinkClass('/pricing')}`} onClick={toggleMenu}>Pricing</Link>
          <Link to="/location" className={`py-1 w-[90%] ${getLinkClass('/location')}`} onClick={toggleMenu}>Location</Link>
          <Link to="/about" className={`py-1 w-[90%] ${getLinkClass('/about')}`} onClick={toggleMenu}>About Us</Link>
          <a href="/#Contact" className='py-1 w-[90%] hover:bg-gray-300' onClick={toggleMenu}>Contact Us</a>
          <Link to="/schedule" className='w-full ml-3' > <button className='border-[3px] text-black border-transparent bg-yellow-300 w-[90%] rounded-md mt-2 hover:bg-transparent hover:border-yellow-300 hover:text-black'>
        Order
          </button></Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

// #ED974D
