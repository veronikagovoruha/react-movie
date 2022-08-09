import { Link } from "react-router-dom";
// import PropType from "prop-types"

const MoviesList = ({movies}) => {
    const elements = movies.map(({id, title}) => <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
    </li>)

    return(
        <ul>{elements}</ul>
    )

}

MoviesList.defaultProps = {
    movies: []
}

export default MoviesList;