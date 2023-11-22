const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute">
            <h1 className=" text-white  text-6xl font-bold">{title}</h1>
            <p className="text-white  pt-5 w-1/4">{overview}</p>
            <div className="mt-4">
                <button className="bg-white  px-14 py-3 mr-4 font-bold text-lg rounded-md hover:bg-opacity-50"> Play</button>
                <button className="bg-gray-500 text-white px-14 py-3 font-bold text-lg rounded-md hover:bg-opacity-50"> More Info</button>
            </div>
        </div>
    )
}


export default VideoTitle;