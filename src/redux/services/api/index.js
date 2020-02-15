import instance from './instance';

class ApiService {
  constructor() {
    this.client = instance;
  }

  get(path) {
    return this.client.get(path).then(response => response.data);
  }

  post(path, body) {
    return this.client.post(path, body).then(response => response.data);
  }
}

export default new ApiService();
