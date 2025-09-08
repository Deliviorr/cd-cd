const express = require('express');
const db = require('./database/connection')
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

app.get('/getCV', async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM cv`);
    res.json(result.rows);

  } catch (err){
    console.error(err);
    res.status(500).send('Database query gefaald')
  }
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
});