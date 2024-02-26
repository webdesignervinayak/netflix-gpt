import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
  //console.log(movies);

  return (
    <div className='bg-black w-screen'>
      <div className='-mt-44 relative z-20'>
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
        <MovieList title="Popular" movies={movies.popularMovies}/>
        <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer