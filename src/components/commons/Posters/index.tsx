import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { PostersMovies } from "./types";
import './styles.scss';


const Posters: FC<PostersMovies> = ({ items, text }) => {

    const navigate = useNavigate();


    return (
        <div className="scroll">
            <h6 className="title">{text}</h6>
            <div className="row pb-4">{items?.map((item: any) =>
                <img className="col card-block" key={item.id} onClick={() => navigate(`/movie/${item.id}`)}
                    src={`${BASE_IMAGE + item.poster_path}`}
                    alt="First slide"
                />
            )}
            </div>
        </div>
    );
}

export { Posters }

