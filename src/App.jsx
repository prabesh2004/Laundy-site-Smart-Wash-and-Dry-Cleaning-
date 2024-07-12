import React, { useEffect } from "react"
import Home from './Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Schedule from './COMPONENTS/Schedule';
import Navbar from './Navbar';
import ScrollToTop from './Scrooltop';
import Pricing from './COMPONENTS/Pricing/Pricing';
import Location from './COMPONENTS/Location/Location';
import About from './COMPONENTS/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    AOS.init({ duration: 1000,

      easing: 'ease-out',
      offset: 0,
      once:true
     
     });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar/>
        <Home/>
        <ScrollToTop />
      </>
    },{
      path:"/schedule",
      element:<>
        <Navbar/>
<Schedule/>
<ScrollToTop />
      </>
    },{
      path:"/pricing",
      element:< >
        <Navbar/>
<Pricing/>
<ScrollToTop />
      </>
    },{
      path:"/location",
      element:< >
        <Navbar/>
<Location/>
<ScrollToTop />
      </>
    },{
      path:"/about",
      element:< >
        <Navbar/>
<About/>
<ScrollToTop />
      </>
    }
  ])
  return (
    <RouterProvider router={router} >
    
    </RouterProvider>
   
  )
}

export default App

// https://www.2ulaundry.com/
// 146980316
