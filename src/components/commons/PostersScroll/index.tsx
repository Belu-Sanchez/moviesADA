import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Posters } from "..";
import { BASE_IMAGE } from "../../../constants";
import { getAllPopular, getAllTopRated, getById } from "../../../services/movies";
import { PosterScroll } from "./types";


const PostersScroll = () => {
    const [popular, setPopular] = useState<PosterScroll[]>([]);
    const [topRated, setTopRated] = useState<PosterScroll[]>([]);
    const [id, setId] = useState(Number);

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getById(`${id}`)
            navigate(`movie/${id}`);
        } else {
            getAllPopular().then(response => setPopular(response))
            getAllTopRated().then(response => setTopRated(response))
        }

    }, [id]);


    return (
        <>
            <Posters title={'Popular Movies'} variant={'row pb-4'}>
                {popular.map(movie => (
                    <img className="col card-block" key={movie.id} onClick={() => setId(movie.id)}
                        src={`${BASE_IMAGE + movie.poster_path}`}
                        alt="First slide"
                    />
                ))}
            </Posters>

            <Posters title={'Top Rated Movies'} variant={'row pb-4'}>
                {topRated.map(movie => (
                    <img className="col card-block" key={movie.id} onClick={() => setId(movie.id)}
                        src={`${BASE_IMAGE + movie.poster_path}`}
                        alt="First slide"
                    />
                ))}
            </Posters>
        </>
    );
}

export { PostersScroll }