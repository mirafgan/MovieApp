import { useParams } from "react-router-dom"
import usePagination from "../hooks/usePagination";
import MainPagination from "./MainPagination";
import Movies from "./Movies";
import { useEffect } from "react";
function MoviesByPage({ data }) {
    const currentParams = useParams();
    const { id } = currentParams;
    const [page, size, onShowSizeChange, onBlurSizeChange] = usePagination(id);
    useEffect(() => window.scrollTo(0, 0), [page])
    return (
        <>
            <Movies data={data.movies.slice((page.page - 1) * page.size, page.size * page.page)} />
            <MainPagination ttl={data.movies.length} page={page.page} size={size} onShowSizeChange={onShowSizeChange} onBlurSizeChange={onBlurSizeChange} />

        </>
    )
}

export default MoviesByPage