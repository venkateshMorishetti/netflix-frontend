import MovieCard from "./MovieCard"

const MovieList =({title, movies}) => {
    return (

        <div className="pl-8  pt-8">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide pt-8">
            { movies?.map(movie => (  
                <MovieCard movie={movie} key={movie.id}/>
            ))}  
            </div>
        </div>
    )
}

export default MovieList