const express = require("express");
const app = express();

const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: "Hello Universe!"})
});

app.get('/users', (req, res) => {
  pool.query("SELECT * FROM users", function(err, rows, fields) {
   res.json(rows)
  });  
});


app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`));