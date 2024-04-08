import React from 'react'
import MovieTitle from './MovieTitle'
import { useSelector } from "react-redux";
import MovieTrailer from './MovieTrailer';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.movies);
  if (!movies) return;
  // console.log("IN title..");
  const mainMovie = movies[0];
  console.log(mainMovie);
  const {id,title,overview}=mainMovie;

  return (
    <div>
        <MovieTitle title={title} overview={overview}/>
        <MovieTrailer id={id}/>
    </div>
  )
}

export default MainContainer