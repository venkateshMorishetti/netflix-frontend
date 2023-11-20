import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import { useEffect } from "react";
import {auth} from "../utility/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import { addUser, removeUser } from "../utility/userSlice";
import { useNavigate } from "react-router-dom";

const Body = () => {
    const dispatch = useDispatch();

    const routes = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid , email, displayName}= user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}))
            } else {
                dispatch(removeUser())
            }
          });
    },[])

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    )
}

export default Body;