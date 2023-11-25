import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingTvShows } from "../utility/tvShowsSlice"


const useNowPlayingTvShows = () => {
    const dispatch = useDispatch();
    const getNowPlayingTvShows = () =>{
        fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', API_HEADERS)
        .then(response => response.json())
        .then(
            response => {
                dispatch(addNowPlayingTvShows(response.results))
            }
        )
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        getNowPlayingTvShows();
    },[])
}


export default useNowPlayingTvShows;