const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "easygamemaster147@gmail.com",   // 👈 apna gmail
    pass: "vjdckmjmcnjeltvr"             // 👈 app password
  }
});

module.exports = transporter;
