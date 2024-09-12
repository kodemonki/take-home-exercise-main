const cors = require("cors");
const express = require("express");
const v1Router = require("./v1/routes");

const app = express();

const port = process.env.SERVER_PORT || 3001;
const apiVersion = "V1";

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3001", "http://localhost:1234"],
};
app.use(cors(corsOptions));

app.use(`/${apiVersion}/`, v1Router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
