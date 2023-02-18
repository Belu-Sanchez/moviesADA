import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import { Details } from "./types";
import './styles.scss';


const Detail: FC<Details> = ({ items }) => {

    return (
        <div className="container-detail">
            <div className="img-detail">
                <img
                    src={`${BASE_IMAGE + items.poster_path}`}
                    alt="First slide"
                />
            </div>
            <div className="text">
                <h2 className="title">{items.title}</h2>
                <p>{items.overview}</p>
            </div>



        </div>

    );
}

export { Detail };