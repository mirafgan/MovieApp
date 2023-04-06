import { Input } from 'antd'
import { Pagination } from 'antd'
import { Link, useParams } from 'react-router-dom';

function MainPagination({ ttl, page, size, onShowSizeChange, onBlurSizeChange }) {
    const { genre } = useParams();
    return (
        <div className="d-flex align-items-center mt-5 justify-content-center">
            <Pagination
                defaultCurrent={page}
                pageSize={size}
                total={ttl}
                onChange={onShowSizeChange}
                showSizeChanger={false}
                itemRender={(p, type, el) => type === 'page' ? <Link to={'/movies/' + (!genre ? 'all' : genre.toLowerCase()) + '/page/' + p}> {p} </Link> : el}
            />
            <Input
                defaultValue={size}
                style={{ width: '50px' }}
                onBlur={onBlurSizeChange}
            /> <span className="ms-1">/ page</span>
        </div>
    )
}

export default MainPagination