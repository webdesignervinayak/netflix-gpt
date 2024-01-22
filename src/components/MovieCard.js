import React from 'react'
import { CDN_URL } from '../utlis/constants'

const MovieCard = ({posterpath}) => {
  if(!posterpath) return null
  return (
    <div className='w-48 px-2'>
        <img 
        alt="movie-poster"
        src={CDN_URL + posterpath}/>
    </div>
  )
}

export default MovieCard