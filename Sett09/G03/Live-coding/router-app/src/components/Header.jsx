import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
  const navigate = useNavigate();
  const id = 'test';

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <Button variant='dark'>
          <Link to='/' className='text-white'>
            Home
          </Link>
        </Button>
        <Button variant='dark'>
          <Link to='/contatti' className='text-white'>
            Contatti
          </Link>
        </Button>
        <Button variant='dark'>
          <Link to={`/contatti/>${id}`} className='text-white'>
            Chi siamo
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
