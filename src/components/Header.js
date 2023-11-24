import {auth} from "../utility/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utility/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { netflixlogo, userAvatar, COMPONENTS_CONFIG } from "../utility/CONSTATNS";
import { addGptSearchPageToggle } from "../utility/gptSlice";
import {updateCurrentTab} from "../utility/configSlice";
import LANGUAGE_STRINGS from "../utility/Strings";



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(store => store.user);
    const selectedTab = useSelector(store => store.config.currentTab)
    const showGptPageToggle = useSelector(store => store.gpt.gptSearchPageToggle);
    const selectedLanguage = useSelector(store=> store.config.selectedLanguage);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid , email, displayName}= user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
              navigate(selectedTab);
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
            // navigate("/");
          }).catch((error) => {
            // An error happened.
          });
          
    }
    const redirectToSelectedTab = (routeURL) => () => {
        dispatch(updateCurrentTab(routeURL));
        navigate(routeURL);
    }

    const redirectToGptSearchPage = () => {
        if(!showGptPageToggle){
            dispatch(updateCurrentTab("/gpt-search"))
            dispatch(addGptSearchPageToggle());
            navigate("/gpt-search")
        }else{
            dispatch(updateCurrentTab("/browse"))
            dispatch(addGptSearchPageToggle());
            navigate("/browse")
        }
    }

    const redirectToBrowsePage = ()=>{
        dispatch(updateCurrentTab("/browse"))
        navigate("/browse")
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex ">
            <img onClick={redirectToBrowsePage} className="w-64 pr-2 cursor-pointer" src={netflixlogo} alt="logo" />
            { userData &&
                COMPONENTS_CONFIG.map((component, index) => {
                    return <button key={index} className="text-white text-2xl px-8" onClick={redirectToSelectedTab(component.routeURL)}>{component.label}</button>
                })   
            }
            {userData && <div className="ml-64 py-6 flex">
                <button className="text-white text-2xl mx-8 px-4 py-1 rounded-lg font-bold bg-pink-500" onClick={redirectToGptSearchPage}>{showGptPageToggle ? LANGUAGE_STRINGS[selectedLanguage].home: "Gpt Search"}</button>
                <img className="w-12 h-12" src={userAvatar} alt="" />
                <button className="text-white font-bold"onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
        
    )
}

export default Header;