export default class ErrorException {
  statusCode: number;
  message: string;
  stack: string | undefined;
  constructor() {
    this.statusCode = 400;
    this.message = 'Error on execution';
    this.stack = new Error().stack;
  }
}
