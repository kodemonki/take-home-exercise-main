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

  useEffect(() => {
    getMedia(page).then((data) => {
      setData(data);
    });
  }, []);

  const prevPage = () => {
    getMedia(page - 1).then((data) => {
      setData(data);
    });
    setPage(page - 1);
  };

  const nextPage = () => {
    getMedia(page + 1).then((data) => {
      setData(data);
    });
    setPage(page + 1);
  };

  return (
    <>
      <NavBar />
      <MovieList data={data} page={page} nextPage={nextPage} prevPage={prevPage}/>
    </>
  );
}

export default App;
