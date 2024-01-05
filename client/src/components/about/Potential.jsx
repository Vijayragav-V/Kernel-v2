import React from "react";
import Scioto from "../../assets/scioto.jpg";
import { Link } from "react-router-dom";

const Potential = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left md:order-2">
            <p className="text-[#4CAF50] font-bold text-lg lg:text-xl mb-2">
              YOUR POTENTIAL
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Explore Your Potential
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-6">
              Navigate through a rich tapestry of extracurriculars tailored to
              suit various interests and talents. Whether you're into sports,
              arts, STEM, or community service, Nexus is here to help you find
              the perfect avenue to unleash your potential and make high school
              truly memorable.
            </p>
            <Link to="/extracurriculars">
              <button className="bg-[#4CAF50] w-[200px] md:w-[250px] rounded-md font-semibold py-3 hover:scale-105 hover:text-white ease-in-out duration-300">
                Discover Your Passion
              </button>
            </Link>
          </div>
          <img
            className="w-full h-full mx-auto my-4 md:max-w-2xl lg:max-w-4xl rounded-lg shadow-lg md:order-1"
            src={Scioto}
            alt="Scioto"
          />
        </div>
      </div>
    </div>
  );
};

export default Potential;
