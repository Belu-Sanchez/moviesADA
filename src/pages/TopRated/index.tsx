import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomPagination, Grid } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getAllTopRated } from "../../services";

const TopRatedMoviesPage = () => {

    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPages] = useState(Number);
    const [params, setParams] = useState({ page: '1' })
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        setSearchParams(params);
      }, [params]);

    useEffect(() => {
        getAllTopRated(searchParams.get('page') || "").then(response => {
             setMovies(response.results)
             setTotalPages(response.total_pages)
        }
           )
    }, [searchParams])

    const setQuery = (page: string) => {
        setParams(prevState => ({ ...prevState, page: page }))
    }
    return (
        <>
            <Grid items={movies} text={"Top Rated Movies"} />
            <CustomPagination totalPages={totalPage} onClick={setQuery} />
        </>

    );
}

export const TopRatedMovies = withAuth(TopRatedMoviesPage);
