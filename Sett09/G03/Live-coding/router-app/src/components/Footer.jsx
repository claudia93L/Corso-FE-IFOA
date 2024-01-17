import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  // da utilizzare se un id non è obbligatorio nel path - ad esempio per effettuare ricerche
  // per recuperare il parametro passato all'url
  const paramSearch = new URLSearchParams(location.search).get('search');
  // per recuperare l'id della search
  const paramId = new URLSearchParams(location.search).get('id');

  return (
    <div>
      <h6>Sono il footer di {location.pathname}</h6>
      <p>Search param: {paramSearch}</p>
      <p>Id: {paramId}</p>
    </div>
  );
};

export default Footer;
