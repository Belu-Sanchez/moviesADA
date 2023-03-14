import { FC, useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Page } from './types';
import './styles.scss';


const CustomPagination: FC<Page> = ({ onClick }) => {

    const [number, setNumber] = useState(1)

    const paginationAttributes = [
        function firstPage() { setNumber(1) },
        function prevPage() { setNumber(number - 1) },
        function nextPage() { setNumber(number + 1) },
        function lastPage() { setNumber(500) }
    ]

    useEffect(() => {
        onClick(number.toString())
    }, [number])

    return (

        <Pagination onClickCapture={() => setNumber(number)} >
            <Pagination.First disabled={number === 1} onClick={paginationAttributes[0]} />
            <Pagination.Prev disabled={number === 1} onClick={paginationAttributes[1]} />

            <Pagination.Item value={number}>{number}</Pagination.Item>

            <Pagination.Next disabled={number === 500} onClick={paginationAttributes[2]} />
            <Pagination.Last disabled={number === 500} onClick={paginationAttributes[3]} />
        </Pagination>

    )
}
export { CustomPagination }