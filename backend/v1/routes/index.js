const express = require("express");
const router = express.Router();
const localData = require("../../../src/js/data.json");
let data;


const getData = async () => {
  //basic cache
  if (data === undefined) {
    try {
      const response = await fetch(
        "https://drive.google.com/uc?export=view&id=1c7MKP-vr3r_64aiW7TAM2VxKRP7jK-4I"
      );
      if (response.ok) {
        data = await response.json();
      } else {
        //handle error
        data = localData;
      }
    } catch (error) {
      //handle error
        data = localData;
    }
  }
};

router.route("/").get((req, res) => {
  res.send(`Media Api ${req.baseUrl}`);
});

router.route("/media/").get(async (req, res) => {
  await getData();

  res.json(data.media);
});

router.route("/genres/").get(async (req, res) => {
  await getData();

  let results = [];
  data.media.forEach((element) => {
    element.genre.forEach((item) => {
      results.push(item);
    });
  });
  const unique = [...new Set(results)];
  res.json(unique);
});

router.route("/years/").get(async (req, res) => {
  await getData();

  let results = [];
  data.media.forEach((element) => {
    results.push(element.year);   
  });
  const unique = [...new Set(results)];
  res.json(unique);
});

router.route("/media/paginate/").get(async (req, res) => {
  await getData();

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
      if (!year.includes("all")) {
        const yearArray = year.split(",");
        filteredData = filteredData.filter((media) => {
          let found = false;
          for (let i in yearArray) {
            if (media.year === yearArray[i]) {
              found = true;
            }
          }
          return found;
        });
      }
    }

    if (genre !== "" && genre !== "undefined") {
      if (!genre.includes("all")) {
        const genreArray = genre.split(",");
        filteredData = filteredData.filter((media) => {
          let found = false;
          for (let i in genreArray) {
            if (media.genre.includes(genreArray[i])) {
              found = true;
            }
          }
          return found;
        });
      }
    }

    if (mediaType !== "all" && mediaType !== "undefined") {
      filteredData = filteredData.filter((media) => media.type === mediaType);
    }

    // Fuzzy search
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

    const results = {};
    results.totalMovies = filteredData.length;
    results.totalPages = Math.ceil(filteredData.length / limit);
    results.results = filteredData.slice(startIndex, endIndex);

    res.paginatedResults = results;
    res.json(res.paginatedResults);
  }
});

module.exports = router;
