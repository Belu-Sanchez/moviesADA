import axios from "axios";

export const endpoints = {
  MOVIE_POPULAR: "/movie/popular",
  MOVIE_TOP_RATED: "/movie/top_rated",
  SEARCH_MOVIE: "/search/movie",
  MOVIE_UPCOMING: "/movie/upcoming",
  MOVIE_LATEST: "/movie/latest",
};

export const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0df0bd9988c9e9f56e2bc6d6b20adce2",
  },
});
