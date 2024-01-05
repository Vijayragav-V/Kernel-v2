import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Extracurriculars from "./pages/Extracurriculars";
import Updates from "./pages/Updates";
import Blogs from "./pages/Blogs";
import Resources from "./pages/Resources";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/resources" element={<Resources/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
