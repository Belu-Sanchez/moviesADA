import { useEffect, useState } from "react";
import { Banner, Posters } from "../../components/commons";
import { getAllPopular, getAllTopRated, getBanner } from "../../services";

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        getBanner().then(response => setMovies(response))
        getAllPopular().then(response => setPopular(response))
        getAllTopRated().then(response => setTopRated(response))

    }, []);


    if (movies.length >= 20) {
        movies.splice(movies.length - 15, 19);
    }

    return (
        <>
            <Banner items={movies} />
            <Posters items={popular} text={"Popular Movies"} />
            <Posters items={topRated} text={"Top Rated Movies"} />
        </>
    );
}

export { Dashboard };