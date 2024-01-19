import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import SearchResult from './pages/SearchResult';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route
          path='/searchresults'
          element={<SearchResult></SearchResult>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
