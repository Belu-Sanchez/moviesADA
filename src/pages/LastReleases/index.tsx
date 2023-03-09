import { useEffect, useState } from "react";
import { Detail } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getAllLastReleases } from "../../services/movies";
import './styles.scss';

const LastReleasesPage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllLastReleases().then(response => setMovies(response)).catch(response => alert("oops! Cannot load the latest movies, please reenter."))

    }, [])
    
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

export const LastReleases = withAuth(LastReleasesPage)
