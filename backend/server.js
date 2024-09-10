import cors from "cors";
import express from "express";
import data from "../src/js/data.json" assert { type: "json" };

const app = express();
const port = process.env.SERVER_PORT || 3001;
const apiVersion = "V1";

/* cors */
const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:1234"],
};
app.use(cors(corsOptions));
/* cors */

/* routes */
app.get(`/${apiVersion}/data/`, (req, res) => res.json(data));
/* routes */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
