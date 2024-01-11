import React from "react";
import { TbSettingsStar } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";

const Display = ({ extracurricularData, extracurricularCount }) => (
  <>
    <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-4 mt-[10vh] mb-[2vh] max-w-[90%] mx-auto">
      <div className="col-span-1 rounded-lg shadow-[0_0_15px_-7px] shadow-black">
        <div className="rounded-lg flex flex-col justify-center items-center py-4 mb-4">
          <div className="text-gray-900 text-xl md:text-2xl font-bold w-1/2 flex flex-row justify-between items-baseh1ne mx-auto">
            <p>Settings</p>
            <TbSettingsStar size="30px" />
          </div>
          <div className="flex flex-col">
            {[...Array(3)].map((_) => (
              <button className="bg-gray-900 w-[200px] mt-8 rounded-md font-semibold mx-auto md:mx-0 py-3 text-[#4CAF50] hover:text-white hover:scale-105 ease-in-out duration-300">
                Back To Home
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-3 py-6 lg:py-0">
        <div className="flex gap-4">
          <input
            type="search"
            className="w-[80%] md:w-[90%] p-4 text-base text-gray-900 focus:ring-[3px] outline-none focus:ring-gray-900 shadow-xl rounded-lg ease-in-out duration-300"
            placeholder="Search for an extracurricular (Ex: Purple Star Club)"
          />
          <div className="flex w-[20%] md:w-[10%] bg-gray-900 text-white items-center justify-center h-20 rounded-xl border-4 border-gray-900 hover:border-[#4CAF50] ease-in-out duration-300">
            <FaRegBookmark color="white" />
            <div className="p-2">0</div>
          </div>
        </div>
        <div className="ml-2 text-lg lg:text-xl font-semibold my-4">
          Showing {extracurricularCount && extracurricularCount.count} Search
          Results
        </div>
        <div className="flex flex-col">
          {extracurricularData.map((extracurricular) => (
            <div
              key={extracurricular.id}
              className="grid grid-cols-1 xl:grid-cols-4 shadow-[0_0_20px_-7px] shadow-black text-gray-900 items-center justify-between rounded-lg my-3"
            >
              <div className="col-span-2 my-10">
                <h1 className="ml-4 text-3xl md:text-6xl font-bold w-[100%]">
                  {extracurricular.title}
                </h1>
                <p className="ml-4 my-3 text-xl md:text-3xl font-semibold">
                  {extracurricular.description}
                </p>
                <div className="flex flex-wrap gap-4 ml-4 text-lg md:text-xl">
                  {extracurricular.tags.map((tag, tagIndex) => (
                    <p
                      key={tagIndex}
                      className="my-1 rounded-lg px-4 py-3 text-[#4CAF50] font-semibold bg-gray-900 ease-in-out duration-300"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <p className="mt-3 ml-4 text-xl md:text-3xl">
                  Created At: {extracurricular.created_at}
                </p>
                <p className="ml-4 text-xl md:text-3xl text-nowrap">
                  Updated At: {extracurricular.updated_at}
                </p>
              </div>
              <div className="col-span-2">
                <img
                  src={extracurricular.image_link}
                  alt="extracurricular"
                  className="h-[95%] w-[95%] my-6 mx-auto rounded-xl max-w-[1200px] max-h-[800px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Display;
