import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Genres from "./Genres";
import Movies from "./Movies";
import { useContext } from "react";
import { movieContext } from "../data/context";

function MoviesbyGenre() {
    const { genre } = useParams();
    const { data } = useContext(movieContext);
    const genredata = data?.movies.filter(item => item.genres.includes(genre[0].toUpperCase() + genre.slice(1)))
    return (
        <>
            <Row>
                <Col md={10}>
                    <Movies data={genredata} />
                </Col>
                <Col md={2}>
                    <Genres genres={data.genres} />
                </Col>
            </Row>
        </>
    )
}
export default MoviesbyGenre;