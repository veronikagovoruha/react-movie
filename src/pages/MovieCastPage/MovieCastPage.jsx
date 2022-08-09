import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import defaulImg from '../../images/user.png';
import styles from "./movie-cast-page.module.css"

import PropTypes from 'prop-types';

import {getMovieCast} from "../../shared/services/theMovieApi"

const MovieCastPage = () =>{
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {movieId} = useParams();

    useEffect(() => {
        const fetchMovie= async () => {
            setLoading(() => true);

            try {
                const data = await getMovieCast(movieId);
                setLoading(() => false);
                setCast(() => data.cast);
            } catch (error) {
                setLoading(() => false);
                setError(() => error);
            }
        };
        
        fetchMovie(); 
    }, [movieId])

    const elements = cast && cast.map(({ id, name, character, profile_path }) => {
        const srcUrl = profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}` : defaulImg;

        return (<li key={id} className={styles.item}>
            <img className={styles.icon} src={srcUrl} width="80" alt={name}/>
            <p className={styles.nameReal}>{name}</p>
            <p className={styles.name}>{character}</p>
        </li>);
    })
    
    return (
        <>
        {loading && <p>....Loading</p>}
        {error && <p>Error</p>}
        <ul className={styles.list}>
            {elements} 
        </ul>
        </>
        
    )
}

MovieCastPage.defaulProps = {
    items: [],
}
MovieCastPage.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            character: PropTypes.string,
            profile_path: PropTypes.string,
        })
    )
}

export default MovieCastPage;