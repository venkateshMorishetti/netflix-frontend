import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingTvShows } from "../utility/tvShowsSlice"


const useUpcomingTvShows = () => {
    const dispatch = useDispatch();
    const getUpcomingTvShows = () =>{
        fetch('https://api.themoviedb.org/3/tv/on_the_air?page=1', API_HEADERS)
        .then(response => response.json())
        .then(
            response => {
                dispatch(addUpcomingTvShows(response.results))
            }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        getUpcomingTvShows();
    },[])
}


export default useUpcomingTvShows;