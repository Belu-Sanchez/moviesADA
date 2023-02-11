import { useState } from "react";
import { apiMovies, endpoints } from "../../utils/axios";


const useMovies = () => {
  const [id, setId] = useState(Number);
 const [urlId, setUrlId] = useState();
 // console.log(urlId);

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

  const getId = async (id: string) => {
    const response = await apiMovies.get(`/movie/${id}`);

    //const map = mapToArray<Details>(data)
  // const ver = setUrlId(response.data)
   /// console.log('response.data', response.data)
   
     setUrlId(response.data)
    
  };

  return {
    getBanner,
    getAllPopular,
    getAllTopRated,
    getId,
    id,
    setId,
    urlId
  };
};

export { useMovies };
