import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendingNowMovies from "../hooks/useTrendingNowMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
    
    useNowPlayingMovies();
    useTrendingNowMovies();
    usePopularMovies();
    useUpcomingMovies();
    const gptData = useSelector(store=> store.gpt);
    console.log(gptData)
   
    return (
        <div>
            <Header/>
            {gptData.gptSearchPageToggle ?<GptSearch /> : <><MainContainer />
            <SecondaryContainer /> </>}
        </div>
    )
}

export default Browse;