import React from 'react';
import scioto from "../assets/scioto.png"
const Hero = () => {
  return (
    <div className="bg-white text-gray-900">
  <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug">
        Connect with <span>Extracurriculars</span> At Scioto
      </h1>
      <p className="mt-4 sm:mt-6 mb-4 sm:mb-8 text-base sm:text-lg md:mb-12">
        Made by Scioto students for Scioto students, this platform connects you with diverse extracurricular activities. Join us in building a vibrant student community!
      </p>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        {/*Fill links in later*/}
        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border-2 border-gray-900 text-gray-900">asd</a>
        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded  border-2 border-gray-900 text-gray-900">asd</a>
      </div>
    </div>
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <img
        src={scioto}
        alt="Scioto"
        className="object-contain h-96 rounded-2xl shadow-lg"
      />
    </div>
  </div>
</div>

  );
};

export default Hero;
