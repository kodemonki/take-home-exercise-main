const cors = require('cors');
const express = require("express");
const data = require('../src/js/data.json')

const app = express();

/* config */
const port = process.env.SERVER_PORT || 3001;
const apiVersion = "V1";
const media = "media";
const paginate = "paginate";
const genres = "genres";
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

app.get(`/${apiVersion}/${genres}/`, (req, res) => {
  let results = [];
  data.media.forEach((element) => {
    element.genre.forEach((item) => {
      results.push(item);
    });
  });
  const unique = [...new Set(results)];
  res.json(unique);
});

app.get(`/${apiVersion}/${media}/${paginate}/`, (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const filter = String(req.query.filter); // should sanitize this value in a real app
  const mediaType = String(req.query.mediaType); // should sanitize this value in a real app
  const genre = String(req.query.genre); // should sanitize this value in a real app
  const year = String(req.query.year); // should sanitize this value in a real app

  if (isNaN(page) || isNaN(limit)) {
    res.status(500).json({ message: "Error : missing page and limit values" });
  } else {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let filteredData = [...data.media];

    if (year !== "" && year !== "all" && year !== "undefined") {
      filteredData = filteredData.filter((media) => {
        return media.year === year;
      });
    }

    if (genre !== "" && genre !== "all" && genre !== "undefined") {
      filteredData = filteredData.filter((media) => {
        return media.genre.includes(genre);
      });
    }

    if (mediaType !== "all" && mediaType !== "undefined") {
      filteredData = filteredData.filter((media) => media.type === mediaType);
    }

    /* Fuzzy search */
    if (filter !== "" && filter !== "undefined") {
      filteredData = filteredData.filter((media) => {
        let chunks = filter.split(" ");
        let found = false;
        for (let i = 0; i < chunks.length; i++) {
          if (media.title.toLowerCase().includes(chunks[i].toLowerCase())) {
            found = true;
          }
        }
        return found;
      });
    }
    /* Fuzzy search */

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

module.exports = app;