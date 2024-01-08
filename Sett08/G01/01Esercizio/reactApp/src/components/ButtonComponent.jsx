import { useState } from 'react';

const ButtonComponent = (props) => {
  const [btnContent] = useState('Prova props');

  return <button>{btnContent}</button>;
};

export default ButtonComponent;
