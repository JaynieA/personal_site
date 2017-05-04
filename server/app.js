const PORT = process.env.PORT || 5050;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const connection = require('./config/connection');

//middleware
app.use(express.static( 'public' ));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log('server listening on', PORT);
}); // end app listen

//Routers
let contactRoute = require('./routers/contactRoute');
app.use('/contact', contactRoute);

module.exports = app;
