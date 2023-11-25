import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingTvShows from "../hooks/useNowPlayingTvShows";
import { useSelector } from "react-redux";
import useUpcomingTvShows from "../hooks/useUpcomingTvShows";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTopRatingTvShows from "../hooks/useTopRatingTvShows";
const TvShows=()=>{
    useNowPlayingTvShows();
    useUpcomingTvShows();
    usePopularTvShows();
    useTopRatingTvShows();
    const tvShows = useSelector(store => store.tvShows);
    const mainTvShowTrailer = tvShows.nowPlayingTvShows && tvShows.nowPlayingTvShows[0];
    let trailerCopy = null;
    if(mainTvShowTrailer){
        trailerCopy = {...mainTvShowTrailer};
        trailerCopy["original_title"] = trailerCopy["original_name"];
    }
    let tvShowsData = null;
    if(tvShows.nowPlayingTvShows && tvShows.upcomingTvShows && tvShows.popularTvShows && tvShows.topRatedTvShows){
        tvShowsData = [
            {
                title:"Now Playing",
                moviesList:tvShows.nowPlayingTvShows
            },
            
            {
                title:"Top Rated",
                moviesList:tvShows.topRatedTvShows
            },
            {
                title:"Upcoming",
                moviesList:tvShows.upcomingTvShows
            },
            {
                title:"Popular",
                moviesList:tvShows.popularTvShows
            }
        ]
    } 
    return(
        <div>
            <Header/>
            <MainContainer trailerVideo = {trailerCopy}/>
            { tvShowsData && <SecondaryContainer data ={tvShowsData}/>}
        </div>
    )
}

export default TvShows;