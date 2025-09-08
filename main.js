const express = require('express');
const app = express();
const port = 8080;

app.use(express.json()); 
app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () =>{
    console.log("http://localhost:8080")
});