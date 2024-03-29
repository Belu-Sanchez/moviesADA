import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import './styles.scss'
import { Loader } from "..";
import YouTube from "react-youtube";
import { Details } from "../../../types";


const Detail: FC<Details> = ({ items, video }) => {

    if (items.length === 0) return <Loader />

    return (
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
                {
                    video.length >= 1 &&
                    <YouTube
                        videoId={video[0].key}
                        id={video[0].id}
                        className={'trailer'}
                        opts={{
                            height: '190',
                            width: '340'
                        }}
                    />

                }
            </div>
        </div>
    );
}

export { Detail };