import React, { useState, useEffect } from 'react';
import { TbSettingsStar } from 'react-icons/tb';
import { FaBookmark } from 'react-icons/fa6';
import { fetchMovieByTitle } from '../../utils/fetchMovieData';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookmarkButton from './BookmarkButton';
import SearchBar from './SearchBar'; // Assuming this path is correct
import YearRangeSlider from './YearRangeSlider';

const Display = () => {
  const [searchQuery, setSearchQuery] = useState('batman');
  const [movieData, setMovieData] = useState(null);
  const [exactTitleSearch, setExactTitleSearch] = useState(false); // State to track search type

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByTitle(searchQuery, 1, exactTitleSearch); // Pass exactTitleSearch
      if (data) {
        setMovieData(data);
      }
    };

    getData();
  }, [searchQuery, exactTitleSearch]); // Include exactTitleSearch in dependency array

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSearchToggle = () => {
    setExactTitleSearch(prevState => !prevState); // Toggle exactTitleSearch state
  };

  const formatReleaseDate = (releaseDate) => {
    if (releaseDate && releaseDate.month && releaseDate.day && releaseDate.year) {
      return `${releaseDate.month}/${releaseDate.day}/${releaseDate.year}`;
    }
    return 'Unknown';
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
            <button
              onClick={handleSearchToggle}
              className="bg-white w-[200px] mt-8 font-semibold mx-auto md:mx-0 py-3 border-8 border-[#6d97e4] text-[#6d97e4] hover:text-[#385180] hover:border-[#385180] ease-in-out duration-300"
            >
              {exactTitleSearch ? 'Keyword Search' : 'Exact Title Search'}
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-3 py-6 lg:py-0">
        <div className="flex gap-4 mb-4">
          <SearchBar onSearch={handleSearch} />
          <Link to="/movies/bookmarks" className="flex w-[20%] md:w-[10%] bg-gray-900 text-[#6e90cf] items-center justify-center h-20 rounded-xl border-4 border-gray-900 hover:border-[#6d97e4] ease-in-out duration-300">
              <div>
                <FaBookmark style={{ fontSize: '24px' }} />
              </div>
          </Link>
          
          
        </div>
        <div className="flex flex-col">
          {movieData && movieData.results ? (
            movieData.results.map((movie) => (
              <div
                key={movie.id}
                className="grid grid-cols-[0.5fr,2fr,1fr] shadow-[0_0_20px_-7px] shadow-black text-gray-900 justify-between rounded-lg my-3 relative overflow-hidden w-full"
              >
                <div className="p-4 items-center">
                  <img
                    src={movie.primaryImage?.url}
                    alt="Movie Poster"
                    className="w-full h-auto border-4 border-[#6e90cf]"
                  />
                </div>
                <div className="p-4 items-start">
                  <h1 className="text-3xl md:text-5xl w-[100%] my-3 mb-4">
                    {movie.titleText.text}
                  </h1>
                  <p className="italic text-md">
                    {movie.primaryImage?.caption?.plainText}
                  </p>
                  <p className="text-2xl md:text-xl font-thin my-2">
                    Release Date: {formatReleaseDate(movie.releaseDate)}
                  </p>
                  <a
                    href={`https://www.imdb.com/title/${movie.id}/`}
                    className="text-blue-500 hover:text-blue-700 underline text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit "{movie.titleText.text}" on IMDb
                  </a>
                </div>
                <div className="text-[#6e90cf] items-baseline">
                  <BookmarkButton title={movie.id} />
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
