import { CardComponent } from '../components/CardComponent';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const searchedCity = new URLSearchParams(location.search).get('searchedCity');

  return (
    <>
      <CardComponent city={searchedCity}></CardComponent>
    </>
  );
};

export default SearchResult;
