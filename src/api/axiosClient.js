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
    const URLS = ['/auth/local/register', '/auth/local'];
    const { config, status, data } = error.response;
    if (URLS.includes(config.url) && status === 400) {
      //parse Error
      const errorList = data.data || [];
      const firstError = errorList.length > 0 ? errorList[0] : {};
      const messageList = firstError.messages || [];
      const firtMessages = messageList.length > 0 ? messageList[0] : {};

      throw new Error(firtMessages.message);
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
