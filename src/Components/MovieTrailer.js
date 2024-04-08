import React from "react";
import useFetchtrailerVideo from "../Hooks/useFetchTrailerVideo";
import { useSelector } from "react-redux";

const MovieTrailer = ({ id }) => {
  useFetchtrailerVideo(id);
  const trailer = useSelector((store) => store.movies?.trailer);

  return (
    <div className="w-full aspect-video overflow-x-hidden">
      <iframe
        className="w-full aspect-video"
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
