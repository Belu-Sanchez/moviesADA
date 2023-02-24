import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";

const getBanner = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_UPCOMING);
  return response.data.results;
};

const getAllPopular = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_POPULAR);
  return response.data.results;
};

const getAllTopRated = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_TOP_RATED);
  return response.data.results;
};

const getAllLastReleases = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_LATEST);
  return response.data;
};

const getById = async (id: string) => {
  const response = await apiMovies.get(`/movie/${id}`);
  return response.data;
};

const getBySearch = async (params: {query?: string, page?: string}) => {
  const response = await apiMovies.get(endpoints.SEARCH_MOVIE, {
    params
  });
  return response.data;
};

export { getBanner, getAllPopular, getAllTopRated, getById, getBySearch};
