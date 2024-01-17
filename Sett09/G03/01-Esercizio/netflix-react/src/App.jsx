import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/common/sections/NavbarComponent';
import Footer from './components/common/sections/Footer';
import Homepage from './components/pages/Homepage';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TVShows from './components/pages/TVShows';

// http://www.omdbapi.com/?s=movieTitle&apikey=d8685296&

function App() {
  const [pageTitle, setPageTitle] = useState('Homepage | Netflix');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

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
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
