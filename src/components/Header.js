import {auth} from "../utility/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utility/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            console.log("user logged out successfully")
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
          
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
            <img className="w-64" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {userData && <div className="py-6">
                <img className="w-12 h-12" src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT980E7afJBlYZzvyMECBb6z3BkkG0XqY_oXyYfxim5c7pcrWM0lRzT-cKIImpMzTOhbBGslrEIb7ORMvOpHdkWMU4109Eo.png?r=2c8" alt="" />
                <button onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
        
    )
}

export default Header;