// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="Choose Your Program" />
        <Program />
        <About />
        <Title subTitle="Gallery" title="Event Memory " />
        <Campus />
        <Title subTitle="TESTIMONIAL" title="What Student Say" />
        <Testimonial />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        

      
      </div>
     <Footer />


    </div>
  );
}

export default App
