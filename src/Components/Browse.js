import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div className='font border-l'>
      <Header/>
      </div>
      
  )
}

export default Browse;