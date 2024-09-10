const config = {
  emptyDateString: "all dates",
  baseApiUrl: "http://localhost:3001",
  corsArray: ["http://localhost:3001", "http://localhost:1234"],
  apiVersion: "v1",
  apiPaginationLimit: 10,
  genres: [
    "action",
    "adventure",
    "comedy",
    "crime",
    "sci-fi",
    "thriller",
    "fantasy",
    "western",
    "drama",
    "mystery",
    "horror",
    "animation",
    "history",
    "war",
    "science",
    "biography",
    "food & drink",
    "memoir",
    "politics",
    "dragons",
    "classics",
    "detective",
  ],
};

export const routes = {
  media: "media",
  genres: "genres",
};

export default config;
