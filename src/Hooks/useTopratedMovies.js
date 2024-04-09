import { useEffect } from "react";
import { MOVIES_OPTIONS } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../utils/moviesSlice";

const useTopratedMovies = () => {
  const dispatch = useDispatch();

  const fetchPopulargMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      MOVIES_OPTIONS
    );
    const data = await res.json();
    // console.log(data.results);
    dispatch(addTopratedMovies(data.results));
    // console.log("Now Playing Movies added..");
  };

  useEffect(() => {
    // console.log("Now Playing Movies fetched..");
    fetchPopulargMovies();
  }, []);
};

export default useTopratedMovies;
