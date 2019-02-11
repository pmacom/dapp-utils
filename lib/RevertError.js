class RevertError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RevertError';
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

module.exports = RevertError;
