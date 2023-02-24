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
  
    const [page, setPage] = useState("")

    useEffect(() => {
        onClick(page)
    }, [page])

    return (

        <Pagination onClickCapture={()=> setPage(input.toString())} >
            <Pagination.First onClick={firstPage} />
            <Pagination.Prev onClick={prevPage} />

            <Pagination.Item value={page}>{page}</Pagination.Item>

            <Pagination.Next onClick={nextPage} />
            <Pagination.Last onClick={lastPage} />
        </Pagination>

    )
}
export { CustomPagination }