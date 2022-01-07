import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Howitworks from './components/Howitworks';
import Aboutus from './components/Aboutus';
import CustomerTestimonials from './components/CustomerTestimonials';
import Products from './components/Products';
import Weworkwith from './components/Weworkwith';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div>
         <Navbar />
         <Hero />
         <Services />
         <Howitworks />
         <Aboutus />
         <CustomerTestimonials />
         <Products />
         <Weworkwith />
         <ContactUs />
    </div>
  );
}

export default App;
