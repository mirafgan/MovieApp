import { Card, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import { Col } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Movie({ title, year, posterUrl, actors, director, runtime, plot }) {
    const [imageLoad, setImageLoad] = useState(true)
    return (
        <Col xs={24} sm={8} md={6} >
            <NavLink to={`/MovieApp/movie/${title.toLowerCase().split(' ').join('-')}`}>
                <Skeleton loading={imageLoad} active />
                <Card style={{visibility: !imageLoad ? 'visible' : 'hidden' }} hoverable cover={
                    <img loading="lazy" alt="example" src={posterUrl} onError={imgError} onLoad={() => setImageLoad(false)} />}>
                    <Meta title={title} description={plot}   />
                </Card>
            </NavLink>
        </Col>

    )
}

function imgError(e) {
    e.target.src = 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png';
    console.groupCollapsed('şəkil errorları')
}
export default Movie;