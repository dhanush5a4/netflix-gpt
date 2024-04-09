import { useEffect } from "react";
import { MOVIES_OPTIONS } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopulargMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      MOVIES_OPTIONS
    );
    const data = await res.json();
    // console.log(data.results);
    dispatch(addPopularMovies(data.results));
    // console.log("Now Playing Movies added..");
  };

  useEffect(() => {
    // console.log("Now Playing Movies fetched..");
    fetchPopulargMovies();
  }, []);
};

export default usePopularMovies;
