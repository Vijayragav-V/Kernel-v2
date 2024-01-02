import React from "react";
import Phone from "../assets/phone.png";

const ExtracurricularSection = () => {
  return (
    <div className="w-full py-16 px-4 text-center md:text-left">
      <div className=" mx-auto max-w-7xl grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Phone} alt="Phone" />
        <div className="flex flex-col justify-center">
          <p className="text-[#4CAF50] font-bold text-base lg:text-xl">
            ELEVATE YOUR COLLEGE RESUME
          </p>
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold py-3">
            Build The Perfect College Application
          </h1>
          <p className="text-base font-semibold lg:text-xl py-1">
            Embark on a journey of self-discovery through a diverse array of
            extracurricular activities meticulously curated to enrich your
            academic experience. From athletic pursuits to artistic endeavors,
            effortlessly discover and bookmark activities that resonate with
            your passions. Stay abreast of the latest school happenings,
            updates, and important announcements to ensure you stay
            well-informed throughout your educational journey.
          </p>
          <button className="bg-gray-900 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#4CAF50] hover:text-white hover:scale-105 ease-in-out duration-300">
            View Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularSection;
