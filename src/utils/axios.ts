import axios from 'axios';

const BASE_IMAGE = "https://image.tmdb.org/t/p/original";
const MOVIE_POPULAR = "/movie/popular"; // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
const MOVIE_TOP_RATED = "/movie/top_rated";
const SEARCH = "/search/company"; // https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1
//const MOVIE_ID = `movie/${movie_id}`
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

 const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key :  "0df0bd9988c9e9f56e2bc6d6b20adce2"
    }
})


export { apiMovies, BASE_IMAGE, MOVIE_POPULAR, MOVIE_TOP_RATED, SEARCH }