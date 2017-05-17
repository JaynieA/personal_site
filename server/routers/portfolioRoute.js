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
   console.log('portfolio route hit');
   let results = [];
   pg.connect(connection, function(err, client, done) {
     if (err) {
       console.log(err);
       res.sendStatus(500);
     } else {
      //  let query = client.query("SELECT id, project_name, img_url, local_url FROM portfolio ORDER BY id");
       let query = client.query('SELECT id, project_name, local_url, portfolio_images.thumbnail AS thumbnail FROM portfolio INNER JOIN portfolio_images ON id = portfolio_id  ORDER BY id;');
       query.on('row', function(row) {
         results.push(row);
       }); // end on
       query.on('end', function() {
         done();
         res.send({ results: results });
       }); // end end
     } // end else
   }); // end connect
 }); // end get

 //GETS portfolio info from `portfolio` table by local_url
router.get('/:item', function(req, res) {
   console.log('portfolio:item route hit', req.params);
   const portfolioItem = req.params.item;
   let results;
   pg.connect(connection, function(err, client, done) {
     if (err) {
       console.log(err);
       res.sendStatus(500);
     } else {
       let query = client.query("SELECT id, project_name, description, thumbnail, img_1, img_2, img_3 FROM portfolio  INNER JOIN portfolio_images ON id=portfolio_id WHERE local_url = $1;", [portfolioItem]);

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
