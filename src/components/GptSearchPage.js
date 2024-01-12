import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND } from '../utlis/constants'

const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-10'>
          <img src={BACKGROUND} alt="background-img"/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage;