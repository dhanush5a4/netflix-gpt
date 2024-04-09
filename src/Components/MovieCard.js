import React from 'react'
import { POSTER_CDN } from '../utils/constants';
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-9 transition-transform transform-gpu hover:scale-105 cursor-pointer'>
      <img src={POSTER_CDN+posterPath} alt="poster" />
    </div>
  )
}

export default MovieCard;