import Main from '../components/Main';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ page }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/'), 3000);
  }, []);
  return (
    <div>
      <Main page={page}></Main>
    </div>
  );
};

export default NotFound;
