import React from "react";

const MovieTitle = ({title,overview}) => {
 
  return(
    <div className="mt-80 ml-10 absolute text-white">
      <h1 className="text-5xl  m-10">{title}</h1>
      <p className="w-1/4 text-xl m-10 space-x-11">{overview}</p>
      <button className="bg-white p-4 px-16 text-black m-10 rounded-lg hover:bg-opacity-50">Play</button>
      <button className="p-4 px-16 text-white m-10 rounded-lg bg-gray-500  bg-opacity-50">Info</button>
    </div>
  )
};

export default MovieTitle;
