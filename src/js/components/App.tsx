import React, { useEffect, useState } from "react";
import { getMedia } from "../service/apiRequests";
import MovieList, { dataProps } from "./MovieList";
import NavBar from "./NavBar";

function App() {
  const [data, setData] = useState<dataProps>({
    totalMovies: 0,
    totalPages: 0,
    results: [],
  });
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [filter, setFilter] = useState("");
  const [mediaType, setMediaType] = useState("all");

  useEffect(() => {
    getMedia(page, genre, year, filter, mediaType).then((data) => {
      setData(data);
    });
  }, [page, genre, year, filter, mediaType]);

  const prevPage = () => {
    getMedia(page - 1, genre, year, filter, mediaType).then((data) => {
      setData(data);
    });
    setPage(page - 1);
  };

  const nextPage = () => {
    getMedia(page + 1, genre, year, filter, mediaType).then((data) => {
      setData(data);
    });
    setPage(page + 1);
  };

  const updateMediaType = (mediaType: string) => {
    setMediaType(mediaType);
  };
  const updateFilter = (filter: string) => {
    setFilter(filter);
  };
  const updateGenre = (genre: string) => {
    setGenre(genre);
  };
  const updateYear = (year: string) => {
    setYear(year);
  };

  return (
    <>
      <NavBar
        setMediaType={updateMediaType}
        setFilter={updateFilter}
        setGenre={updateGenre}
        setYear={updateYear}
      />
      <MovieList
        data={data}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}

export default App;
