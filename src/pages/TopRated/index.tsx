import { useEffect, useState } from "react";
import { Grid } from "../../components/commons";
import { getAllTopRated } from "../../services";

const TopRatedMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllTopRated().then(response => setMovies(response))
    }, [])

    return (
  
        <Grid items={movies} text={"Top Rated Movies"}/>

    );
}

export { TopRatedMovies };