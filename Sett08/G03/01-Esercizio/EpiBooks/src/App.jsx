import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/common/MyNav';
import MyFooter from './components/common/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

const App = () => {
  return (
    <>
      <MyNav></MyNav>
      <div className='mx-5'>
        <Welcome></Welcome>
        <AllTheBooks></AllTheBooks>
      </div>
      <MyFooter></MyFooter>
    </>
  );
};

export default App;
