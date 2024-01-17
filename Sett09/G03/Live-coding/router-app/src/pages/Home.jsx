import Main from '../components/Main';
// volendo la navigazione si può scrivere con onClick={() => navigate('/)} anzichè utilizzare gli elementi Link, che potrebbe offrire possibilità di customizzazione maggiori
const Home = ({ page }) => {
  return (
    <div>
      <Main page={page}></Main>
    </div>
  );
};

export default Home;
