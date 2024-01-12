import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/common/sections/NavbarComponent';
import Footer from './components/common/sections/Footer';
import Main from './components/Main';
import { useState, useEffect } from 'react';

// http://www.omdbapi.com/?s=movieTitle&apikey=d8685296&

function App() {
  const [pageTitle, setPageTitle] = useState('Homepage | Netflix');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Main className='mx-4'></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
