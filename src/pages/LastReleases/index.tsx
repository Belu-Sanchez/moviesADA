import { useEffect, useState } from "react";
import { Detail } from "../../components/commons";
import { getAllLastReleases } from "../../services/movies";
import './styles.scss';

const LastReleases = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllLastReleases().then(response => setMovies(response))

    }, [])
    console.log(movies)


    return (

        <>
            <div className="recently">
                <h2>Recently Movie</h2>
                <p>Get the most newly created movie. This is a live response and will continuously change.
                </p>
                <Detail items={movies} />
            </div>

        </>




    );
}

export { LastReleases };