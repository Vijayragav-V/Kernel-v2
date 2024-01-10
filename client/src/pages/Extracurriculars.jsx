import React, { useEffect, useState } from "react";
import {
  fetchExtracurriculars,
  fetchExtracurricularCount,
} from "../utils/fetchExtracurricularData";
import { TbSettingsStar } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";

const Extracurriculars = () => {
  const [extracurricularData, setExtracurricularData] = useState(null);
  const [extracurricularCount, setExtracurricularCount] = useState(null);
  const [dataError, setDataError] = useState(null);

  useEffect(() => {
    console.log("Fetching all extracurricular data");

    fetchExtracurriculars(setExtracurricularData)
      .then((data) => {
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching extracurricular data:", error);
        setDataError(error.message);
      });
  }, []);

  useEffect(() => {
    console.log("Fetching all extracurricular data");

    fetchExtracurricularCount(setExtracurricularCount)
      .then((data) => {
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching extracurricular data:", error);
      });
  }, []);

  if (dataError) {
    return (
      <div className="h-screen">
        <h1>Error Loading Extracurriculars</h1>
        <p style={{ color: "red" }}>Error: {dataError}</p>
      </div>
    );
  }

  // Remember to make a component for loading so you can put it in the place of the extracurriculars when they're loading. use extracurricularData ? (something here) : (something here)
  if (!extracurricularData) {
    return (
      <div className="h-screen">
        <h1>Loading Extracurriculars...</h1>
      </div>
    );
  }
  // In place of Showing x Results, write booting up the database. Do it later. Use extracurricularCount ? (something here) : (something here )
  if (!extracurricularCount) {
    return <div>Booting up the database...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-4 mt-[10vh] mb-[2vh] max-w-[90%] mx-auto">
        <div className="col-span-1 rounded-lg shadow-[0_0_15px_-7px] shadow-black">
          <div className="rounded-lg flex flex-col justify-center items-center py-4 mb-4">
            <div className="text-gray-900 text-xl md:text-2xl font-bold w-1/2 flex flex-row justify-between items-baseh1ne mx-auto">
              <p>Settings</p>
              <TbSettingsStar size="30px" />
            </div>
            <div className="flex flex-col">
              {[...Array(3)].map((_, index) => (
                <button
                  key={index}
                  className="p-3 bg-[#4CAF50] text-gray-900 mt-4 rounded-lg"
                >
                  Temporary Placeholder
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
            Showing {extracurricularCount.count} Search Results
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
                  <p className="ml-4 my-3 text-xl md:text-3xl">
                    {extracurricular.description}
                  </p>
                  <div className="flex flex-wrap gap-4 ml-4 text-lg md:text-xl">
                    {extracurricular.tags.map((tag, tagIndex) => (
                      <p
                        key={tagIndex}
                        className="my-1 rounded-lg px-4 py-3 text-white bg-gray-900"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                  <p className="mt-3 ml-4 text-xl">
                    Created At: {extracurricular.created_at}
                  </p>
                  <p className="ml-4 text-xl text-nowrap">
                    Updated At: {extracurricular.updated_at}
                  </p>
                </div>
                <div className="col-span-2">
                  <img
                    src={extracurricular.image_link}
                    alt="extracurricular"
                    className="h-[95%] w-[95%] my-6 mx-auto rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Extracurriculars;
