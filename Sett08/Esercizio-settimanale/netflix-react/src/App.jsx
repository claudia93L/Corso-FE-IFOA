import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/common/NavbarComponent';
import Footer from './components/common/Footer';
import Main from './components/Main';
import { useState, useEffect } from 'react';

// http://www.omdbapi.com/?apikey=[yourkey]&
//http://www.omdbapi.com/?i=tt3896198&apikey=d8685296&

function App() {
  const [pageTitle, setPageTitle] = useState('Homepage | Netflix');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Main setPageTitle={setPageTitle} className='mx-4'></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
