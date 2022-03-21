/* eslint-disable max-len */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();

admin.initializeApp();

// eslint-disable-next-line max-len
const transporter = nodemailer.createTransport({service: "Gmail", auth: {user: config.user.email, pass: config.user.password}});

const mailOptions = {from: "Quirodiet", to: "kuithsteam@gmail.com", subject: "Probando Node mailer", text: "Mensaje con exito"};


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      response.send(error);
    } else {
      response.send("Mensaje enviado con exito");
    }
  });
});
