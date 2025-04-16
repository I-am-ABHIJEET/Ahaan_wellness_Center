import { useParams } from "react-router-dom";
import ServiceDetailData from "../data/ServiceDetailData"; // Ensure the correct path
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ServiceDetail = () => {
  const { disease } = useParams();
  const diseaseData = ServiceDetailData[disease];

  const [showButton, setShowButton] = useState(false); // Initially hidden

  // Auto scroll to top when component loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Show button only after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when button clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!diseaseData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-center text-red-600 text-3xl font-semibold animate-bounce">
          Disease Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto py-12 px-6 lg:px-16">
        {/* Title Section */}
        <h1 className=" lg:text-3xl sm:text-2xl text-center text-black font-bold mb-12 break-words sticky top-10 bg-white  p-4 rounded-lg z-10">
          {diseaseData.title}
        </h1>

        {/* Content Section */}
        {diseaseData.content.map((section, index) => (
          <div
            key={index}
            className="mb-10 p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">
              {section.heading}
            </h2>
            {section.children.map((child, idx) => (
              <p
                key={idx}
                className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 hover:text-blue-600 transition-all duration-300"
              >
                {child.paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ServiceDetail;