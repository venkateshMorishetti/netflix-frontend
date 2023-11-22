import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utility/moviesSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = () =>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_HEADERS)
        .then(response => response.json())
        .then(
            response => {
                dispatch(addNowPlayingMovies(response.results))
            }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}


export default useNowPlayingMovies;