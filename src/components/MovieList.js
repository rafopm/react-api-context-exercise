import React from "react";
import initialMovies from "../consts/initialMovies";
import Movie from "./Movie";

const MovieList = () => {
  return (
    <div className="container">
      <div className="row">
        {initialMovies.map((movie) => (
          <div className="col-md-4" key={movie}>
            <Movie movie={movie} />
          </div>
        ))}
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default MovieList;
