import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomPagination, Grid } from "../../components/commons";
import { FormSearch } from "../../components/Forms";
import { ImageMeme } from "../../components/images";
import { getBySearch } from "../../services/movies";

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useState({page: '1', query: ''})
    const [searchParams, setSearchParams] = useSearchParams()
  const maximumPages = movies.length

    useEffect(() => {
        setSearchParams(params)

        const page = searchParams.get('page')
        const query = searchParams.get('query')

        getBySearch({query: query || "", page: page || ""}).then(response => setMovies(response))
    }, [searchParams, params])

    const setSearchQuery = (text: string) => {
       setParams(prevState => ({...prevState, query: text}))
    }


    const setQuery = (page: string) => {
        setParams(prevState => ({...prevState, page: page}))


    }
    return (
        <div>
            <FormSearch onSearch={setSearchQuery} />
            <Grid items={movies} />
            { movies.length <= 0 && <ImageMeme />}
            <CustomPagination  maxPage={maximumPages} onClick={setQuery}/>
            
        </div>
    );
}

export { SearchMovies };

