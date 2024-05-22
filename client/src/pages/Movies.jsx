import React, { useEffect, useState } from "react";
import { fetchMovieByTitle } from "../utils/fetchMovieData";
import Display from "../components/movies/Display";
import SearchBar from "../components/movies/SearchBar"; // Assuming this path is correct

const Movies = () => {
  const [movieData, setMovieData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('The Batman');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByTitle(searchQuery);
      if (data) {
        console.log(data);
        setMovieData(data);
      }
    };

    getData();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {movieData ? <Display movieData={movieData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Movies;
