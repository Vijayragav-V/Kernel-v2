import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex items-center justify-center space-x-6 ">
          <h1 className="text-4xl text-[#4CAF50] font-bold pb-2 text-center">
            nexus - social media coming soon
          </h1>
        </div>
        <div className="flex flex-row justify-center text-center py-4 font-semibold space-x-6">
          <Link to="/about" className="hover:text-gray-500">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
          <p className="text-gray-500 hover:cursor-not-allowed">Join Us</p>
          <p className="text-gray-500 hover:cursor-not-allowed">Donate</p>
        </div>
        <div className="text-center pt-2 text-xl font-semibold">
          <h1>
            Built with ❤️ by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mohamed-khettab"
              className="font-bold hover:text-[#4CAF50]"
            >
              Mohamed K.
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Vijayragav-V"
              className="font-bold hover:text-[#4CAF50]"
            >
              Vijay V.
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
