import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMAGE } from "../../constants";
import { useMovies } from "../../services";
import { apiMovies } from "../../utils/axios";
import { mapToArray } from "../../helpers/mapToArray";


const Details = () => {

    const data = useMovies();
    const { id } = useParams();
    // const [urlId, setUrlId] = useState({});

    useEffect(() => {
        //apiMovies.get(`movie/${id}`).then(response => setUrlId(response.data))
       id && data.getId(id)
    }, [id]);


console.log(data.urlId)




    ///const mapa = new Map(Object.entries(urlId))
    //const ver =  mapToArray<Details>(data)


    return (
        <>

            <div className="scroll">
                <h6 className="title">Details</h6>
        

            </div>
            {/* <div className="scroll">
                <h6 className="title">Polular movies</h6>
                <div className="row pb-4">{data.popular.map(movie => (
                    <img className="col card-block" key={movie.id} onClick={() => data.setId(movie.id)}
                        src={`${BASE_IMAGE + movie.poster_path}`}
                        alt="First slide"
                    />

                ))}
                </div>
            </div> */}
        </>

    );
}

export { Details };