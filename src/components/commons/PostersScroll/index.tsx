import { useEffect } from "react";
import { BASE_IMAGE } from "../../../constants";
import { useMovies } from "../../../hooks";
import './styles.scss';

const PostersScroll = () => {

    const data = useMovies();

    useEffect(() => {
        data.getPopular()
    }, []);


    return (
        <>
            <div className="scroll">
                <h6 className="title">Polular movies</h6>
                <div className="row pb-4">{data.popular.map(movie => (
                    <img className="col card-block" key={movie.id}
                        src={`${BASE_IMAGE + movie.poster_path}`}
                        alt="First slide"
                    />
                ))}
                </div>
            </div>
        </>
    );
}

export { PostersScroll }