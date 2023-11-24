import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { loginPageBackground } from "../utility/CONSTATNS";
const GptSearch = () => {
    return (
        <div>
             <div className="absolute -z-10">
                <img src={loginPageBackground} alt="netflix login background" />
            </div>
            <GptSearchBar />
            <GptSearchResults />
        </div>
    )
}

export default GptSearch;