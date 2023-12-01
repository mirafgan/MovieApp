import { Link, useParams } from "react-router-dom";
import { Menu, Row } from "antd";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { movieContext } from "../data/context";
function Genres() {
    const { genre } = useParams();
    const { data: { genres } } = useContext(movieContext);
    return (
        <Row gutter={16} className="pt-5">
            <Menu mode="vertical" >
                {genres?.map(item => <Menu.Item key={nanoid()} className={item.toLowerCase() === genre?.toLowerCase() ? 'ant-menu-item-selected' : ''} ><Link to={"/MovieApp/movies/" + item.toLowerCase() + '/page/1'} >{item}</Link></Menu.Item>)}
            </Menu>
        </Row>
    )
}
export default Genres;