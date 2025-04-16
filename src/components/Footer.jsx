import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Address and Contact */}
          <div className="text-center lg:text-left">
          <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-purple-400" /> Mediplus,Ground Floor, Sultanpur Road, Below Bank Of Baroda
              <br />  Arjunganj, Lucknow, Uttar Pradesh 226002
            </p>
            
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2 text-purple-400" />
              <a href="tel:+6239923041" className="hover:underline">
                 6239923041
              </a>
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-purple-400" />
              <a href="mailto:ankitmbbs100@gmail.com" className="hover:underline">
                ankitmbbs100@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <FaClock className="mr-2 text-purple-400" />  Mon To Sat :- 5:00 PM - 8:30 PM
              <br /> Sun :- 10:00 AM - 9:00 PM
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
              href="https://www.facebook.com/share/1B2gNKT8n9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-2xl transform hover:scale-125 hover:rotate-12 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
              href="https://www.instagram.com/ahaanwellness_center?utm_source=qr&igsh=MXF4aWxiMXFiNWJidw=="
                
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-2xl transform hover:scale-125 hover:rotate-12 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
              href="https://x.com/Ankitsinha20460?t=ERVQkYrxSgXB07pNmi46JQ&s=08"
                
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 text-2xl transform hover:scale-125 hover:rotate-12 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
              href="https://www.linkedin.com/in/dr-ankit-kumar-sinha-b87322ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-2xl transform hover:scale-125 hover:rotate-12 transition duration-300"
              >
                <FaLinkedin/>
              </a>
            </div>
          </div>
          {/* Leave a Review Button */}
          <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Your Feedback Matters</h2>
            <a
            href="https://www.google.com/search?client=ms-android-realme-terr1-rso2&sca_esv=a8822ba01c419370&hl=en-GB&cs=1&sxsrf=AHTn8zozqT-mqkvcvwnQT2TN9Of-sGLg5A:1740933724411&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzUhtGgH3XfVdt4nVPi6HSAylGYM8xkSUGZ-TgYpFtpCIpC2jN-4K6gQiY7XsK3UnLb7xUtDdQknlqJZZVJC6KjwNpdj7ibvdXdJcPkFmu4Ev4Lwgpbr6b1Xp3HR87tQzw9arFhtSqXiV-SHxWJv1F0pFzP3J_NP-mSSVUQcNpGQkhacrhjOk4ZoYksktkClv29bSCCUk85o0rTX4mnGJXdoViJb_ynO2kiT4I-VRi2nUsG83Og%3D%3D&q=Dr+Ankit+Sinha/Ahaan+Wellness+Center/+Best+Neuropsychiatrist/Anxiety,+Depression,Sexual+problems,+Addiction,Migraine,+OCD+Reviews&sa=X&ved=2ahUKEwjMguLB6-uLAxVI8zgGHWy6MTUQ0bkNegQIJRAD&biw=1536&bih=730&dpr=1.25"
            target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
                ⭐ Leave a Review
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
        </div>
      </div>
    </footer>
  );
};
export default Footer;