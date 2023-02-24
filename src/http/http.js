import axios from 'axios';

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set: token => {
    privateApi.defaults.headers.Authorization = token;
  },
  remove: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};