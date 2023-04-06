import { useState } from "react";

export default function usePagination(id) {
    const [page, setPage] = useState({ page: id ?? 1, size: 12 });
    const [size, setSize] = useState(page.size);
    const onShowSizeChange = (p, s) => {
        setPage({ page: p, size: s });
        setSize(s);
    }
    const onBlurSizeChange = (e) => {
        setSize(e.target.value);
        setPage(state => ({ size: e.target.value, page: state.page }));
    }
    return [page, size, onShowSizeChange, onBlurSizeChange];
}