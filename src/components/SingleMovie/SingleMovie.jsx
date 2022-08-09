import { memo } from 'react';
import PropTypes from 'prop-types';
// import { Link, Outlet } from "react-router-dom";

import s from "./single-movie.module.css"


function SingleMovie({ movie }) {
    // const { title, overview, genres, vote_average, poster_path, release_date } = movie;
    // const genresString = genres.map(el => el.name).join(', ');
    // const userScore = vote_average * 10;
    // const year = release_date.slice(0, 4);
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
        <div className={s.wrapper}>
      <img
        className={s.poster}
        src={poster}
        alt={title}
        width="360"
        height="540"
      />
      <div className={s.wraperDescripton}>
        <p className={s.title}>{`${title} (${date})`}</p>
        <p className={s.userScore}>{`User Score: ${userScore}%`}</p>
        <p className={s.Overviev}>Overviev</p>
        <p className={s.OvervievText}>{description}</p>
        <p className={s.Overviev}>Genres</p>
        <p className={s.OvervievText}>{genres}</p>
      </div>
    </div>
        // <div>
        //         <div>
        //             <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} width="300" alt={title} />
        //             <div>
        //                 <h3>{`${title} (${year})`}</h3>
        //             <table>
        //                 <tbody >
        //                     <tr>
        //                         <td>User Score: </td>
        //                         <td>{userScore}%</td>
        //                     </tr>
        //                     <tr>
        //                         <td>Overview: </td>
        //                             <td>{overview}</td>
        //                         </tr>    
        //                         <tr>
        //                             <td>Genres</td>
        //                         <td>{genresString}</td>
        //                         </tr>
        //                 </tbody>
        //             </table>
        //             </div>
        //         </div>
        //         <div>
        //             <ul>
        //             <li><Link to='cast'>Cast</Link></li>
        //             <li><Link to='reviews'>Reviews</Link></li>
        //         </ul>    
        //         <Outlet />
        //         </div>
        //     </div>
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