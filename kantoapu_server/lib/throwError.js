const throwError = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode || 500;
  error.message = message;
  throw error;
};

module.exports = throwError;
