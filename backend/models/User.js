const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    sparse: true   // 👈 important
  },
  password: {
    type: String
  },
  mobile: {
    type: String,
    unique: true,
    sparse: true   // 👈 important
  },
  otp: String,
  otpExpiry: Date,
  resetToken: String,
  resetTokenExpiry: Date
});

module.exports = mongoose.model("User", userSchema);
