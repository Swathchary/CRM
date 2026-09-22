const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact_info: {
      email: { type: String, required: true },
      phone: { type: String },
    },
    status: { type: String, enum: ['lead', 'active', 'inactive'], default: 'lead' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer', customerSchema);