import { useRef } from "react";

const GptSearchBar = () =>{
    const searchValue = useRef(null)
    const getSearchResults = () =>{
        console.log(searchValue.current.value)
    }
    return (
        <div className="pt-[10%]  ">
            <form  className=" flex justify-center " onSubmit={(e)=> e.preventDefault()}>
                <input ref={searchValue} type="text" placeholder="Search Movies...." className=" w-1/2 my-2 text-2xl p-4 border-solid border-2 border-black-600  rounded-lg"/>
                <button className="bg-red-700 text-white rounded-lg p-4 ml-2 h-16 text-2xl mt-2" onClick={getSearchResults}>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar;