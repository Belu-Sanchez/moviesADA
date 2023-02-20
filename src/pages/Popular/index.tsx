import { useEffect, useState } from "react";
import { Grid } from "../../components/commons";
import { getAllPopular } from "../../services";

const PopularMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllPopular().then(response => setMovies(response))
    }, [])
    return (
        <>
        <div>Popular movies</div>
        <Grid items={movies} />
        </>
  


    );
}

export { PopularMovies };