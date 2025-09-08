const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to handle JSON request bodies.
app.use(express.static('public'));

// Route for handling GET requests.
app.get('/', (req, res) => {
  res.send('test 123');
});

app.set('view engine', 'ejs');

app.listen(port, () =>{
    console.log("http://localhost:3000")
});