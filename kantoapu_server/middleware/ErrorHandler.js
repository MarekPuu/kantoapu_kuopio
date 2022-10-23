const Errors = require('../models/errorsModel');

const errorHandler = async (error, req, res, next) => {
  try {
    const { statusCode, message } = error;
    console.error('Server Error: ', error);
    const messageAsArray = Array.isArray(message) ? message : [message];
    const savedError = new Errors({
      message: messageAsArray,
      statusCode,
      errStack: error.stack,
      user: req.nimi,
      path: req.baseUrl + req.path,
    });
    console.log('tallennettu error:', savedError);
    // await savedError.save();
    res.status(statusCode || 500).json({ message: messageAsArray });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Odottamaton virhe' });
  }
};

module.exports = errorHandler;
