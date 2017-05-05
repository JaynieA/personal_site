/**
 * Handles requests to api/email
 * @module routers/emailRoute
 */
 const express = require( 'express' );
 const router = express.Router();
 const pg = require( 'pg' );
 const connection = require( '../config/connection' );
 const postmark =  require('../config/postmark');
 const nodemailer = require('nodemailer');

 //POSTS info from submitted contact form
router.post('/', function(req, res) {
   console.log('contact route hit', req.body);

   //create sendmail transport
   let transporter = nodemailer.createTransport({
     //use postmark api credentials
     service: 'postmark',
     auth: {
       user: postmark.user,
       pass: postmark.pass
     } // end auth
   }); // end createTransport

   // setup email data with unicode symbols
   let mailOptions = {
       from: process.env.POSTMARK_EMAIL, // sender address
       to: process.env.NODEMAILER_EMAIL_RECIPIENT, // list of receivers
       subject: req.body.subject, // Subject line
       text: req.body.message, // plain text body
   };

   // send mail with defined transport object
   transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
           console.log(error);
           return res.sendStatus(500);
       }
       console.log('Message %s sent: %s', info.messageId, info.response);
       res.sendStatus(200);
   });

 }); // end get

module.exports = router;
