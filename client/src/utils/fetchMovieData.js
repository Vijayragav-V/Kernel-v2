import axios from 'axios'
const getMovieOptions = (title) => {
  return {
    method: 'GET',
    url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${encodeURIComponent(title)}`,
    params: {
      exact: 'true',
      titleType: 'movie'
    },
    headers: {
      'X-RapidAPI-Key': 'e69dff0f48msh64e2fe9daaae680p118537jsn1db170a008a5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
};

const fetchMovieByTitle = async (title) => {
  const options = getMovieOptions(title);
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export { fetchMovieByTitle };
