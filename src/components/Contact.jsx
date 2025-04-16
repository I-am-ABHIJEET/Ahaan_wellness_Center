import {  FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
const Contact = () => {
  return (
    <section className=" w-full max-w-6xl mx-auto p-6 rounded-lg shadow-lg text-black-800">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">Get in Touch</h2>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col text-lg">
          <h3 className="text-xl font-bold mb-2">Address</h3>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-600 mr-3 w-7 h-7" strokeWidth={2.5} />
            Mediplus, Ground Floor, Sultanpur Road, Below Bank Of Baroda <br />Arjunganj, Lucknow Uttar Pradesh 226002
          </div>
        </div>
        <div className="flex flex-col text-lg">
          <h3 className="text-xl font-bold mb-2">Timing</h3>
          <div className="flex items-center">
            <FaClock className="text-yellow-500 mr-3 w-6 h-6" strokeWidth={2.5} />
            Mon to Sat:- 05:00 PM to 8:30 PM <br /> Sun:- 10:00 AM to 01:00 PM
          </div>
        </div>
        <div className="flex items-center text-lg">
          <FaPhoneAlt className="text-blue-600 mr-3 w-6 h-6" strokeWidth={2.5} />
          <a href="tel:+916239923041" className="text-blue-600 hover:underline">6239923041</a>
        </div>
      </div>
      <div className="mt-8">
        <iframe
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.146620742344!2d80.99470977522039!3d26.80345967671253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b3f91ac359%3A0x12a203d6ef255313!2sDr%20Ankit%20Sinha%2FAhaan%20Wellness%20Center%2F%20Best%20Neuropsychiatrist%2FAnxiety%2C%20Depression%2CSexual%20problems%2C%20Addiction%2CMigraine%2C%20OCD!5e0!3m2!1sen!2sin!4v1740855922211!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="text-center mt-4">
          <a 
            href="https://www.google.com/maps/place/Dr+Ankit+Sinha%2FAhaan+Wellness+Center%2F+Best+Neuropsychiatrist%2FAnxiety,+Depression,Sexual+problems,+Addiction,Migraine,+OCD/@26.8034597,80.9947098,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x399be3b3f91ac359:0x12a203d6ef255313!2sDr+Ankit+Sinha%2FAhaan+Wellness+Center%2F+Best+Neuropsychiatrist%2FAnxiety,+Depression,Sexual+problems,+Addiction,Migraine,+OCD,+Ground+Floor,+Mediplus+Clinic,+Ahaan+Wellness+Center,+Sultanpur+Rd,+below+Bank+Of+Baroda,+Arjunganj,+Lucknow,+Uttar+Pradesh+226002!2m2!1d80.9972847!2d26.8034597!3m5!1s0x399be3b3f91ac359:0x12a203d6ef255313!8m2!3d26.8034597!4d80.9972847!16s%2Fg%2F11ln5hmk65?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
