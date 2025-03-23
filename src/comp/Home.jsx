import { Link } from "react-router-dom";
import doctorImage from "../assets/doctor.png"; 
import logo from "../assets/mental_illness.png"; 
import gif1 from "../assets/gif1.gif"; 
import gif2 from "../assets/gif3.gif"; 
import { Phone } from "lucide-react";
import { motion } from "framer-motion"; // Importing framer-motion

const Home = () => {
  // Animation variants for the heading
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const headingText = "Your Mental Health Journey Starts Here".split(" ");

  return (
    <section className="bg-blue-100 min-h-screen flex flex-col items-center justify-center text-center p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Left Section - Text and Tagline */}
        <div className="lg:w-1/2 text-left lg:-mt-45 animate-fade-in-up">
          <img src={logo} alt="Ahaan Wellness Center" className="mx-auto transform transition-all" />
          
          {/* Animated Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-purple-700 mb-6 hover:text-purple-900 transition-all duration-300 flex flex-wrap"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {headingText.map((word, index) => (
              <motion.span 
                key={index} 
                variants={child} 
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-lg text-gray-700 italic mb-6 hover:text-gray-900 transition-all duration-300">
            "Seek help when your brain actually needs help"
          </p>
          <Link to="https://wa.link/7bg5uc" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg animate-pulse hover:animate-none">
            Book Appointment
          </Link>
          <div className="mt-6 text-lg text-gray-700">
            <p><strong>Timing:</strong> Monday to Saturday - 05:00 PM to 09:00 PM <b>|</b> Sunday - 10:00 AM to 01:00 PM</p>
            <p className="flex items-center mt-2">
              <Phone className="text-red-600 mr-2 animate-wiggle" /> 
              <a href="tel:+916239923041" className="text-blue-600 hover:underline">62399 23041</a>
            </p>
          </div>
        </div>

        {/* Right Section - Doctor's Image */}
        <div className="lg:w-1/2 animate-slide-in-right">
          <img src={doctorImage} alt="Doctor" className="rounded-5xl lg:ml-25 lg:mb-5 transform transition-all duration-500 hover:scale-105" />
          <div className="text-center text-gray-700 lg:mb-35">
            <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-900 transition-all duration-300">Dr. Ankit Sinha</h2>
            <p><b>Consultant Neuro Psychiatry & De-Addiction Specialist</b></p>
            <p>MBBS, MD Psychiatry (PGI Chandigarh)</p>
            <p>Ex- Senior Resident, AIIMS</p>
            <p>MIPS, MISSUP, M-INEBRIA</p>
            <p>Certified for ATBI (NHS England, UK)</p>
          </div>
        </div>

        {/* GIF Section */}
        <div className="flex flex-col lg:flex-column lg:space-x-4 items-center ">
          <img src={gif1} alt="GIF 1" className="w-70 h-70 rotate-y-180 "/>  
          <img src={gif2} alt="GIF 2" className="w-85 h-85 sticky " />
        </div>
      </div>
    </section>
  );
};

export default Home;
