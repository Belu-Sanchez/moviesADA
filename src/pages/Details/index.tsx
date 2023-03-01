import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detail } from "../../components/commons";
import { withAuth } from "../../hoc";
import { getById } from "../../services";


const DetailsPage = ({ }) => {
    const { id } = useParams();
    const [detail, setDetails] = useState([])

    useEffect(() => {
        getById(id || "").then(response => setDetails(response))
    }, [])


    return (
        
        <Detail items={detail}/>
        
    );
}

export const Details = withAuth(DetailsPage);

