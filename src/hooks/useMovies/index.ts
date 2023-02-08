import { useState } from "react";
import { BannerMovie, PosterScroll } from "./types";
import { apiMovies, endpoints } from "../../utils/axios"

const useMovies = () => {

const [banner, setBanner] = useState<BannerMovie[]>([]);
const [popular, setPopular] = useState<PosterScroll[]>([]);


const getBanner = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_UPCOMING)
    return setBanner(response.data.results)
}



const getPopular = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_UPCOMING)
    return setPopular(response.data.results)
}


return { getBanner, getPopular, banner, setBanner, popular, setPopular}
}

export { useMovies }