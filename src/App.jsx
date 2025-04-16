
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Contact from "./components/Contact";
function App() { 
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/:disease" element={<ServiceDetail/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
  </Router>
  )
}

export default App;
