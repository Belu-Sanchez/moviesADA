import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import { Details } from "./types";
import './styles.scss'
import { Loader } from "..";
import YouTube from "react-youtube";


const Detail: FC<Details> = ({ items, video }) => {

    if (items.length === 0) return <Loader />

    return (
        <div className="container-detail">
            <div className="img-detail">
                <img
                    src={`${BASE_IMAGE + items.poster_path}`}
                    alt="First slide"
                />
            </div>
            <div className="info">
                <h2 className="title">{items.title}</h2>
                <p>{items.overview}</p>
                <YouTube
                    videoId={video[0].key}
                    id={video[0].id}
                    className={'trailer'}
                    opts={{
                        height: '190',
                        width: '340'
                    }}
                />
            </div>
        </div>
    );
}

export { Detail };