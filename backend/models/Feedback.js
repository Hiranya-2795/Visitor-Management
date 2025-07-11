const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: Number,
  visitId: mongoose.Schema.Types.ObjectId,
  feedbackText: String,
  rating: Number
});

module.exports = mongoose.model('Feedback', feedbackSchema);
