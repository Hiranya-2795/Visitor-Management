const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  name: String,
  email: String,
  phone: String,
  photo: String,
  blacklisted: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
