import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from "react-router-dom";

import styles from "./single-movie.module.css"


function SingleMovie({ movie }) {
    const {
        title,
        poster_path,
        genres: genresArr,
        release_date,
        vote_average,
        overview,
      } = movie;
      const poster = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`;
      const date = release_date.slice(0, 4);
      const userScore = vote_average * 10;
      const genres =
        genresArr.length > 0
          ? genresArr.map(({ name }) => name).join(", ")
          : "no Ganres";
      const description = overview ? overview : "no overview ";
    

    return (
      <div className={styles.wrapper}>
        <img
          className={styles.poster}
          src={poster}
          alt={title}
          width="360"
          height="540"
        />
        <div className={styles.wraperDescripton}>
          <p className={styles.title}>{`${title} (${date})`}</p>
          <p className={styles.userScore}>{`User Score: ${userScore}%`}</p>
          <p className={styles.Overviev}>Overviev</p>
          <p className={styles.OvervievText}>{description}</p>
          <p className={styles.Overviev}>Genres</p>
          <p className={styles.OvervievText}>{genres}</p>
        </div>

        <div className={styles.additional_box}>
            <ul className={styles.list}>
              <li className={styles.item}><Link className={styles.link} to='cast'>Cast</Link></li>
              <li className={styles.item}><Link className={styles.link} to='reviews'>Reviews</Link></li>
            </ul>    
            <Outlet />
          </div>

    </div>
    )
 }
export default memo(SingleMovie);

SingleMovie.defaultProps = {
    item:{},
}
SingleMovie.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            title: PropTypes.string,
            overview: PropTypes.string,
            genres: PropTypes.array,
            vote_average: PropTypes.string,
            poster_path: PropTypes.string,
            release_date: PropTypes.string,
        })
    )
}