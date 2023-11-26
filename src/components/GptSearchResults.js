import { useSelector } from "react-redux/es/hooks/useSelector";
import MovieCard from "./MovieCard";
const GptSearchResults = () =>{

    const searchResults = useSelector(store => store.searchMovies);
    return ( 
        <div className="mt-20 mx-20 ">
            <h1 className="text-3xl font-bold text-white">More to expolore: {searchResults.searchQuery}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide pt-10">
            { searchResults.searchResults.length!=0 ? searchResults.searchResults?.map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
            )): <h1 className="text-3xl font-bold text-red-600">No Results Found</h1>}
            </div>

        </div>
    )
}

export default GptSearchResults;