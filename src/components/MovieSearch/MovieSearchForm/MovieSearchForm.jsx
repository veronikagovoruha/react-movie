import { useState } from "react";
import styles from "./movie-search-form.module.css"

const MovieSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: ""
    });

    const handleChandge = ({target}) => {
        const {name, value} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({search:""})
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}> 
            <input 
                onChange={handleChandge}
                className={styles.input}
                name="search" 
                value={state.search}  
                type="text" 
                placeholder="Search film"
                required
            />
            <button
            type="submit"
            className={styles.button}
            aria-label="button-search"
            >
                Search</button>
        </form>
    )
}

export default MovieSearchForm;