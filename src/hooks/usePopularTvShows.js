import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularTvShows } from "../utility/tvShowsSlice"


const usePopularTvShows = () => {
    const dispatch = useDispatch();
    const getPopulatTvShows = () =>{
        fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_HEADERS)
        .then(response => response.json())
        .then(
            response => {
                dispatch(addPopularTvShows(response.results))
            }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        getPopulatTvShows();
    },[])
}


export default usePopularTvShows;