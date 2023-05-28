import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styles } from "../styles";
import { logo, menu, close } from "../assets";


const Navbar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "xp",
      title: "XP",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  useEffect(() => {
    setActiveLink(location.pathname); // Set active link based on current pathname
  }, [location.pathname]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#00000095]`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'>
          <img src={logo} alt="Logo" className='w-12 h-12 object-contain' />
          <p className='text-theblue text-[20px] font-bold cursor-pointer flex'>
            Angelia Horne &nbsp; &nbsp;<span className='sm:block hidden text-white'>Artist~Designer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`${
              activeLink === `/${nav.id.toLowerCase()}` ? "text-white" : "text-secondary"
            } hover:text-theblue text-[18px] font-medium cursor-pointer`}
          >
            <Link to={`/${nav.id.toLowerCase()}`}>{nav.title}</Link>
          </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div className='p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      activeLink === `/${nav.id}` ? "text-white" : "text-secondary"
                    } font-vollkorn text-white text-[16px] font-medium cursor-pointer`}
                  >
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
