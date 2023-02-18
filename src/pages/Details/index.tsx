import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMAGE } from "../../constants";
import { getById } from "../../services";
type Props = {
    title?: String,
    overview: String,
    poster_path: String

}
const Details = ({ }) => {
    const { id } = useParams();
    const [detail, setDetails] = useState<Props[]>([])

    useEffect(() => {

        getById(id || "").then(response => setDetails([{
            title: response.title,
            overview: response.overview,
            poster_path: response.poster_path
        }]))
    }, [])


    return (
        <>
            <h6 className="title">{detail[0].title}</h6>
            <p>{detail[0].overview}</p>
            <img className="col card-block"
                src={`${BASE_IMAGE + detail[0].poster_path}`}
                alt="First slide"
            />


        </>
    );
}

export { Details };