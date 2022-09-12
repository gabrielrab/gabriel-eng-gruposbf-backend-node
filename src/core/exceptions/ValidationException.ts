import ErrorException from '../../domain/exceptions/ErrorException';
export default class ValidationException extends ErrorException {
  message: string;
  details: any;
  constructor(message?: string, details?: any) {
    super();
    this.statusCode = 422;
    this.details = details;
    this.message = message || 'Validation error.';
  }
}
