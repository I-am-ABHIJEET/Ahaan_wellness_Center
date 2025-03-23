import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comp/Navbar";
import Home from "./comp/Home";
import About from "./comp/About";
import Services from "./comp/Services";
import Contact from "./comp/Contact";
import Footer from "./comp/Footer";
import ServiceDetail from "./comp/ServiceDetail";
import "./App.css"; // Import CSS file here

const App = () => {
  return (
    <Router>
      {/* Background Image */}
      <div className="bg-image"></div> 

      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:disease" element={<ServiceDetail/>} />
        <Route path="/book" element={<h1>Book Appointment</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
