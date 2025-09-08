const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();


const client = new Client ({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.DBPORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

client.connect()
.then(() => console.log("Connectie met db gemaakt"))
.catch(err => {
    console.error('Db con error', err.stack);
    console.error(err.message);
});


module.exports = client;