import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";

const getBanner = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_UPCOMING);
  return response.data.results;
};

const getAllPopular = async (page?: string) => {
  const response = await apiMovies.get(endpoints.MOVIE_POPULAR, {params: {page}});
  return response.data;
};

const getAllTopRated = async (page?: string) => {
  const response = await apiMovies.get(endpoints.MOVIE_TOP_RATED, {params: {page}});
  return response.data;
};

const getAllLastReleases = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_LATEST);
  return response.data;
};

const getById = async (id: string) => {
  const response = await apiMovies.get(`/movie/${id}`);
  return response.data;
};

const getByIdTailer = async (id: string) => {
  const response = await apiMovies.get(`/movie/${id}/videos`);
  return response.data;
};

const getBySearch = async (params: {query?: string, page?: string}) => {
  const response = await apiMovies.get(endpoints.SEARCH_MOVIE, {
    params
  });
  return response.data;
};

export { getBanner, getAllPopular, getAllTopRated, getAllLastReleases, getById, getByIdTailer, getBySearch };
