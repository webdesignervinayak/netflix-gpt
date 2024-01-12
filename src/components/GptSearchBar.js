import React from 'react'
import lang from '../utlis/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2'>
        <input 
        type="text" 
        placeholder={lang[langKey].gptSearchHolder}
        className='p-2 m-2 w-3/4'/>

        <button 
        className='py-2 px-8 my-2 mx-2 bg-red-800 text-white rounded-lg'>
            {lang[langKey].search}
        </button>
        </form>
    </div>
  )
}

export default GptSearchBar;