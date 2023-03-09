import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomPagination, Grid } from "../../components/commons";
import { FormSearch } from "../../components/forms";
import { ImageMeme } from "../../components/images";
import { withAuth } from "../../hoc";
import { getBySearch } from "../../services/movies";

const SearchMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPages] = useState(Number);

    const [params, setParams] = useState({ page: '1', query: '' })
    const [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {
        setSearchParams(params);
      }, [params]);

    useEffect(() => {
        const page = searchParams.get('page')
        const query = searchParams.get('query')

        getBySearch({ query: query || "", page: page || "" }).then((response) => {
            setMovies(response.results)
            setTotalPages(response.total_pages)
        })

    }, [searchParams])

    const setSearchQuery = (text: string) => {
        setParams(prevState => ({ ...prevState, query: text }))
    }

    const setQuery = (page: string) => {
        setParams(prevState => ({ ...prevState, page: page }))
    }

    return (
        <div>
            <FormSearch onSearch={setSearchQuery} />
            <Grid items={movies} />
            {movies.length <= 0 && <ImageMeme />}
            <CustomPagination totalPages={totalPage} onClick={setQuery} />
        </div>
    );
}

export const SearchMovies = withAuth(SearchMoviesPage);

