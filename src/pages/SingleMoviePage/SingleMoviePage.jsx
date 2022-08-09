import SingleMovie from "../../components/SingleMovie";
import {getMovieDetails} from "../../shared/services/theMovieApi"
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const SingleMoviePage = () => {

    const [state, setState] = useState({
        movie: {},
        loading: false,
        error: null,
    });

    const {movieId} = useParams();

    useEffect(()=> {
        const fetchMovie = async() => {
            setState(prevState => ({
                ...prevState,
                loading: true
            }));

            try {
                const movie = await getMovieDetails(movieId);
                setState(prevState => ({
                    ...prevState,
                    movie: movie,
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

        fetchMovie();
    }, [movieId])

    const { movie, loading, error } = state;

    const isMovie = Object.keys(movie).length > 0;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    const goBack = () => navigate(from);

    return(
        <main>
            <div>
                {loading && <p>...Loading</p>}
                {error && <p>Movie not found</p>}
                {isMovie && <button type='button' onClick={goBack}>Go back</button>}
                {isMovie && <SingleMovie movie={movie}/>}
            </div>
        </main>
    )
}

export default SingleMoviePage;