/**
 * Handles requests to api/portfolio
 * @module routers/portfolioRoute
 */
 const express = require( 'express' );
 const router = express.Router();
 const pg = require( 'pg' );
 const connection = require( '../config/connection' );

 //GETS contents of `portfolio` table
router.get('/', function(req, res) {
   console.log('contact route hit');
   let results = [];
   pg.connect(connection, function(err, client, done) {
     if (err) {
       console.log(err);
       res.sendStatus(500);
     } else {
       let query = client.query("SELECT id, name, src, url FROM portfolio");
       query.on('row', function(row) {
         // results = row;
         results.push(row);
       }); // end on
       query.on('end', function() {
         done();
         res.send({ results: results });
       }); // end end
     } // end else
   }); // end connect
 }); // end get

module.exports = router;
