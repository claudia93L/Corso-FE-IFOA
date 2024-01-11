import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/common/NavbarComponent';
import Footer from './components/common/Footer';
import Main from './components/Main';
import { useState, useEffect } from 'react';

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE

function App() {
  const [pageTitle, setPageTitle] = useState('Homepage | Netflix');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Main setPageTitle={setPageTitle}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
