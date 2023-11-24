import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { loginPageBackground } from "../utility/CONSTATNS";
import Header from "./Header";
const GptSearch = () => {
    return (
        <div>
            <Header/>
             <div className="absolute -z-10">
                <img src={loginPageBackground} alt="netflix login background" />
            </div>
            <GptSearchBar />
            <GptSearchResults />
        </div>
    )
}

export default GptSearch;