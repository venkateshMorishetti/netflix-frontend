import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = ({trailerVideo}) => {
    const {original_title, overview, id} = trailerVideo || {};
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId = {id}/>
        </div>
    )
}


export default MainContainer;