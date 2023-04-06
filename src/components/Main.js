import React from 'react'
import usePagination from '../hooks/usePagination';
import Movies from './Movies'

function Main({ data }) {
    const [page] = usePagination();
    return (
        <Movies
            data={data.movies.slice((page.page - 1) * page.size, page.size * page.page)}
        />

    )
}

export default Main