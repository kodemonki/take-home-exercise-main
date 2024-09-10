import React, { useEffect } from "react";

interface Media {
  title: string;
  poster: string;
  genre: string[];
  type: string;
}

export interface dataProps {
  totalMovies: number,
  totalPages: number,
  results: Media[]
}

interface MovieListProps {
  data: dataProps;
  page: number;
}

const MovieList: React.FC<MovieListProps> = ({ data, page }) => {

  useEffect(() => {
    console.log('data',data);
  }, [data]);

  
  return (
    <>
      {data?.results?.map((item) => {
        return <span key={item.title}>{item.title} </span>;
      })}

      <span>Page {page} of {}</span>
    </>
  );
};

export default MovieList;
