import { FC, useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './styles.scss'
import { Page } from './types';


const CustomPagination: FC<Page> = ({ maxPage, onClick}) => {

    const [input, setInput] = useState(1)

    const firstPage = () => {
        setInput(1)
    }
    const prevPage = () => {
        setInput(input - 1)
    }
    const nextPage = () => {
        setInput(input + 1)
    }
    const lastPage = () => {
        setInput(maxPage) 
    }
  
    const [page, setPage] = useState("1")

    useEffect(() => {
        onClick(page)
    }, [page])

    return (

        <Pagination onClickCapture={()=> setPage(input.toString())} >
            <Pagination.First disabled={page === "1"} onClick={firstPage} />
            <Pagination.Prev disabled={page === "1"} onClick={prevPage} />

            <Pagination.Item value={page}>{page}</Pagination.Item>

            <Pagination.Next disabled={page === maxPage.toString()} onClick={nextPage} />
            <Pagination.Last disabled={page === maxPage.toString()} onClick={lastPage} />
        </Pagination>

    )
}
export { CustomPagination }