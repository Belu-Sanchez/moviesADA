import { FC } from "react";
import { Carousel } from "react-bootstrap";
import { BASE_IMAGE } from "../../../constants";
import "./styles.scss";
import { PostersMovies } from "../../../types";


const Banner: FC<PostersMovies> = ({ items }) => {

  return (
    <Carousel fade>
      {items?.map((item: any) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100 card-img-top "
            src={`${BASE_IMAGE + item.backdrop_path}`}
            alt="Poster movie"
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { Banner };


