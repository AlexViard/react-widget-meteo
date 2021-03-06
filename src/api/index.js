import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 3000,
    params: {
      units: 'metric',
    }
  });

export default instance;