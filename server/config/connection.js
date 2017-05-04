/**
 * Contains connection information
 * @module config/connection
 */
const pg = require('pg');
let connString = '';

if(process.env.DATABASE_URL !== undefined) {
    console.log('env connection string');
    connString = process.env.DATABASE_URL;
    pg.defaults.ssl = true;
} else {
    connString = 'postgres://localhost:5432/personal_site';
}

console.log("connString set to: ", connString);

module.exports = connString;
