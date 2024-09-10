import cors from "cors";
import express from "express";
import data from "../src/js/data.json" assert { type: "json" };

const app = express();

/* config */
const port = process.env.SERVER_PORT || 3001;
const apiVersion = "V1";
const media = "media";
const paginate = "paginate";
/* config */

/* cors */
const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3001", "http://localhost:1234"],
};
app.use(cors(corsOptions));
/* cors */

/* routes */
app.get(`/${apiVersion}/${media}/`, (req, res) => res.json(data.media));

app.get(`/${apiVersion}/${media}/${paginate}/`, (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const filter = String(req.query.filter); // should sanitize this value in a real app
  const mediaType = String(req.query.mediaType); // should sanitize this value in a real app

  if (isNaN(page) || isNaN(limit)) {
    res.status(500).json({ message: "Error : missing page and limit values" });
  } else {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let filteredData = [...data.media];

    if (mediaType !== "all" && mediaType !== "undefined") {
      filteredData = filteredData.filter((media) => media.type === mediaType);
    }

    if (filter !== "" && filter !== "undefined") {
      filteredData = filteredData.filter((media) =>
        media.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    const results = {};
    results.totalMovies = filteredData.length;
    results.totalPages = Math.ceil(filteredData.length / limit);

    results.results = filteredData.slice(startIndex, endIndex);
    res.paginatedResults = results;

    res.json(res.paginatedResults);
  }
});
/* routes */

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
