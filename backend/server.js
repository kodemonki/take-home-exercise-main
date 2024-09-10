import cors from "cors";
import express from "express";

const app = express();
const port = process.env.SERVER_PORT || 3001 ;

/* cors */
const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:1234'],
};
app.use(cors(corsOptions));
/* cors */

app.get('/', (_, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});