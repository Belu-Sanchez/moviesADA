import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomPagination, Grid, Loader } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getAllPopular } from "../../services";

const PopularMoviesPage = () => {
    
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useState({ page: '1' })
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setSearchParams(params);
    }, [params]);

    useEffect(() => {
        getAllPopular(searchParams.get('page') || "").then(response => {
            setMovies(response.results)
        }).catch(response => alert("Oops! Can't load the most popular silver, please reenter."))
    }, [searchParams])

    const setQuery = (page: string) => {
        setParams(prevState => ({ ...prevState, page: page }))
    }
    
    if (!movies.length) return <Loader />

    return (
        <>
            <Grid items={movies} text={"Popular movies"} />
            <CustomPagination onClick={setQuery} />
        </>

    );
}

export const PopularMovies = withAuth(PopularMoviesPage);
