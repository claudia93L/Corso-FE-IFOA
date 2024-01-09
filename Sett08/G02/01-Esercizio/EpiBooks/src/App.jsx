import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/common/MyNav';
import MyFooter from './components/common/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <MyNav></MyNav>
      <Container className='mx-5'>
        <Welcome></Welcome>
        <AllTheBooks></AllTheBooks>
      </Container>
      <MyFooter></MyFooter>
    </>
  );
};

export default App;
