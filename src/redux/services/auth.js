import service from './api';

export const loginFromApi = body => service.post('/oauth/token', body);

export const fetchCurrentUserFromApi = () => service.get('/api/user');

export const newRefreshTokenFromApi = refreshToken =>
  service.post('/oauth/token', refreshToken);
