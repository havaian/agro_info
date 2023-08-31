const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  stir: { 
    type: String,
    required: true, 
    unique: true 
  },
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  secret: {
    type: String,
    required: true
  }
}, { timestamps: true, strict: false, strictQuery: false });

const token = mongoose.model('token', tokenSchema);

module.exports = token;