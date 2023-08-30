import axios from "axios";

const baseURL = process.env.REACT_APP_NOT_SECRET_CODE;
const request = axios.create({
  baseURL,
  headers: {
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
  },
});
request.interceptors.request.use(
  async (config) => {
    const tokens = localStorage.getItem("statAdminToken");
    if (tokens && typeof tokens == typeof "string") {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${tokens}`,
        stir: `${localStorage.getItem("statAdminStir")}`,
      };

      return config;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export { request };
