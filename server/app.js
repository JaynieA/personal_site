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
const contactRoute = require('./routers/contactRoute');
app.use('/contact', contactRoute);

const emailRoute = require('./routers/emailRoute');
app.use('/email', emailRoute);

const portfolioRoute = require('./routers/portfolioRoute');
app.use ('/portfolio', portfolioRoute);

module.exports = app;
