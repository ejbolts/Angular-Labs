const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes

require("./api/auth")(app, path);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
