import SingleMovie from "../../components/SingleMovie";
import {getMovieDetails} from "../../shared/services/theMovieApi"
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import styles from "./single-movie-page.module.css"

const SingleMoviePage = () => {
    
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const {movieId} = useParams();

    useEffect(()=> {
        const fetchMovie = async() => {
            setLoading(() => true);

            try {
                const movie = await getMovieDetails(movieId);
                setMovie(() => movie)
                setLoading(() => false);
            } catch (error) {
                setError(() => error);
                setLoading(() => false);
            }
        };

        fetchMovie();
    }, [movieId])

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
                {isMovie && <button className={styles.btnBack} type='button' onClick={goBack}>Go back</button>}
                {isMovie && <SingleMovie movie={movie}/>}
            </div>
        </main>
    )
}

export default SingleMoviePage;