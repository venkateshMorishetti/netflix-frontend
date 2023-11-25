import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedTvShows } from "../utility/tvShowsSlice"


const useTopRatingTvShows = () => {
    const dispatch = useDispatch();
    const getTopRatingTvShows = () =>{
        fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_HEADERS)
        .then(response => response.json())
        .then(
            response => {
                dispatch(addTopRatedTvShows(response.results))
            }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        getTopRatingTvShows();
    },[])
}


export default useTopRatingTvShows;