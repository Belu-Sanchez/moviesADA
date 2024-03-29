import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomPagination, Loader, Posters } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getAllPopular } from "../../services";

const PopularMoviesPage = () => {
    
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPages] = useState(Number);
    const [params, setParams] = useState({ page: '1' })
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setSearchParams(params);
    }, [params]);

    useEffect(() => {
        getAllPopular(searchParams.get('page') || "").then(response => {
            setMovies(response.results)
            setTotalPages(response.total_pages)
        }).catch(response => alert("Oops! Can't load the most popular silver, please reenter."))
    }, [searchParams])

    const setQuery = (page: string) => {
        setParams(prevState => ({ ...prevState, page: page }))
    }
    
    if (!movies.length) return <Loader />

    return (
        <>
            <Posters items={movies} text={"Popular Movies"} className="grid"/>

            <CustomPagination totalPages={totalPage} onClick={setQuery}/>
        </>

    );
}

export const PopularMovies = withAuth(PopularMoviesPage);
