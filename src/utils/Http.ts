import { server } from '@/api/server';

export type MethodType = 'get' | 'post' | 'update' | 'delete';
class HttpClient {
  constructor(public baseURL: string) {
    this.baseURL = baseURL;
  }

  get(path: string) {
    return this.makeRequest('get', path);
  }

  post(path: string, body?: object) {
    return this.makeRequest('post', path, body);
  }

  update(path: string, body?: object) {
    return this.makeRequest('update', path, body);
  }

  delete(path: string) {
    return this.makeRequest('delete', path);
  }

  async makeRequest(method: MethodType, path: string, body?: object) {
    const response = await server.http({
      method: method,
      url: `${this.baseURL}${path}`,
      body,
    });

    let responseBody = null;
    if (response.data) {
      responseBody = response.data;
    }

    if (response.ok) {
      return responseBody;
    }

    throw response.error;
  }
}

export default HttpClient;
