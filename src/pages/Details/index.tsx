import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detail } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getById } from "../../services";
import { getByIdTailer } from "../../services/movies";


const DetailsPage = () => {
    const { id } = useParams();
    const [detail, setDetails] = useState([])
    const [trailer, setTrailer] = useState([])

    useEffect(() => {
        getById(id || "").then(response => setDetails(response)).catch(response => alert("oops! Cannot load detailed movies, please reenter."));
        getByIdTailer(id || "").then(response => setTrailer(response.results)).catch(response => alert("oops! Cannot load trailer movies, please reenter."));
    }, [id])

    return (
        <Detail items={detail} video={trailer} />
    );
}

export const Details = withAuth(DetailsPage);

