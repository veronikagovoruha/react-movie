import { Link, useLocation } from "react-router-dom";
import styles from "./movie-list.module.css"

const MoviesList = ({movies}) => {
    const from = useLocation();
    const elements = movies.map(({id, title, poster_path}) => <li className={styles.item} key={id}>
        <Link className={styles.link} to={`/movies/${id}`} state={{ from }}>
            <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
                alt="title"
                width="250"
                height="370"
            />
            <h2 className={styles.title}>{title}</h2>
        </Link>
    </li>)

    return(
        <ul className={styles.list}>{elements}</ul>
    )

}

MoviesList.defaultProps = {
    movies: []
}

export default MoviesList;