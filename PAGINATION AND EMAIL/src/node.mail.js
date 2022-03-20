const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "b047e03daf9fe8", // generated ethereal user
      pass: "d8ff84000b8933", // generated ethereal password
    },
  });

module.exports=transporter;