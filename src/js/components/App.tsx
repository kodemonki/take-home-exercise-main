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
    getMedia().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <MovieList data={data} page={page} />
    </>
  );
}

export default App;
