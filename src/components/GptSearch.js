import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { loginPageBackground } from "../utility/CONSTATNS";
import Header from "./Header";
import { useSelector } from "react-redux";
const GptSearch = () => {
    const searchResults = useSelector(store => store.searchMovies);
    return (
        <div className="">
            <Header/>
             <div className="absolute -z-10">
                <img src={loginPageBackground} alt="netflix login background" />
            </div>
           
            <GptSearchBar />
           {searchResults.searchResults!=null  && <div className="">
                <GptSearchResults />
            </div>}
        </div>
    )
}

export default GptSearch;