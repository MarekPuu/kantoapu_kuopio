const mongoose = require('mongoose');

const PalkkaluokatSchema = mongoose.Schema(
  {
    nimi: { type: String, required: true, unique: true },
    palkka: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Palkkaluokat', PalkkaluokatSchema);
