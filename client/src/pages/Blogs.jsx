// MovieComponent.js
import React, { useEffect, useState } from 'react';
import { fetchMovieById } from '../utils/fetchMovieData';

const Blogs = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const imdbIds = ['tt0468569', 'tt0133093', 'tt0111161']; // Example IMDb IDs
    const fetchMovies = async () => {
      const movieDataPromises = imdbIds.map(async (imdbId) => {
        const movieData = await fetchMovieById(imdbId);
        return {
          title: movieData.titleText.text,
          releaseYear: movieData.releaseYear.year,
          caption: movieData.primaryImage.caption.plainText
        };
      });

      const movies = await Promise.all(movieDataPromises);
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Caption: {movie.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
