const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  stir: { type: String, unique: true },
  role: String,
  password: String,
});

const token = mongoose.model('token', tokenSchema);

module.exports = token;