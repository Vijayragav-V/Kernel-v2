import React, { useState, useEffect } from 'react';
import { fetchMovieByTitle } from '../../utils/fetchMovieData';
import SearchBar from './SearchBar';
import Display from './Display';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('The Batman');
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovieByTitle(searchQuery);
      setMovieData(data);
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Display movieData={movieData} />
    </div>
  );
};

export default MovieSearch;
