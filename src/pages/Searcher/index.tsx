import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid } from "../../components/commons";
import { FormSearch } from "../../components/Forms";
import { ImageMeme } from "../../components/images";
import { getBySearch } from "../../services/movies";
import { FilterFields } from './types';

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams("")

    useEffect(() => {
        const query = searchParams.get('query')
        getBySearch(query || "").then(response => setMovies(response))
    }, [searchParams])


    const setSearchQuery = (params: FilterFields) => {
        setSearchParams(params)
    }

    return (
        <div>
            <FormSearch onSearch={setSearchQuery} />
            <Grid items={movies} />
            { movies.length <= 0 && <ImageMeme />}
            
        </div>
    );
}

export { SearchMovies };

