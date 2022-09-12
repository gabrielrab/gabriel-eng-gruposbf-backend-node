import ErrorException from '../../domain/exceptions/ErrorException';
export default class ForbiddenException extends ErrorException {
  message: string;
  constructor(message?: string) {
    super();
    this.statusCode = 403;
    this.message = message || 'Without permission to access this resource';
  }
}
