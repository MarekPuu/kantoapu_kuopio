const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    etunimi: { type: String, required: true },
    sukunimi: { type: String, required: true },
    sposti: { type: String, required: true, unique: true },
    salasana: { type: String, required: true },
    puhelinnro: { type: String },
    tilinumero: { type: String },
    rooli: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'],
      required: true,
    },
    palkkaluokat: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Palkkaluokat',
      },
    ],
    refreshToken: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
