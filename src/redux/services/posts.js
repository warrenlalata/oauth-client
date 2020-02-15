import service from './api';

export const fetchPostsFromApi = () => service.get('/api/posts');
