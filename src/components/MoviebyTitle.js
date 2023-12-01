import { useParams } from "react-router-dom";
import MovieStory from "./MovieStory";
import { useContext } from "react";
import { movieContext } from "../data/context";

function MoviebyTitle() {
    const { title } = useParams();
    const { data } = useContext(movieContext)
    return (
        <>
            {
                data?.movies.filter(item => item.title.toLowerCase() === title.split('-').join(' ')).map(m =>
                    <MovieStory {...m} key={m.id} imgError={imgError} />)
            }
        </>
    )
}
function imgError(e) {
    e.target.src = 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png';
    console.groupCollapsed('şəkil errorları')
}
export default MoviebyTitle;