/* eslint-disable max-len */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({origin: true});

admin.initializeApp();

// eslint-disable-next-line max-len
const transporter = nodemailer.createTransport({service: "Gmail", auth: {user: config.user.email, pass: config.user.password}});

let mailOptions = {from: "Quirodiet"};


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, ()=>{
    const {nombre, correo, mensaje} = request.query;
    mailOptions = {
      from: "Quirodiet",
      to: "josesevilla.herrera@hotmail.com",
      subject: "Mensaje enviado correctamente",
      html: `
        <p style="font-size: 16px"> De: ${nombre}</p>
        <p style="font-size: 16px"> Correo: ${correo}</p>
        <p style="font-size: 16px"> Mensaje: ${mensaje}</p>
      `,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Mensaje enviado con exito");
      }
    });
  });
});
