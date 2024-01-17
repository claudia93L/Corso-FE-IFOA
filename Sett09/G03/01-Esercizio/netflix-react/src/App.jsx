import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/common/sections/NavbarComponent';
import Footer from './components/common/sections/Footer';
import Homepage from './components/pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import TVShows from './components/pages/TVShows';
import Movies from './components/pages/Movies';
import MovieDetails from './components/movies/MovieDetails';

// http://www.omdbapi.com/?s=movieTitle&apikey=d8685296&

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route
          path='/'
          element={<Homepage className='mx-4' page='Homepage'></Homepage>}
        ></Route>
        <Route
          path='/tvshows'
          element={<TVShows page='TV Shows'></TVShows>}
        ></Route>
        <Route path='/movies' element={<Movies page='Movies'></Movies>}></Route>
        <Route
          path='/movies/movieDetails/:movieId'
          element={<MovieDetails page='Movie Details Page'></MovieDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
