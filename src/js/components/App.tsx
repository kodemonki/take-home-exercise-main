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
    loadMediaPage(page);
  }, [page, genre, year, filter, mediaType]);

  useEffect(() => {
    loadMediaPage(1);
  }, []);

  const loadMediaPage = (newpage: number) => {
    setData({
      totalMovies: 0,
      totalPages: 0,
      results: [],
    })
    getMedia(newpage, genre, year, filter, mediaType).then((data) => {
      setData(data);
    });
  };

  const prevPage = () => {
    setPage(page - 1);
    loadMediaPage(page - 1)
  };

  const nextPage = () => {
    setPage(page + 1);
    loadMediaPage(page + 1);
  };

  const updateMediaType = (mediaType: string) => {
    setPage(1);
    setMediaType(mediaType);
  };
  const updateFilter = (filter: string) => {
    setPage(1);
    setFilter(filter);
  };
  const updateGenre = (genre: string) => {
    setPage(1);
    setGenre(genre);
  };
  const updateYear = (year: string) => {
    setPage(1);
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
