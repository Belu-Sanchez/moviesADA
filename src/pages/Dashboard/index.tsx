import { useEffect, useState } from "react";
import { Banner, Posters } from "../../components/commons";
import { getAllPopular, getAllTopRated, getBanner } from "../../services";

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {

        getBanner().then(response => setMovies(response.splice(0, 5)))
        getAllPopular().then(response => setPopular(response))
        getAllTopRated().then(response => setTopRated(response))
    }, []);


    return (
        <>
            <Banner items={movies} />
            <Posters items={popular} text={"Popular Movies"} />
            <Posters items={topRated} text={"Top Rated Movies"} />
        </>
    );
}

export { Dashboard };