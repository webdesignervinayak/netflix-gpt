import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  const trailerVideoKey = useSelector((store) => store.movies?.trailerVideo?.key);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe 
      className='w-screen aspect-video max-h-screen' 
      src={"https://www.youtube.com/embed/"+trailerVideoKey+"?autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground;