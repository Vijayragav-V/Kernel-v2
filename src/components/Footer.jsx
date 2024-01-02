import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-6">
          <h1 className="text-4xl text-[#4CAF50] font-bold mb-2">nexus</h1>
          <FaFacebookSquare className="text-white text-3xl hover:text-gray-500" />
          <FaGithubSquare className="text-white text-3xl hover:text-gray-500" />
          <FaInstagram className="text-white text-3xl hover:text-gray-500" />
          <FaTwitterSquare className="text-white text-3xl hover:text-gray-500" />
        </div>
        <div className="text-white text-center mt-4 text-xl font-semibold">
          <h1>Built with ❤️ by Mohamed K. and Vijay V.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
