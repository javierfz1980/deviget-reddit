import axios from 'axios';
import qs from 'qs';

import { BASE_URI } from '../constants';

// Axios config.
const api = axios.create({
  baseURL: BASE_URI,
  paramsSerializer: (params: any) => qs.stringify(params),
});

// Display error message on API response errors.
api.interceptors.response.use(
  res => {
    if (res.status === 204 && res.data === '') {
      res.data = undefined;
    }
    return res;
  },
  err => {
    if (!axios.isCancel(err)) {
      console.error('Api error:', err);
      return Promise.reject(err);
    }
  },
);

// Exports.
export { api };
