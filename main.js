const express = require('express');
const app = express();
const port = 8080;

app.use(express.json()); // Middleware to handle JSON request bodies.
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Route for handling GET requests.
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () =>{
    console.log("http://localhost:3000")
});