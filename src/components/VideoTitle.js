import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute aspect-video pt-[20%] px-12 my-2 bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold py-2 text-white'>{title}</h1>
      <p className='text-lg w-1/3 text-white'>{overview}</p>
      <div>
        <button className='w-32 py-3 px-4 bg-gray-200 font-bold text-lg rounded-md hover:opacity-80'>Play</button>
        <button className='m-2 w-40 py-3 px-4 bg-gray-500 text-lg text-white rounded-md hover:opacity-70'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle