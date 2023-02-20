import { useEffect, useState } from "react";
import { Grid } from "../../components/commons";
import { getAllLastReleases, getAllTopRated } from "../../services/movies";

const LastReleases = () => {

    const [movies, setMovies] = useState([]);
    const [ top, setTopRated] = useState([])

    useEffect(() => {
        // getBySearch(query || "").then(response => setMovies(response))
      getAllLastReleases().then(response => setMovies(response))
        // getAllTopRated().then(response => setMovies(response))

    }, [])
console.log(movies)

   
    return (
    
    <>
        <div>Last releases</div>
        <Grid items={movies} />
        {/* <Grid items={top} /> */}

    </>


        
 
    );
}

export { LastReleases };