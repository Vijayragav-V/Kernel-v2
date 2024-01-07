import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3001/api',
});

const fetchExtracurriculars = async (setExtracurricularData) => {
  try {
    const response = await api.get('/extracurriculars/');
    setExtracurricularData(response.data);
  } catch (error) {
    console.error('Error fetching extracurriculars:', error.response?.data || error.message);
    throw error;
  }
};

const fetchExtracurricularByTitle = async (extracurricular, setExtracurricularData) => {
  try {
    const response = await api.get(`/extracurriculars/${extracurricular}`);
    setExtracurricularData(response.data);
  } catch (error) {
    console.error(`Error fetching data for extracurricular "${extracurricular}":`, error.response?.data || error.message);
    throw error;
  }
};

export { fetchExtracurriculars, fetchExtracurricularByTitle };