import React from "react";

const Join = () => {
  return (
    <div className="w-full py-16 px-10 lg:px-4 text-center ">
      <div className=" mx-auto max-w-5xl">
        <div className="flex flex-col justify-center text-gray-900 w-full">
          <p className="text-[#4CAF50] font-bold text-base lg:text-xl">
            JOIN US
          </p>
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold py-3">
            Join Nexus
          </h1>
          <p className="text-base font-semibold lg:text-xl py-1">
            Embark on an exceptional journey with Nexus, your school's premier
            extracurricular finder. Whether you're eager to explore
            partnerships, connect with like-minded individuals, or delve into
            unique opportunities, Nexus is your gateway to greatness. Our
            dedicated support is ready to address any queries promptly, guiding
            you towards an extraordinary extracurricular experience. Join us and
            be part of shaping the Nexus community!
          </p>
          <a
            href="/"
            className="inline-block text-center bg-gray-900 w-[200px] rounded-md font-semibold my-6 mx-auto py-3 text-[#4CAF50] hover:text-white hover:scale-105 ease-in-out duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;
