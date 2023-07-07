import axios from 'axios';

const baseURL = process.env.REACT_APP_NOT_SECRET_CODE;
const request = axios.create({
  baseURL,
  headers: {
    // "Content-Type": "multipart/form-data",
    'Content-Type': 'application/json',
  },
});
request.interceptors.request.use(
  async (config) => {
    const tokens = '';
    if (tokens && typeof tokens == typeof 'string') {
      config.headers = {
        ...config.headers,
        Authorization: 'Token',
      };
      return config;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { request };
