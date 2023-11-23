import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    return (
        <div className="w-screen bg-black">
            <div className="-mt-96">
                {movies && <MovieList title="Now Playing" movies={movies?.nowPlayingMovies}/>}
                {movies && <MovieList title="Trending" movies={movies?.trendingMovies}/>}
                {movies && <MovieList title="Popular" movies={movies?.popularMovies}/>}
                {movies && <MovieList title="Upcoming" movies={movies?.nowPlayingMovies}/>}
           </div>
        </div>
    )
}


export default SecondaryContainer;