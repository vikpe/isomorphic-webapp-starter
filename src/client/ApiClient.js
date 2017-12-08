import axios from 'axios';

const ApiClient = axios.create({
  baseURL: `${process.env.APP_URI}/api/`,
});

export default ApiClient;
