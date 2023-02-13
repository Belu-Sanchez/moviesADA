import { useEffect, useState } from "react";
import { Banner, Posters } from "../../components/commons";
import { getAllPopular, getAllTopRated } from "../../services/movies";
import { PosterScroll } from "./types";

const Dashboard = () => {

    const [popular, setPopular] = useState<PosterScroll[]>([]);
    const [topRated, setTopRated] = useState<PosterScroll[]>([]);

    useEffect(() => {
        getAllPopular().then(response => setPopular(response))
        getAllTopRated().then(response => setTopRated(response))

    }, []);




    // useEffect(() => {
    //     // if (id) {
    //     //     getById(`${id}`)
    //     //     navigate(`movie/${id}`);
    //     // } else {
    //         getAllPopular().then(response => setPopular(response))
    //     //     getAllTopRated().then(response => setTopRated(response))
    //     // }

    // }, []);









    return (
        <> 
        <Banner />
        <Posters items={popular} text={"Popular Movies"} />
        <Posters items={topRated} text={"Top Rated Movies"} />

        </>
    );
}

export { Dashboard };