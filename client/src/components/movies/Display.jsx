import React, { useState, useEffect } from 'react';
import { TbSettingsStar } from 'react-icons/tb';
import { FaBookmark } from 'react-icons/fa6';
import { fetchMovieByTitle } from '../../utils/fetchMovieData';
import BookmarkButton from './BookmarkButton';
import SearchBar from './SearchBar'; // Assuming this path is correct

const Display = () => {
  const [searchQuery, setSearchQuery] = useState('The Batman');
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByTitle(searchQuery);
      if (data) {
        setMovieData(data);
      }
    };

    getData();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-4 mt-[10vh] mb-[2vh] max-w-[90%] mx-auto font-serif">
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
                className="bg-gray-900 w-[200px] mt-8 rounded-md font-semibold mx-auto md:mx-0 py-3 text-[#4CAF50] hover:text-white hover:scale-105 ease-in-out duration-300"
              >
                Back To Home
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-3 py-6 lg:py-0">
        <div className="flex gap-4 mb-4">
          <SearchBar onSearch={handleSearch} />
          <div className="flex w-[20%] md:w-[10%] bg-gray-900 text-[#4CAF50] items-center justify-center h-20 rounded-xl border-4 border-gray-900 hover:border-[#4CAF50] ease-in-out duration-300">
            <FaBookmark style={{ fontSize: '24px' }} />
          </div>
        </div>
        <div className="flex flex-col">
          {movieData && movieData.results ? (
            movieData.results.map((movie) => (
              <div
                key={movie.id}
                className="grid grid-cols-[0.5fr,2fr,1fr] shadow-[0_0_20px_-7px] shadow-black text-gray-900 items-center justify-between rounded-lg my-3 relative overflow-hidden w-full"
              >
                <div className="p-4">
                  <img
                    src={movie.primaryImage?.url}
                    alt="Movie Poster"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-3xl md:text-6xl font-bold w-[100%] my-3 mb-4 truncate">
                    {movie.titleText.text}
                  </h1>
                  <p className="italic text-md ml-4">
                    {movie.primaryImage?.caption?.plainText}
                  </p>
                  <p className="text-2xl md:text-xl font-thin my-2 ml-4">
                    Release Date: {movie.releaseDate ? `${movie.releaseDate.month}/${movie.releaseDate.day}/${movie.releaseDate.year}` : 'Unknown'}
                  </p>
                  <a
                    href={`https://www.imdb.com/title/${movie.id}/`}
                    className="text-blue-500 hover:text-blue-700 underline text-lg ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit "{movie.titleText.text}" on IMDb
                  </a>
                </div>
                <div className="text-[#4CAF50]">
                  <BookmarkButton movieID={movie.id} />
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;
