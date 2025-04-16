import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import doctorImage from '../assets/doctor.png';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif3.gif';
import videoFile from '../assets/ocd-animation.mp4';

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white text-black p-6 relative">
      {/* Scrolling Diseases Animation */}
      <div className="absolute top-0 w-full overflow-hidden bg-blue-200 text-blue-600 py-2">
        <div className="animate-scroll whitespace-nowrap">
          <span className="mx-8 text-lg font-bold">OCD</span>
          <span className="mx-8 text-lg font-bold">Addiction</span>
          <span className="mx-8 text-lg font-bold">Anxiety</span>
          <span className="mx-8 text-lg font-bold">Bipolar Disorder</span>
          <span className="mx-8 text-lg font-bold">Schizophrenia</span>
          <span className="mx-8 text-lg font-bold">ADHD</span>
          <span className="mx-8 text-lg font-bold">Suicidality</span>
          <span className="mx-8 text-lg font-bold">Autism</span>
          <span className="mx-8 text-lg font-bold">Stress</span>

        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10">
        {/* Tagline Section */}
        <div className="text-center">
          <h1 className="text-4xl text-black font-bold mt-5 mb-1">
            "Your Mental Health Journey Starts Here"
          </h1>

        </div>

        {/* Video, Doctor, and Feedback Section */}
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8 mb-8">
          {/* Video Section */}
          <div className="w-full  flex flex-col items-center">
            <video
              src={videoFile}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
              alt="Promotional Video"
            />
            <p className="text-sm mt-5">
              "Seek Help when your brain actually needs help."
            </p>
            {/* Book Appointment Dropdown */}
            <div className="relative mt-6" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 cursor-pointer bg-black text-white text-sm rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 animate-pulse hover:animate-none transition duration-300 ease-in-out"
              >
                Book Appointment
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <a
                    href="https://wa.link/7bg5uc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-2 text-black hover:bg-gray-500 hover:text-white transition duration-300"
                  >
                    <FaWhatsapp className="mr-2 text-green-600 group-hover:text-white transition duration-300" /> WhatsApp
                  </a>
                  <a
                    href="tel:+916239923041"
                    className="group flex items-center px-4 py-2 text-black hover:bg-gray-500 hover:text-white transition duration-300"
                  >
                    <FiPhoneCall className="mr-2 text-blue-600 group-hover:text-white transition duration-300" /> Call
                  </a>
                  <a
                    href="mailto:ankitmbbs100@gmail.com"
                    className="group flex items-center px-4 py-2 text-black hover:bg-gray-500 hover:text-white transition duration-300"
                  >
                    <FaEnvelope className="mr-2 text-red-600 group-hover:text-white transition duration-300" /> Gmail
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Doctor Section */}
          <div className="w-full  flex flex-col items-center">
            <img
              src={doctorImage}
              alt="Doctor"
              className="w-64 h-64 rounded-lg shadow-lg object-cover"
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold">Dr. Ankit Sinha</h2>
              <p className="font-bold">NeuroPsychiatry & De-Addiction Specialist</p>
              <p>MBBS, MD Psychiatry (PGI Chandigarh)</p>
              <p>Ex- Senior Resident, AIIMS</p>
              <p>MIPS, MISSUP, M-INEBRIA</p>
              <p>Certified for ATBI (NHS England, UK)</p>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="w-full md:col-span-2 lg:col-span-1 bg-blue-50 shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
              Hear From Our Patients
            </h3>
            <div className="overflow-hidden h-64 relative">
              <div className="animate-scroll-up">
                {/* Reviews */}
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Aman Chaturvedi:</strong> "Very satisfied with the doctor's behavior towards the patient and the attendant that was me. The treatment was done very thoughtfully and thoroughly by him. Even after the discharge, he was very kind to assist me in cases related to the treatment. Overall, I express a huge amount of gratitude to him for handling the treatment very well."
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Amit Singh:</strong> "Very good doctor, correct diagnosis, and accurate treatment. He explains everything about the disease as well as medicines. Counseling was so good, he gives sureshot assurance to patients about the treatment and its effectiveness."
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Usha Maurya:</strong> "Dr. Ankit is one of the best psychiatrists. He is excellent in his field, very knowledgeable, and highly skilled. He is very humble, well-mannered, and makes you really comfortable. He listens to you very patiently so that you can share all your problems without hesitation. This is my personal experience I was his patient with major depression and trichotillomania, and now I am perfectly fine. I highly recommend him."
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Rajkrishan Shukla:</strong> "Dr. Sahab is very knowledgeable & supportive. Listens very patiently and gives medicines just required. Great experience. 👍"
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Akruti Somkuwar:</strong> "Sir is an amazing doctor, and his treatments are effective for me. The patience and calmness he has in order to navigate through your needs is very good! 😊"
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Pragya Pushkarna:</strong> "As a psychologist working closely with Dr. Ankit, I can attest to his exceptional expertise as a psychiatrist. His ability to integrate medical knowledge with a deep understanding of mental health is truly impressive. His thoughtful, patient-centered approach leads to meaningful progress for the patients. I highly recommend Dr. Ankit for anyone seeking compassionate and effective psychiatric care."
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Pranita Pandey:</strong> "I wanted to take my mother to the best psychiatrist, so I searched for the best doctor in Lucknow. I found Dr. Ankit Sinha with excellent reviews. When I took my mother to see him, he diagnosed her with bipolar disorder, which was in its initial stage. We were scared, but Dr. Sinha explained everything with great care and compassion. He prescribed medication for a few months, and my mother started feeling significantly better. Although she's not completely cured, I highly recommend Dr. Ankit Sinha to anyone struggling with psychiatric issues. He's an excellent doctor, polite, and treats patients with kindness and compassion, which is his greatest quality."
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Madhu Srivastava:</strong> "He is really the best doctor in the city. He is not only an expert in his domain but also very humble in nature. We can share any kind of problem with him without hesitation, and he has the best solution for them. Thank you, doctor, and all the very best....🙏🙏👍👍"
                </div>

                {/* Duplicate Reviews for Seamless Loop */}
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Aman Chaturvedi:</strong> "Very satisfied with the doctor's behavior towards the patient and the attendant that was me. The treatment was done very thoughtfully and thoroughly by him. Even after the discharge, he was very kind to assist me in cases related to the treatment. Overall, I express a huge amount of gratitude to him for handling the treatment very well."
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Amit Singh:</strong> "Very good doctor, correct diagnosis, and accurate treatment. He explains everything about the disease as well as medicines. Counseling was so good, he gives sureshot assurance to patients about the treatment and its effectiveness."
                </div>
                <div className="text-lg text-gray-800 mb-4">
                  <strong>Usha Maurya:</strong> "Dr. Ankit is one of the best psychiatrists. He is excellent in his field, very knowledgeable, and highly skilled. He is very humble, well-mannered, and makes you really comfortable. He listens to you very patiently so that you can share all your problems without hesitation. This is my personal experience I was his patient with major depression and trichotillomania, and now I am perfectly fine. I highly recommend him."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images and GIFs Section */}
        <div className="flex flex-wrap justify-around gap-12 mb-8">
          {/* GIFs */}
          <img
            src={gif1}
            alt="GIF 1"
            className="w-74 h-64 rounded-lg object-cover"
          />
          <img
            src={gif2}
            alt="GIF 2"
            className="w-64 h-64 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;