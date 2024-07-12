import React   from 'react'
import Contact from './Contact'
import Customers from './Customers'
import Landing from './Landing'
import Navbar from './Navbar'
import Services from './Services'
import Working from './Working'
import Faq from './Faq'
import Clients from './Clients'
import Footer from './Footer'



function Home() {

  return (  
  < >
    <Navbar/>
  
   <Landing/>
 <Working/>
 <Services/>

 <Customers/>

<Faq/>
<Clients/>
 <Contact  />
 <Footer/>
 </>
 
  )
}

export default Home