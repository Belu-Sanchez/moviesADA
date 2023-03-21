import { useEffect, useState } from "react";
import { RecentlyMovie } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getAllLastReleases } from "../../services/movies";
import './styles.scss';

const LastReleasesPage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
       getAllLastReleases().then(response => setMovies(response)).catch(response => alert("oops! Cannot load the latest movies, please reenter."))

    }, [])
    
    return (
        <RecentlyMovie items={movies} />
    );
}

export const LastReleases = withAuth(LastReleasesPage)
