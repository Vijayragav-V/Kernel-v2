import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled <= 0);
  };

  const scrollDown = () => {
    const viewportHeight = window.innerHeight;

    window.scrollTo({
      top: viewportHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisible);
    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  return (
    <div className="text-gray-900 h-[92vh] flex items-center justify-center">
      <div className="max-w-7xl -mt-[10vh] mx-auto text-center">
        <p className="text-[#4CAF50] font-bold p-2">BRAND NEW</p>
        <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold mb-4">
          Nexus - Scioto EC Finder
        </h1>
        <div className="flex justify-center items-center mb-6">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold py-4">
            Easily find{" "}
            <Typed
              strings={[
                "extracurriculars",
                "volunteer opportunities",
                "school updates",
              ]}
              typeSpeed={120}
              backSpeed={80}
              loop
            />
            at Scioto.
          </p>
        </div>
        <p className="md:text-xl text-sm font-bold text-gray-600 mb-8">
          Your go-to for extraordinary experiences at Dublin Scioto High School
        </p>
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
          <Link to="/about">
            <button className="bg-[#4CAF50] w-[200px] rounded-md font-semibold py-3 hover:scale-105 hover:text-white ease-in-out duration-300">
              About Us
            </button>
          </Link>
          <Link to="/extracurriculars">
            <button className="w-[250px] font-semibold py-3 hover:scale-105 ease-in-out duration-300">
              Explore Extracurriculars →
            </button>
          </Link>
        </div>
        <div
          className={`flex justify-center absolute bottom-12 lg:bottom-20 left-1/2 transform -translate-x-1/2 p-2 rounded-3xl bg-gray-900 hover:cursor-pointer ease-in-out duration-300 ${
            visible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={scrollDown}
        >
          <FaArrowDown color="white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
