import http from 'http';
import express, { Request, Response } from 'express';
import Http from './Http';

export default class ExpressHttp implements Http {
  app: any;
  server: http.Server;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.set('trust proxy', true);
    this.server = http.createServer(this.app);
  }

  async route(method: string, url: string, callback: any): Promise<void> {
    this.app[method](url, async (req: Request, res: Response) => {
      try {
        const result = await callback(req);
        res.json(result);
      } catch (error: any) {
        res.status(error?.statusCode || 500).send({
          status: false,
          message: error?.message ?? 'Error on request',
          details: error?.details || []
        });
      }
    });
  }

  async listen(port: number): Promise<any> {
    const server = this.app.listen(port);
    console.info(`Api running on ${port}`);
    return server;
  }

  close(callback?: any): void {
    console.info('Closing server');
    callback();
    this.server.close();
  }
}
