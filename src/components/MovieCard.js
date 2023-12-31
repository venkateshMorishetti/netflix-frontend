import { MOVIE_IMAGE_BASE_URI } from "../utility/CONSTATNS";
const MovieCard = ({movie}) => {
    if(movie.poster_path == null) return null
    return (
        <img  className = "w-48 rounded-lg px-2" src={MOVIE_IMAGE_BASE_URI+movie?.poster_path} alt={movie?.title} />
    );
}


export default MovieCard;