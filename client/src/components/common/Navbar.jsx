import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!isOpen);
  };

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Extracurriculars", path: "/extracurriculars" },
    { label: "Updates", path: "/updates" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <div className="border-b border-gray-300 md:border-0">
      <div className="flex justify-between items-center h-[8vh] max-w-7xl mx-auto px-4 text-[#4CAF50] border-gray-300">
        <a href="/" className="text-4xl font-bold px-4">
          nexus
        </a>
        <ul className="hidden md:flex justify-center md:text-xl space-x-8">
          {navigationItems.map((item) => (
            <li
              key={item.label}
              className="hover:scale-110 font-bold transition-transform duration-300"
            >
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="block md:hidden" onClick={handleNav}>
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <ul
          className={`absolute left-0 top-0 w-full mt-[8vh] bg-[#F5F5F5] border-y border-gray-300 ease-in-out duration-500 z-10 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {navigationItems.map((item) => (
            <li
              key={item.label}
              className="text-center text-lg font-bold py-4 border-b"
            >
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
