import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendingNowMovies from "../hooks/useTrendingNowMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import { UseSelector } from "react-redux";

const Browse = () => {
    
    useNowPlayingMovies();
    useTrendingNowMovies();
    usePopularMovies();
    useUpcomingMovies();
    const movies = useSelector(store => store.movies);
    const mainMovieTrailer = movies?.nowPlayingMovies && movies?.nowPlayingMovies[0];
    let moviesData = [];
    if(movies){
        moviesData = [
            {
                title:"Now Playing",
                moviesList:movies?.nowPlayingMovies
            },
            {
                title:"Trending",
                moviesList:movies?.trendingMovies
            },
            {
                title:"Popular",
                moviesList:movies?.popularMovies
            },
            {
                title:"Upcoming",
                moviesList:movies?.upcomingMovies
            }
        ]
    }
    

    return (
        <div>
            <Header/>
            <MainContainer trailerVideo={mainMovieTrailer}/>
            <SecondaryContainer data = {moviesData}/>
        </div>
    )
}

export default Browse;