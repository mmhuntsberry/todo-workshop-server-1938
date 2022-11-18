const express = require("express");
const app = express();
const pool = require("./sql/connection");
const userRoutes = require("./routes/users");
const todosRoutes = require("./routes/todos");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/todos", todosRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`));
