import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import GptSearch from "./GptSearch";

const Body = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    )
}

export default Body;