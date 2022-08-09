import axios from "axios";


const instance = axios.create({
    baseURL:  "https://api.themoviedb.org/3/",
    params: {
        api_key: '174088f8b022edeebba64c50a0d47a62',
    }
});

export const getTrendingMovies = async () => {
    const {data} = await instance.get('trending/movie/day', {
        params: {
            page: 1,
        }
    });

    return data.results;
}

export const getMovieDetails = async (id) =>{
    const {data} = await instance.get(`movie/${id}`);
    return data;
}

export const getMovieCast = async (id) =>{
    const {data} = await instance.get(`movie/${id}/credits`);
    return data;

}

export const getMovieReviews = async (id) =>{
    const {data} = await instance.get(`movie/${id}/reviews`);
    return data;

}

export const searchMovies = async (query) => {
    const {data} = await instance.get('search/movie', {
        params: {
            query
        }
    });

    return data.results;
}