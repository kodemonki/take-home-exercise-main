const express = require("express");
const router = express.Router();
const localData = require("../../../src/js/data.json");
let data;

const getData = async () => {
  //basic cache should impliment Redis if time
  if (data === undefined) {
    try {
      const response = await fetch(process.env.DATA_API_URL);
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

  //should sanitize these inputs more throughly in a real app
  const filter = String(req.query.filter); 
  const mediaType = String(req.query.mediaType); 
  const genre = String(req.query.genre);
  const year = String(req.query.year); 

  if (isNaN(page) || isNaN(limit)) {
    res.status(500).json({ message: "Error : missing page and limit values" });
  } else {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let filteredData = [...data.media];

    /*
      I appreciate doing all this filtering in one sweep would be more efficient
      but for the sake of time and simplicity I will do it in steps. It also makes it 
      easier to debug and maintain.
    */

    // Year filtering
    if (year !== "" && year !== "undefined") {
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

    // Genre filtering
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

    // Media type filtering
    if (mediaType !== "all" && mediaType !== "undefined") {
      filteredData = filteredData.filter((media) => media.type === mediaType);
    }

    // Fuzzy search : given more time i would make it split each word into halves which 
    // would allow for single words that were mispelled so "poter" would match with "Harry Potter"
    // but it meets the requirements of the task "Hary potter" will match with "Harry Potter".
    // I figured it's a matter of taste how fuzzy it should be.
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
