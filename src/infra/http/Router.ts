import {} from 'express';
import Http from './Http';

export default class Router {
  constructor(readonly http: Http) {}

  init() {
    this.http.route('get', '/health', async () => {
      return { status: 'ok' };
    });
  }
}
