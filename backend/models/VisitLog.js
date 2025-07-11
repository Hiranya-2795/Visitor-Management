const mongoose = require('mongoose');

const visitLogSchema = new mongoose.Schema({
  userId: Number,
  purpose: String,
  personToVisit: String,
  checkIn: { type: Date, default: Date.now },
  checkOut: { type: Date, default: null },
  status: { type: String, default: 'checked-in' }
});

module.exports = mongoose.model('VisitLog', visitLogSchema);
