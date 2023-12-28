import { useDispatch } from "react-redux";
import { options } from "../utlis/constants";
import { addTopRatedMovies } from "../utlis/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() =>{
    getTopRatedMovies();
  },[]);

}

export default useTopRatedMovies;