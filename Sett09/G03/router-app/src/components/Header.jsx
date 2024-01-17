import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to='/'>Home</Link>
        <Link to='/contatti'>Contatti</Link>
        <Link to='/chisiamo'>Chi siamo</Link>
      </div>
    </div>
  );
};

export default Header;
