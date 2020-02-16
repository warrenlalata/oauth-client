import service from './api';

export const loginFromApi = body => {
  return service.post('/oauth/token', body);
};

export const fetchCurrentUserFromApi = () => {
  return service.get('/api/user');
};

export const newRefreshTokenFromApi = refreshToken => {
  return service.post('/oauth/token', refreshToken);
};

export const logoutFromApi = () => {
  return service.delete('/api/logout');
};
