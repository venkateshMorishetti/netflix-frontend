import { useRef } from "react";
import {LANGUAGE_CONFIG} from "../utility/CONSTATNS";
import {LANGUAGE_STRINGS} from "../utility/Strings";
import { updateSelectedLanguage } from "../utility/configSlice";
import { useDispatch, useSelector } from "react-redux";

const GptSearchBar = () =>{
    const searchValue = useRef(null)
    const dispatch = useDispatch();
    const selectedLanguageKey = useSelector(store => store.config.selectedLanguage);
    let languageKey = "en";
    const getSearchResults = () =>{
        console.log(searchValue.current.value)
    }

    const updateLanguage=(e)=>{
        languageKey = "te";
        dispatch(updateSelectedLanguage(e.target.value));
    }
    return (
        <div className="pt-[10%]  ">
            <form  className=" flex justify-center " onSubmit={(e)=> e.preventDefault()}>
                <select className="h-16 bg-gray-500 text-white mr-4 mt-3 px-4 font-bold rounded-lg" onChange={updateLanguage}>
                    {LANGUAGE_CONFIG.map((language, index) =>{
                        return <option key={index} value={language.key}>{language.label}</option>
                    })}

                </select>
                <input ref={searchValue} type="text" placeholder={LANGUAGE_STRINGS[selectedLanguageKey].search_movies} className=" w-1/2 my-2 text-2xl p-4 border-solid border-2 border-black-600  rounded-lg"/>
                <button className="bg-red-700 text-white rounded-lg p-4 ml-2 h-16 text-2xl mt-2" onClick={getSearchResults}>{LANGUAGE_STRINGS[selectedLanguageKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;