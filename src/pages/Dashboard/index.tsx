import { useEffect, useState } from "react";
import { Banner, Loader, Posters } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getAllPopular, getAllTopRated, getBanner } from "../../services";

const DashboardPage = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);


    useEffect(() => {
        getBanner().then(response => setMovies(response.splice(0, 5))).catch(response => alert("Opps! Cannot load banner, please reenter."))
        getAllPopular().then(response => setPopular(response.results)).catch(response => alert("Oops! Can't load the most popular silver, please reenter."))
        getAllTopRated().then(response => setTopRated(response.results)).catch(response => alert("oops! Cannot load top rated movies, please reenter."))

    }, []);

    if (!movies.length) return <Loader />

    return (
        <>
            <Banner items={movies} />
            <Posters items={popular} text={"Popular Movies"} />
            <Posters items={topRated} text={"Top Rated Movies"} />
        </>
    );
}

export const Dashboard = withAuth(DashboardPage);

