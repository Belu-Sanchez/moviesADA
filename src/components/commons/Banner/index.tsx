import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { apiMovies, endpoints } from "../../../utils/axios";
import { BannerMovie } from "./types";
import { BASE_IMAGE } from "../../../constants";
import "./styles.scss";

const Banner = () => {
  const [movies, setMovies] = useState<BannerMovie[]>([]);

  useEffect(() => {
    apiMovies
      .get(endpoints.MOVIE_UPCOMING)
      .then((response) => setMovies(response.data.results));
  }, []);

  if (movies.length >= 20) {
    movies.splice(movies.length - 15, 19);
  }
  return (
    <>
      <Carousel fade>
        {movies.map((movie) => (
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
