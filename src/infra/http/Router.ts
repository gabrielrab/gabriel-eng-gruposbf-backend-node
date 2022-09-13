import { Request } from 'express';
import ProductController from '../controller/ProductController';
import Http from './Http';

export default class Router {
  constructor(readonly http: Http) {}

  init() {
    this.http.route('get', '/health', async () => {
      return { status: 'ok' };
    });

    // products
    this.http.route('get', '/products', async () => {
      const controller = new ProductController();
      const products = await controller.list();
      return products;
    });

    this.http.route('get', '/product/:id', async (request: Request) => {
      const controller = new ProductController();
      const products = await controller.getById(request.params.id);
      return products;
    });

    this.http.route('post', '/product', async (request: Request) => {
      const controller = new ProductController();
      const product = await controller.create({ ...request.body });
      return product;
    });

    this.http.route('put', '/product/:id', async (request: Request) => {
      const controller = new ProductController();
      const products = await controller.update(request.params.id, {
        ...request.body
      });
      return products;
    });

    this.http.route('delete', '/product/:id', async (request: Request) => {
      const controller = new ProductController();
      const products = await controller.delete(request.params.id);
      return products;
    });
  }
}
