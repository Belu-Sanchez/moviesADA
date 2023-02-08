import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { BASE_IMAGE } from "../../../constants";
import "./styles.scss";
import { useMovies } from "../../../hooks";

const Banner = () => {
  const data = useMovies();
  
  useEffect(() => {
    data.getBanner()
  }, []);



  if (data.banner.length >= 20) {
    data.banner.splice(data.banner.length - 15, 19);
  }

  return (
    <>
      <Carousel fade>
        {data.banner.map((movie) => (
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
