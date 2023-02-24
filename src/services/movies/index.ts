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

const getById = async (id: string) => {
  const response = await apiMovies.get(`/movie/${id}`);
  return response.data;
};
// const search = async (params: { query: string; page: string }) => {
//   const response = await api.movies.get("/search/movie", { params });
//   return response.data;
// };
const getBySearch = async (params: {query?: string, page?: string}) => {
  const response = await apiMovies.get(endpoints.SEARCH_MOVIE, {
    params
  });
  return response.data.results;
};

export { getBanner, getAllPopular, getAllTopRated, getById, getBySearch };
