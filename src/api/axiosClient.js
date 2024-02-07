import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.ezfrontend.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to axiosClient
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor to axiosClient
axiosClient.interceptors.response.use(
  function (response) {
    return response.data; // lấy mỗi data kh lấy hết object response
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;
