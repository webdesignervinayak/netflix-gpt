import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utlis/constants";
import { addTrailerVideo } from "../utlis/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getBackgroundVideo = async ( ) => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", options);
    const json = await data.json();

    const findTrailer = json?.results?.filter(videos => videos.type === "Trailer");
    const trailer = findTrailer?.length ? findTrailer[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  }

  useEffect( ( ) => {
    getBackgroundVideo();
  },[]);
}

export default useMovieTrailer;