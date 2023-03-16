import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomPagination, Grid, Loader } from "../../components/commons";
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
           ).catch(response => alert("oops! Cannot load top rated movies, please reenter."))
    }, [searchParams])

    const setQuery = (page: string) => {
        setParams(prevState => ({ ...prevState, page: page }))
    }
    
    if (!movies.length) return <Loader />

    return (
        <>
            <Grid items={movies} text={"Top Rated Movies"} />
            <CustomPagination onClick={setQuery} totalPages={totalPage}/>
        </>

    );
}

export const TopRatedMovies = withAuth(TopRatedMoviesPage);
