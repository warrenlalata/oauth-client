import axios from 'axios';

const API_ROOT = 'http://localhost:8000';

// todo: get from storage
const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODAyMzc4MmZkZGNhYjg3M2ZiNGM0MGNlYzI2ZjVlZjY1ZjM3ZGEwMjZlNzdmNGE5MWE4NDhkMTNjZGNjMzEzNDg3OTY2NzE4NmUzNTZkYjMiLCJpYXQiOjE1ODEyNjQyNjgsIm5iZiI6MTU4MTI2NDI2OCwiZXhwIjoxNTgxMjY1MTY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZJZfzWQMNWXrRscBNb8gvARf-WGP9Qo2Nyuc6m-v9uOTsO7hPKEl1pMK1Y94cvNmPBRVd-szbPf_xqEqNO7eqcU1CLWHY2KFa1Nku2s1FkvWvEtXYJLrMW5TP8jcmwjq25PDvF-A93aMtUsX6AIwFQRsWL2ia7J3IS8Twu7SOoKcaISLzx4YcloOgPSfOf3ZXp-BdRURFQ4QvTCtNxmK3LhyZl94lTDke5U7Vp63gUu_luISoyrLoG7k4ff04B_Qi1bd4YXXE7kT7OMy9qCzIFGK9biZ8d8SaemjZd9v2scbFhJgbQ2Bic2mjGKaBavWDOdxGLnts3FSFokqMjs_EfSElTxNRTbVAGZEn8tSo6cQlP4kU9w5FvmOxjGVWciXoGG2AJ5NaDPHvcJb27_p8sqDHOWUNCVApt8kf0RPpYpOPxsMLFgcofppMEOljdQz_lLsRlApA0UYgU-nq9AN4828QQofddI-CvJ0ZrGH-7GgSrppDI2a3BAUonH0o7zoYJvKIO17AiyAfj5hu6oaxc0H_93kEFzv_K07yQRvnM7FIds1XxoYMakBGO-VMaKCkVQBRKXE3rZSogfuojPsFj7UhBHHh25X-EYlJnCRVLIy4vYxFHphgQaESc3KZhX5ywNeWvJv9t3uSlBF1h6uLvc5tAeAFQh81_7VR7reksk';

class ApiService {
  constructor() {
    const client = axios.create({
      baseURL: API_ROOT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    // Request Interceptor
    client.interceptors.request.use(
      config => {
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
        console.log('interceptor error', error);
        return Promise.reject(error);
      }
    );

    this.client = client;
  }

  get(path) {
    return this.client.get(path).then(response => response.data);
  }

  post(path, body) {
    return this.client.post(path, body).then(response => response.data);
  }
}

export default new ApiService();
