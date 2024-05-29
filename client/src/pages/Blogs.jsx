import React, { useEffect, useState } from "react";
import {fetchMovieById } from "../utils/fetchMovieData";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { TbSettingsStar } from 'react-icons/tb';
import { FaBookmark } from 'react-icons/fa6';
import BookmarkButton from '../components/movies/BookmarkButton';
import SearchBar from "../components/movies/SearchBar"; 

const Bookmarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    const fetchBookmarkedMovies = async () => {
      const movies =  fetchMovieById();
      setBookmarkedMovies(movies);
    };

    fetchBookmarkedMovies();
  }, []);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-4 mt-[10vh] mb-[2vh] max-w-[90%] mx-auto font-serif">
      <h1>{bookmarkedMovies.results.titleText.text}</h1>
    </div>
  );
};

export default Bookmarks;
