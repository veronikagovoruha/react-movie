import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieSearchForm from "./MovieSearchForm"
import MoviesList from "../MoviesList";

import { searchMovies } from "../../shared/services/theMovieApi"

const MovieSearch = () => {
    // const [state, setState] = useState({
    //     movies:[],
    //     loading: false,
    //     error: null,
    // });

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [searchParems, setSearchParams] = useSearchParams();
    const search = searchParems.get("search");

    useEffect(() => {
        const fetchMovies = async() => {
            setLoading(() => true)
            try {
                const data = await searchMovies(search);
                setMovies(() => data);
                setLoading(() => false);
            } catch (error) {
                setError(() => error);
                setLoading(() => false);
            }
        };

        if(search){
            fetchMovies();
        }
    }, [search])

    const changeSearch = ({search}) => setSearchParams({search});

    return(
        <div>
            {loading && <p>....Loading</p>}
            {error && <p>Error</p>}
            <MovieSearchForm onSubmit={changeSearch}/>
            <MoviesList movies={movies}/>
        </div>
        
    )
}

export default MovieSearch;