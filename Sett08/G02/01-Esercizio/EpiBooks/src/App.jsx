import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
