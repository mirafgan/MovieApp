import { Col, Row } from "react-bootstrap";
import Genres from "./Genres";
import MoviesByPage from "./MoviesByPage";

function MainLayout({ imgError }) {
    return (
        <main>
            <Row className="pb-5">
                <Col md={10}>
                    <MoviesByPage  />
                </Col>
                <Col md={2}>
                    <Genres
                        imgError={imgError}
                    />
                </Col>
            </Row>
        </main>
    )
}
export default MainLayout;