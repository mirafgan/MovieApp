import { Row } from "antd";
import Movie from "./Movie";

function Movies({data}) {
    return(
            <Row gutter={[8 , 16]} >
                { 
                 data.map( m=> <Movie {...m} key={m.id} /> )
                }
            </Row>
    )
}
export default Movies;