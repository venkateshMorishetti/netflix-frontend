import { useSelector } from "react-redux/es/hooks/useSelector";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
    const nowPlayingMoviesData = useSelector(store=> store.movies?.nowPlayingMovies);
    const mainMovie = nowPlayingMoviesData && nowPlayingMoviesData[0];
    const {original_title, overview, id} = mainMovie || {};
    return (
        <div>
           
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId = {id}/>
        </div>
    )
}


export default MainContainer;