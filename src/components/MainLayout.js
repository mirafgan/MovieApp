import { Col, Row } from "react-bootstrap";
import Genres from "./Genres";
import MoviesByPage from "./MoviesByPage";

function MainLayout({ data, imgError }) {
    return (
        <main>
            <Row className="pb-5">
                <Col md={10}>
                    <MoviesByPage data={data} />
                </Col>
                <Col md={2}>
                    <Genres
                        genres={data.genres}
                        imgError={imgError}
                    />
                </Col>
            </Row>
        </main>
    )
}
export default MainLayout;