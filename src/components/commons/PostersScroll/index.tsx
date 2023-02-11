import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Posters } from "..";
import { BASE_IMAGE } from "../../../constants";
import { useMovies } from "../../../services";
import { PosterScroll } from "../../../services/movies/types";
import './styles.scss';


const PostersScroll = () => {
    const [popular, setPopular] = useState<PosterScroll[]>([]);
    const [topRated, setTopRated] = useState<PosterScroll[]>([]);
    const navigate = useNavigate();


    const data = useMovies();

    useEffect(() => {
        if (data.id) {
            data.getId(`${data.id}`)
            navigate(`movie/${data.id}`);
        } else {
            data.getAllPopular().then(response => setPopular(response))
            data.getAllTopRated().then(response => setTopRated(response))
        }

    }, [data.id]);
 

    return (
        <>
            <Posters title={'Popular Movies'}> 
            <div className="row pb-4">{popular.map(movie => (
                    <img className="col card-block" key={movie.id} onClick={() => data.setId(movie.id)}
                        src={`${BASE_IMAGE + movie.poster_path}`}
                        alt="First slide"
                    />

                ))}
                </div>   
            </Posters>

            <Posters title={'Top Rated Movies'}> 
            <div className="row pb-4">{topRated.map(movie => (
                    <img className="col card-block" key={movie.id} onClick={() => data.setId(movie.id)}
                        src={`${BASE_IMAGE + movie.poster_path}`}
                        alt="First slide"
                    />

                ))}
                </div>   
            </Posters>
        </>
    );
}

export { PostersScroll }