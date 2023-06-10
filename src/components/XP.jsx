import React from "react";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Tech from "./Tech";
import StarsCanvas from "./canvas/Stars";

const XP = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Experience />
      <Certifications />
      <Tech />
      <StarsCanvas />
    </div>
  );
};

export default XP;
