import React, { useRef } from 'react'
import lang from '../utlis/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utlis/openai';
import { options } from '../utlis/constants';
import { addGptMovieResult } from '../utlis/GptSearchSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);
    const gptQuery = "Act as a Movie Recommedation system and suggest some movies for the query:" + searchText.current.value +
    ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: baahubali, kgf, salaar, RRR, eega"

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    const movieName = chatCompletion?.choices?.[0]?.message?.content.split(",");

    console.log(movieName);

    const searchMoviesInTMDB = async(movieName) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', options);
      const json = await data.json();

      return json.results;
    }

    const promiseArray = movieName.map((movie) => searchMoviesInTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({
      movieNames: movieName,
      movieResults : tmdbResults
    }))

    console.log(tmdbResults);

  }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2' onSubmit={(e) => e.preventDefault()}>
        <input 
        type="text" 
        placeholder={lang[langKey].gptSearchHolder}
        ref={searchText}
        className='p-2 m-2 w-3/4'/>

        <button 
        className='py-2 px-8 my-2 mx-2 bg-red-800 text-white rounded-lg'
        onClick={handleGptSearchClick}>
            {lang[langKey].search}
        </button>
        </form>
    </div>
  )
}

export default GptSearchBar;