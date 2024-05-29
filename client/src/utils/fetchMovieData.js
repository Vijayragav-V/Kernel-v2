import axios from 'axios';

const fetchMovieByTitle = async (title, page = 1, exactTitleSearch = false) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e69dff0f48msh64e2fe9daaae680p118537jsn1db170a008a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  if (exactTitleSearch) {
    options.url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${encodeURIComponent(title)}`;
    options.params = {
      exact: 'true',
      titleType: 'movie',
      page: page
    };
  } else {
    options.url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${encodeURIComponent(title)}`;
    options.params = {
      titleType: 'movie',
      page: page
    };
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchMovieById = async (imdbId) => {
  const stuff = {
    method: 'GET',
    url: `https://moviesdatabase.p.rapidapi.com/titles/${imdbId}`,
    headers: {
      'X-RapidAPI-Key': 'e69dff0f48msh64e2fe9daaae680p118537jsn1db170a008a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  try {
    const returns = await axios.request(stuff);
    return returns.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchMovieByTitle, fetchMovieById };