import { useState, useEffect } from "react";
import MoviesList from "../MoviesList";

import { getTrendingMovies } from "../../shared/services/theMovieApi"

const Movies = ()=>{
    const [state, setState] = useState({
        movies: [],
        loading: false,
        error: null,
    });

    useEffect(()=>{
        const fetchMovies = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true
            }))
            try {
                const data = await getTrendingMovies();
                setState(prevState => ({
                    ...prevState,
                    movies: [...data],
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error
                }))
            }
        };

        fetchMovies();
    }, []);

    const {movies, loading, error} = state

    
    return(
        <>
        {loading && <p>....Loading</p>}
        {error && <p>Error</p>}
        <MoviesList movies={movies}/>
        </>
    )
}

export default Movies;