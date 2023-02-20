import axios from "axios";

export const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0df0bd9988c9e9f56e2bc6d6b20adce2",
  },
});


export const apiFB = axios.create({
  baseURL: 'https://movies-app-4872f-default-rtdb.firebaseio.com/'
})