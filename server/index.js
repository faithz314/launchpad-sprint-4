const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = 3000;
const server = app.listen(port, () => {
  const addr = server.address();
  console.log(`Server listening at http://localhost:${addr.port}`);
});

module.exports = app;
