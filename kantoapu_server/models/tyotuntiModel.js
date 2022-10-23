const mongoose = require('mongoose');

const TyotuntiSchema = mongoose.Schema(
  {
    aloitus: { type: Date, required: true },
    lopetus: { type: Date, required: true },
    tauko: { type: Number, required: true },
    nimike: { type: String },
    tyotunnit: { type: Number, required: true },
    pyhapaiva: { type: Boolean, required: true, default: false },
    palkkaYhteensa: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ['Maksetttu', 'Maksamatta'],
      default: 'Maksamatta',
    },
    palkkaluokka: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Palkkaluokat',
    },

    tyontekija: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tyotunnit', TyotuntiSchema);
