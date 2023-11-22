import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {API_HEADERS} from "../utility/CONSTATNS";
import {addMovieTrailer} from "../utility/moviesSlice";

const useAddMovieTrailerToStore = (movieId) => {
    let filteredTrailerVideos= null;
    let finalTrailerVideo = null;
    const dispatch = useDispatch();
    const getMovieTrailerVideo = () =>{
        fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_HEADERS)
        .then(response => response.json())
        .then(response => {
            
            filteredTrailerVideos = response.results.filter((video) => video.type === "Trailer");
            finalTrailerVideo = filteredTrailerVideos.length !== 0?filteredTrailerVideos[0]:  response.results[0];
            dispatch(addMovieTrailer(finalTrailerVideo))

        })
        .catch(err => console.error(err));
    }
    useEffect(()=>{
        getMovieTrailerVideo();
    }, [movieId])
}


export default useAddMovieTrailerToStore;