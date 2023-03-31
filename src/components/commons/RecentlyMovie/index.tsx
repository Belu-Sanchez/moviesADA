import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import './styles.scss'
import { Loader } from "..";
import { Details } from "../../../types";


const RecentlyMovie: FC<Details> = ({ items }) => {

    if (items.length === 0) return <Loader />

    return (
        <div className="recently">
        <h2>Recently Movie</h2>
        <p>Get the most newly created movie. This is a live response and will continuously change.
        </p>
        <div className="container-detail">
            <div className="img-detail">
                <img
                    src={`${BASE_IMAGE + items.poster_path}`}
                    alt="Poster movie"
                />
            </div>
            <div className="info">
                <h2 className="title">{items.title}</h2>
                <p>{items.overview}</p>
            </div>
        </div>
        </div>
    );
}

export { RecentlyMovie };