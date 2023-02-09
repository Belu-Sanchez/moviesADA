import { useState } from "react";
import { BannerMovie, Details, PosterScroll } from "./types";
import { apiMovies, endpoints } from "../../utils/axios"
import { useSearchParams } from "react-router-dom";

const useMovies = () => {

const [banner, setBanner] = useState<BannerMovie[]>([]);
const [popular, setPopular] = useState<PosterScroll[]>([]);
const [searchParams, setSearchParams] = useSearchParams();

const getBanner = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_UPCOMING)
    return setBanner(response.data.results)
}



const getAllPopular = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_POPULAR)
    return setPopular(response.data.results)
}

const getId = async (id:string): Promise<Details> => {
    ///842544
    const response = await apiMovies.get(`/movie/${id}`)
   console.log(response)
   
    return response.data.results
}
//https://api.themoviedb.org/3/movie/842544?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/842544?api_key=0df0bd9988c9e9f56e2bc6d6b20adce2

return { getBanner, getAllPopular, banner, setBanner, popular, setPopular, getId, setSearchParams, searchParams}
}

export { useMovies }