import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detail, Loader } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getById } from "../../services";


const DetailsPage = ({ }) => {
    const { id } = useParams();
    const [detail, setDetails] = useState([])

    useEffect(() => {
        getById(id || "").then(response => setDetails(response)).catch(response => alert("oops! Cannot load detailed movies, please reenter."))
    }, [])

    return (

        <Detail items={detail} />
    );
}

export const Details = withAuth(DetailsPage);

