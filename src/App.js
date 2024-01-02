import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Extracurriculars from "./pages/Extracurriculars";
import Updates from "./pages/Updates";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
