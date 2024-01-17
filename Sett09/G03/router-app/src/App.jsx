import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home page='Homepage'></Home>}></Route>
          <Route
            path='/contatti'
            element={<Contacts page='Contatti'></Contacts>}
          ></Route>
          <Route
            path='/chisiamo'
            element={<About page='Chi Siamo'></About>}
          ></Route>
          <Route
            path='*'
            element={<NotFound page='404 Not Found'></NotFound>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
