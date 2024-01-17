import Main from '../components/Main';
import { useParams } from 'react-router-dom';

const Contacts = ({ page }) => {
  const params = useParams();
  return (
    <div>
      <h2>Ciao, {params.userName}</h2>
      <Main page={page}></Main>
    </div>
  );
};

export default Contacts;
