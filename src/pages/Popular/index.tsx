import { useEffect, useState } from "react";
import { Grid } from "../../components/commons";
import { getAllPopular } from "../../services";

const PopularMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllPopular().then(response => setMovies(response))
    }, [])

    console.log(movies)
    return (
        <>
        <Grid items={movies} text={"Popular movies"}/>
        </>
  


    );
}

export { PopularMovies };