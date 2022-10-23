const mongoose = require('mongoose');

const ErrorsSchema = mongoose.Schema({
  message: [{ type: String, required: true }],
  errStack: { type: String, required: true },
  user: { type: String, required: true, default: 'Ei kirjautunut' },
  statusCode: { type: Number, required: true, default: 500 },
  path: { type: String, required: true, default: 'Ei tiedossa' },
  time: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model('errors', ErrorsSchema);
