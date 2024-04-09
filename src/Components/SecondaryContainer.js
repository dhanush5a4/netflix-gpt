import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <div className="bg-black">
        <div className="relative z-20 -mt-28">
          <MovieList title={"Now Playing"} movies={movies.movies} />
          <MovieList title={"Top Rated"} movies={movies.toprated} />
          <MovieList title={"Popular"} movies={movies.popular} />
          <MovieList title={"Upcoming"} movies={movies.upcoming} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
