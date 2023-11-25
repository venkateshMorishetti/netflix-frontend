import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = ({data}) => {
    // const movies = useSelector(store => store.movies)
    return (
        <div className="w-screen bg-black">
            <div className="-mt-96">
                {data.map(obj => {
                    return <MovieList title={obj.title} movies={obj.moviesList} key={obj.title}/>
                })}
           </div>
        </div>
    )
}


export default SecondaryContainer;