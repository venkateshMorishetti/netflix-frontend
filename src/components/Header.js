import {auth} from "../utility/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utility/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { netflixlogo, userAvatar } from "../utility/CONSTATNS";
import { addGptSearchPageToggle } from "../utility/gptSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(store => store.user);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid , email, displayName}= user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
              navigate("/browse");
            } else {
                dispatch(removeUser())
                navigate("/");
            }
          });
          return () => unsubscribe();
    },[])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            console.log("user logged out successfully")
            // navigate("/");
          }).catch((error) => {
            // An error happened.
          });
          
    }

    const redirectToGptSearchPage = () => {
        dispatch(addGptSearchPageToggle());
        
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
            <img className="w-64" src={netflixlogo} alt="logo" />
            {userData && <div className="py-6 flex">
                <button className="text-white text-2xl mx-8 px-4 py-1 rounded-lg font-bold bg-pink-500" onClick={redirectToGptSearchPage}>Gpt Search</button>
                <img className="w-12 h-12" src={userAvatar} alt="" />
                <button className="text-white font-bold"onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
        
    )
}

export default Header;