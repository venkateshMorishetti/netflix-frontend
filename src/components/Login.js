import Header from "./Header";
import React, {  useRef, useState } from "react";
import {validateEmailAndPassword, validateSignUpFormParams} from "../utility/validator";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utility/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [isSiginInForm, setIsSingInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const toggleSignUpForm = () =>{
        setIsSingInForm(!isSiginInForm);
    }
    const name = useRef(null);
    const phoneNumber = useRef(null);
    const emailAddress = useRef(null);
    const password = useRef(null);

    const handleLoginOrSingup = () =>{
        if(isSiginInForm){
           const result =  validateEmailAndPassword(emailAddress.current.value, password.current.value);
           setErrorMessage(result);
           if(result === null){
                signInWithEmailAndPassword(auth,emailAddress.current.value, password.current.value)
                .then((userCredential) => {
                const user = userCredential.user;
                console.log("Login Successful");
                console.log(user)
                    navigate("/browse")
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                });
           }
        }else{
            const result = validateSignUpFormParams(name.current.value, phoneNumber.current.value,emailAddress.current.value, password.current.value);
            setErrorMessage(result);
            if(result == null){
                
                createUserWithEmailAndPassword(auth,emailAddress.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Sign Up Successful");
                    console.log(user)
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
            }
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix login background" />
            </div>
            <form onSubmit={(e)=> e.preventDefault()}  className="absolute bg-black  w-2/6 my-36 py-12 px-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-4xl font-bold py-4">{isSiginInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSiginInForm && 
                (<input ref={name} type="text" placeholder="Full Name" className="py-2 my-2 w-full h-16 rounded-md pl-4 bg-gray-600 "/>)
                }
                { !isSiginInForm &&
                    (<input type="text" ref={phoneNumber} placeholder="Phone NUmber" className="py-2 my-2 w-full h-16 rounded-md pl-4 bg-gray-600 " />)
                }            
                <input ref={emailAddress} type="text" placeholder="Email Address" className="py-2 my-2 w-full h-16 rounded-md pl-4 bg-gray-600 "/>
                <input ref={password} type="password" placeholder="Password" className="py-2 my-2 w-full h-16 rounded-md pl-4 bg-gray-600"/>
                <p className="text-red-600 pt-2 font-bold" >{errorMessage}</p>
                <button className="py-4 my-8 w-full bg-red-700 h-16 text-xl font-bold rounded-md" onClick={handleLoginOrSingup}>
                    {isSiginInForm ?"Sign In": "Sign Up"}
                </button>

                <p className="text-xl"> 
                    <span className="text-gray-400 cursor-pointer" onClick={toggleSignUpForm}>{isSiginInForm ? "New to Netflix? Sign Up now.": "Goback to Login?"}</span>
                </p>
            </form> 
        </div>
    )
}

export default Login;