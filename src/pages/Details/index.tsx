import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detail } from "../../components/commons";
import { getById } from "../../services";


const Details = ({ }) => {
    const { id } = useParams();
    const [detail, setDetails] = useState([])

    useEffect(() => {
        getById(id || "").then(response => setDetails(response))
    }, [])


    return (
        
        <Detail items={detail}/>
        
    );
}

export { Details };