import { useState } from "react";
import { useParams } from "react-router-dom";

export default function usePagination(currentParams,id) {
    const [page, setPage] = useState({ page: id ?? 1, size: 12 });
    const [size, setSize] = useState(page.size);
    const onShowSizeChange = (p, s) => {
        setPage({ page: p, size: s });
        setSize(s);
    }
    console.log(page.page);
    const onBlurSizeChange = (e) => {
        setSize(e.target.value);
        setPage(state => ({ size: e.target.value, page: state.page }));
    }
    // console.log(page);
    return [page, size, onShowSizeChange, onBlurSizeChange];
}