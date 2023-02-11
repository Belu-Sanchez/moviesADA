import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { BASE_IMAGE } from "../../../constants";
import "./styles.scss";
import { useMovies } from "../../../services";
import { BannerMovie } from "../../../services/movies/types";

const Banner = () => {
  const [banner, setBanner] = useState<BannerMovie[]>([]);
  const data = useMovies();

  useEffect(() => {
    data.getBanner().then(response => setBanner(response))

  }, []);


  if (banner.length >= 20) {
    banner.splice(banner.length - 15, 19);
  }

  return (
    <>
      <Carousel fade>
        {banner.map((movie) => (
          <Carousel.Item key={movie.id}>
            <img
              className="d-block w-100 card-img-top "
              src={`${BASE_IMAGE + movie.backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export { Banner };
