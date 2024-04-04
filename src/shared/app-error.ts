import { HTTP_CODES } from './status-codes';

export class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string = 'Not Found') {
    super(message);
    this.statusCode = 404;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class BadRequestError extends Error {
  statusCode: number;

  constructor(message: string = 'Bad Request') {
    super(message);
    this.statusCode = 400;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class UnprocessableEntityError extends Error {
  statusCode: number;

  constructor(message: string = 'Un processable Entity Error') {
    super(message);
    this.statusCode = 422;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
export class UnAuthorizedError extends Error {
  statusCode: number;

  constructor(message: string = 'Unauthorized Error') {
    super(message);
    this.statusCode = 401;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class ForbiddenError extends Error {
  statusCode: number;
  constructor(message: string = 'Forbidden') {
    super(message);
    this.name = 'Forbidden';
    this.statusCode = HTTP_CODES.CLIENT.FORBIDDEN;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export class AppError extends Error {
  statusCode: number;

  constructor(err: any = 'internal server error') {
    super(err.message || 'internal server error');
    this.name = err.name || 'InternalServerError';
    this.statusCode = err.statusCode || 500;
  }
}
