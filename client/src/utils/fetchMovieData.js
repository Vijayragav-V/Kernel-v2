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

const fetchMovieById = async (id) => {
  const options = {
    method: 'GET',
    url: `https://moviesdatabase.p.rapidapi.com/titles/${encodeURIComponent(id)}`,
    headers: {
      'X-RapidAPI-Key': 'e69dff0f48msh64e2fe9daaae680p118537jsn1db170a008a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { fetchMovieByTitle, fetchMovieById };