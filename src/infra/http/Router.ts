import { Request } from 'express';
import ProductController from '../controller/ProductController';
import CurrencyController from '../controller/CurrencyController';
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

    // currencies
    this.http.route('get', '/currencies', async () => {
      const controller = new CurrencyController();
      const currency = await controller.list();
      return currency;
    });

    this.http.route('get', '/currency/:id', async (request: Request) => {
      const controller = new CurrencyController();
      const currency = await controller.getById(request.params.id);
      return currency;
    });

    this.http.route('post', '/currency', async (request: Request) => {
      const controller = new CurrencyController();
      const currency = await controller.create({ ...request.body });
      return currency;
    });

    this.http.route('put', '/currency/:id', async (request: Request) => {
      const controller = new CurrencyController();
      const currency = await controller.update(request.params.id, {
        ...request.body
      });
      return currency;
    });

    this.http.route('delete', '/currency/:id', async (request: Request) => {
      const controller = new CurrencyController();
      const currency = await controller.delete(request.params.id);
      return currency;
    });
  }
}
