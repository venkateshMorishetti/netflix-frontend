import Header from "./Header";
import { API_HEADERS } from "../utility/CONSTATNS";
import { useEffect } from "react";

const Browse = () => {

    const getNowPlayingMovies = () =>{

    fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_HEADERS)
    .then(response => response.json())
    .then(response => console.log(response.results))
    .catch(err => console.error(err));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
    return (
        <div>
            <Header/>
        </div>
    )
}

export default Browse;