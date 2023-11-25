import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import GptSearch from "./GptSearch";
import MyList from "./MyList";
import NewsAndPopular from "./NewsAndPopular";
import BrowseByLanguage from "./BrowseByLanguage";
import TvShows from "./TvShows";


const Body = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/my-list",
            element:<MyList/>
        },
        {
            path:"/news&popular",
            element:<NewsAndPopular/>
        },
        {
            path:"/browse-by-language",
            element:<BrowseByLanguage/>
        },
        {
            path:"/tv-shows",
            element:<TvShows/>
        },
        {
            path:"/gpt-search",
            element:<GptSearch/>
        }
    ])

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    )
}

export default Body;