import { Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import MovieCastPage from "./pages/MovieCastPage"
import MovieSearchPage from "./pages/MovieSearchPage";
import ReviewsPage from "./pages/ReviewsPage";

function App(){
  return (
    <>
      <Home/>
      <Routes>
        <Route path="/"  element={<HomePage />}/>
        <Route path="/movies"  element={<MovieSearchPage />}/>
        <Route path="/movies/:movieId"  element={<SingleMoviePage />}>
          <Route path="cast"  element={<MovieCastPage />}/>
          <Route path="reviews"  element={<ReviewsPage />}/>
        </Route>
        
        <Route path="*"  element={<NotFoundPage />}/>
      </Routes>
    </>
    
  );
};
export default App;