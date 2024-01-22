import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    //console.log(movies);
  return (
    <div>
        <div className='my-6'>
        <h1 className='py-4 text-lg  text-white'>{title}</h1>
        <div className='flex overflow-x-auto scrollbar-hide'>
            <div className='flex'>
            {movies?.map((movie) => 
                <MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
            </div>
        </div>
        </div>
    </div>
  )
}

export default MovieList;