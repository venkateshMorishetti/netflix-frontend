import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utility/moviesSlice";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = () =>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_HEADERS)
        .then(response => response.json())
        .then(
            response => {
                dispatch(addUpcomingMovies(response.results))
            }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        getUpcomingMovies();
    },[])
}


export default useUpcomingMovies;