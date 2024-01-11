import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="w-full py-10 px-4 md:px-8 bg-gray-900 text-white scrollTarget">
      <h1 className="text-center text-[#4CAF50] p-4 mb-6 md:mb-10 text-4xl font-bold underline underline-offset-[14px]">
        Features
      </h1>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 p-4">
        <div className="w-full h-auto md:w-[calc(33.333% - 2rem)] border-2 border-[#F5F5F5] rounded-lg hover:scale-105 ease-in-out duration-300">
          <div className="bg-[#4CAF50] text-white p-4">
            <h2 className="text-center text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
              Handpicked Activities
            </h2>
          </div>
          <div className="p-4 text-center">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
              Explore a diverse range of extracurricular activities designed to
              enhance your school journey. From sports to arts, discover
              tailored options to match your interests and elevate your overall
              experience.
            </p>
            <Link to="/extracurriculars">
              <button className="bg-[#4CAF50] w-full lg:w-[200px] rounded-md font-semibold mt-4 md:mt-6 mx-auto py-2 md:py-3 text-gray-900 hover:text-white ease-in-out duration-300">
                Explore Extracurriculars
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto md:w-[calc(33.333% - 2rem)] border-2 border-[#F5F5F5] rounded-lg md:scale-105 md:hover:scale-110 hover:scale-105 ease-in-out duration-300">
          <div className="bg-[#4CAF50] text-white p-4">
            <h2 className="text-center text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
              Search, Filter & Bookmark
            </h2>
          </div>
          <div className="p-4 text-center">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
              Effortlessly find activities using our advanced search
              functionality. Use filters to refine your search based on
              categories, time, and popularity. Bookmark your favorites for easy
              access and personalized recommendations.
            </p>
            <Link to="/extracurriculars">
              <button className="bg-[#4CAF50] w-full lg:w-[200px] rounded-md font-semibold mt-4 md:mt-6 mx-auto py-2 md:py-3 text-gray-900 hover:text-white ease-in-out duration-300">
                Try It Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto md:w-[calc(33.333% - 2rem)] border-2 border-[#F5F5F5] rounded-lg hover:scale-105 ease-in-out duration-300">
          <div className="bg-[#4CAF50] text-white p-4">
            <h2 className="text-center text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
              School Info & Updates
            </h2>
          </div>
          <div className="p-4 text-center">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
              Stay informed with the latest school news & updates. Receive
              timely announcements about events, exams, and important deadlines.
              Our notification system ensures you never miss out on crucial
              information.
            </p>
            <Link to="updates">
              <button className="bg-[#4CAF50] w-full lg:w-[200px] rounded-md font-semibold mt-4 md:mt-6 mx-auto py-2 md:py-3 text-gray-900 hover:text-white ease-in-out duration-300">
                View School Updates
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
