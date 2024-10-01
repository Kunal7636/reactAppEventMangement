import axios from 'axios';

// Create an Axios instance with a default configuration

const axiosInstance = axios.create({
    // You can use a common base URL if they share the same domain or handle it dynamically
    baseURL: 'http://localhost:8080/api', // Leave empty for dynamic URL setup
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  axiosInstance.interceptors.request.use(config => {
    if (config.url.startsWith('/users')) {
      config.baseURL = 'http://localhost:8080/api';
    } else if (config.url.startsWith('/events')) {
      config.baseURL = 'http://localhost:8081/api';
    }
    return config;
  });
  
  export default axiosInstance;