import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaClock, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-purple-800 text-white py-6"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Address & Timing Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaMapMarkerAlt className="text-xl" />
            <p className="text-sm">Mediplus, Ground Floor, Sultanpur Road, Below Bank Of Baroda, Arjunganj, Lucknow, Uttar Pradesh 226002</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <FaClock className="text-xl" />
            <p className="text-sm">
              Monday to Saturday - 05:00 PM to 08:30 PM | Sunday - 10:00 AM to 01:00 PM
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <FaPhoneAlt className="text-xl" />
            <a href="tel:+916239923041" className="text-sm">62399 23041</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 md:mb-0 text-center">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6 justify-center">
            <motion.a
              href="https://www.instagram.com/ahaanwellness_center?utm_source=qr&igsh=MXF4aWxiMXFiNWJidw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-2xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://x.com/Ankitsinha20460?t=ERVQkYrxSgXB07pNmi46JQ&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-2xl"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/share/1B2gNKT8n9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-2xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dr-ankit-kumar-sinha-b87322ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-2xl"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

        {/* Contact & Review Buttons */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
          <motion.a
            href="mailto:ankitmbbs100@gmail.com"
            className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition w-full md:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaEnvelope className="inline mr-2" /> Contact Now
          </motion.a>

          <motion.a
            href="https://www.google.com/search?client=ms-android-realme-terr1-rso2&sca_esv=a8822ba01c419370&hl=en-GB&cs=1&sxsrf=AHTn8zozqT-mqkvcvwnQT2TN9Of-sGLg5A:1740933724411&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzUhtGgH3XfVdt4nVPi6HSAylGYM8xkSUGZ-TgYpFtpCIpC2jN-4K6gQiY7XsK3UnLb7xUtDdQknlqJZZVJC6KjwNpdj7ibvdXdJcPkFmu4Ev4Lwgpbr6b1Xp3HR87tQzw9arFhtSqXiV-SHxWJv1F0pFzP3J_NP-mSSVUQcNpGQkhacrhjOk4ZoYksktkClv29bSCCUk85o0rTX4mnGJXdoViJb_ynO2kiT4I-VRi2nUsG83Og%3D%3D&q=Dr+Ankit+Sinha/Ahaan+Wellness+Center/+Best+Neuropsychiatrist/Anxiety,+Depression,Sexual+problems,+Addiction,Migraine,+OCD+Reviews&sa=X&ved=2ahUKEwjMguLB6-uLAxVI8zgGHWy6MTUQ0bkNegQIJRAD&biw=1536&bih=730&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition w-full md:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            ⭐ Leave a Review
          </motion.a>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;
