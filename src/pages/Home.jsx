import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import StatementSection from "../components/StatementSection";
import Footer from "../components/Footer";
import React from "react";
import About from "../components/About";
import Contact from '../components/ContactCTA';
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";


const Home = () => {
  return (
    <>
  
      <Hero />
      <FeaturedProjects />
      <About />
      <Services />
      {/* <StatementSection /> */}
      <Testimonials />
       <Contact />
      
    </>
  );
};

export default Home;
