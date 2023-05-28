import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const XP = lazy(() => import("./components/XP"));
const Projects = lazy(() => import("./components/Projects"));
const Home = lazy(() => import("./components/Home"));
const Contact = lazy(() => import("./components/Contact"));
const Navbar = lazy(() => import("./components/Navbar"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/xp" element={<XP />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
