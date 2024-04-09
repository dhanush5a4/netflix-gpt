import { useEffect } from "react";
import { MOVIES_OPTIONS } from "../utils/constants";
import {useDispatch} from 'react-redux';
import { addTrailer } from "../utils/moviesSlice";

const useFetchtrailerVideo = (id) => {

    const dispatch = useDispatch();
  const getMovieTrailerAPI = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
      MOVIES_OPTIONS
    );
    const data = await res.json();
    // console.log(data.results)
    const filteredData = data.results.filter((m) => m.type === "Trailer");
    // console.log(filteredData);
    const trailer = filteredData.length ? filteredData[2] : data.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailerAPI();
  }, []);
};


export default useFetchtrailerVideo;