import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const URL = process.env.REACT_APP_API_ROOT;
const instance = axios.create({
  baseURL: URL,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json'
  },
  responseType: 'json'
});

instance.interceptors.request.use(
  config => {
    // todo: get from storage
    const accessToken = localStorage.getItem('access_token');
    // Add auth header before request
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      ...config.headers,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` })
    };
    return config;
  },
  error => {
    // Do something with request error
    console.log('request interceptor error', error);
    return Promise.reject(error);
  }
);

const refreshAuthLogic = failedRequest => {
  console.log('failed!!');
  return instance
    .post(`${URL}/oauth/token`, {
      grant_type: 'refresh_token',
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      refresh_token: localStorage.getItem('refresh_token'),
      scope: ''
    })
    .then(tokenRefreshResponse => {
      console.log(tokenRefreshResponse.data.access_token);
      localStorage.setItem(
        'access_token',
        tokenRefreshResponse.data.access_token
      );
      localStorage.setItem(
        'refresh_token',
        tokenRefreshResponse.data.refresh_token
      );
      // eslint-disable-next-line no-param-reassign
      failedRequest.response.config.headers.Authorization = `Bearer ${tokenRefreshResponse.data.token}`;
      return Promise.resolve();
    });
};

createAuthRefreshInterceptor(instance, refreshAuthLogic);

export default instance;
