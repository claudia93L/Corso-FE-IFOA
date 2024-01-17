import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
// ancor meglio, si inserisce il browser router dentro main e si inserisce al suo interno il componente app
function App() {
  // il path che modifica la route e deve ricevere l'id obbligatoriamente, è bene usarlo se si va ad una pagina dove l'id è obbligatorio
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home page='Homepage'></Home>}></Route>
          <Route
            path='/contatti/:userName'
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
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
