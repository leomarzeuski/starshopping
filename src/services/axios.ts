import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';

export const get = async (url: string) => {
  try {
    const response = await axios.get(`${API_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};