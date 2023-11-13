import Header from "./Header";
const Login = () => {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix login background" />
            </div>
            <form className="absolute bg-black  w-2/6 my-36 py-12 px-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-4xl font-bold py-4">Sign In</h1>
                <input type="text" placeholder="Email or phone number" className="py-2 my-2 w-full h-16 rounded-md pl-4 bg-gray-600 "/>
                <input type="password" placeholder="Password" className="py-2 my-2 w-full h-16 rounded-md pl-4 bg-gray-600"/>
                <button className="py-4 my-8 w-full bg-red-700 h-16 text-xl font-bold rounded-md">Sign In</button>
                <p className="text-xl"> <span className="text-gray-400">New to Netflix?</span> Sign Up now.</p>
            </form> 
        </div>
    )
}

export default Login;
