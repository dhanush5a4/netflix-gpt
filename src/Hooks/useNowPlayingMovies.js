import { useEffect } from "react";
import { MOVIES_OPTIONS } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addMovie } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIES_OPTIONS
    );
    const data = await res.json();
    // console.log(data.results);
    dispatch(addMovie(data.results));
    // console.log("Now Playing Movies added..");
  };

  useEffect(() => {
    console.log("Now Playing Movies fetched..");
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
