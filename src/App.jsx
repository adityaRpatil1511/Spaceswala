import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import Properties from "./components/Properties";
import AboutUs from "./components/Aboutus";
import PayRent from "./components/Payrent";
import Servicess from "./components/servicess/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/properties" element={<Properties />} />
         <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/payrent" element={<PayRent/>} />
        <Route path="/services" element={<Servicess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
