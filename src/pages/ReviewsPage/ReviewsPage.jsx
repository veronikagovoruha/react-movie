import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import {getMovieReviews} from "../../shared/services/theMovieApi"

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isReviews, setReviewsPresented] = useState(false);

    const {movieId} = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(prevState => true);

            try {
                const data = await getMovieReviews(movieId);
                setLoading(() => false);
                setReviews(() => data.results);
            } catch (error) {
                setLoading(() => false);
                setError(() => error);
            }
        };
        
        fetchReviews(); 
    }, [movieId])

    useEffect(() => {
        setReviewsPresented(() => (reviews && reviews.length > 0) || 0)
    }, [reviews])

    const elements = reviews && reviews.map(({ id, author, content }) => <li key={id}><p>{author}</p><p>{content}</p></li>);

    return (
        <>
        {loading && <p>....Loading</p>}
        {error && <p>Error</p>}
        {isReviews && <ul>
            {elements} 
        </ul>}
        </>
        
    )
}

export default ReviewsPage;