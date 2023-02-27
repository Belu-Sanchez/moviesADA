import { FC, useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Page } from './types';
import './styles.scss';


const CustomPagination: FC<Page> = ({ totalPages, onClick }) => {

    const [number, setNumber] = useState(1)
    const [page, setPage] = useState("1")

    const paginationAttributes = [
        function firstPage() { setNumber(1) },
        function prevPage() { setNumber(number - 1) },
        function nextPage() { setNumber(number + 1) },
        function lastPage() { setNumber(totalPages) }
    ]

    useEffect(() => {
        onClick(page)
    }, [page])

    return (

        <Pagination onClickCapture={() => setPage(number.toString())} >
            <Pagination.First disabled={page === "1"} onClick={paginationAttributes[0]} />
            <Pagination.Prev disabled={page === "1"} onClick={paginationAttributes[1]} />

            <Pagination.Item value={page}>{page}</Pagination.Item>

            <Pagination.Next disabled={page === totalPages.toString()} onClick={paginationAttributes[2]} />
            <Pagination.Last disabled={page === totalPages.toString()} onClick={paginationAttributes[3]} />
        </Pagination>

    )
}
export { CustomPagination }