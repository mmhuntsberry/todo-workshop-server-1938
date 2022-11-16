const express = require("express");
const app = express();

const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello Universe!" });
});

// GET-  List of users
app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users", function (err, rows, fields) {
    res.json(rows);
  });
});

// GET- User by id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `SELECT * FROM users WHERE id = ${id}`,
    function (err, rows, fields) {
      res.json(rows);
    }
  );
});

app.post("/users", (req, res) => {
  console.log(req.body);
  pool.query(
    `INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`,
    [null, req.body.name, req.body.email, req.body.password],
    function (err, row, fields) {
      res.json(row);
    }
  );
});

app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`));
