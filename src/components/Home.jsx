import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Tech from "./Tech";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Tech />
    </div>
  );
};

export default Home;
