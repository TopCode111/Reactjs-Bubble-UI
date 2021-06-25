import axios from "axios";
import LocalStorageService from "./localStorageService";
const localStorageService = LocalStorageService.getService();

export const interceptor = () => {
  const axiosInstance = axios.create({
    baseURL: "https://api.goodracing.net",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorageService.getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        localStorageService.setToken("");
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
