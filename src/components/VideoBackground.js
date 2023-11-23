import { useSelector } from "react-redux";
import useAddMovieTrailerToStore  from "../hooks/useAddMovieTrailer";

const VideoBackground = ({movieId}) => {
    useAddMovieTrailerToStore(movieId);
    const movieTrailerKey = useSelector(store=>store.movies?.movieTrailer)
    
    return (
        <div>
            <iframe 
            className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/"+movieTrailerKey?.key+"?mute=1&autoplay=1&controls=0"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
        </div>
    )   
}


export default VideoBackground;