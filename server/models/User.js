const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['student', 'recruiter'], required: true },
  university: String,
  bio: String,
  achievements: [String],
  certificates: [String],
  skills: [String]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
