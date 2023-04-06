import { Link, useParams } from "react-router-dom";
import { Menu, Row } from "antd";
import { nanoid } from "nanoid";
function Genres({ genres }) {
    const { genre } = useParams()
    return (
        <Row gutter={16} className="pt-5">
            <Menu mode="vertical" >
                {genres.map(item => <Menu.Item key={nanoid()} className={item.toLowerCase() === genre?.toLowerCase() ? 'ant-menu-item-selected' : ''} ><Link to={"/movies/" + item.toLowerCase() + '/page/1'} >{item}</Link></Menu.Item>)}
            </Menu>
        </Row>
    )
}
export default Genres;