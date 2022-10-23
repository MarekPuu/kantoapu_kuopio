const mongoose = require('mongoose');

const TehtavatSchema = mongoose.Schema(
  {
    otsikko: { type: String, required: true },
    lisatietoja: { type: String },
    status: {
      type: String,
      default: 'kesken',
      enum: ['kesken', 'valmis'],
      required: true,
    },
    luoja: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tehtavat', TehtavatSchema);
