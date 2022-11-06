import React from "react";
import MovieCard from "./MovieCard";

const MovieContainer = ({ movies }) => {
  console.log(movies);
  if (false) {
    throw new Error("Noooooo!");
  }
  return (
    <div>
      {movies.map((movie, i) => {
        return (
          <MovieCard
            Key={i}
            Poster={movie.Poster}
            Title={movie.Title}
            Year={movie.Year}
          />
        );
      })}
    </div>
  );
};

export default MovieContainer;
