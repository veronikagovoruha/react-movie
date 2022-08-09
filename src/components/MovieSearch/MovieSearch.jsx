import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieSearchForm from "./MovieSearchForm"
import MoviesList from "../MoviesList";

import { searchMovies } from "../../shared/services/theMovieApi"

const MovieSearch = () => {
    const [state, setState] = useState({
        movies:[],
        loading: false,
        error: null,
    });

    // const [search, setSearch] = useState("");
    const [searchParems, setSearchParams] = useSearchParams();
    const search = searchParems.get("search");

    useEffect(() => {
        const fetchMovies = async() => {
            // setSearch(prevState => ({
            //     ...prevState,
            //     loading: true,
            // }));

            try {
                const data = await searchMovies(search);
                setState(prevState => ({
                    ...prevState,
                    movies: data,
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading:false,
                    error
                }))
            }
        };

        if(search){
            fetchMovies();
        }
    }, [search])

    const changeSearch = ({search}) => setSearchParams({search});

    const { movies, loading, error} = state;

    return(
        <div>
            <MovieSearchForm onSubmit={changeSearch}/>
            <MoviesList movies={movies}/>
        </div>
        
    )
}

export default MovieSearch;