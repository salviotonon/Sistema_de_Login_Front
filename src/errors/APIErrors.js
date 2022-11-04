export class APIError extends Error {
  constructor(statusCode, statusMessage) {
    super(statusMessage);

    this.statusCode = statusCode;
  }
}
