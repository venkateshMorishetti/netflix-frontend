import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies, addTrendingNowMovies } from "../utility/moviesSlice";


const useTrendingNowMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = () =>{
        fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_HEADERS)
        .then(response => response.json())
        .then(
            response => {
                dispatch(addPopularMovies(response.results))
            }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        getPopularMovies();
    },[])
}


export default useTrendingNowMovies;