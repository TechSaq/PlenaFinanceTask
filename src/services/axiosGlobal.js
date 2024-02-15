import Axios from 'axios';
import { AppConstants } from '../utils/AppConstants';

async function authRequestInterceptor(config) {
  // const authUser = await LocalStorage.getItem('authUser');

  // if (authUser && authUser.token) {
  //   const authToken = authUser.token;

  //   config.headers.authorization = `Token ${authToken}`;
  // }

  return config;
}

export const ApiCall = Axios.create({
  baseURL: AppConstants.API_ENDPOINT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

ApiCall.interceptors.request.use(authRequestInterceptor);
