import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <Link to="/"><button>Home</button></Link>
            <Link to="/movies"><button>Movies</button></Link>
        </>
    )
}

export default Home;