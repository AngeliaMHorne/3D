import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Tech from "./Tech";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="relative z-0 bg-cover bg-fixed bg-main">
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Tech />
      <Contact />
    </div>
  );
};

export default Home;
