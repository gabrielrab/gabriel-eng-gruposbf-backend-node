import ErrorException from '../../domain/exceptions/ErrorException';
export default class UnauthorizedException extends ErrorException {
  message: string;
  constructor(message?: string) {
    super();
    this.statusCode = 401;
    this.message =
      message || 'Authorization is required to access this resource.';
  }
}
