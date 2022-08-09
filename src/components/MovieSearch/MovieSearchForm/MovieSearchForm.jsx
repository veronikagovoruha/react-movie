import { useState } from "react";

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
        <form onSubmit={handleSubmit}> 
            <input name="search" value={state.search} onChange={handleChandge} type="text" placeholder="Search film"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default MovieSearchForm;