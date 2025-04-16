import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp, FaEnvelope, FaInstagramSquare
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900">
        <div className="flex flex-wrap flex-row justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={Logo}
              className="h-10 w-10 rounded-full mb-1 hover:rotate-360 transition-transform duration-1000 ease-in-out"
              alt="Logo"
            />
            <span className="self-center text-2xl lg:text-5xl font-semibold whitespace-nowrap text-white">
              Ahaan Wellness Center
            </span>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:+916239923041"
              className="text-sm lg:text-lg flex items-center px-2 py-1 rounded-lg text-black bg-white"
            >
              <FiPhoneCall className="mr-1 text-blue-600" /> 6239923041
            </a>
            <a
              href="https://wa.link/7bg5uc"
              className="text-3xl flex items-center font-bold px-1 py-1 rounded-full text-green-600 hover:rotate-360 transition-transform duration-1000 ease-in-out bg-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/ahaanwellness_center?utm_source=qr&igsh=MXF4aWxiMXFiNWJidw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl flex items-center font-bold px-0.5  rounded-lg text-pink-500 hover:rotate-360 transition-transform duration-1000 ease-in-out bg-white"
            >
              <FaInstagramSquare
              />
            </a>
            <a
              href="mailto:ankitmbbs100@gmail.com"
              className="text-3xl flex items-center font-bold px-1 rounded-lg text-red-600 hover:rotate-360 transition-transform duration-1000 ease-in-out bg-white"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </nav>

      <nav className="flex flex-row items-center justify-center bg-gray-900 sticky top-0 z-50 shadow-md ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row items-center font-medium mt-0 space-x-8 rtl:space-x-reverse lg:text-lg">
              <li>
                <Link to="/" className="text-gray-900 text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Services" className="text-gray-900 text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-gray-900 text-white hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
