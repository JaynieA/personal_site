/**
 * Handles requests to api/contact
 * @module routers/contactRoute
 */
 const express = require( 'express' );
 const router = express.Router();
 const pg = require( 'pg' );
 const connection = require( '../config/connection' );

 //GETS contents of `contact_info` table
router.get('/', function(req, res) {
   console.log('contact route hit');
   let results;
   pg.connect(connection, function(err, client, done) {
     if (err) {
       console.log(err);
       res.sendStatus(500);
     } else {
       let query = client.query("SELECT * FROM contact_info");
       query.on('row', function(row) {
         results = row;
       }); // end on
       query.on('end', function() {
         done();
         res.send({ results: results });
       }); // end end
     } // end else
   }); // end connect
 }); // end get

module.exports = router;
