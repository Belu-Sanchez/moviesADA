import { useEffect, useState } from "react";
import { Banner, Posters } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getAllPopular, getAllTopRated, getBanner } from "../../services";

const DashboardPage = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {

        getBanner().then(response => setMovies(response.splice(0, 5)))
        getAllPopular().then(response => setPopular(response.results))
        getAllTopRated().then(response => setTopRated(response.results))
    }, []);


    return (
        <>
            <Banner items={movies} />
            <Posters items={popular} text={"Popular Movies"} />
            <Posters items={topRated} text={"Top Rated Movies"} />
        </>
    );
}

export const Dashboard = withAuth(DashboardPage);

