import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const NotFound = ({ page }) => {
  return (
    <div>
      <Header></Header>
      <Main page={page}></Main>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
