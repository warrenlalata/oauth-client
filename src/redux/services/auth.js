import service from './api';

export const loginFromApi = body => service.post('/oauth/token', body);
