import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  async (config) => {
    // ?? Check token is not null then inject before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // ?? Any status code that lie within the range of 2xx cause this function to trigger
    // ?? Do something with response data

    // ?? extend timeout if response has 2xx status

    return response;
  },
  (error) => {
    // ?? Any status codes that falls outside the range of 2xx cause this function to trigger
    // ?? Do something with response error

    return Promise.reject(error);
  }
);

export const HttpStatusCode = axios.HttpStatusCode;
export default axios;

/*
NOTE: another way to using instance as configurable
/ export const instance = axios.create({
/   baseURL: 'https://example.com/api/',
/   timeout: 1000,
/   headers: {'Authorization': 'Bearer '+token}
/ });
*/
