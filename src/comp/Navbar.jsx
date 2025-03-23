import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, transform: "translateX(0px)" });

  const navItems = ["Home", "About", "Services", "Contact"];
  const linksRef = useRef([]);

  useEffect(() => {
    if (activeIndex !== null) {
      const element = linksRef.current[activeIndex];
      if (element) {
        setIndicatorStyle({
          width: `${element.offsetWidth}px`, // Dynamic width based on text size
          transform: `translateX(${element.offsetLeft}px)`, // Positioning based on element's position
          opacity: 1,
        });
      }
    } else {
      setIndicatorStyle({ width: 0, transform: "translateX(0px)", opacity: 0 });
    }
  }, [activeIndex]);

  return (
    <nav className="bg-purple-600 p-4 drop-shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* Left - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 mr-4 rounded-full border-2 border-white transition-transform duration-700 hover:rotate-360 hover:scale-110"
          />
        </div>

        {/* Center - Website Name */}
        <div className="flex-1 text-center text-white text-xl sm:text-2xl md:text-4xl font-bold whitespace-nowrap transition-transform duration-300 hover:scale-110">
          Ahaan Wellness Center
        </div>


        {/* Right - Menu Toggle for Mobile */}
        <div className="md:hidden">
          <button className="text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Navigation with Animated Background */}
        <div className="hidden md:flex items-center relative space-x-6">
          {/* Animated Background */}
          <div
            className="absolute top-0 bottom-0 left-0 bg-white h-10 rounded-lg transition-all duration-300 ease-in-out"
            style={indicatorStyle}
          />

          {navItems.map((item, index) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}  // Ensure Home redirects to "/"
              className="relative z-10 text-lg px-4 py-2 font-medium transition-all duration-300"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              ref={(el) => (linksRef.current[index] = el)}
              style={{
                color: activeIndex === index ? "black" : "white",
              }}
            >
              {item}
            </Link>
          ))}

          {/* Phone Number (No Background Animation) */}
          <a href="tel:+916239923041" className=" text-lg flex items-center px-4 py-2 rounded-lg bg-white text-black transition-all duration-300">
            <FiPhone className="mr-2" /> 62399 23041
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
            <div className="md:hidden  py-4 flex flex-col space-y-4 items-center shadow-lg transition-transform duration-500 transform translate-y-0 opacity-100 animate-slide-in">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Ensure Home redirects to "/"
              className="text-white text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black shadow-md"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a href="tel:+916239923041" className="text-white text-lg flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300" onClick={() => setMenuOpen(false)}>
            <FiPhone className="mr-2" /> 62399 23041
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
