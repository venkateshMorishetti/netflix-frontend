import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingNowMovies } from "../utility/moviesSlice";


const useTrendingNowMovies = () => {
    const dispatch = useDispatch();
    const getTrendingNowMovies = () =>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', API_HEADERS)
        .then(response => response.json())
        .then(
            response => {
                dispatch(addTrendingNowMovies(response.results))
            }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        getTrendingNowMovies();
    },[])
}


export default useTrendingNowMovies;