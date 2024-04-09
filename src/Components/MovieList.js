import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return movies && (
    <div className="text-white p-6">
      <h1 className="text-white text-4xl font-bold pb-4">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth " style={{ overflowX: "auto", scrollbarWidth: "none" }}>
        <div className="flex">
          {movies.map((movies) => (
            <MovieCard key={movies.id} posterPath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
