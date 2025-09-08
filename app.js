const express = require('express');
const router = require('./routes/router')
// const db = require('./database/connection')
const app = express();

//env importen
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json()); // json parsen
app.use(express.static('public')); //static folder maken

app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
});

app.use(router)