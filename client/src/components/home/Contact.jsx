import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-16 px-10 lg:px-4 text-center bg-gray-900">
      <div className=" mx-auto max-w-4xl">
        <div className="flex flex-col justify-center text-white">
          <p className="text-[#4CAF50] font-bold text-base lg:text-xl">
            CONTACT US
          </p>
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold py-3">
            Get In Touch
          </h1>
          <p className="text-base font-semibold lg:text-xl py-1">
            Ready to take the next step? We are here to assist you. Whether you
            have inquiries about our services, want to discuss a potential
            collaboration, or simply want to chat, our team is ready to connect
            with you. Feel free to reach out, and we'll get back to you as soon
            as possible!
          </p>
          <a
            href="mailto:mohamedwalidkhettab@icloud.com"
            className="inline-block text-center bg-[#4CAF50] w-[200px] rounded-md font-semibold my-6 mx-auto py-3 text-gray-900 hover:text-white hover:scale-105 ease-in-out duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
