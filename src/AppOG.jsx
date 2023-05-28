import { BrowserRouter } from "react-router-dom";
import "./index.css"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, VideoGallery,Certifications, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Certifications />
          <Works />
          <VideoGallery />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;