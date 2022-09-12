import ErrorException from '../../domain/exceptions/ErrorException';
export default class NotFoundException extends ErrorException {
  message: string;
  constructor(message?: string) {
    super();
    this.statusCode = 404;
    this.message = message || 'Record not found.';
  }
}
